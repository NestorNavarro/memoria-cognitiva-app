import Swal from "sweetalert2";

import { types } from "../types";
import Base64 from "../../helpers/Base64";
import {
    fetchWithToken,
    fetchWithOutToken, 
} from "../../helpers/fetch";


export const startLogin = (email, password) => {
    return async(dispatch) => {
        try {
            const rep  = await fetchWithOutToken('auth', {email, password}, 'POST');
            const body = await rep.json();
    
            if(body?.ok) {
                setLoginData(body, dispatch);
            } else {
                let error;
                if(body?.errors) {
                    error = !!body?.errors?.email ? body?.errors?.email.msg : body?.errors?.password.msg;
                } else {
                    error = body.msg;
                }
                Swal.fire('Error', error, 'error');
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const startRegister = (email, password, name, age, sex) => {
    return async(dispatch) => {
        try {
            const rep  = await fetchWithOutToken('auth/new', {name, email, password, age, sex}, 'POST');
            const body = await rep.json();
    
            if(body?.ok) {
                setLoginData(body, dispatch);
            } else {
                if(body?.msg) {
                    return Swal.fire('Error', body.msg, 'error');
                } else {
                    const { errors } = body;
    
                    if(errors?.email) {
                        return Swal.fire('Error', errors.email.msg, 'error');
                    } else if (errors?.name) {
                        return Swal.fire('Error', errors.name.msg, 'error');
                    } else if (errors?.age) {
                        return Swal.fire('Error', errors.age.msg, 'error');
                    } else if (errors?.sex) {
                        return Swal.fire('Error', errors.sex.msg, 'error');
                    }
                    return  Swal.fire('Error', errors.msg, 'error');
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const startChecking = () => {
    return async(dispatch) => {
        try {
            const rep  = await fetchWithToken('auth/renew');
            const body = await rep.json();
    
            if(body?.ok) {
                setLoginData(body, dispatch);
            } else {
                dispatch( checkingFinish() );  
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const checkingFinish = () =>( { type: types.authCheckingFinish } );

const login = (user) => ({
    type: types.authLogin,
    payload: user,
});

export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(logout());
    }
}

const logout = () => ({ type: types.authLogout });

const setLoginData = (body, dispatch) => {
    localStorage.setItem('token', body.token);
    localStorage.setItem('token-init-date', new Date().getTime());

    const payload = JSON.parse(Base64.decode(body.token.split(".")[1]));

    dispatch( login({
        uid  : payload._id,
        name : payload.name,
        sex  : payload.sex,
        age  : payload.age,
    }));
}