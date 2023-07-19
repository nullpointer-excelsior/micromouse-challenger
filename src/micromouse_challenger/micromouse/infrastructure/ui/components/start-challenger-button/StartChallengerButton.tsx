import { useLocation } from "wouter";
import { useMazeState } from "../../state/maze.state";
import PrimaryButton from "../../../../../ui/components/PrimaryButton";

export default function StartChallengerButton(props: { matrix: string[][], flag: string }) {
    
    const { matrix, flag } = props
    const [,navigate] = useLocation();
    const initMaze = useMazeState(state => state.initMaze)

    const onClickButton = () => {
        initMaze(flag, matrix)
        navigate("/micromouse/challenger")
    }

    return <PrimaryButton className="w-80" onClick={onClickButton} text="COMENZAR DESAFIO"></PrimaryButton>

}