
import {combineReducers} from 'redux';

import placeReducer from "./placeReducer";
import placeDataReducer from "./placeDataReducer";
import themeReducer from './themeReducer';

const RootReducer=combineReducers({
    place:placeReducer,
    placeData:placeDataReducer,
    theme:themeReducer,
})

export default RootReducer;
