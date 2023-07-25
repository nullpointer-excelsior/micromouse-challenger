import { useLocation } from "wouter";
import PrimaryButton from "./PrimaryButton";
import { useMazeState } from "../../micromouse/infrastructure/ui/state/maze.state";
import { useScoreState } from "../../score/infrastructure/ui/state/score.state";

export default function BackHomeButton({ ...rest }) {

  const { reset: resetMazeState } = useMazeState()
  const { reset: resetScoreState } = useScoreState()
  const [, location] = useLocation()
  
  const onClickBack = () => {
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
