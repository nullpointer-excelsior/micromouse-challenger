import './App.css'
import { Mouse, MouseMaze } from './micromouse_challenger/micromouse/domain'
import { MicroMouse } from './micromouse_challenger/micromouse/application'
import { useMazeState } from './micromouse_challenger/micromouse/infraestructure/ui/state/maze.state'
import { eventbus } from './micromouse_challenger/utils/infraestructure'
import { Event } from './micromouse_challenger/utils/eventbus'
import Challenger from './micromouse_challenger/micromouse/infraestructure/ui/components/challenger/Challenger'
import { useEffect } from 'react'
import MicroMousePage from './micromouse_challenger/ui/pages/MicromousePage'

function App() {
  
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
      <MicroMousePage>
        <Challenger micromouse={micromouse} ></Challenger>
      </MicroMousePage>
    </>
  )
}

export default App
