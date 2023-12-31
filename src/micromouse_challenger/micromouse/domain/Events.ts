import { DomainEvent } from "../../utils/eventbus";

export type MicromouseEvent = "micromouse.mouse-move" | "micromouse.mouse-win" | "micromouse.mouse-timeout"

export interface MouseEventProps {
    isMoved: boolean;
    message: string;
    position: string;
}

export class MouseMoveEvent extends DomainEvent<MouseEventProps, MicromouseEvent>{
    name: MicromouseEvent = "micromouse.mouse-move";
}

export class MouseWinEvent extends DomainEvent<string, MicromouseEvent> {
    name: MicromouseEvent = "micromouse.mouse-win";
}

export class MouseTimeoutEvent extends DomainEvent<string, MicromouseEvent> {
    name: MicromouseEvent = "micromouse.mouse-timeout"
}