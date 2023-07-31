import React from 'react'

import Card from 'react-bootstrap/Card';
import { Rating } from 'react-simple-star-rating'
export default function component2({film}) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={film.image} />
    <Card.Body>
      <Card.Title>{film.title}</Card.Title>
      <Card.Text>
      {film.date}
      </Card.Text>
      <Card.Text>
      <Rating initialValue={film.rating} />
      </Card.Text>
     
    </Card.Body>
  </Card>
  )
}

