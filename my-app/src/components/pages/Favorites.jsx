import React, { useState } from "react";

const Favorites = () => {

    const [favoriteCities, setFavoriteCities] = useState([localStorage.getItem("favCity")])

    return (
        <div>
            <h1>Favorites</h1>
            {/* {favoriteCities.map(day =>
                <DayForecastCard cite={favoriteCities.name} cloud={favoriteCities.cloud} temp={favoriteCities.temperature} />
            )} */}
        </div>
    );
};
export default Favorites;