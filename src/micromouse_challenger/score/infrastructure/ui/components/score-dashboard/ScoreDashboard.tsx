import { useScoreState } from "../../state/score.state"

export default function ScoreDashboard() {

    const { movements } = useScoreState()

    return (
        <>
            <h2>Movimientos realizados</h2>
            <p>{ movements}</p>
        </>
    )
}