
import Customers from "./pages/customers/Entry";
import Products from "./pages/products/Entry";
import Sales from "./pages/sales/Entry";

import HomeIcon from '@mui/icons-material/HomeOutlined';
import ProductsIcon from '@mui/icons-material/Inventory2Outlined';
import CustomersIcon from '@mui/icons-material/PeopleOutlined';
import { Navigate } from "react-router-dom";

// other
import {FC} from "react";
import { NotFound } from "./pages/NotFound";
import { SellOutlined } from "@mui/icons-material";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    icon: any
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'customers-route',
        title: 'Clientes',
        path: '/customers',
        enabled: true,
        icon: HomeIcon,
        component: Customers
    },
    {
        key: 'products-route',
        title: 'Productos',
        path: '/products',
        enabled: true,
        icon: ProductsIcon,
        component: Products
    },
    {
        key: 'sales-route',
        title: 'Ventas',
        path: '/sales',
        enabled: true,
        icon: SellOutlined,
        component: Sales
    },
    {
        key: 'not-found-route',
        title: 'Not Found',
        path: '*',
        enabled: true,
        icon: CustomersIcon,
        component: NotFound
    }
]