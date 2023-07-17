import { useEffect } from "react"
import { MicroMouse } from "../../micromouse/application"
import { MouseMaze, Mouse } from "../../micromouse/domain"
import { useMazeState } from "../../micromouse/infraestructure/ui/state/maze.state"
import { eventbus } from "../../utils/infraestructure"
import Challenger from "../../micromouse/infraestructure/ui/components/challenger/Challenger"
import { Event } from '../../utils/eventbus'

export default function MicroMousePage(){

    const maze = MouseMaze.create({
        flag: "Ggteudkdskpwoeo",
        matrix: [
          [' ', 'X', 'X', 'X', 'X'], 
          [' ', 'X', ' ', ' ', ' '],
          [' ', 'X', ' ', 'X', ' '], 
          [' ', ' ', ' ', 'X', ' '], 
          ['X', 'X', 'X', 'X', 'S'] 
        ]
      })
    
      const mouse = new Mouse(maze, maze.getPosition('A0'))
      const micromouse = new MicroMouse(mouse, eventbus)
      
      const updateMessage = useMazeState(state=> state.updateMessage)
      const updateMousePosition = useMazeState(state=> state.updateMousePosition)
      
      const subscription = eventbus.subscribe('micromouse.mouse-move', (event: Event<any>) => {
        updateMousePosition(event.payload.position)
        updateMessage(event.payload.message)
      })
      
      eventbus.subscribe('micromouse.mouse-move', (event: Event<any>) => {
        console.log(event.payload)
        if (event.payload.isMoved && micromouse.getCurrentCell().isExit()) {
          alert("Congratulations!! ")
        }
      })
      
    
      useEffect(() => {
        return () => subscription.unsubscribe()
      }, [])

    return (
        <>
          <Challenger micromouse={micromouse}/>
        </>
    )
}