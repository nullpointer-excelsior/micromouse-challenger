import { Observable, Subject, filter, share, tap } from "rxjs";
import { Event, EventBus } from "./eventbus";

export class ReactiveEventBus implements EventBus {

    private subject: Subject<Event<any>> = new Subject()

    onEvent<T extends Event<any>>(name?: string): Observable<T> {
        if (name) {
            return this.subject.pipe(
                filter(event => event.name === name),
            ) as Observable<T>;
        }
        return this.subject.asObservable() as Observable<T>;
    }

    dispatch<T extends Event<any>>(event: T): void {
        this.subject.next(event)
    }

}

export const eventbus = new ReactiveEventBus()


class EventNitido extends Event<string> {
    get name(): string {
        return "nitido"
    }

}

class EventPulento extends Event<{ person: string, age: number}> {
    get name(): string {
        return "nitido"
    }

}
