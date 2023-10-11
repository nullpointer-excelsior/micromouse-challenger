import { useLocation } from "wouter";
import { micromouseState } from "../../micromouse/infrastructure/services";
import { Paths } from "../router/utils/paths";
import PrimaryButton from "./PrimaryButton";

export default function BackHomeButton({ onClick, ...rest }) {

  const [, location] = useLocation()

  
  const onClickBack = () => {
    onClick()
    micromouseState.reset()
    location(Paths.GENERATE_MAZE)
  }

  return (
    <>
      <PrimaryButton {...rest} text="HOME" onClick={onClickBack} />
    </>
  );
}
