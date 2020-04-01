class GeoAutoCompleteController {
    constructor(model, view) {
        this._model = model;
        this._view = view;
        
        view.on('autocomplete', this.initialize.bind(this));
       
        this.initialize();
    }

    initialize() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.autocomplete.bind(this), this.errorFunction);
        }

        this.initCountrySelector();
    };

    autocomplete(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;

        const result = this._model.getGeoData(lat, lng);

        this._view.handleGeoAutocomplete(result);
    }

    initCountrySelector() {
        this._view.show(this._model.getCountry());
    }

    errorFunction() {
        console.log("Geocoder failed");
    }
}

export default GeoAutoCompleteController;