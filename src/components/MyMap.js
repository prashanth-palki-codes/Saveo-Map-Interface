import React, { Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';


export class MyMap extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

      mapCenter : {
          lat : 23.259933,
          lng : 77.412613
      }
    };
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
        <Map google={this.props.google}
            initialCenter={{
                lat : this.state.mapCenter.lat,
                lng : this.state.mapCenter.lng
            }}
            center = {{
                lat : this.state.mapCenter.lat,
                lng : this.state.mapCenter.lng
            }}
        >
        <Marker 
            position = {{
                lat : this.state.mapCenter.lat,
                lng : this.state.mapCenter.lng
            }}
        />
        </Map>
      )
    }
  }

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDbfiMJDqqsyLfZpTwQ7F-u_nK9Ccen7SE')
})(MyMap)
    
    