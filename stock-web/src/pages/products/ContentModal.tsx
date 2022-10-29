import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getSelectedProductSelector } from '../../store/products/selectors';

export default function ContentModal({ register, reset, type }: any) {
  const item = useSelector(getSelectedProductSelector);

  const [name, setName] = useState(item?.name || '');
  const [code, setCode] = useState(item?.code || '');
  const [price, setPrice] = useState(item?.price || '');
  const [quantity, setQuantity] = useState(item?.quantity || '');

  const filedsObj: any = {
    name: setName,
    code: setCode,
    price: setPrice,
    quantity: setQuantity,
  };

  const onChange = (event: any, field: string) => {
    filedsObj[field](event.target.value);
  };

  useEffect(() => {
    return () => {
      reset();
    };
  }, []);

  return (
    <Grid container spacing={2}>
      <input type="hidden" {...register('id')} value={item?.id || ''} />
      <Grid item xs={6}>
        <TextField
          {...register('name')}
          fullWidth
          id="standard-basic"
          label="Nombre"
          variant="standard"
          value={name}
          onChange={(event) => onChange(event, 'name')}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          {...register('code', {
            onChange: (event: any) => onChange(event, 'code'),
            onBlur: (event: any) => onChange(event, 'code'),
          })}
          fullWidth
          id="standard-basic"
          label="Código"
          variant="standard"
          value={code}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          {...register('price')}
          fullWidth
          id="standard-basic"
          label="Precio"
          variant="standard"
          value={price}
          onChange={(event) => onChange(event, 'price')}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          {...register('quantity')}
          fullWidth
          id="standard-basic"
          label="Cantidad"
          variant="standard"
          value={quantity}
          onChange={(event) => onChange(event, 'quantity')}
        />
      </Grid>
    </Grid>
  );
}
