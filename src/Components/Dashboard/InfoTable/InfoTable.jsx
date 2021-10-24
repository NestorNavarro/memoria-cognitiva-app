import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const InfoTable = ({
    delegations : {
        rows,
    }
}) => {
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow >
              <TableCell  style={{ fontWeight: "bold" }}>Ejercicios</TableCell>
              <TableCell  style={{ fontWeight: "bold" }} align="right">Promedio</TableCell>
              <TableCell  style={{ fontWeight: "bold" }} align="right">Mejor Puntuación</TableCell>
              <TableCell  style={{ fontWeight: "bold" }} align="right">Estadisticas</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row?.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row?.name}
                </TableCell>
                <TableCell align="right">{row?.average}</TableCell>
                <TableCell align="right">{row?.bestScore}</TableCell>
                <TableCell align="right">
                    <Button 
                        size="small"
                    >
                        {/* TODO : Redirect to a graphic */}
                        Ver 
                    </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default InfoTable;