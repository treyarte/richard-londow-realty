import {createSelector} from "reselect";

const selectProperties = state => state.properties;

export const selectPropertiesCollections = createSelector(
    [selectProperties],
    properties => properties ? properties.collections : null
);