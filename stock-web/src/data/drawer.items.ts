
import { SellOutlined } from '@mui/icons-material';
import ProductsIcon from '@mui/icons-material/Inventory2Outlined';
import CustomersIcon from '@mui/icons-material/PeopleOutlined';

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    icon: any
}

export const drawerItems: Array<Route> = [
    {
        key: 'customers-item-drawer',
        title: 'Clientes',
        path: '/customers',
        icon: CustomersIcon,
    },
    {
        key: 'products-item-drawer',
        title: 'Productos',
        path: '/products',
        icon: ProductsIcon,
    },
    {
        key: 'sales-item-drawer',
        title: 'Ventas',
        path: '/sales',
        icon: SellOutlined,
    },
];