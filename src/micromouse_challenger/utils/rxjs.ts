import { BehaviorSubject } from "rxjs";

export class ReactiveState<T> {

    private subject$: BehaviorSubject<T>

    constructor(value: T) {
        this.subject$ = new BehaviorSubject<T>(value)
    }

    set(value: T) {
        this.subject$.next(value)
    }

    reduce(reducer: (prev: T) => T) {
        const next = reducer(this.subject$.getValue())
        this.subject$.next(next)
    }

    listen() {
        return this.subject$.asObservable()
    }

    get() {
        return this.subject$.getValue()
    }

}