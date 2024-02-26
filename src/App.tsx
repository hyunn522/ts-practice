import { Reset } from 'styled-reset';
// eslint-disable-next-line import/no-extraneous-dependencies
import { RecoilRoot } from 'recoil';
import Router from './pages';

const App = () => {
  return (
    <RecoilRoot>
      <Reset />
      <Router />
    </RecoilRoot>
  );
};

export default App;
