import { useState } from 'react';
import {
  FirstPage as FirstPageIcon,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LastPage as LastPageIcon,
} from '@mui/icons-material';
import { Theme, useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import {
  Box,
  TableHead,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination as TablePaginationMaterial,
  TableRow,
  Button,
} from '@mui/material';
import Modal from './Modal';

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

const THead = ({ headCells, onAddItem }: any) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="right" colSpan={6}>
          <Button
            onClick={() => onAddItem(true)}
            color="success"
            variant="contained"
          >
            Añadir
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        {headCells.map((headCell: any, i: number) => (
          <TableCell
            key={`thead-${i}`}
            // align={headCell.numeric ? "right" : "left"}
            // padding={headCell.disablePadding ? "none" : "normal"}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  tableRow: {
    cursor: 'pointer',
  },
}));

export default function TablePagination({
  data: { rows, total },
  headCells,
  dataModal,
  onSelectItem,
  onChangePage,
}: any) {
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [openModal, setOpenModal] = useState(false);
  const [typeModal, setTypeModal] = useState('');

  const onAddItem = () => {
    setOpenModal(true);
    setTypeModal('add');
  };

  const onClickRow = (user: any) => {
    setOpenModal(true);
    setTypeModal('edit');
    onSelectItem(user);
  };

  const onCloseModal = () => {
    setOpenModal(false);
    onSelectItem(null);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = Math.max(0, (page + 1) * rowsPerPage - total);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
    onChangePage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table
        stickyHeader
        sx={{ minWidth: 500 }}
        aria-label="custom pagination table"
      >
        <THead headCells={headCells} onAddItem={onAddItem} />
        <TableBody>
          {rowsPerPage > 0 &&
            rows.map((row: any) => {
              return (
                <TableRow
                  className={classes.tableRow}
                  key={row.id}
                  onClick={() => onClickRow(row)}
                >
                  {headCells.map((headCell: any, i: number) => {
                    return (
                      <TableCell component="th" scope="row" key={`tcell-${i}`}>
                        {row[headCell.id] || '-'}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          {emptyRows > 0 && rows.length > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
          {rows.length === 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell align="center" colSpan={6}>
                No hay resultados
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePaginationMaterial
              rowsPerPageOptions={[]}
              colSpan={4}
              count={total}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
      <Modal
        open={openModal}
        onClose={() => onCloseModal()}
        dataModal={{ ...dataModal, type: typeModal }}
        onSelectItem={onSelectItem}
      />
    </TableContainer>
  );
}
