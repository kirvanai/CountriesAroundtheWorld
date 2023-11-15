class Country {
    name;
    language;
    greeting;
    colors;
    constructor(name, language, greeting, colors){
        this.name = name;
        this.language = language;
        this.greeting = greeting;
        this.colors = colors;
    }

    DisplayColors(){
        document.getElementById("CountryName").innerText = this.name;
        document.getElementById("CountryLanguage").innerText = this.language;
        document.getElementById("CountryGreeting").innerText = this.greeting;
        document.getElementById("Color1").style.backgroundColor = this.colors[0];
        document.getElementById("Color2").style.backgroundColor = this.colors[1];
        if(this.colors[2] != null){
        document.getElementById("Color3").style.backgroundColor = this.colors[2];}
        else{
            document.getElementById("Color3").style.backgroundColor = this.colors[1];
        }
    }
 }

let usa = new Country("USA", "English", "How's it going?", ["red", "white", "blue"]);
let spain = new Country("Spain", "Spanish", "Hola", ["red", "gold"] );
let gabon = new Country("Gabon", "French", "Bonjour", ["green", "yellow", "blue"] );
let haiti = new Country("Haiti", "Haitian Creole", "Bonjour", ["blue", "red"] );
let japan = new Country("Japan", "Japanese", "Konichiwa", ["red", "white"]);



function SwitchCountry() {
    let countryInput = document.querySelector("#CountryList").value;
    let country;
    console.log(countryInput);
    if (countryInput === "USA") {
        country = usa;
        country.DisplayColors();
    }
    else if (countryInput === "Spain") {
        country = spain;
        country.DisplayColors();
    }
    else if (countryInput === "Gabon") {
        country = gabon;
        country.DisplayColors();
    }
    else if (countryInput ==="Haiti"){
        country = haiti;
        country.DisplayColors()
    }
    else if (countryInput ==="Japan"){
        country = japan;
        country.DisplayColors();
    }

}
