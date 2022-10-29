import { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

export const NotFound: FC<any> = (): ReactElement => {
  return <Navigate to="/customers" />;
};
