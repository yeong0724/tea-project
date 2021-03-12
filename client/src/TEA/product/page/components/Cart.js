import React from 'react';
import { Table } from 'react-bootstrap';

function Cart(props) {
    return (
        <div>
            <Table striped bordered hover variant="pink">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>우전</td>
                        <td>3</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>세작</td>
                        <td>2</td>
                        <td>@hi</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>구증구포</td>
                        <td>2</td>
                        <td>@hello</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}
export default Cart;
