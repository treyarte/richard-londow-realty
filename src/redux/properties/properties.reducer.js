import PropertiesActionTypes from "./properties.types";

const INITIAL_STATE={
    collections: null
};

const propertiesReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case PropertiesActionTypes.UPDATE_PROPERTIES:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state
    }
}

export default propertiesReducer;