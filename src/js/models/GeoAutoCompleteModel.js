import { EventEmitter } from '../EventEmitter';
import { countryList } from '../data/countryList';

class GeoAutoCompleteModel extends EventEmitter {
    constructor() {
        super();                

        this.apiKey = "AIzaSyDQINHc7XSQXgHuQWIA_pWsSK3_0Yg-aF4"
        this.api = "https://maps.googleapis.com/maps/api";
    }

    getGeoData(lat, lng){
        const xhr = new XMLHttpRequest();
        let urlGeocode = `${this.api}/geocode/json?latlng=${lat},${lng}&language=en&key=${this.apiKey}`;

        xhr.open('GET', urlGeocode, false);
        xhr.send();

        let location = {};
        if (xhr.status != 200) {
            console.log( xhr.status + ': ' + xhr.statusText );
        } 
        else {        
            location = JSON.parse(xhr.responseText);
        }
        return location;
    }

    getCountry(){     
        return countryList;
    }
}

export default GeoAutoCompleteModel;