var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'app/page/AbstractController'], function (require, exports, AbstractController) {
    "use strict";
    var ContactController = (function (_super) {
        __extends(ContactController, _super);
        function ContactController() {
            _super.call(this);
        }
        ContactController.prototype.init = function () {
            _super.prototype.init.call(this);
            require(['https://maps.googleapis.com/maps/api/js?key=AIzaSyDvpTKGKDSoXiydYbaSdum8yGJjuYZSV8E'], function () {
                var styles = [{ "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#444444" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [{ "color": "#e2e2e2" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#bdbebe" }, { "visibility": "on" }] }];
                function initMap() {
                    var mapDiv = document.getElementById('map');
                    var myLatLng = { lat: 51.05434220000001, lng: 3.717424299999948 };
                    var map = new google.maps.Map(mapDiv, {
                        center: { lat: 51.05434220000001, lng: 3.717424299999948 },
                        zoom: 15,
                        disableDefaultUI: true,
                        styles: styles
                    });
                    var marker = new google.maps.Marker({
                        position: myLatLng,
                        map: map,
                        title: 'Punch office'
                    });
                }
                initMap();
            });
            this.bannerAnimation();
        };
        ContactController.prototype.destruct = function () {
            _super.prototype.destruct.call(this);
        };
        return ContactController;
    }(AbstractController));
    return ContactController;
});
