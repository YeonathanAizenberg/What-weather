import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataError, fetchDataRequest, fetchDataSuccess } from "../../../actions/fetchData/action";
import { fetchForecastDataRequest, fetchForecastDataSuccess, fetchForecastDataError } from "../../../actions/fetchForecastData/action";
import { getCurrentWeather, fiveDaysForeCast } from "../../../lib/api";
import MainCard from "../../molecules/mainCard/MainCard";
import SearchBar from "../../molecules/searchBar/SearchBar";
import './MainPage.css';

const MainPage = () => {
    const dispatch = useDispatch();

    const data = useSelector(state => state?.getData)
    const foreCastData = useSelector(state => state?.getForeCastData)

    useEffect(() => {
        dispatch(fetchDataRequest());
        getCurrentWeather()
        .then(response => {
            dispatch(fetchDataSuccess(response.data));
        }).catch(error => {
            dispatch(fetchDataError(error));
        })
    },[])

    useEffect(() => {
        dispatch(fetchForecastDataRequest());
        fiveDaysForeCast()
        .then(response => {
            dispatch(fetchForecastDataSuccess(response.data));
        }).catch(error => {
            dispatch(fetchForecastDataError(error));
        })
    },[])

    return (
        <div className="main-page-wrapper">
            <SearchBar/>
            <MainCard 
                data={data} 
                foreCastData={foreCastData}
            />
        </div>
    );
};
export default MainPage;