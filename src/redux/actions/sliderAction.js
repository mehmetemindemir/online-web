import * as action from './actionTypes'
import axios from '../../axios-instance'

export const sliderStart = () => {
    return {
        type: action.SLIDER_START
    }
}
export const sliderSuccess = (_data) => {
    return {
        type: action.SLIDER_LIST_SUCCESS,
        sliderData: _data
    }
}
export const sliderFail = (_error) => {
    return {
        type: action.SLIDER_FAIL,
        error: _error
    }
}

export const getSlider = (data) => {
    return dispatch => {
        axios.post("public/homeSliderList", data)
            .then(res => {
                if (res.data.statusCode === 'OK') {
                    dispatch(sliderSuccess(res.data.data));
                } else if (res.data.statusCode === 'NOT_FOUND') {
                    dispatch(sliderSuccess([]));
                } else {
                    dispatch(sliderFail(res.data.statusMessage));
                }

            })
            .catch(err => {
                dispatch(sliderFail(err))
            })
    }
}

export const getAsyncSlider = async (data) => await axios.post('public/homeSliderList', data)
    .then(res => ({
        error: false,
        slider: res.data,
    }))
    .catch((error) => ({
            error: true,
            slider: null,
            errorMsg: error
        }),
    );