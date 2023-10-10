import { useLocation } from "wouter";
import PrimaryButton from "./PrimaryButton";
import { Paths } from "../router/utils/paths";
import { mazeState } from "../../micromouse/infrastructure/services";

export default function BackHomeButton({ onClick, ...rest }) {

  const [, location] = useLocation()

  
  const onClickBack = () => {
    onClick()
    mazeState.reset()
    location(Paths.GENERATE_MAZE)
  }

  return (
    <>
      <PrimaryButton {...rest} text="HOME" onClick={onClickBack} />
    </>
  );
}
