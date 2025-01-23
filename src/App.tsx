import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FuncComponent from './components/FuncComponent';
import FormExample from './components/FormExample';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageChooser from './components/PageChooser';
import NotFound from './components/NotFound';
import FetchComponent from './components/FetchComponent';
import MovieGallery from './components/MovieGallery';

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

      {/* <FormExample /> */}

      <BrowserRouter>
        <PageChooser />

        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/class' element={<ClassComponent title='ciao' />} />
          <Route path='/func' element={<FuncComponent title='ciao' />} />
          <Route path='/form' element={<FormExample />} />
          <Route path='/fetch' element={<FetchComponent />} />
          <Route path='/moviegallery' element={<MovieGallery />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
