import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataError, fetchDataRequest, fetchDataSuccess } from "../../actions/fetchData/action";
import { fetchForecastDataRequest, fetchForecastDataSuccess, fetchForecastDataError } from "../../actions/fetchForecastData/action";
import { getCurrentWeather, fiveDaysForeCast } from "../../lib/api";
import SearchBar from "../molecules/searchBar/SearchBar";

const MainPage = () => {
    const dispatch = useDispatch();
    const [favoriteCities, setFavoriteCities] = useState([localStorage.getItem("favCity")])
    const data = useSelector(state => state.getData.data)
    const foreCastData = useSelector(state => state.getForeCastData.data)

    // Uncomment this line to have the Data From the APi
    // useEffect(() => {
    //     dispatch(fetchDataRequest());
    //     getCurrentWeather()
    //     .then(response => {
    //         dispatch(fetchDataSuccess(response.data));
    //     }).catch(error => {
    //         dispatch(fetchDataError(error));
    //     })
    // },[])

    // Uncomment this line to have the ForeCast Data From the APi
    // useEffect(() => {
    //     dispatch(fetchForecastDataRequest());
    //     fiveDaysForeCast()
    //     .then(response => {
    //         dispatch(fetchForecastDataSuccess(response.data));
    //     }).catch(error => {
    //         dispatch(fetchForecastDataError(error));
    //     })
    // },[])

    const updateFavoriteCities = (newCity) => {
        localStorage.setItem("favCity", [...favoriteCities, newCity])
        setFavoriteCities(...favoriteCities, newCity)
    }

    return (
        <div>
            <h1>MainPAge</h1>
            <SearchBar/>
            <div className="data-container-box">
                <div className="data-box-header">
                    <div>
                        {"data.image"}
                    </div>
                    <button onClick={() => updateFavoriteCities("data.city")}>
                        Add To Favorites
                    </button>
                </div>
                <div className="data-box-clouds">
                    <div>
                        {"data.cloudsType"}
                    </div>
                </div>
                <div className="data-box-forecast">
                    {/* <div>
                        {data?.citiesInfo.map(day => 
                            <DayForecastCard day={day.day} temp={day.temperature}/>
                        )}
                    </div> */}
                </div>
            </div>
        </div>
    );
};
export default MainPage;