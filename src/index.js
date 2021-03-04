module.exports = function toReadable (number) {
    

    let hundred, decade, year, decade_year, out = "";
    hundred = Math.floor(number/100);
    decade_year = Math.floor(number%100);
    decade = Math.floor(number/10%10);
    year = number%10;
    function getyear(n){
        switch (n) {
            case 0:
                year_out = "zero";
                break;
            case 1: 
                year_out = "one";
                break;
            case 2:
                year_out = "two";
                break;
            case 3:
                year_out = "three";
                break;
            case 4:
                year_out = "four";
                break;
            case 5:
                year_out = "five";
                break;
            case 6:
                year_out = "six";
                break;
            case 7:
                year_out = "seven";
                break;
            case 8:
                year_out = "eight";
                break;
            case 9:
                year_out = "nine";
                break;
            case 10:
                year_out = "ten";
                break;
            case 11:
                year_out = "eleven";
                break;
            case 12:
                year_out = "twelve";
                break;
            case 13:
                year_out = "thirteen";
                break;
            case 14:
                year_out = "fourteen";
                break;
            case 15:
                year_out = "fifteen";
                break;
            case 16:
                year_out = "sixteen";
                break;
            case 17:
                year_out = "seventeen";
                break;
            case 18:
                year_out = "eighteen";
                break;
            case 19:
                year_out = "nineteen";
                break;
                
        }
    }
    function getdecade(s){
    switch (s) {
        case 0: 
            decade_out = "";
            break;
        case 2:
            decade_out = "twenty";
            break;
        case 3:
            decade_out = "thirty";
            break;
        case 4:
            decade_out = "forty";
            break;
        case 5:
            decade_out = "fifty";
            break;
        case 6:
            decade_out = "sixty";
            break;
        case 7:
            decade_out = "seventy";
            break;
        case 8:
            decade_out = "eighty";
            break;
        case 9:
            decade_out = "ninety";
            break;
                
        }
    }
    
    if ( hundred > 0 ) {
        getyear(hundred);
        out += year_out + " hundred"; 
        }
    
    if ( decade_year > 0 && decade_year <= 19 ){
            getyear(decade_year);
            out.length !== 0 ? out += " " +  year_out : out += year_out
            
    } else  {
        getdecade(decade);
        (out.length !== 0)&&(decade) ? out += " " +  decade_out : out += decade_out;
    if ( year > 0 ) {
        getyear(year);
        out.length !== 0 ? out += " " + year_out : out += year_out;
    } 
    }
    if (number===0){
        return "zero";
    }
    
    return out;

} 

