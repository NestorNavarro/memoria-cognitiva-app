import Swal from "sweetalert2";

import { types }             from "../types";
import { fetchWithOutToken } from "../../helpers/fetch";
import { buildSLR }          from "../../helpers/slr";

export const setSLR = (test = "") => {
    return async(dispatch, getState) => {
        try {
            const { userInfo : { age } } = getState().auth;
            const rep  = await fetchWithOutToken(`statistics/${test}`);
            const body = await rep.json();

            if (body.ok) {
                const ages   = [];
                const scores = [];
                const data   = body.statistics

                for (let i=0;i<data.length;i++) {
                    const { total } = data[i][test];

                    if (total === 0) continue;

                    ages.push(data[i].age);
                    scores.push(data[i][test].average);                    
                }
                
                const result = buildSLR(age, ages, scores);
                console.log(result);

                dispatch(setSlrAction(result));
            } else {
                Swal.fire("Error", "No se puidieron cargar los datos correctamente" , "error");
            }

        } catch (error) {
            console.log("Error on setSLR", error);
        }
    };
};

const setSlrAction = data => ({
    type : types.statisticsSLR,
    payload : {
        data,
    }
});

