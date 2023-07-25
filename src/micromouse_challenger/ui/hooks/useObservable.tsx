import { useEffect } from "react";
import { Observable, Observer } from "rxjs";

export default function useObservable<T>(observable$: Observable<T>, callback: Partial<Observer<T>> | ((value: T) => void)) {
    
    useEffect(() => {
        const subscription = observable$.subscribe(callback)
        return () => subscription.unsubscribe()
    },[])    

}