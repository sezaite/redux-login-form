import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import Logout from '../logout/Logout';
import Login from '../login/Login';
import NotFound from '../NotFound';

function Routes() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <PublicRoute component={Login} exact path="/" />
                <ProtectedRoute component={Logout} exact path="/welcome" />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    )
}

export default Routes
