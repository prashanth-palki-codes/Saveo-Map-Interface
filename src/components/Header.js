import React,{useState} from 'react';
import Form from 'react-bootstrap/Form'
import '../App.css';
import Table from 'react-bootstrap/Table'


const Header = (props) => {
    
    
    const [location,setLocation] = useState("");
    const [latitude,setLatitude] = useState("");
    const [longitude,setLongitude] = useState("");


    const handleLocation= (e) =>{
        setLocation(e.target.value)
    }
    const handleLatitude = (e) =>{
        setLatitude(e.target.value)
    }
    const handleLongitude = (e) =>{
        setLongitude(e.target.value)
    }

    return (
        <div className="myHeader mt-5">
            <Table>
                <tbody>
                <tr>
                    <td>
                        <Form>
                        <Form.Group>
                            <Form.Label className="locationLabel">Location Name</Form.Label>
                            <Form.Control type="text" placeholder="Location" value={location} onChange={handleLocation}/>
                        </Form.Group>
                        </Form>
                    </td>

                    <td>
                        <Form>
                        <Form.Group>
                            <Form.Label className="latLabel">Enter Latitude</Form.Label>
                            <Form.Control type="text" placeholder="Lat" value={latitude} onChange={handleLatitude}/>
                        </Form.Group>
                        </Form>
                    </td>

                    <td>
                        <Form>
                        <Form.Group>
                            <Form.Label className="longLabel">Enter Longitude</Form.Label>
                            <Form.Control type="text" placeholder="Long" value={longitude} onChange={handleLongitude}/>
                        </Form.Group>
                        </Form>
                    </td>

                    <td>
                        <br/>
                        <input type="button" value="Submit" className="submitBtn" onClick={() => props.handleInputs({location,latitude,longitude})}></input>
                    </td>
                </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Header;
