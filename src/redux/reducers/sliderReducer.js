import {updateObject} from "../../shared/utility";
import * as actionTypes from '../actions/actionTypes'

const initialState = {
    error: null,
    loading: false,
    sliderList: null
};
const sliderStart = (state) => {
    return updateObject(state, {loading: true})
};

const sliderListSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,
        sliderList: action.sliderData
    });
};
const sliderFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error

    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SLIDER_START:
            return sliderStart(state);
        case actionTypes.SLIDER_LIST_SUCCESS:
            return sliderListSuccess(state, action);
        case actionTypes.SLIDER_FAIL:
            return sliderFail(state, action);
        default:
            return state;
    }
}
export default reducer;
