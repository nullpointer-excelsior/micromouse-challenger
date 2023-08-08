import { useLocation } from "wouter";
import PrimaryButton from "./PrimaryButton";
import { useMazeState } from "../../micromouse/infrastructure/ui/state/maze.state";
import { useScoreState } from "../../score/infrastructure/ui/state/score.state";

export default function BackHomeButton({ onClick, ...rest }) {

  const { reset: resetMazeState } = useMazeState()
  const { reset: resetScoreState } = useScoreState()
  const [, location] = useLocation()
  
  const onClickBack = () => {
    onClick()
    resetScoreState()
    resetMazeState()
    location("/")
  }

  return (
    <>
      <PrimaryButton {...rest} text="VOLVER" onClick={onClickBack} />
    </>
  );
}
