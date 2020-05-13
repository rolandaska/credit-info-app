import React from 'react';
import { useSelector } from 'react-redux';
import { calculatedAffRating } from '../functional/calculatedAffordabilityRating';
import './CreditInfoResult.scss';
import Error from '../../ui/Error';

const CreditInfoComponent = () => {
    const { personInfo, error } = useSelector(
        (state) => state.getPersonInfoReducer
    );
    const { affordability } = useSelector(
        (state) => state.getAffordabilityReducer
    );
    const { exposureValues } = useSelector((state) => state.getExposureReducer);
    const errorComponent = error && <Error message={error} />;

    return (
        <div className="overlay-container">
            {errorComponent}
            {!error && (
                <>
                    <div className="border-box flex">
                        Person Info:
                        <p className="bold ml-1">
                            {personInfo.name} {personInfo.last_name}
                        </p>
                    </div>
                    <div className="border-box flex">
                        Affordability range:
                        {affordability.affordabilityMin && (
                            <div className="flex ml-1">
                                <p className="bold">
                                    {affordability.affordabilityMin}
                                </p>
                                <p className="ml-1 mr-1">-</p>
                                <p className="bold">
                                    {affordability.affordabilityMax}
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="border-box flex">
                        Affordability rating:
                        <p className="bold ml-1">
                            {calculatedAffRating(
                                affordability.affordabilityMin,
                                exposureValues
                            )}
                        </p>
                    </div>
                </>
            )}
        </div>
    );
};

export default CreditInfoComponent;
