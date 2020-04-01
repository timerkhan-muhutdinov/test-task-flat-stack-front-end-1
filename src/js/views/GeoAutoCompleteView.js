import { EventEmitter } from '../EventEmitter';

class GeoAutoCompleteView extends EventEmitter {
    constructor() {
      super();

      this.maskedInputs = document.querySelectorAll(".geo a");
        for (var index = 0; index < this.maskedInputs.length; index++) {
            this.maskedInputs[index].addEventListener('click', this.onClickGeo.bind(this));
        }
    }
  
    onClickGeo() {
        this.emit('autocomplete');
    }

    handleGeoAutocomplete(data) {
        const inputCity = document.querySelectorAll(".city");
        const inputZip = document.querySelectorAll(".zip");
        const options = document.querySelectorAll('.countries > option');

        inputCity.forEach(function(item, i) {
            item.value = data.results[0].address_components[2].long_name;
        });

        inputZip.forEach(function(item, i) {
            item.value = data.results[0].address_components[7].long_name;
        });

        options.forEach(function(item, i) {
        if(item.value.indexOf(data.results[0].address_components[6].short_name) != -1)            
            {
                item.selected = true;
            }
        });
    }

    show(countries) {

        const selectors = document.getElementsByClassName('countries');
        
        for (let selector of selectors) {
            countries.forEach((item) => selector.append(new Option(item.name, item.code)));
        }

    }
}

export default GeoAutoCompleteView;