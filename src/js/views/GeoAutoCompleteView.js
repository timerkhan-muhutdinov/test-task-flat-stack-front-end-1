import { EventEmitter } from '../EventEmitter';

class GeoAutoCompleteView extends EventEmitter {
    constructor() {
      super();

      this.maskedInputs = document.querySelectorAll(".geo");
        for (var index = 0; index < this.maskedInputs.length; index++) {
            this.maskedInputs[index].addEventListener('input', this.onClickGeo.bind(this));
        }
    }
  
    onClickGeo() {
        this.emit('autocomplete');
    }

    handleGeoAutocomplete(data) {
        const inputCity = document.getElementById("city");
        const inputZip = document.getElementById("zip");
        const options = document.querySelectorAll('.countries > option');

        options.forEach(function(item, i) {
            if(item.value.indexOf(data.results[0].address_components[6].short_name) != -1)            
                {
                    item.selected = true;
                }
          });

        inputCity.value = data.results[0].address_components[2].long_name;
        inputZip.value = data.results[0].address_components[7].long_name;    
    }

    show(countries) {

        const selectors = document.getElementsByClassName('countries');
        
        for (let selector of selectors) {
            countries.forEach((item) => selector.append(new Option(item.name, item.code)));
        }

    }
}

export default GeoAutoCompleteView;