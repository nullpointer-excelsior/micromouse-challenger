import { Subject, filter, share } from "rxjs";
import { Event, EventBus } from "./eventbus";

export class ReactiveEventBus<T> implements EventBus<T> {

    private subject: Subject<Event<T>> = new Subject()

    subscribe(name: string, onEvent: (event: Event<T>) => void) {
        return this.subject
            .pipe(
                filter(event => event.name === name),
                share()
            )
            .subscribe(event => onEvent(event))
    }

    dispatch(event: Event<T>): void {
        this.subject.next(event)
    }

}

export const eventbus = new ReactiveEventBus()