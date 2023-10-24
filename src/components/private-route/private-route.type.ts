import { AuthorizationStatus } from '../../constants/const.ts';

export type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};
