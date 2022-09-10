import PageLayout from 'examples/LayoutContainers/PageLayout';
import * as React from 'react';

const API_KEY = 'TdG0aL81ZyzIuoW057KWfQROSdT8giBJHLZTkCnpvE0'

const locations = [
  {lat:26.0793, lng:91.0974},
  {lat:29.68, lng: 78.71},
  {lat:9.69, lng:76.53},
  {lat:25.35, lng: 75.55},
  {lat:17.67, lng:80.56}

]
export  const  DisplayMap = () => {
  // Create a reference to the HTML element we want to put the map on
  const mapRef = React.useRef(null);


  const addMarkersToMap = (map) => {

    locations.map( l => {
      var locationMarker = new H.map.Marker(l);
      map.addObject(locationMarker);})
    // })
    // var parisMarker = new H.map.Marker({lat:48.8567, lng:2.3508});
    // map.addObject(parisMarker);

    // console.log(parisMarker)

    // var romeMarker = new H.map.Marker({lat:41.9, lng: 12.5});
    // map.addObject(romeMarker);

    // var berlinMarker = new H.map.Marker({lat:52.5166, lng:13.3833});
    // map.addObject(berlinMarker);

    // var madridMarker = new H.map.Marker({lat:40.4, lng: -3.6833});
    // map.addObject(madridMarker);

    // var londonMarker = new H.map.Marker({lat:51.5008, lng:-0.1224});
    // map.addObject(londonMarker);
}

  React.useLayoutEffect(() => {
    // `mapRef.current` will be `undefined` when this hook first runs; edge case that
    if (!mapRef.current) return;
    const H = window.H;
    const platform = new H.service.Platform({
        apikey: {API_KEY}
    });
    const defaultLayers = platform.createDefaultLayers();
    const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: { lat: 21.94, lng: 78.42 },
      zoom: 4,
      pixelRatio: window.devicePixelRatio || 1
    });

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));
    
    
    addMarkersToMap(hMap);

    const ui = H.ui.UI.createDefault(hMap, defaultLayers);
    // This will act as a cleanup to run once this hook runs again.
    // This includes when the component un-mounts
    return () => {
      hMap.dispose();
    };
  }, [mapRef]); // This will run this hook every time this ref is updated

  return (
    <PageLayout>
      <div className="map" ref={mapRef} style={{ height: "100vh" }} />
    </PageLayout>
  )
};