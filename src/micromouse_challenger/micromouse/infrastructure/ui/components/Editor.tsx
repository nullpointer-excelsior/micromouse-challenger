// import React, { useState } from 'react';
// import { Controlled as CodeMirror } from 'react-codemirror2';
// // import 'codemirror/lib/codemirror.css';
// import './codemirror.css';
// // import 'codemirror/theme/material.css';
// import './javascript';
// import 'codemirror'

// const Editor = () => {
//   const [code, setCode] = useState('');

//   const handleCodeChange = (editor, data, value) => {
//     setCode(value);
//   };

//   const handleEditorBeforeChange = (editor, data, value) => {
//     setCode(value);
//   };

//   const options = {
//     mode: 'javascript',
//     // theme: 'material',
//     lineNumbers: true,
//     extraKeys: {
//       'Ctrl-Space': 'autocomplete', // Habilita el autocompletado con Ctrl + Espacio
//     },
//   };

//   return (
//     <CodeMirror
//       value={code}
//       options={options}

//       onBeforeChange={handleEditorBeforeChange}
//       onChange={handleCodeChange}
//     />
//   );
// };

// export default Editor;
