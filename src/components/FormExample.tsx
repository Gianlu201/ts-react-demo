import { useState } from 'react';
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

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col xs={12} md={8}>
          <Form>
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
