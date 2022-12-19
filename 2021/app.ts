interface IEmailable 
{
  name: string,
  email: string,
}

function sendEmail(value: IEmailable): void
{
  console.log(value);
}

sendEmail({name: "enilo", email: "something@email.com"});

class Company implements IEmailable
{
  name: string;
  email: string;
  
  constructor(companyName: string, emailAddress: string)
  {
    this.name = companyName;
    this.email = emailAddress;
  }
}

let treehouse = new Company("EgunHouse", "enilo@enilo.com");
sendEmail(treehouse);

let CompanyTwo = (function () {
  function CompanyTwo(companyName: string, emailAddress: string) 
  {
    this.name = companyName;
    this.email =  emailAddress;
  }
  return CompanyTwo;
})();

class Song
{
  title: string;
  constructor(
    title: string,
    public artist: string,
    public duration: string,
    public isPlaying: boolean = false
  ) 
    {
      this.title = title;
    }

  play() {
    this.isPlaying = true;
  };

  stop() {
    this.isPlaying = false;
  };

  toHTML() {
    let currentClass = this.isPlaying ? "current" : "";

    return `<li class="${currentClass}">
      ${this.title} - ${this.artist}
      <span class="duration">${this.duration}</span>
    </li>; `
  }
}


class Playlist 
{
  songs: Song[];
  nowPlayingIndex: number;
  currentSong: string;

  constructor() {
    this.songs = [];
    this.nowPlayingIndex = 0;
    this.currentSong = "";
  }

  add(song: Song)
  {
    this.songs.push(song);
  }

  play()
  {
    this.currentSong;
  }
}
