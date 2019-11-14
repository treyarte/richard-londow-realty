import PropertiesActionTypes from "./properties.types";

export const updateProperties = (propertiesMap) => ({
    type: PropertiesActionTypes.UPDATE_PROPERTIES,
    payload: propertiesMap
});
