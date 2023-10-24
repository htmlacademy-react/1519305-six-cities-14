import Main from '../../pages/main-page/main.tsx';
import Login from '../../pages/login/login.tsx';
import Offer from '../../pages/offrer/offer.tsx';
import NotFound from '../../pages/not-found/not-found.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProps } from './app.type.ts';
import { AppRoute } from '../../constants/const';
import { AuthorizationStatus } from '../../constants/const.ts';
import PrivateRoute from '../private-route/private-route.tsx';


function App (props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main {...props}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <Main {...props}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
