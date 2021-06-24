import { Route, Redirect } from 'react-router-dom';

function PublicRoute({ component: Component, path, props, render, ...rest }) {
    return (
        <Route exact path={path} {...rest} render={props => {
            return JSON.parse(localStorage.getItem("logged")) ? <Redirect to={
                {
                    pathname: "/welcome",
                    state: {
                        from: props.location
                    }
                }
            } />
                :
                <Component {...props} />;
        }}>
        </Route>
    )
}

export default PublicRoute
