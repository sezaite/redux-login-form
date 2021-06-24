import React, { useState } from 'react';
import { isValidEmail } from '../../helpers/isValidEmail';
import { isValidPassword } from '../../helpers/isValidPassword';
import isValidUser from '../../helpers/isValidUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { loginin } from '../../state/actions';
import { useDispatch } from 'react-redux';

function Login(props) {
    const [details, setDetails] = useState({ username: "", password: "" });
    const [regxErrors, setRegxErrors] = useState({ emailError: false, passwordError: false });
    const [authError, setAuthError] = useState(false);
    const [emptyError, setEmptyError] = useState(false);
    const dispatch = useDispatch();

    const submitHandler = async (e) => {
        e.preventDefault();
        setEmptyError(false);
        setRegxErrors({ passwordError: false, emailError: false });
        setAuthError(false);

        if (details.username === "" || details.password === "") {
            setEmptyError(true);
            return;
        }

        if (!isValidEmail(details.username)) {
            setRegxErrors({ ...regxErrors, emailError: true });
            return;
        }

        if (!isValidPassword(details.password)) {
            setRegxErrors({ ...regxErrors, passwordError: true });
            return;
        }

        const isUserValid = await isValidUser(details);
        if (!isUserValid) {
            setAuthError(true);
            return;
        }

        const logged = { user: details, isLogged: true };
        localStorage.setItem("logged", JSON.stringify(logged));
        dispatch(loginin(details));
        window.location.href = "./welcome"
        return;
    };

    return (
        <div className="form-window">
            <h2 className="form-header">Login form</h2>
            <form onSubmit={submitHandler} autoComplete="nope">
                {emptyError && <h4 className="form-error">Fields are required</h4>}
                {regxErrors.emailError && <h4 className="form-error">Email is invalid</h4>}
                {regxErrors.passwordError && <h4 className="form-error">Password is invalid</h4>}
                {authError && <h4 className="form-error">Your details does not match</h4>}
                <div className="form-group">
                    <input type="text" placeholder="Username" autoComplete="nope" id="name" name="name" onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
                    <FontAwesomeIcon icon={faUser} className="icon" />
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" id="password" name="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    <FontAwesomeIcon icon={faLock} className="icon" />
                </div>
                <input type="submit" value="Sign in" className="enter btn" />
            </form>
        </div>
    )
}

export default Login
