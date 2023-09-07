import { filter, fromEventPattern, map, tap } from "rxjs";
import { eventbus } from "../../utils/infrastructure";
import { CodeRunnerMessage, MicromouseMoveMessage, MicromouseTimeoutMessage, StartMicromouseMessage } from "../domain/CodeRunnerMessage";
import { MicroMouse } from "../../micromouse/application/MicroMouse";
import { MouseMoveEvent, MouseTimeoutEvent } from "../../micromouse/domain/Events";


function sendMessage<T extends CodeRunnerMessage<any>>(message: T) {
  self.postMessage(message)
}

function executeMicromouseCode(message: StartMicromouseMessage) {
  const micromouse = MicroMouse.create({
    matrix: message.payload.matrix,
    moveDelay: 500
  })
  micromouse.getCurrentPosition()
  const evalCode = `
    ${message.payload.code}
    play(micromouse)
      .then(() => console.log("Code challenge executed"))
      .catch(err => console.error(err))
    `
  eval(evalCode)
}

eventbus
  .onEvent<MouseMoveEvent>("micromouse.mouse-move")
  .subscribe({
    next: (event: MouseMoveEvent) => {
      sendMessage(new MicromouseMoveMessage({ micromouseEvent: event }))
    },
    error: err => console.error(err)
  })

eventbus
  .onEvent("micromouse.mouse-timeout")
  .subscribe({
    next: (event: MouseTimeoutEvent) => {
      sendMessage(new MicromouseTimeoutMessage(event.data))
    },
    error: err => console.error(err)
  })

const message$ = fromEventPattern(
  handler => self.addEventListener("message", handler),
  handler => self.removeEventListener("message", handler)
).pipe(
    map((event: MessageEvent<any>) => event.data),
    tap((message: CodeRunnerMessage<any>) => console.log("sandbox-message", message))
);

message$.pipe(
  filter(message => message.type === "START_MICROMOUSE")
).subscribe({
  next: (message: CodeRunnerMessage<any>) => executeMicromouseCode(message),
  error: err => console.log(err)
})


