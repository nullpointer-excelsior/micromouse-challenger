import { useEffect, useState } from "react";
import { useScoreState } from "../../state/score.state";

function calculateStopwacth(minutes: number, seconds: number) {
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

export default function useStopwatch() {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const { time, endTime, startTime ,setTime, setEndTime, setStartTime } = useScoreState()
    
    useEffect(() => {
        setTime(calculateStopwacth(minutes, seconds))
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

      return {
        time: time,
        start: () => setStartTime(),
        end: () => setEndTime()
      }
}