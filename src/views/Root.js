import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import routes from 'routes';
import PrivateRoute from 'routes/PrivateRoute';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import LoginPage from 'views/LoginPage';
import Notes from 'views/Notes';
import Twitters from 'views/Twitters';
import Articles from 'views/Articles';
import DetailsPage from 'views/DetailsPage';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.login} component={LoginPage} />
          <Redirect exact from={routes.home} to={routes.notes} />
          <PrivateRoute exact path={routes.notes} component={Notes} />
          <PrivateRoute path={routes.note} component={DetailsPage} />
          <PrivateRoute exact path={routes.twitters} component={Twitters} />
          <PrivateRoute path={routes.twitter} component={DetailsPage} />
          <PrivateRoute exact path={routes.articles} component={Articles} />
          <PrivateRoute path={routes.article} component={DetailsPage} />
        </Switch>
      </MainTemplate>
    </Provider>
  </BrowserRouter>
);

export default App;
