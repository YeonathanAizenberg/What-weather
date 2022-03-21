import React from "react";
import { favCitiesParse, removeFromLocalStore } from "../../../utils/Utils";
import CityMiniCard from "../../atoms/cityMiniCard/CityMiniCard";
import './Favorites.css'

const Favorites = () => {

    const removeCard =(cityKey)=> {
        for (let i = 0; i < favCitiesParse().length; i++) {
            if(favCitiesParse()[i].cityKey === cityKey) {
                removeFromLocalStore(cityKey)
                window.location.reload();
            }
        }
    }

    const selectCard =(cityKey, cityName)=> {
        localStorage.setItem("currentCityKey", cityKey)
        localStorage.setItem("currentCityName", cityName)
        window.location.replace("/")
    }

    return (
        <div className="fav-city-cards-wrapper">
            {favCitiesParse().length !== 0 ? 
                favCitiesParse()?.map((city, index) =>
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