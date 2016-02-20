var ConferenceEnum = {
    Eastern: 1,
    Western: 2,
    properties: {
        1: {name: "Eastern"},
        2: {name: "Western"}
    }
};

var DivisonEnum = {
    Atlantic: 1,
    Central: 2,
    Southeast: 3,
    Northwest: 4,
    Pacific: 5,
    Southwest: 6,
    properties: {
        1: {name: "Atlantic", conference: ConferenceEnum.Eastern, markerOptions: {opacity: 0.9}},
        2: {name: "Central", conference: ConferenceEnum.Eastern, markerOptions: {opacity: 0.7}},
        3: {name: "Southeast", conference: ConferenceEnum.Eastern, markerOptions: {opacity: 0.5}},
        4: {name: "Northwest", conference: ConferenceEnum.Western, markerOptions: {opacity: 0.5}},
        5: {name: "Pacific", conference: ConferenceEnum.Western, markerOptions: {opacity: 0.7}},
        6: {name: "Southwest", conference: ConferenceEnum.Western, markerOptions: {opacity: 0.9}},
    }
};

var NBATeam = function(name, location, division) {
    this.name = name;
    this.location = location;
    this.division = division;
};

var nbaTeams = [];
nbaTeams.push(new NBATeam("Goldern State Warriors", {lat: 37.8024789, lng: -122.2762418}, DivisonEnum.Pacific));
nbaTeams.push(new NBATeam("Oklahoma City Thunder", {lat: 35.4693117, lng: -97.5192975}, DivisonEnum.Northwest));
nbaTeams.push(new NBATeam("Chicago Bulls", {lat: 41.8807081, lng: -87.6762387}, DivisonEnum.Central));
nbaTeams.push(new NBATeam("Miami Heat", {lat: 25.7814062, lng: -80.1891577}, DivisonEnum.Southeast));
nbaTeams.push(new NBATeam("Los Angeles Lakers", {lat: 34.0430219, lng: -118.2694428}, DivisonEnum.Pacific));
nbaTeams.push(new NBATeam("Los Angeles Clippers", {lat: 34.0430219, lng: -118.2694428}, DivisonEnum.Pacific));
nbaTeams.push(new NBATeam("New York Knicks", {lat: 40.7505085, lng: -73.9956274}, DivisonEnum.Atlantic));
nbaTeams.push(new NBATeam("Toronto Rapters", {lat: 43.64347, lng: -79.3812876}, DivisonEnum.Atlantic));
nbaTeams.push(new NBATeam("Boston Celtics", {lat: 42.3662019, lng: -71.0643347}, DivisonEnum.Atlantic));
nbaTeams.push(new NBATeam("Brooklyn Nets", {lat: 40.6825297, lng: -73.977245}, DivisonEnum.Atlantic));
nbaTeams.push(new NBATeam("Philadelphia 76ers", {lat: 39.9012056, lng: -75.1741682}, DivisonEnum.Atlantic));
nbaTeams.push(new NBATeam("Cleveland Cavaliers", {lat: 41.496641, lng: -81.6882089}, DivisonEnum.Central));
nbaTeams.push(new NBATeam("Indiana Pacers", {lat: 39.7639304, lng: -86.1555437}, DivisonEnum.Central));

function initMap() {
    var USA = {lat: 36.2416651, lng: -113.752889};
    var map = new google.maps.Map(document.getElementById('map'), {
        center: USA,
        scrollwheel: false,
        zoom: 4
    });

    for (var i = 0; i < nbaTeams.length; i++)
    {
        var marker = new google.maps.Marker({
            map: map,
            position: nbaTeams[i].location,
            title: nbaTeams[i].name
        });
        marker.setOptions(DivisonEnum.properties[nbaTeams[i].division].markerOptions);
    }
}
