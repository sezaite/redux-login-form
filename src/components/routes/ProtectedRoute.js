import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, path, render, ...rest }) => {
    const isLogged = useSelector(state => state.loggedReducer.isLogged);
    return (
        <Route exact path={path} {...rest} render={props => {
            return isLogged ?
                <Component {...props} />
                :
                <Redirect to={
                    {
                        pathname: "/",
                        state: {
                            from: props.location
                        }
                    }
                } />;
        }}>
        </Route>
    )
}

export default ProtectedRoute
