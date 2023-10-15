import Main from '../../pages/main-page/main';

type AppMainProps = {
  offersCount: number;
}

function App ({offersCount}: AppMainProps): JSX.Element {
  return (
    <Main offersCount={offersCount}/>
  );
}

export default App;
