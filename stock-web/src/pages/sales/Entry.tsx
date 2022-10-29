import {
  Alert,
  AlertColor,
  Box,
  Button,
  colors,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { FC, memo, ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearSale,
  getProductByCodeRequest,
  postSalesRequest,
  updateSaleItem,
} from '../../store/sales/actions';
import {
  getErrorSelector,
  getProductByCodeSelector,
  getSaleItemsSelector,
  getSaleSelector,
} from '../../store/sales/selectors';
import { errors } from './constants';
import TableSale from './TableSale';

function subtotal(items: any[]) {
  return items
    .map(({ price, items_quantity }) => {
      return items_quantity * price;
    })
    .reduce((sum, i) => sum + i, 0);
}

interface StateSnack {
  message?: string;
  severity?: AlertColor;
}

const EntrySales: FC<any> = (): ReactElement => {
  const dispatch = useDispatch();

  const saleItemsObj: any = useSelector(getSaleItemsSelector);
  const saleItems = Object.values(saleItemsObj);

  const error: any = useSelector(getErrorSelector);
  const productByCode: any = useSelector(getProductByCodeSelector);
  const sale: any = useSelector(getSaleSelector);

  const [code, setCode] = useState('');

  const [money, setMoney] = useState(0);
  const [change, setChange] = useState(0);

  const [openSnack, setOpenSnack] = useState<boolean>(false);
  const [dataSnack, setDataSnack] = useState<StateSnack>({});

  useEffect(() => {
    if (!error) {
      setCode('');
    }
  }, [productByCode]);

  useEffect(() => {
    console.log(sale);
    if (sale) {
      dispatch(clearSale());
      setMoney(0);
      setChange(0);
      setOpenSnack(true);
      setDataSnack({
        message: 'Venta guardada con éxito',
        severity: 'success',
      });
    }
  }, [sale]);

  const onChangeCode = (event: any) => {
    setCode(event.target.value);
  };

  const onKeyDownCode = (event: any) => {
    if (event.keyCode === 13) {
      dispatch(getProductByCodeRequest({ code }));
    }
  };

  const onChangeQuantity = (payload: any) => {
    dispatch(updateSaleItem(payload));
  };

  const onClickSearch = () => {
    if (code !== '') dispatch(getProductByCodeRequest({ code }));
  };

  const onClickFinish = () => {
    if (!saleItems.length) {
      setOpenSnack(true);
      setDataSnack({
        message: 'No hay items cargados',
        severity: 'error',
      });
      return false;
    }

    const items: any = saleItems.map((row: any) => {
      return {
        product: row.id,
        product_quantity: row.items_quantity,
      };
    });

    dispatch(postSalesRequest({ sale: { items, money, change } }));
  };

  const onClickCancel = () => {
    dispatch(clearSale());
  };

  const onChangeMoney = (evt: any) => {
    const value = evt.target.value;
    setMoney(Number(value));
    setChange(value - subtotal(saleItems));
  };

  const handleCloseSnack = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };

  return (
    <Grid container spacing={2}>
      <Grid item container xs={12}>
        <Grid
          item
          container
          xs={6}
          // spacing={2}
          alignItems="center"
          justifyContent="start"
        >
          <Grid
            item
            container
            spacing={2}
            alignItems="center"
            justifyContent="start"
            xs={12}
          >
            <Grid item xs={6}>
              <TextField
                error={error ? true : false}
                fullWidth
                id="search-code"
                label="Código"
                variant="outlined"
                value={code}
                onChange={(e) => onChangeCode(e)}
                onKeyDown={(e) => onKeyDownCode(e)}
              />
            </Grid>
            <Grid item xs={6}>
              <Button onClick={() => onClickSearch()} variant="contained">
                Buscar
              </Button>
            </Grid>
            <Box ml={4} style={{ height: '1rem' }}>
              <Typography variant="caption" color={colors.red[700]}>
                {error ? errors[error.code].message : ''}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid item container xs={6} justifyContent="end">
          <Grid item sx={{ paddingTop: '8px' }}>
            <Button
              onClick={() => onClickCancel()}
              color="error"
              variant="contained"
              sx={{ marginLeft: '16px' }}
            >
              Cancelar
            </Button>
            <Button
              onClick={() => onClickFinish()}
              color="success"
              variant="contained"
              sx={{ marginLeft: '16px' }}
            >
              Terminar
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container xs={12}>
        <TableSale
          rows={saleItems}
          onChangeQuantity={onChangeQuantity}
          onChangeMoney={onChangeMoney}
          money={money}
          change={change}
          total={subtotal(saleItems)}
        />
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleCloseSnack}
      >
        <Alert
          onClose={handleCloseSnack}
          severity={dataSnack.severity}
          sx={{ width: '100%' }}
        >
          {dataSnack.message}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default memo(EntrySales);
