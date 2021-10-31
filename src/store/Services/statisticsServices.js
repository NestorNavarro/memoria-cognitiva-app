import Swal from "sweetalert2";

import { fetchWithToken } from "../../helpers/fetch";

export const getInfoTest = async(type, id, score = 0) => {
    try {
        const rep  = await fetchWithToken(`statistics/${type}/${id}`, { score }, "POST");
        const body = await rep.json();

        if(!body?.ok) {
            Swal.fire("Error", "Algo salio mal" , "error");
        }
    } catch (error) {
        console.log("[Auth Services] getInfoTest", error);
    }
}