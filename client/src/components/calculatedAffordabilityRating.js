export const calculatedAffRating = (affordabilityMin, exposureValues) => {
    if (affordabilityMin && exposureValues.length !== 0) {
        return affordabilityMin * exposureValues.reduce((a, b) => a + b);
    } else return null;
};
