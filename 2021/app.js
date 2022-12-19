"use strict";
function sendEmail(value) {
    console.log(value);
}
sendEmail({ name: "enilo", email: "something@email.com" });
var Company = /** @class */ (function () {
    function Company(companyName, emailAddress) {
        this.name = companyName;
        this.email = emailAddress;
    }
    return Company;
}());
var treehouse = new Company("EgunHouse", "enilo@enilo.com");
sendEmail(treehouse);
var CompanyTwo = (function () {
    function CompanyTwo(companyName, emailAddress) {
        this.name = companyName;
        this.email = emailAddress;
    }
    return CompanyTwo;
})();
var Song = /** @class */ (function () {
    function Song(title, artist, duration, isPlaying) {
        if (isPlaying === void 0) { isPlaying = false; }
        this.artist = artist;
        this.duration = duration;
        this.isPlaying = isPlaying;
        this.title = title;
    }
    Song.prototype.play = function () {
        this.isPlaying = true;
    };
    ;
    Song.prototype.stop = function () {
        this.isPlaying = false;
    };
    ;
    Song.prototype.toHTML = function () {
        var currentClass = this.isPlaying ? "current" : "";
        return "<li class=\"".concat(currentClass, "\">\n      ").concat(this.title, " - ").concat(this.artist, "\n      <span class=\"duration\">").concat(this.duration, "</span>\n    </li>; ");
    };
    return Song;
}());
var Playlist = /** @class */ (function () {
    function Playlist() {
        this.songs = [];
        this.nowPlayingIndex = 0;
        this.currentSong = "";
    }
    Playlist.prototype.add = function (song) {
        this.songs.push(song);
    };
    Playlist.prototype.play = function () {
        this.currentSong;
    };
    return Playlist;
}());
