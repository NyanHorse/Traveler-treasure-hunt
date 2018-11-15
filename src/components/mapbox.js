import React from "react";
import ReactMapGL from 'react-map-gl';
require("dotenv").config();

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
            width: 400,
            height: 400,
            latitude: props.latitude,
            longitude: props.longitude,
            zoom: 13
            }
        };
    }

  render() {

    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={process.env.MAPBOX_TOKKEN}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
    );
  }
}

export default Map;