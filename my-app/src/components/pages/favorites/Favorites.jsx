import React, { useState } from "react";
import CityMiniCard from "../../atoms/cityMiniCard/CityMiniCard";
import './Favorites.css'

const Favorites = () => {

    const [favoriteCities, setFavoriteCities] = useState([localStorage.getItem("favCity")])
console.log(favoriteCities)
    return (
        <div className="fav-city-cards-wrapper">
            {favoriteCities[0] !== null ? favoriteCities?.map((city, index) =>
                <CityMiniCard 
                    key={city?.Rank || index} 
                    city={city?.LocalizedName} 
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