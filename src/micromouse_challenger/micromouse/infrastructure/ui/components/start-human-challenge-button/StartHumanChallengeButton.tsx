import { useLocation } from "wouter";
import { useMazeState } from "../../state/maze.state";
import PrimaryButton from "../../../../../ui/components/PrimaryButton";
import { Paths } from "../../../../../ui/router/utils/paths";

export default function StartHumanChallengeButton(props: { matrix: string[][] }) {
    
    const { matrix} = props
    const [,navigate] = useLocation();
    const initMaze = useMazeState(state => state.setMaze)

    const onClickButton = () => {
        initMaze( matrix)
        navigate(Paths.MICROMOUSE_CHALLENGE)
    }

    return <PrimaryButton className="w-80" onClick={onClickButton} text="COMENZAR DESAFIO"></PrimaryButton>

}