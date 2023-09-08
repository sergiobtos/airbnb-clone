import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useState, useEffect, useMemo } from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import getCenter from 'geolib/es/getCenter';

function Map({searchResults}) {
    const [selectedLocation, setSelectedLocation] = useState();

    const center = useMemo(() => {
		const allCoordinates = searchResults.map((result) => ({
            longitude: result.long,
            latitude: result.lat,
        }))

		return getCenter(allCoordinates);
	}, [JSON.stringify(searchResults)]);

    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        longitude: center?.longitude,
        latitude: center?.latitude,
        zoom: 11,
    });

    const handleOnMove = (e) => {
        setViewport({
            latitude: e.viewState.latitude,
            longitude: e.viewState.longitude,
            zoom: e.viewState.zoom
        })
    }

    const handleOnSetLocation = (location) => {
        setSelectedLocation(location)
    }

    

    useEffect(() => {
        console.log('selectedLocation changed:', selectedLocation);
      }, [selectedLocation]);

    return(
    <ReactMapGL
        mapStyle="mapbox://styles/sergiobtos/clma7wr4y012j01ra2iqt8zkf"
        mapboxAccessToken={process.env.mapBoxAccessToken}
        initialViewState={{...viewport}}
        width="100%"
        height="100%"
        onMove={handleOnMove}
    >
        {searchResults.map((result) => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                        color="red"
                    >
                        <p
                            onClick={() => handleOnSetLocation(result)}
                            role='img'
                            className='cursor-pointer text-2xl animate-bounce'
                            aria-label="push-pin"
                        >
                            📌
                        </p>
                    </Marker>
                    {/* Popup */}
                    {selectedLocation?.long === result?.long ? (
                    <Popup
                        closeOnClick={true}
                        latitude={result.lat}
                        longitude={result.long}
                        anchor="top-right"
                        offset={5}
                        onClose={() => setSelectedLocation({})}
                        className="bg-white w-fit inline-flex flex-row user-select-none 
                            text-gray-600 p-2 font-medium rounded-lg "
                    >
                    {result.title}
                    </Popup>
                    ) : (
                        false
                    )}
                </div>
            ))}
    </ReactMapGL>)
}

export default Map;