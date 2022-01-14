import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Footer from './views/Footer';

import Header from './views/Header';
import ReposPage from './pages/ReposPage';

import GlobalStyles from './styles/GlobalStyles';


function App() {
  return (<>    <Header />
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ReposPage />
        </Route>
        {/* <Route path="/:reponame" element={ <Repo/>}/> */}
      </Switch>
      <GlobalStyles />
    </BrowserRouter>
    <Footer />
  </>);
}

export default App;
