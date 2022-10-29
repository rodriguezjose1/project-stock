import Button from '@mui/material/Button';
import {
  Card as CardMaterial,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
} from '@mui/material';
import { DeleteOutlineOutlined, EditOutlined } from '@mui/icons-material';

export default function Card({ data: { Content, title }, item }: any) {
  return (
    <CardMaterial sx={{ minWidth: 275 }}>
      <CardHeader
        action={
          <div>
            <IconButton aria-label="settings">
              <EditOutlined />
            </IconButton>
            <IconButton aria-label="settings">
              <DeleteOutlineOutlined />
            </IconButton>
          </div>
        }
        title={title}
      />
      <CardContent>
        <Content item={item} />
      </CardContent>
    </CardMaterial>
  );
}
