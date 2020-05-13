import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAffordabilityById } from './actions/getAffordability-action';
import { getExposureValues } from './actions/getExposure-action';
import Spinner from './ui/Spinner';
import CreditInfoComponent from './components/CreditInfoResult/CreditInfoResult';
import CreditInfoRequest from './components/CreditInfoRequest/CreditInfoRequest';
import './App.scss';

const App = () => {
    const dispatch = useDispatch();
    const { personAffId, loading } = useSelector(
        (state) => state.getPersonInfoReducer
    );

    useEffect(() => {
        const fetchData = async () => {
            if (personAffId) {
                const res = await dispatch(getAffordabilityById(personAffId));
                const affMinValue = res.affordability_min.value;
                await dispatch(getExposureValues(affMinValue));
            }
        };
        fetchData();
    }, [personAffId, dispatch]);

    const title1 = 'Credit Score Calculator';
    const title2 = "DEMO ID's: 0, 1, 2";

    return (
        <div className="App">
            <h1 className="blue flex-center">{title1}</h1>
            <h4 className="dark-blue flex-center">{title2}</h4>
            <CreditInfoRequest />
            {loading ? <Spinner /> : <CreditInfoComponent />}
        </div>
    );
};

export default App;
