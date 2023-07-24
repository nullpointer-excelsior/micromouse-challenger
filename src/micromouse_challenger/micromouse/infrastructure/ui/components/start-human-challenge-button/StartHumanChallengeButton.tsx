import { useLocation } from "wouter";
import { useMazeState } from "../../state/maze.state";
import PrimaryButton from "../../../../../ui/components/PrimaryButton";
import { Paths } from "../../../../../ui/router/paths";

export default function StartHumanChallengeButton(props: { matrix: string[][], flag: string }) {
    
    const { matrix, flag } = props
    const [,navigate] = useLocation();
    const initMaze = useMazeState(state => state.initMaze)

    const onClickButton = () => {
        initMaze(flag, matrix)
        navigate(Paths.micromouseChallenge)
    }

    return <PrimaryButton className="w-80" onClick={onClickButton} text="COMENZAR DESAFIO"></PrimaryButton>

}