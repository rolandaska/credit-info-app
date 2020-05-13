import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPersonInfo } from './actions/getPersonInfo-action.js';
import { getAffordabilityById } from './actions/getAffordability-action';
import { getExposureValues } from './actions/getExposure-action';
import Spinner from './ui/Spinner';
import Input from './components/Input/Input';
import CreditInfoComponent from './components/CreditInfoComponent/CreditInfoComponent';
import Button from './components/Button/Button';
import './App.scss';

const App = () => {
    const dispatch = useDispatch();
    const { personAffId, loading } = useSelector(
        (state) => state.getPersonInfoReducer
    );

    const [currentPersonId, setCurrentPersonId] = useState('');
    const [sendRequest, setSendRequest] = useState('');

    useEffect(() => {
        if (sendRequest) {
            dispatch(getPersonInfo(sendRequest));
        }
    }, [sendRequest, dispatch]);

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

    return (
        <div className="App">
            <h1 className="blue flex-center">Credit Score Calculator</h1>
            <h4 className="dark-blue flex-center">
                DEMO ( existing person id's: 0, 1, 2 )
            </h4>
            <div className="calculate-container mt-2 flex-center">
                <Input
                    required
                    type="text"
                    maxLength="10"
                    name="currentPersonId"
                    placeholder="Type Person ID"
                    onChange={(e) => setCurrentPersonId(e.target.value)}
                    className="input-primary mr-1"
                />
                <Button
                    disabled={!/^[0-9\b]+$/.test(currentPersonId)}
                    onClick={() => setSendRequest(currentPersonId)}
                    title="Calculate"
                    className="btn-primary"
                />
            </div>
            {loading ? (
                <div className="flex-center">
                    <Spinner />
                </div>
            ) : (
                <CreditInfoComponent />
            )}
        </div>
    );
};

export default App;
