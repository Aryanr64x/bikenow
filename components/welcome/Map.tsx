import { useEffect } from "react";
import supabase from "../../pages/_supabase";
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';


mapboxgl.accessToken = 'pk.eyJ1Ijoic2FrZXRyNjR4IiwiYSI6ImNsMGNhZ3ljMDBhN2wza3MxaDZzN3hnYW8ifQ.i5CDY1OXAubur7uN4KRjmA';


const Map: React.FC = () => {

    useEffect(() => {
        
        console.log(supabase.auth.user());
        
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-79.4512, 43.6568],
            zoom: 13

        });

        const geocoder = new MapboxGeocoder({
            placeholder: 'Enter pickup location..',
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
           
          
        });
        
        // A non reactish way is over here as specified
        document.getElementById('search')!.appendChild(geocoder.onAdd(map));
        




    }, []);


    return (
        <div className="h-screen" id="map">

        </div>
    );
}

export default Map;