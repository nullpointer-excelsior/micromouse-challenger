import { useState } from "react"
import Maze from "./Maze"
import { MicroMouse } from "../../../../core/micromouse/application"
import { useMazeState } from "../state/maze.state"

export default function Challenger(props: { micromouse: MicroMouse}) {
    
  const {micromouse} = props
    const {message} = useMazeState()

    return (
        <>
        <h3>{message}</h3>
      <div>
        <Maze />
      </div>
      <button onClick={e => micromouse.move('up')}>Up</button>
        <button onClick={e => micromouse.move('down')}>Down</button>
        <button onClick={e => micromouse.move('left')}>Left</button>
        <button onClick={e => micromouse.move('right')}>right</button>
        </>
    )
}