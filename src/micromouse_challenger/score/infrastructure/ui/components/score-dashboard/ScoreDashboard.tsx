import { useScoreState } from "../../state/score.state"

export default function ScoreDashboard() {

    const { movements, time } = useScoreState()

    return (
        <div className="flex justify-center justify-items-center items-center my-4">
            <div className="text-center">
                <p className="text-4xl text-green-600 my-2 w-60" > ⏰ { time }</p>
            </div>
            <div className="text-center">
                <h2 className="text-3l text-violet-300 uppercase font-bold">Movimientos</h2>
                <p className="text-4xl text-slate-400 my-2 w-60">{ movements }</p>
            </div>
        </div>
    )
}