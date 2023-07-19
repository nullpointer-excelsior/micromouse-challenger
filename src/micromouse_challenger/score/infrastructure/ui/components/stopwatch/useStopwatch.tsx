import { useEffect, useState } from "react";

type Props = {
    startTime: Date;
    endTime: Date;
}

export interface Stopwatch {
    time: string;
    totalSeconds: number;
}

function calculateStopwacth(minutes: number, seconds: number):  Stopwatch{
    return {
        time: `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`,
        totalSeconds: minutes === 0 ? seconds : ((minutes * 60) + seconds)
    }
}

export default function useStopwatch({ startTime, endTime}: Props): Stopwatch {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [stopwatch, setStopwatch] = useState<Stopwatch>({
        time: "00:00",
        totalSeconds: 0
    })
    
    useEffect(() => {
        setStopwatch(calculateStopwacth(minutes, seconds))
    }, [minutes, seconds])

    useEffect(() => {
        let interval = null;
        if (startTime && !endTime) {
          interval = setInterval(() => {
            if (seconds === 59) {
              setMinutes(minutes + 1);
              setSeconds(0);
              
            } else {
              setSeconds(seconds + 1);
            }
          }, 1000);
        } else if (startTime && endTime) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [startTime, minutes, seconds, endTime]);

      return stopwatch
}