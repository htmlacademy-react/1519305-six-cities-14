import { AuthorizationStatus, AppRoute } from '../../constants/const.ts';
import { Navigate } from 'react-router-dom';
import { PrivateRouteProps } from './private-route.type.ts';

function PrivateRoute (props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Favorites} />
  );
}

export default PrivateRoute;
