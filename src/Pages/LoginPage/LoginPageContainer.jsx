import { useDispatch } from "react-redux";
import { startLogin }  from "../../store/Actions/authActions";

import LoginPage   from "./LoginPage.jsx";
import useForm     from "../../hooks/useForm";

const LoginPageContainer = () => {
    const dispatch = useDispatch();

    const [ formLoginValues, handleLoginInputChange ] = useForm({
        lEmail    : '',
        lPassword : '',
    });

    const { lEmail, lPassword } = formLoginValues;

    const handleLogin = (e) => {
        if (e?.preventDefault) e.preventDefault();
        dispatch( startLogin(lEmail, lPassword) );
    };

    return (
        <LoginPage
            delegations={{
                lEmail,
                lPassword,
                handleLogin,
                handleLoginInputChange,
            }}
        />
    );
}
export default LoginPageContainer;
