import { AddCircle, RemoveCircle } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

interface Row {
  id: number;
  name: string;
  quantity: number;
  price: number;
  items_quantity: number;
}

const getTotalRow = (quantity: number, price: number) => {
  return quantity * price;
};

export default function TableSale({
  rows = [],
  onChangeQuantity,
  onChangeMoney,
  money,
  change,
  total,
}: any) {
  const rowsPerPage = 9;

  const onAddQuantity = (id: string, items_quantity: number) => {
    onChangeQuantity({ id, items_quantity: items_quantity + 1 });
  };

  const onSubtractQuantity = (id: string, items_quantity: number) => {
    if (items_quantity >= 0)
      onChangeQuantity({ id, items_quantity: items_quantity - 1 });
  };

  const emptyRows = Math.max(0, rowsPerPage - rows.length);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ height: '50vh' }}>
        <Table
          stickyHeader
          size="small"
          sx={{ minWidth: 700 }}
          aria-label="spanning table"
        >
          <TableHead>
            <TableRow>
              <TableCell width="40%">Producto</TableCell>
              <TableCell width="20%" align="right">
                Cantidad
              </TableCell>
              <TableCell width="20%" align="right">
                Precio U.
              </TableCell>
              <TableCell width="20%" align="right">
                Total
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length > 0 &&
              rows.map((row: any, i: number) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="right">
                    {row.items_quantity}
                    <IconButton
                      onClick={() => onAddQuantity(row.id, row.items_quantity)}
                      color="primary"
                      sx={{ p: 0, ml: 1 }}
                    >
                      <AddCircle />
                    </IconButton>
                    <IconButton
                      onClick={() =>
                        onSubtractQuantity(row.id, row.items_quantity)
                      }
                      color="error"
                      sx={{ p: 0, ml: 1 }}
                    >
                      <RemoveCircle />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">
                    {ccyFormat(getTotalRow(row.items_quantity, row.price))}
                  </TableCell>
                </TableRow>
              ))}
            {emptyRows > 0 && rows.length > 0 && (
              <TableRow style={{ height: 37 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
            {rows.length === 0 && (
              <TableRow style={{ height: 37 * emptyRows }}>
                <TableCell align="center" colSpan={6}>
                  Agregue items a la venta
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Table size="small">
        <TableRow>
          <TableCell colSpan={4} width="100%" />
        </TableRow>
        <TableRow>
          <TableCell rowSpan={4} width="75%" />
          <TableCell width="5%" align="right" colSpan={2}>
            Subtotal
          </TableCell>
          <TableCell width="20%" align="right">
            {ccyFormat(total)}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={2} align="right">
            Total
          </TableCell>
          <TableCell align="right">{ccyFormat(total)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={2} align="right">
            Dinero
          </TableCell>
          <TableCell align="right">
            <TextField
              style={{ WebkitAppearance: 'none' }}
              type="number"
              size="small"
              inputProps={{ style: { textAlign: 'right', width: 100 } }}
              variant="standard"
              value={money}
              onChange={(event) => onChangeMoney(event)}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={2} align="right">
            Vuelto
          </TableCell>
          <TableCell align="right">{change}</TableCell>
        </TableRow>
      </Table>
    </Paper>
  );
}
