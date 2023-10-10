import { useLocation } from "wouter";
import PrimaryButton from "../../../../../ui/components/PrimaryButton";
import { Paths } from "../../../../../ui/router/utils/paths";
import { mazeState } from "../../../services";

export default function StartCodeChallengeButton(props: { matrix: string[][] }) {
    
    const { matrix } = props
    const [,navigate] = useLocation();

    const onClickButton = () => {
        mazeState.setMaze(matrix)
        navigate(Paths.MICROMOUSE_CODERUNNER)
    }

    return <PrimaryButton className="w-80" onClick={onClickButton} text="COMENZAR DESAFIO"></PrimaryButton>

}