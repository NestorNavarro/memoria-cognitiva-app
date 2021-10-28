import {
  Box, 
  AppBar, 
  Button,
  Toolbar, 
  Typography, 
} from "@mui/material";
import { useDispatch } from "react-redux";

import { startLogout } from "../../../store/Actions/authActions";

const NavBar = ({ history }) => {
   const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch( startLogout() );
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button
                onClick={() => history.push("/dashboard")}
                color="inherit"
              >
                Perfil
              </Button>
              <Button
                onClick={() => history.push("/dashboard/activities")}
                color="inherit"
              >
                Ejercicios
              </Button>
            </Typography>
            <Button 
              color="inherit"
              onClick={handleLogout}
            >
              Salir
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default NavBar;
