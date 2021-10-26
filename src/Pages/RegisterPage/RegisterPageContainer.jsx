import { useState }      from "react";
import Swal              from "sweetalert2";
import { useDispatch }   from "react-redux";
import { startRegister } from "../../store/Actions/authActions";

import RegisterPage from "./RegisterPage";
import useForm      from "../../hooks/useForm";

const RegisterPageContainer = () => {
    const dispatch = useDispatch();

    const [gender, setGender] = useState("");

    const [ formRegisterValues, handleRegisterInputChange ] = useForm({
        rName      : '',
        rEmail     : '',
        rAge       : '',
        rPassword1 : '',
        rPassword2 : '',
    });

    const { rName, rEmail, rAge, rPassword1, rPassword2 } = formRegisterValues;

    const handleRegister = (e) => {
        if(e?.preventDefault) e.preventDefault();
        
        if(rPassword1 !== rPassword2) {
            return Swal.fire('Error', 'Las contraseña deben de ser iguales', 'error');
        }
        dispatch( startRegister(rEmail, rPassword1, rName, rAge, gender) );
    };
    
    const handleSelectGender = ({target}) => {
        setGender(target.value);
    };

    
    return (
        <RegisterPage
            delegation={{
                rAge,
                rName,
                rEmail,
                gender,
                rPassword1,
                rPassword2,
                handleRegister,
                handleSelectGender,
                handleRegisterInputChange,
            }}
        />
    );
}
export default RegisterPageContainer;
