import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPersonInfo } from './actions/getPersonInfo-action.js';
import { getAffordabilityById } from './actions/getAffordability-action';
import { getExposureValues } from './actions/getExposure-action';
import './App.scss';
import Spinner from './ui/Spinner';
import { calculatedAffRating } from './components/calculatedAffordabilityRating';

const App = () => {
    const dispatch = useDispatch();
    const { personAffId, personInfo, loading } = useSelector(
        (state) => state.getPersonInfoReducer
    );
    const { affordability } = useSelector(
        (state) => state.getAffordabilityReducer
    );
    const { exposureValues } = useSelector((state) => state.getExposureReducer);

    const [personId, setPersonId] = useState('');
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
        <Fragment>
            <h1>App</h1>
            <input
                type="text"
                placeholder="Type Person ID"
                maxLength="10"
                name="personId"
                value={personId}
                onChange={(e) => setPersonId(e.target.value)}
                required
            />

            <button
                disabled={!/^[0-9\b]+$/.test(personId)}
                onClick={() => setSendRequest(personId)}
            >
                Get Person Rate
            </button>

            {loading ? (
                <Spinner />
            ) : (
                <div>
                    <div>
                        Person Info: {personInfo.name} {personInfo.last_name}
                    </div>
                    <div>
                        Affordability range: {affordability.affordabilityMin},
                        {affordability.affordabilityMax}
                    </div>
                    <div>
                        Affordability rating:
                        {calculatedAffRating(
                            affordability.affordabilityMin,
                            exposureValues
                        )}
                    </div>
                </div>
            )}
        </Fragment>
    );
};
export default App;
