import './App.css'
import { Mouse, MouseMaze } from './core/micromouse/domain'
import { MicroMouse } from './core/micromouse/application'
import { useMazeState } from './ui/pages/micromouse/state/maze.state'
import { eventbus } from './core/utils/infraestructure'
import { Event } from './core/utils/eventbus'
import Challenger from './ui/pages/micromouse/components/Challenger'
import { useEffect } from 'react'

function App() {
  console.log("Render!!!!")
  const maze = MouseMaze.fromMatriz([
      [' ', 'X', 'X', 'X', 'X'], 
      [' ', 'X', ' ', ' ', ' '],
      [' ', 'X', ' ', 'X', ' '], 
      [' ', ' ', ' ', 'X', ' '], 
      ['X', 'X', 'X', 'X', 'S'] 
  ])

  const mouse = new Mouse(maze, maze.getPosition('A0'))
  const micromouse = new MicroMouse(mouse, eventbus)
  
  const updateMessage = useMazeState(state=> state.updateMessage)
  const updateMousePosition = useMazeState(state=> state.updateMousePosition)
  
  const subscription = eventbus.subscribe('micromouse.mouse-move', (event: Event<any>) => {
    console.log(event.payload)
    updateMousePosition(event.payload.position)
    updateMessage(event.payload.message)
  })

  useEffect(() => {
    return () => subscription.unsubscribe()
  }, [])


  return (
    <>
      <h1>Micromouse challenger</h1>
      <div>
        <Challenger micromouse={micromouse} ></Challenger>
      </div>
       
    </>
  )
}

export default App
