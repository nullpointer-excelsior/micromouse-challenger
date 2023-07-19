import { useScoreState } from "../../state/score.state"

export default function ScoreDashboard() {

    const { movements, time } = useScoreState()

    return (
        <div className="flex gap-8">
            <div>
                <h2 className="text-xl text-violet-300 w-40">Tiempo</h2>
                <p className="text-5xl text-green-600 my-4" >{ time }</p>
            </div>
            <div>
                <h2 className="text-xl text-violet-300 w-80">Movimientos realizados</h2>
                <p className="text-5xl text-slate-400 my-4">{ movements}</p>
            </div>
        </div>
    )
}