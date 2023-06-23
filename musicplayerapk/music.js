class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title 
    }
}


const musicList = [
    new Music("Murder in my mind", "Kordhell","1.jpeg","1.mp3"),    
    new Music("Suffer with me", "Liue","2.jpeg","2.mp3"),    
    new Music("Own Paradise", "Lxaes","3.jpeg","3.mp3")  ,  
    new Music("Warning", "Mc Orsen","4.jpeg","4.mp3"),    
    new Music("Sudno", "Molchat Doma","5.jpeg","5.mp3"),    
    new Music("After Dark", "Mr Kitty","6.jpeg","6.mp3")  ,
     new Music("The lost soul down", "NBSPLV","7.jpeg","7.mp3"),    
    new Music("Rave", "Dxrk","8.jpeg","8.mp3"),    
    new Music("Alone", "Kim Petras / Nicki minaj","9.jpeg","9.mp3"),  
    new Music("$WERVE", "Dawning","10.jpeg","10.mp3")
];
