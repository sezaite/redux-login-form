import { logout } from '../../state/actions';
import { useSelector, useDispatch } from 'react-redux';

function Logout(props) {
    const dispatch = useDispatch();
    const userName = useSelector(state => state.loggedReducer.user.username);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(logout());
        localStorage.clear();
    }

    return (
        <div className="form-window">
            <h2 className="form-header">You are logged in!</h2>
            <div className="welcome-board">
                <h4 className="welcome-message">Welcome <span style={{ color: 'hsl(296, 21%, 41%)' }}>{userName}!</span></h4>
                <button onClick={handleSubmit} className="btn log-out">Log out</button>
            </div>
        </div>
    )
}

export default Logout
