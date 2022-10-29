import { DeleteOutlineOutlined, EditOutlined } from '@mui/icons-material';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Theme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { BaseSyntheticEvent, SyntheticEvent, useEffect, useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';

const useStyles = makeStyles((theme: Theme) => ({}));

export default function Modal({
  open,
  onClose,
  dataModal: { Content, titleEdit, titleAdd, onUpdateItem, onSaveItem, type },
}: any) {
  const { register, handleSubmit, reset } = useForm({ mode: 'all' });

  const handleSubmitData = (data: FieldValues, event: any) => {
    if (type === 'edit') {
      onUpdateItem(data);
    } else {
      onSaveItem(data);
    }

    onCloseModal();
  };

  const onCloseModal = () => {
    onClose();
  };

  const onKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <Box>
      <Dialog
        open={open}
        onClose={onCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form
          onSubmit={handleSubmit((data, event) =>
            handleSubmitData(data, event),
          )}
          onKeyDown={(e) => onKeyDown(e)}
        >
          <DialogTitle
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            {type === 'edit' ? titleEdit : titleAdd}
            {type === 'edit' && (
              <Box>
                <IconButton
                  color="error"
                  style={{ paddingRight: '0px' }}
                  onClick={onCloseModal}
                >
                  <DeleteOutlineOutlined />
                </IconButton>
              </Box>
            )}
          </DialogTitle>
          <DialogContent>
            <Content register={register} reset={reset} type={type} />
          </DialogContent>
          <DialogActions
            style={{
              paddingLeft: '24px',
              paddingBottom: '16px',
              paddingRight: '24px',
            }}
          >
            <Button type="submit">Guardar</Button>
            <Button style={{ paddingRight: '0px' }} onClick={onCloseModal}>
              Cancelar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
}
