import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getSelectedUserSelector } from '../../store/users/selectors';

export default function ContentModal({ register, reset, type }: any) {
  const item = useSelector(getSelectedUserSelector);

  const [name, setName] = useState(item?.name || '');
  const [lastname, setLastname] = useState(item?.lastname || '');
  const [address, setAddress] = useState(item?.address || '');
  const [phone, setPhone] = useState(item?.phone || '');

  const filedsObj: any = {
    name: setName,
    lastname: setLastname,
    address: setAddress,
    phone: setPhone,
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
          {...register('lastname')}
          fullWidth
          id="standard-basic"
          label="Apellido"
          variant="standard"
          value={lastname}
          onChange={(event) => onChange(event, 'lastname')}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          {...register('address')}
          fullWidth
          id="standard-basic"
          label="Dirección"
          variant="standard"
          value={address}
          onChange={(event) => onChange(event, 'address')}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          {...register('phone')}
          fullWidth
          id="standard-basic"
          label="Teléfono"
          variant="standard"
          value={phone}
          onChange={(event) => onChange(event, 'phone')}
        />
      </Grid>
    </Grid>
  );
}
