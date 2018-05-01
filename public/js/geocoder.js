function geocoder() {
    var formTitle = $("#event-title").val().trim();
    var formAddress = $("#event-address").val().trim();
    var formBody = $("#event-body").val().trim();
    var formCategory = $("#dropdown").val();
    var key = "AIzaSyAo3U3-CYQSA_L--3jjHzIIqBnngBiAMEU"
    var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + formAddress + "&key=" + key;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        db.POI.create({
            title: formTitle,
            address: formAddress,
            lat: response.results["0"].geometry.location.lat,
            lng: response.results["0"].geometry.location.lng,
            // link: "form link field",
            category: formCategory,
            body: formBody
        }).then(function (dbPOI) {
            res.json(dbPOI);
        })
        console.log(response);

    })
}

module.exports = geocoder;