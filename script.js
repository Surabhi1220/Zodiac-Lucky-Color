const zodiac = document.getElementById("zodiac");

const body = document.body;
const changeBackgroundColor = () => {
    switch (zodiac.value){
        case "aries":
            body.style.backgroundColor = "#ff0000";
            break;
        
        case "taurus":
            body.style.backgroundColor = "#ffc0cb";
            break;
        
        case "gemini":
            body.style.backgroundColor = "#008000";
            break;

        case "cancer":
            body.style.backgroundColor = "#c0c0c0";
            break;

        case "leo":
            body.style.backgroundColor = "#ffd700";
            break;

        case "virgo":
            body.style.backgroundColor = "#0000ff";
            break;

        case "libra":
            body.style.backgroundColor = "#ffffff";
            break;

        case "scorpio":
            body.style.backgroundColor = "#a52a2a";
            break;

        case "saggitarius":
            body.style.backgroundColor = "rgb(144, 144, 39)";
            break;

        case "capricorn":
            body.style.backgroundColor = "#800080";
            break;

        case "aquarius":
            body.style.backgroundColor = "#83cdf1";
            break;
            
        case "pisces":
            body.style.backgroundColor = "#f1a683";
            break;
        
        default:
            body.style.backgroundColor = "#ffffff"
            break;
    }
};