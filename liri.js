require("dotenv").config();

var fs = require("fs");
var keys = require("./keys"); //i don't this right, if I am not using the spotify keys?
var axios = require("axios");

var search = process.argv[2];
var term = process.argv.slice(3).join(" "); //would I need this if I am following a different example?



var Concert = function () {
    this.findArtist = function (artist) {
        var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
        axios.get(URL)
            .then(function (response) {
                var conResData = response.data[0];
                var concertData = [
                    "Name: " + conResData.name,
                    "Location: " + conResData.location,
                    "Date: " + conResData.date
                ]
                console.log(concertData);
            })
            .catch(function(err) {
                console.log(err);
            })
    }
};

module.exports = Concert;