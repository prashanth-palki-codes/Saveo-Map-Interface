import React from 'react';
import Form from 'react-bootstrap/Form'
import '../App.css';
import Table from 'react-bootstrap/Table'

const Header = () => {

    return (
        <div className="myHeader mt-5">
            <Table>
                <tbody>
                <tr>
                    <td>
                        <Form>
                        <Form.Group>
                            <Form.Label className="locationInput">Location Name</Form.Label>
                            <Form.Control type="text" placeholder="Location" />
                        </Form.Group>
                        </Form>
                    </td>

                    <td>
                        <Form>
                        <Form.Group>
                            <Form.Label className="latInput">Enter Latitude</Form.Label>
                            <Form.Control type="text" placeholder="Lat" />
                        </Form.Group>
                        </Form>
                    </td>

                    <td>
                        <Form>
                        <Form.Group>
                            <Form.Label className="longInput">Enter Longitude</Form.Label>
                            <Form.Control type="text" placeholder="Long" />
                        </Form.Group>
                        </Form>
                    </td>

                    <td>
                        <input type="button" value="Submit" className="submitBtn"></input>
                    </td>
                </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Header;