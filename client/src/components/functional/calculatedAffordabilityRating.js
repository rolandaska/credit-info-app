export const calculatedAffRating = (
    affordabilityMin = false,
    exposureValues = false
) => {
    if (affordabilityMin && exposureValues.length !== 0) {
        return affordabilityMin * exposureValues.reduce((a, b) => a + b);
    } else return null;
};
