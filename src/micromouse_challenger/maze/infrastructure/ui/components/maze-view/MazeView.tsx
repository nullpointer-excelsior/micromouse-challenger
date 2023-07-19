
function Cell({cell}) {
  const colors = {
    'X': 'bg-red-900',
    'S': 'bg-green-700',
  };
  return (
    <div className={`w-3 h-3 flex justify-center items-center ${colors[cell] || ''}`}>
    </div>
  )
}

export default function MazeView(props: { maze: string[][]}) {
 
    const { maze } = props

    if (!maze) {
      return <p>No hay laberinto</p>
    }

    return (
      <>
        <div className="flex flex-col items-center border-slate-500 border-8 rounded">
          {maze.map((row, rowIdx) => (
            <div key={rowIdx} className="flex bg-violet-400">
              {row.map((cell, cellIdx) => (
                <Cell key={cellIdx} cell={cell}/>
              ))}
            </div>
          ))}
        </div>
        </>
      );

}
