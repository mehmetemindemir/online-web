import axios from '../../axios-instance'

export const getAsyncCompany = async (data) => await axios.post('admin/companyInfo', data)
    .then(res => ({
        error: false,
        company: res.data
    }))
    .catch(error => ({
        error: true,
        company: null,
        errorMsg: error
    }));
