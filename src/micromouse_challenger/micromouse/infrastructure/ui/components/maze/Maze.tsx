import { map } from 'rxjs';
import useObservableValue from '../../../../../ui/hooks/useObservableValue';
import { MouseMaze } from '../../../../domain/MouseMaze';
import { micromouseState } from '../../../services';
import CellContent from './CellContent';

function Cell({cell, mousePosition }) {
  const colors = {
    'X': 'bg-red-900',
    // 'S': 'bg-green-700',
  };
  return (
    <div className={`w-3 h-3 flex justify-center items-center ${colors[cell.type] || ''}`}>
      <CellContent mousePosition={mousePosition} cell={cell}/>
    </div>
  )
}

export default function Maze({ ...rest }) {
 
    const [cells] = useObservableValue(micromouseState.onMaze().pipe(map(m => MouseMaze.mapMatrixToCells(m))),[[]])
    const [mousePosition] = useObservableValue(micromouseState.onMousePosition(), "A0")
    
    return (
        <div className="flex flex-col items-center border-slate-500 border-8 rounded" {...rest}>
          {cells.map((row, filaIndex) => (
            <div key={filaIndex} className="flex bg-violet-400">
              {row.map((cell, cellIdx) => <Cell key={cellIdx} cell={cell} mousePosition={mousePosition}/>)}
            </div>
          ))}
        </div>
      );

}
