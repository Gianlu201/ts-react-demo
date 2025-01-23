import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import ClassComponent from './components/ClassComponent';
// import FuncComponent from './components/FuncComponent';
import FormExample from './components/FormExample';

function App() {
  return (
    <>
      {/* TS si sta lamentando che stiamo fornendo un oggetto props a questo
    ClassComponent formato da una prop che si chiama "title" con un valore
    di stringa, ma DI DEFAULT un componbente non si aspetta di ricevere nulla */}

      {/* Abbiamo bisogno di tipizzare al prop */}
      {/* <ClassComponent title='CIAO!' />
      <ClassComponent title='CIAO!' counter={6} />

      <FuncComponent title='Titolo' /> */}

      <FormExample />
    </>
  );
}

export default App;
