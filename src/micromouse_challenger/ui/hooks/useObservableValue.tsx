import { useEffect, useState } from "react";
import { Observable } from "rxjs";

type ObservableValue<T> = [
    value: T,
    error: any,
    isCompleted: boolean
]

export default function useObservableValue<T>(observable$: Observable<T>): ObservableValue<T> {

    const [value, setValue] = useState<T>()
    const [error, setError] = useState(null)
    const [isCompleted, setIsCompleted] = useState(false)
    
    useEffect(() => {
        const subscription = observable$.subscribe({
            next: (nextValue: T) => setValue(nextValue),
            error: err => {
                console.error("useObservableValueError", err)
                setError(err)
            },
            complete: () => setIsCompleted(true)
        })
        return () => subscription.unsubscribe()
    },[])    

    return [
        value, 
        error,
        isCompleted
    ]

}