// import CodeMirror from '@uiw/react-codemirror';
// import { javascript } from '@codemirror/lang-javascript';
// import { vscodeDark } from '@uiw/codemirror-theme-vscode';
// import { useCallback } from 'react';

// const defaultCode = `
// /**
//  * Funcion principal que ejecutará la lógica de resolución del laberinto.
//  * @param micromouse objeto encargado de dirigir y realizar operaciones con el ratoncito.
//  */
// export function play(micromouse: MicroMouseContext) {
//   // aca debes realizar tus operaciones con el objeto micromouse
//   // para poder mover el ratoncito 🐁

//   if (micromouse.getUpCell().canWalk()) {
//     micromouse.move("up")
//   }
//   // ... your fucking awesome code!!
// }
// `

// export default function MicroMouseIDE() {

//     const onChange = useCallback((value, viewUpdate) => {
//         console.log('value:', value);
//       }, []);
      
//     return (
//         <CodeMirror
//             value={defaultCode}
//             height="300px"
//             className="text-justify"
//             theme={vscodeDark}
//             extensions={[javascript({ jsx: true, typescript: true })]}
//             onChange={onChange}
//           />
//     )
// }