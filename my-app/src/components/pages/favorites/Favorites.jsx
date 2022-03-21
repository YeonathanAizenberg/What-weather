import React, { useState } from "react";
import CityMiniCard from "../../atoms/cityMiniCard/CityMiniCard";
import './Favorites.css'

const Favorites = () => {

    const favoriteCitiesOne = JSON.parse(localStorage.getItem("favCityOne"))
    const favoriteCitiesTwo = JSON.parse(localStorage.getItem("favCityTwo"))
    const favoriteCitiesThree = JSON.parse(localStorage.getItem("favCityThree"))
    const favoriteCitiesFour = JSON.parse(localStorage.getItem("favCityFour"))
    const favoriteCitiesFive = JSON.parse(localStorage.getItem("favCityFive"))

    const favoriteCities = Array(favoriteCitiesOne,favoriteCitiesTwo,favoriteCitiesThree, favoriteCitiesFour, favoriteCitiesFive)
    const filteredFavoriteCities = favoriteCities.filter(city => city != null)

    const removeCard =(cityKey)=> {
        for (let i = 0; i < filteredFavoriteCities.length; i++) {
            if(filteredFavoriteCities[i].cityKey === cityKey) {
                removeFromLocalStore(cityKey)
                window.location.reload();
            }
        }
    }

    const selectCard =(cityKey)=> {
        localStorage.setItem("currentCityKey", cityKey)
        window.location.replace("/")
    }

    const removeFromLocalStore = (cardCityKey) => {
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

    return (
        <div className="fav-city-cards-wrapper">
            {filteredFavoriteCities.length !== 0 ? 
                filteredFavoriteCities?.map((city, index) =>
                    <CityMiniCard 
                        selectCard={selectCard}
                        removeCard={removeCard}
                        key={city?.cityKey+index} 
                        cityKey={city?.cityKey}
                        city={city?.name} 
                        weather={city?.weather} 
                        temp={city?.temp} 
                    />
                ) : 
                <h1>
                    No Favorite Cities Selected Yet
                </h1>
            }
        </div>
    );
};
export default Favorites;