import {
  Box, 
  AppBar, 
  Button,
  Toolbar, 
  Typography, 
} from "@mui/material";

const NavBar = ({ history }) => {
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
            <Button color="inherit">Salir</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default NavBar;
