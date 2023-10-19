import { Link } from 'react-router-dom';

function NotFound (): JSX.Element {
  return (
    <>
      <h1>404</h1>
      <p>Page NotFound</p>
      <Link to={'/'}>На главную</Link>
    </>
  );
}

export default NotFound;
