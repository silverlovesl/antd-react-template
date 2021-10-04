import { TransitionGroup, CSSTransition } from 'react-transition-group';
import React, { Suspense } from 'react';
import _ from 'lodash';
import privateRoutes from './private-routes';
import publicRoutes from './public-routes';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import PrivateLayout from '../components/PrivateLayout';
import { localStorageService } from '../services';
import { RouteComponentProps } from 'react-router-dom';
import PublicLayout from '../components/PublicLayout';

type PageProps = {} & RouteComponentProps;

const RouterTemplate: React.FC<PageProps> = (props) => {
  return (
    <TransitionGroup>
      <CSSTransition timeout={800} classNames="alert">
        <Switch>
          <Suspense fallback={<h1>Loading...</h1>}>
            {_.map(publicRoutes, (route, key) => {
              const { component, path } = route;
              return <Route exact key={key} path={path} render={(route) => <PublicLayout component={component} {...route} />} />;
            })}

            {_.map(privateRoutes, (route, key) => {
              const { component, path } = route;
              return (
                <Route
                  exact
                  key={key}
                  path={path}
                  render={(route) => {
                    const hasAuthorized = localStorageService.hasAuthorized;
                    console.log(hasAuthorized);
                    if (hasAuthorized || true) {
                      return <PrivateLayout component={component} {...route} />;
                    } else {
                      return <Redirect exact to="/login" />;
                    }
                  }}
                />
              );
            })}
          </Suspense>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default withRouter(RouterTemplate);
