import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPersonInfo } from './../../actions/getPersonInfo-action.js';
import Input from './../Input/Input';
import Button from './../Button/Button';
import './CreditInfoRequest.scss';

const CreditInfoRequest = ({ setSendRequest }) => {
    const dispatch = useDispatch();

    const [currentPersonId, setCurrentPersonId] = useState('');

    const [personInfoRequest, setPersonInfoRequest] = useState('');

    useEffect(() => {
        if (personInfoRequest) {
            dispatch(getPersonInfo(personInfoRequest));
        }
    }, [personInfoRequest, dispatch]);

    return (
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
                onClick={() => setPersonInfoRequest(currentPersonId)}
                title="Calculate"
                className="btn-primary"
            />
        </div>
    );
};

export default CreditInfoRequest;
