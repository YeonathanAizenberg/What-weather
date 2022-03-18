import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getApiData } from "../../actions";

const MainPage = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.getData)

    return (
        <div>
            <h1>MainPAge</h1>
            <h1>{data}</h1>
            <button onClick={() => dispatch(getApiData())}>Get Data!</button>
        </div>
    );
};
export default MainPage;