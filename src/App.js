import React from 'react';
import './global.css';
import Routes from './routes';
function App() {
  return (
    <Routes />
    );
}


export default App;


// function App() {
//   const [counter, setCounter] = useState(0); 
//retorna array [valor da variavel, funcao de atualizacao do valor]

//   function increment(){
//     setCounter(counter + 1);
//   }

//   return (
//     <div>
//     <Header>Contador: {counter} </Header>
//     <button onClick={increment}>Incrementar</button>
//   </div>
//   );
// }