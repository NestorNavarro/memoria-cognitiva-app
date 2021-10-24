import { useState } from "react";
import RegisterPage from "./RegisterPage";

const RegisterPageContainer = () => {
    const [gender, setGender] = useState("");

    const handleSelectGender = ({target}) => {
        setGender(target.value);
    }
    return (
        <RegisterPage
            delegation={{
                gender,
                handleSelectGender,
            }}
        />
    );
}
export default RegisterPageContainer;
