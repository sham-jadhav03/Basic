var arr = [
    {
        team: "CSK",
        primary: "Yellow",
        secondary: "Blue"   
    },

    {
        team: "MI",
        primary: "Blue",
        secondary: "Silver"
    },

    {
        team: "RCB",
        primary: "Red",
        secondary: "Black"
    },

    {
        team: "KKR",
        primary: "Purple",
        secondary: "Gold"
    },

    {
        team: "SRH",
        primary: "Orange",
        secondary: "Grey"
    },

    {
        team: "DC",
        primary: "Blue",
        secondary: "Red"
    },

    {
        team: "PBKS",
        primary: "Red",
        secondary: "Silver"
    },

    {
        team: "RR",
        primary: "Pink",
        secondary: "Blue"
    }

]

var btn = document.querySelector("button");
var h1 = document.querySelector("h1");
var main = document.querySelector("main");

btn.addEventListener("click", function(){
  var winner = arr[Math.floor(Math.random() * arr.length)];

    h1.innerText = winner.team;
    h1.style.color = winner.secondary;
    main.style.backgroundColor = winner.primary;
})