import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FC, memo, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TablePagination from '../../components/TablePagination';

import {
  fetchProductsRequest,
  postProductsRequest,
  putProductsRequest,
  setSelectedProduct,
} from '../../store/products/actions';
import {
  getErrorSelector,
  getPendingSelector,
  getProductsSelector,
} from '../../store/products/selectors';
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
    id: 'code',
    label: 'Codigo',
  },
  {
    id: 'price',
    label: 'Precio',
  },
  {
    id: 'quantity',
    label: 'Cantidad',
  },
];

const Home: FC<any> = (): ReactElement => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const pending = useSelector(getPendingSelector);
  const productsData = useSelector(getProductsSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchProductsRequest({ query: { page: 1, limit: 8 } }));
  }, []);

  const onChangePage = (page: number) => {
    dispatch(fetchProductsRequest({ page: page + 1, limit: 8 }));
  };

  const onSelectProduct = (product: any) => {
    dispatch(setSelectedProduct({ selectedProduct: product }));
  };

  const onUpdateItem = ({ id, ...product }: any) => {
    dispatch(putProductsRequest({ id, product }));
  };

  const onSaveItem = (product: any) => {
    delete product.id;
    dispatch(postProductsRequest(product));
  };

  return (
    <div className={classes.root}>
      <TablePagination
        data={{ rows: productsData.products, total: productsData.total }}
        headCells={headCells}
        dataModal={{
          Content: ContentModal,
          titleEdit: 'Información del Producto',
          titleAdd: 'Añadir Producto',
          onUpdateItem,
          onSaveItem,
        }}
        onSelectItem={onSelectProduct}
        onChangePage={onChangePage}
      />
    </div>
  );
};

export default memo(Home);
