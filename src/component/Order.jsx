import { Form, Table, Button, InputGroup, Modal} from 'react-bootstrap';
import {RiDeleteBin6Line} from 'react-icons/ri'

function Order({order, data, orderDel, orderUpd, ...mprops}) {
    let total = 0
    return (
        <Modal
        {...mprops}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Your order</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Products</h4>
                <Table responsive="lg">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th>Quant</th>
                            <th>Product price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        order.map(o =>{
                            let pizza = data.pizza.find( p => p.id === o.pid )
                                let qiymet = pizza.price[o.size] * o.quant
                            total += qiymet
                            return (
                            <tr key={o.id} >
                                <td>{o.id + 1}</td>
                                <td><img src={"./assets/img/" + pizza.image} className='thumb' alt={pizza.name}/></td>
                                <td>{pizza.name}</td>
                                <td>{data.size[o.size]}</td>
                                <td>{pizza.price[o.size]}₼</td>
                                <td>
                                    <InputGroup className="mb-3 mx-3 flex-nowrap">
                                        <Button onClick={() => orderUpd(o.id, o.quant - 1)}  variant="outline-success"> - </Button>
                                        <Form.Control value={o.quant} className='px-0 text-center short' readOnly />
                                        <Button onClick={() => orderUpd(o.id, o.quant + 1)} variant="outline-success"> + </Button>
                                    </InputGroup>
                                </td>
                                <td>{qiymet}₼</td>
                                <td><RiDeleteBin6Line onClick={() => orderDel(o.id)} /></td>
                            </tr>
                        )})
                    } 
                        <tr>
                            <th colSpan="6" className='text-end'>TOTAL:</th>
                            <th>{total}₼</th>
                            <td></td>
                        </tr>
                    </tbody>                
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={mprops.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Order