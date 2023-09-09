import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useState, useMemo } from 'react'
import Map, {Marker, Popup, FullscreenControl} from 'react-map-gl'
import getCenter from 'geolib/es/getCenter';

function MapboxMap({searchResults}) {
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
        console.log('Clicked location', location)
        setSelectedLocation(location)
    }

    return(
    <Map
        mapStyle="mapbox://styles/sergiobtos/clma7wr4y012j01ra2iqt8zkf"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_KEY}
        initialViewState={{...viewport}}
        width="100%"
        height="100%"
        onMove={handleOnMove}
    >
        {searchResults.map((location) => (
                <div key={location.long}>
                    <Marker
                        longitude={location.long}
                        latitude={location.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                        color="red"
                    >
                        <p
                            onClick={() => handleOnSetLocation(location)}
                            role='img'
                            className='cursor-pointer text-2xl animate-bounce'
                            aria-label="push-pin"
                        >
                            📌
                        </p>
                    </Marker>
                   {/* Popup renders onClick of the Marker */}
          {selectedLocation?.long === location?.long ? (
            <Popup
              key={location.lat + location.long }
              onOpen={() => console.log(`It was opened at ${location.lat}`)}
              closeOnClick={true}
              latitude={location.lat}
              longitude={location.long}
              offset={5}
              onClose={() => setSelectedLocation({})}
              className="bg-white w-fit inline-flex flex-row user-select-none 
                  text-gray-600 p-2 font-medium rounded-lg "
            >
              {location.title}
            </Popup>
          ) : (
            false
          )}
        </div>
            ))}
        <FullscreenControl
        position="top-right"
        className="absolute top-0 left-0"
        />
    </Map>)
}

export default MapboxMap;