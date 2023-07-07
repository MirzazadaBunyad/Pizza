import { useState } from 'react';
import { Button, Card, Form, InputGroup } from 'react-bootstrap';
import { AiFillHeart } from 'react-icons/ai';

function Item({ pizza, size, orderAdd }) {
  const { id, name, image, price, ingr } = pizza
  const [eded, setEded] = useState(1)
  const [olcu, setOlcu] = useState(Object.keys(price)[0])
  const [isColor, setIsColor] = useState(false)
  const handleClick = () => {
    setIsColor(item => !item);
  }

  return (
    <Card>
      <Card.Img variant="top" src={"./assets/img/" + image} />
      <button style={{width: "40px",fontSize: "25px", border: "none", background: "transparent"}} onClick={handleClick}><AiFillHeart fill={`${isColor ? 'red' : 'black'}`}/></button>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className='card-text-height'>{ingr}</Card.Text>
        <div className='d-flex justify-content-between align-items-start'>
          <Form.Select onChange={(e) => setOlcu(e.target.value)}>
            {
              Object.keys(price).map((s, i) => <option value={s} key={i}>{size[s]}</option>)
            }
          </Form.Select>
          <InputGroup className="mb-3 mx-3 flex-nowrap">
            <Button onClick={() => setEded(eded > 1 ? eded - 1 : 1)} variant="outline-success"> - </Button>
            <Form.Control value={eded} className='px-0 text-center' readOnly />
            <Button onClick={() => setEded(eded + 1)} variant="outline-success"> + </Button>
          </InputGroup>
        </div>
        <h2 className='text-center'>{eded * price[olcu]}₼</h2>
        <Button onClick={() => orderAdd(id, olcu, eded)} variant="danger">Order Now</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;