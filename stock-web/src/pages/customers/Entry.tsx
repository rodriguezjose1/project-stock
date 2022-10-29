import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FC, memo, ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TablePagination from '../../components/TablePagination';

import {
  fetchUsersRequest,
  postUsersRequest,
  putUsersRequest,
  setSelectedUser,
} from '../../store/users/actions';
import {
  getErrorSelector,
  getPendingSelector,
  getUsersSelector,
} from '../../store/users/selectors';
import ContentModal from './ContentModal';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
}));

const headCells = [
  {
    id: 'name',
    label: 'Nombre',
  },
  {
    id: 'lastname',
    label: 'Apellido',
  },
  {
    id: 'address',
    label: 'Dirección',
  },
  {
    id: 'phone',
    label: 'Teléfono',
  },
];

const Home: FC<any> = (): ReactElement => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const pending = useSelector(getPendingSelector);
  const usersData = useSelector(getUsersSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchUsersRequest({ page: 1, limit: 8 }));
  }, []);

  const onChangePage = (page: number) => {
    dispatch(fetchUsersRequest({ page: page + 1, limit: 8 }));
  };

  const onSelectUser = (user: any) => {
    dispatch(setSelectedUser({ selectedUser: user }));
  };

  const onUpdateItem = ({ id, ...user }: any) => {
    dispatch(putUsersRequest({ id, user }));
  };

  const onSaveItem = (user: any) => {
    delete user.id;
    dispatch(postUsersRequest(user));
  };

  return (
    <div className={classes.root}>
      <TablePagination
        data={{ rows: usersData.users, total: usersData.total }}
        headCells={headCells}
        dataModal={{
          Content: ContentModal,
          titleEdit: 'Información del Usuario',
          titleAdd: 'Añadir Usuario',
          onUpdateItem,
          onSaveItem,
        }}
        onSelectItem={onSelectUser}
        onChangePage={onChangePage}
      />
    </div>
  );
};

export default memo(Home);
