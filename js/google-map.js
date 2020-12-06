
var google;

function init() {
    var myLatlng = new google.maps.LatLng(43.2092481470281, 76.67231797811692);
    var myLatlng1 = new google.maps.LatLng(43.20764793915639, 76.66953699562495);
    var myLatlng2 = new google.maps.LatLng(43.20937029647761, 76.66851514673446);
    var mapOptions = {
        zoom: 15,
        center: myLatlng,
        scrollwheel: false,
        styles: [
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "hue": "#ff0000"
                    }
                ]
            }
        ]
    };
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Тут не пустошь, тут отель"
    })
    var marker1 = new google.maps.Marker({
        position: myLatlng1,
        map: map,
        title: "Сду"
    })
     var marker2 = new google.maps.Marker({
        position: myLatlng2,
        map: map,
        title: "Остановка"
    });
    var addresses = ['Kaskelen']; 
    var info = new google.maps.InfoWindow({
    content: '<h3>Отель</h3><p>Лучший отель в Каскелене</p>'
    }); 
    marker.addListener("click", function(){
        info.open(map, marker);
    });
}
google.maps.event.addDomListener(window, 'load', init);