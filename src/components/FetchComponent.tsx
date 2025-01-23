import { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { Movie } from '../types/Movie';

// https://www.omdbapi.com/?i=tt15398776&apikey=dc2db52f

const FetchComponent = () => {
  const [movieObj, setMovieObj] = useState<null | Movie>(null);

  const getMoviedata = async () => {
    const URL = 'https://www.omdbapi.com/?i=tt15398776&apikey=dc2db52f';
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setMovieObj(data);
      } else {
        throw new Error('Errore API');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMoviedata();
  }, []);

  return (
    <>
      <h2>Chiamata a OMDb API</h2>

      {!movieObj && <Spinner animation='border' variant='warning' />}
      {movieObj && (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src={movieObj.Poster} />
          <Card.Body>
            <Card.Title>{movieObj.Title}</Card.Title>
            <Card.Text>
              {movieObj.Director} - {movieObj.Year}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default FetchComponent;
