import { useEffect, useState } from "react";
import { micromouse } from "../../../../application";
import ControlButton from "../control-button/ControlButton";
import PrimaryButton from "../../../../../ui/components/PrimaryButton";
import useStartChallenge from "../../hooks/useStartChallenge";

export default function MicroMouseControl() {

  const [playing, setPlaying] = useState(false)
  const { start, time } = useStartChallenge()

  const onClickControls = () => {
    setPlaying(true)
    if (time === "00:00") {
      console.log('starting!!!')
      start()
    }
  }

  const onClickUp = async () => micromouse.move('up')
  const onClickDown = async () => micromouse.move('down')
  const onClickLeft = async () => micromouse.move('left')
  const onClickRight = async () => micromouse.move('right')

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 37) {
        onClickLeft()
      } else if (event.keyCode === 38) {
        onClickUp()
      } else if (event.keyCode === 39) {
        onClickRight()
      } else if (event.keyCode === 40) {
        onClickDown()
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="flex flex-col my-10">
      {!playing ? <div>
        <PrimaryButton className="bg-amber-600 w-40 hover:bg-amber-800" text="JUGAR" onClick={onClickControls} />
      </div> : <><div>
        <ControlButton text="UP" onClick={onClickUp} />
      </div>
        <div>
          <ControlButton text="LEFT" onClick={onClickLeft} />
          <ControlButton text="RIGHT" onClick={onClickRight} />
        </div>
        <div>
          <ControlButton text="DOWN" onClick={onClickDown} />
        </div>
      </>}
    </div>
  )
}
