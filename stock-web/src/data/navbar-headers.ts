const navbarHeaders: any = {
    '/customers': 'Clientes',
    '/products': 'Productos',
    '/sales': 'Ventas',
};

export const getNavbarHeader = (pathname: string) => {
    const header = navbarHeaders[pathname];

    return header;
};
