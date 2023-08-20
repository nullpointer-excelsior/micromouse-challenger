import { BehaviorSubject, Observable, distinctUntilChanged, map } from "rxjs";

function compareObjects(obj1: any, obj2: any) {
    if (obj1 instanceof Date && obj2 instanceof Date) {
        return obj1.getTime() === obj2.getTime()
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        const val1 = obj1[key];
        const val2 = obj2[key];
        if (typeof val1 === "object" && typeof val2 === "object") {
            if (!compareObjects(val1, val2)) {
                return false;
            }
        } else if (val1 !== val2) {
            return false;
        }
    }
    return true;
}

export class ReactiveState<T> {

    private subject$: BehaviorSubject<T>

    constructor(private initialState: T) {
        this.subject$ = new BehaviorSubject<T>(initialState)
    }

    set(state: T) {
        this.subject$.next(state)
    }

    update(state: Partial<T>) {
        const currentValue = this.snapshot()
        this.subject$.next({
            ...currentValue,
            ...state
        })
    }

    reduce(reducer: (prev: T) => T) {
        const next = reducer(this.snapshot())
        this.subject$.next(next)
    }

    listen(): Observable<T> {
        if (typeof this.snapshot() === "object") {
            return this.subject$.pipe(distinctUntilChanged((prev, curr) => compareObjects(prev, curr)))
        }
        return this.subject$.pipe(distinctUntilChanged())
    }

    listenTo<R extends T[keyof T]>(mapTo: (value: T) => R): Observable<R> {
        const distinctOperator = typeof mapTo === "object" ? () => distinctUntilChanged((prev, curr) => compareObjects(prev, curr)) : () => distinctUntilChanged()
        return this.subject$.pipe(
            map(value => mapTo(value)),
            distinctOperator()
        ) as Observable<R>
    }

    complete() {
        this.subject$.complete()
    }

    snapshot() {
        return this.subject$.getValue()
    }

    reset() {
        this.subject$.next(this.initialState)
    }

}