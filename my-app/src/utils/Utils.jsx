const favoriteCitiesOne = JSON.parse(localStorage.getItem("favCityOne"));
const favoriteCitiesTwo = JSON.parse(localStorage.getItem("favCityTwo"));
const favoriteCitiesThree = JSON.parse(localStorage.getItem("favCityThree"));
const favoriteCitiesFour = JSON.parse(localStorage.getItem("favCityFour"));
const favoriteCitiesFive = JSON.parse(localStorage.getItem("favCityFive"));

export const favCitiesParse = () => {
    const favoriteCities = Array(favoriteCitiesOne,favoriteCitiesTwo,favoriteCitiesThree, favoriteCitiesFour, favoriteCitiesFive)
    const filteredFavoriteCities = favoriteCities.filter(city => city != null)
    return filteredFavoriteCities
}

export const dayFormatter = (day) => {
    const event = new Date(day);
    const fullDauData = event.toString();
    const weekDay = fullDauData.split(" ")[0]
    return weekDay
}

export const averageTempFormatter = (maxTemp, minTemp, unit) => {
    const averageTemp = 
    Math.trunc((Number(maxTemp) + Number(minTemp)) / 2) 
    + 
    ` º${unit}`
    return averageTemp
}

export const metricImperialTempFormatter = (temp, unit) => {
    const metricImperialTemp = `${temp} º${unit}`
    return metricImperialTemp
}

export const removeFromLocalStore = (cardCityKey) => {
    if(favoriteCitiesOne?.cityKey == cardCityKey) {
        localStorage.removeItem("favCityOne");
    } 
    if(favoriteCitiesTwo?.cityKey == cardCityKey) {
        localStorage.removeItem("favCityTwo");
    } 
    if(favoriteCitiesThree?.cityKey == cardCityKey) {
        localStorage.removeItem("favCityThree");
    } 
    if(favoriteCitiesFour?.cityKey == cardCityKey) {
        localStorage.removeItem("favCityFour");
    } 
    if(favoriteCitiesFive?.cityKey == cardCityKey) {
        localStorage.removeItem("favCityFive");
    }
}

export const checkIfCityIsFavorite = (locationCityKey) => {
    if(favoriteCitiesOne?.cityKey == locationCityKey) {
        return true
    } 
    if(favoriteCitiesTwo?.cityKey == locationCityKey) {
        return true
    } 
    if(favoriteCitiesThree?.cityKey == locationCityKey) {
        return true
    } 
    if(favoriteCitiesFour?.cityKey == locationCityKey) {
        return true
    } 
    if(favoriteCitiesFive?.cityKey == locationCityKey) {
        return true
    }
}

export const favCityEmptySpot = () => {
    if(!favoriteCitiesOne) {
        return "favCityOne"
    } 
    if(!favoriteCitiesTwo) {
        return "favCityTwo"
    } 
    if(!favoriteCitiesThree) {
        return "favCityThree"
    } 
    if(!favoriteCitiesFour) {
        return "favCityFour"
    } 
    if(!favoriteCitiesFive) {
        return "favCityFive"
    } else {
        alert("You have the maximum number of favored cities")
    }
}