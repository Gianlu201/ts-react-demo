import { useEffect, useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

interface FuncComponentProps {
  title: string;
  counter?: number;
}

interface Movie {
  title: string;
  year: number;
  id: number;
}

const initialMovie: Movie = {
  title: '',
  year: 0,
  id: 0,
};

const FuncComponent = (props: FuncComponentProps) => {
  const [show, setShow] = useState(false);
  const [movieObject, setMovieObject] = useState<Movie>(initialMovie);

  useEffect(() => {
    // se a seguito di una chiamata API volgio assegnare un tipo
    // e dei valori ad uno stato, questo deve essere inizializzato
    // con un elemento coerente o con l'unione tra null e il tipo
    setMovieObject({
      title: 'BATMAN',
      year: 1960,
      id: 123123,
    });
  }, []);

  return (
    <div>
      <h1>Componente a funzione!</h1>
      <h2>Il valore della prop è: {props.title}</h2>

      <Button
        variant='success'
        onClick={() => {
          setShow(!show);
        }}
      >
        TOGGLE
      </Button>
      {show && <Alert variant='info'>Il valore di Show è TRUE</Alert>}

      <div>
        <h4>{movieObject?.title}</h4>
      </div>
    </div>
  );
};

export default FuncComponent;
