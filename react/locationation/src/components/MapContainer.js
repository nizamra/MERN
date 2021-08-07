import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
// https://www.npmjs.com/package/google-maps-react
// https://dev.to/sahilthakare1998/react-maps-without-use-of-google-key-or-javascript-2a69

const containerStyle = {
  position: 'relative',  
  width: '50%',
  height: '50%'
}
export class MapContainer extends React.Component {
    render() {
    return (
      <Map google={this.props.google} style={containerStyle} initialCenter={{lat: 31.7780,lng: 35.2354}} zoom={15}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            {/* <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div> */}
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  // apiKey: ("AIzaSyALVjLwOIM1gf7EzdJJVmWLKdLP-yZGTcw")
  // apiKey: ("AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg")
  // apiKey: ("AIzaSyB6Q90sn5X-YQ6yZo5WlSSDvD8xfMMazvE")
  apiKey: ("AIzaSyAzsLkmccMp0MFzZJHTeCVRcRH5Qn_8Wpc") //Mine
})(MapContainer)