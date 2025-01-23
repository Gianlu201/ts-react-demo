import { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Result } from '../types/Result';

const MovieGallery = () => {
  // MovieGallery contatterà nuovamente OMDbAPI però richiederà
  // un ELENCO di film! Con il parametro "s"

  // https://www.omdbapi.com/?apikey=dc2db52f&s=Interstellar

  const [results, setResults] = useState<Result[]>([]);

  const getResults = async () => {
    const URL = 'https://www.omdbapi.com/?apikey=dc2db52f&s=Interstellar';
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setResults(data.Search);
        console.log(data.Search);
      } else {
        throw new Error('Errore API');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResults();
  }, []);

  return (
    <div>
      <h2>MOVIE GALLERY</h2>

      {results.length > 0 && (
        <Row>
          {results.map((result) => {
            return (
              <Col xs={6} lg={4} xl={3} key={result.imdbID}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant='top' src={result.Poster} />
                  <Card.Body>
                    <Card.Title>{result.Title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
};

export default MovieGallery;
