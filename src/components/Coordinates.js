import React from 'react';
import '../App.css';

const Coordinates = ({inputCoords}) => {
    if(inputCoords.length > 5){
        alert("You can have only 5 places at a time")
        return;
    }
    else{
        return (
            <div className="coordinates">
                <h3>coordinates</h3>
                <table>
                    <th style={{padding : 12}}>#</th>
                    <th style={{padding : 12}}>Location</th>
                    <th style={{padding : 12}}>Latitude</th>
                    <th style={{padding : 12}}>Longitude</th>
                    {inputCoords.map((val, index) => (
                        <tr key={index} >
                            <td style={{padding : 12}}>{index+1})</td>
                            <td style={{padding : 12}}>{val.location}</td>
                            <td style={{padding : 12}}>{val.latitude}</td>
                            <td style={{padding : 12}}>{val.longitude}</td>
                        </tr>
                    ))}
                </table>
                <br/>
                <br/>
                <input type="button" className="showRouteBtn" value="Show Route" style={{marginTop : 20, width: 400, marginLeft : 50}}/>
            </div>
        )
    }
}

export default Coordinates;