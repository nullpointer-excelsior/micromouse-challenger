import { useLocation } from "wouter";
import PrimaryButton from "./PrimaryButton";
import { useMazeState } from "../../micromouse/infrastructure/ui/state/maze.state";
import { Paths } from "../router/utils/paths";

export default function BackHomeButton({ onClick, ...rest }) {

  const { reset: resetMazeState } = useMazeState()
  const [, location] = useLocation()
  
  const onClickBack = () => {
    onClick()
    resetMazeState()
    location(Paths.GENERATE_MAZE)
  }

  return (
    <>
      <PrimaryButton {...rest} text="HOME" onClick={onClickBack} />
    </>
  );
}
