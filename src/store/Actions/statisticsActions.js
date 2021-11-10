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
                const ages      = [];
                const scores    = [];
                const data      = body.statistics
                const n         = Math.round(data[data.length - 1][test].average);
                const chartData = Array(n).fill(0);


                for (let i=0;i<data.length;i++) {
                    const { total, average } = data[i][test];
                    
                    if (total === 0) continue

                    const prev = chartData[Math.round(average) - 1];
                    chartData[Math.round(average) - 1] = prev + 1;

                    ages.push(data[i].age);
                    scores.push(data[i][test].average);                    
                }
                
                const result = buildSLR(age, ages, scores);

                dispatch(statisticsChart(chartData));
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

const statisticsChart = data => ({
    type : types.statisticsChart,
    payload : {
        data,
    }
});

