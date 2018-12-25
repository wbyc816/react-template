import React from 'react';
import { Route, Switch ,Redirect} from 'react-router-dom';
function RouteWithSubRoutes(route) {
  let { routes = [], path } = route;
  routes = routes.map(route => ({
    ...route,
    path: path + route.path,
  }));
  
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component
          {...props}
          routes={routes}
        />
      )}
    />
  );
}

export class RouterView extends React.Component {
  render() {
    let routes = this.props.routes.slice(0);
    const redirect=routes.find(route=>route.redirect);
    return (
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes
            exact={route.exact}
            key={i}
            {...route}
          />
        ))}
        {redirect&&<Redirect to={redirect.path} />}
      </Switch>
    );
  }
}
