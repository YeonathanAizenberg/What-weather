import axios from 'axios';

const BaseURL = "https://dataservice.accuweather.com";
const APIKey = "smEv22ZpcGcK1DASEG0nLJUBmfV0T4XI";
const APIKeyTwo = "WahwJP4BdD8l2dt8qr6O9QUtgbGcNL0v";
var locationCode = localStorage.getItem("currentCityKey") ? localStorage.getItem("currentCityKey") : "215854"

export function getCurrentWeather() {
    return axios.get(`${BaseURL}/currentconditions/v1/${locationCode}?apikey=${APIKey}`)
}

export function locationCompleteSearch(searchedCity) {
    return axios.get(`${BaseURL}/locations/v1/cities/autocomplete/?apikey=${APIKey}&q=${searchedCity}`);
}

export function fiveDaysForeCast() {
    return axios.get(`${BaseURL}/forecasts/v1/daily/5day/${locationCode}?apikey=${APIKey}&metric=true`);
}