import { Subject, interval, map, takeUntil, tap } from "rxjs";

export class Stopwatch {

    private interval$ = interval(10)
    private time$ = new Subject<number>()
    private _timeValue = "00:00:00"
    private stop$ = new Subject<void>()
    
    start() {
        this.interval$.pipe(
            takeUntil(this.stop$)
        ).subscribe(value => this.time$.next(value))
    }

    stop() {
        this.stop$.next()
    }

    onStop() {
        return this.stop$.asObservable()
    }

    time() {
        return this.time$.asObservable().pipe(
            map(value => {
              const minutes = Math.floor(value / 6000);
              const seconds = Math.floor((value % 6000) / 100);
              const hundredths = value % 100;
              return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${hundredths.toString().padStart(2, '0')}`;
            }),
            tap(time => this._timeValue = time)
          );
    }

    timeValue() {
        return this._timeValue
    }

}
