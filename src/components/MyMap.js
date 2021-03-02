import React, { useEffect, useState } from 'react'
import ReactMapGl, {
  Marker,
  GeolocateControl,
  Source,
  Layer,
} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import '../App.css';

const MyMap = ({coords}) => {

  const [viewport, setViewport] = React.useState({
    latitude: 23.2584857,
    longitude: 77.5912997,
    zoom: 4,
    width: '100%',
    height: '100%',
  })

  const [coord, setCoord] = useState([])

  useEffect(() => {
    if (coord.length < coords.length) {
      coords.map((val) =>
        setCoord((prevState) => [...prevState, [val.latitude, val.longitude]])
      )
    }
  }, [coords, coord])

  const data = {
    type: 'Feature',
    geometry: {
      type: 'LineString',
      coordinates: coord,
    },
  }

  return (
    <div className='myMap'>
      <ReactMapGl
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOXGL_ACCESSTOKEN}
        {...viewport}
        mapStyle='mapbox://styles/mapbox/streets-v11'
        onViewportChange={(viewport) => setViewport(viewport)}
        viewportChangeMethod={'flyTo'}>
        {coords.map((mark, index) => (
          <Marker
            key={index}
            latitude={parseInt(mark.latitude)}
            longitude={parseInt(mark.longitude)}
            offsetTop={-20}
            offsetLeft={-10}>
            <button className='marker-btn'>
              <img
                src='https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png'
                alt='marker-icon'
                style={{height:"20px",width:"20px"}}
              />
            </button>
          </Marker>
        ))}
        <GeolocateControl position='top-right' />
        <Source id='route' type='geojson' data={data} />
        <Layer
          id='route'
          type='line'
          source='route'
          layout={{
            'line-join': 'round',
            'line-cap': 'round',
          }}
          paint={{
            'line-color': '#888',
            'line-width': 8,
          }}
        />
      </ReactMapGl>
    </div>
  )
}

export default MyMap