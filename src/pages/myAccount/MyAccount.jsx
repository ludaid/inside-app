import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useState } from "react";
import './myaccount.css'
import { useSelector } from "react-redux";
export default function MyAccount() {
    const [isLogged,setLog] = useState("");
    const emailId = useSelector((state) => state.login.email);
    const logout=() => { 
        localStorage.clear();
    }
    return (
        <>
            <div>
                <Card className='card1'>

                    <Card.Body>
                        <div className='dp'>
                            <Card.Img variant="top" src="https://user.infinitemlmsoftware.com/static/media/no_photo.58b8abe5.jpg" />
                        </div>
                        <Card.Title>User123</Card.Title>
                        <Card.Text>
                            Email: {emailId}
                        </Card.Text>
                        <Button onClick={logout}>Logout</Button>
                    </Card.Body>
                </Card>
                <br />
            </div>
            <div className='grid-column-start'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>E wallet</Card.Title>
                        <Card.Text>
                            $0.0
                        </Card.Text>
                        <Button variant="primary">Withdraw</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Payout Released</Card.Title>
                        <Card.Text>
                            $0.0
                        </Card.Text>

                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Payout Pending</Card.Title>
                        <Card.Text>
                            $0.0
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
            <br />
            <Card className='transaction'>
                <Card.Body>
                    <Card.Title>Last Transaction</Card.Title>
                    {/* {
                        data.map(item =>  <Card.Text>{item.amount} </Card.Text>)
                    } */}
                    <Table>
                        <thead>
                            <tr>
                                <th>Amount</th>
                                <th>Payout Method</th>
                                <th>Invoice No</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>53$</td>
                                <td>Bank transfer</td>
                                <td>IF123</td>
                                <td>23rd March 2023</td>
                            </tr>
                            <tr>
                                <td>53$</td>
                                <td>Bank transfer</td>
                                <td>IF123</td>
                                <td>23rd March 2023</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </>


    )
}