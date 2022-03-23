import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { favCitiesParse, removeFromLocalStore } from "../../../utils/Utils";
import CityMiniCard from "../../atoms/cityMiniCard/CityMiniCard";
import './Favorites.css'

const Favorites = () => {

    const [imperialTemp, setImperialTemp] = useState(false)

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
        <div>
            <Button onClick={()=>setImperialTemp(!imperialTemp)}>
                Toggle ºC to ºF
            </Button>
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
                            weatherUnit={imperialTemp ? "F" : "C"}
                            temp={imperialTemp ? (Math.round(city?.temp * 9/5)+ 32) : city?.temp} 
                        />
                    ) : 
                    <h1>
                        No Favorite Cities Selected Yet
                    </h1>
                }
            </div>
        </div>
    );
};

export default Favorites;