import Main from '../../pages/main-page/main';

type AppProps = {
  offersCount: number;
}

function App (props: AppProps): JSX.Element {
  return (
    <Main {...props}/>
  );
}

export default App;
