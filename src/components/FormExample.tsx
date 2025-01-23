import { FormEvent, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

interface Reservation {
  name: string;
  phone: string;
  numberOfPeople: number;
  dateTime: string;
  smoking: boolean;
  specialRequests?: string;
}

const initialReservation = {
  name: '',
  phone: '',
  numberOfPeople: 1,
  dateTime: '',
  smoking: false,
  specialRequests: '',
};

const FormExample = () => {
  const [reservation, setReservation] =
    useState<Reservation>(initialReservation);

  // se si vuole definire separatamente una handler per l'onChange,
  // l'onSubmit e cia così, ricorda che il riferimento al tipo
  // della "e" (l'evento) non sopravvive e va passato a mano
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const URL: string =
        'https://striveschool-api.herokuapp.com/api/reservation';
      const response = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(reservation),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        alert('GRAZIE');
        setReservation(initialReservation);
      } else {
        throw new Error('Errore API');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col xs={12} md={8}>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type='text'
                placeholder='Il tuo nome'
                value={reservation.name}
                onChange={(e) => {
                  setReservation({
                    ...reservation,
                    name: e.target.value,
                  });
                }}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                type='tel'
                placeholder='Il tuo telefono'
                value={reservation.phone}
                onChange={(e) => {
                  setReservation({
                    ...reservation,
                    phone: e.target.value,
                  });
                }}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Quanti siete</Form.Label>
              <Form.Select
                aria-label='Default select example'
                value={reservation.numberOfPeople}
                onChange={(e) => {
                  setReservation({
                    ...reservation,
                    numberOfPeople: parseInt(e.target.value),
                  });
                }}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Quando</Form.Label>
              <Form.Control
                type='datetime-local'
                value={reservation.dateTime}
                onChange={(e) => {
                  setReservation({
                    ...reservation,
                    dateTime: e.target.value,
                  });
                }}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Check
                type='checkbox'
                label='tavolo fumatori'
                checked={reservation.smoking}
                onChange={(e) => {
                  setReservation({
                    ...reservation,
                    smoking: e.target.checked,
                  });
                }}
              />
            </Form.Group>

            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>Special requests</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                value={reservation.specialRequests}
                onChange={(e) => {
                  setReservation({
                    ...reservation,
                    specialRequests: e.target.value,
                  });
                }}
              />
            </Form.Group>

            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormExample;
