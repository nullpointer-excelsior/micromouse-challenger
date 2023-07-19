import { useLocation } from "wouter";
import { useMazeState } from "../../state/maze.state";

export default function StartChallengerButton(props: { matrix: string[][], flag: string }) {
    const {matrix, flag} = props
    const [,navigate] = useLocation();
    const  initMaze = useMazeState(state => state.initMaze)

    const onClickButton = (e) => {
        initMaze(flag, matrix)
        navigate("/micromouse/challenger")
    }

    return <button onClick={onClickButton}>COMENZAR DESAFIO</button>
}