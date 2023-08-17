import { Observable, Subject, filter, iif, tap } from "rxjs";
import { EventBus, DomainEvent } from "./eventbus";
import { MicromouseEvent } from "../micromouse/domain";


/**
 * An implementation of EventBus using RxJS.
 */
export class ReactiveEventBus<E extends string> implements EventBus<E> {

    private events$ = new Subject<DomainEvent<any, E>>()

    onEvent<T extends DomainEvent<any, E>>(eventName?: E): Observable<T> {
        return iif(
            () => eventName !== undefined,
            this.events$.pipe(filter(event => eventName === event.name)),
            this.events$.asObservable()
        ) as Observable<T>;
    }

    dispatch<T extends DomainEvent<any, E>>(event: T): void {
        this.events$.next(event)
    }

}

export const eventbus = new ReactiveEventBus<MicromouseEvent>()

