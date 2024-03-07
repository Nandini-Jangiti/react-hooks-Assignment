import React, { useContext, useState } from 'react';
import { UserContext } from './App';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    const { setUsername } = useContext(UserContext);
    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const history = useHistory();

    const handleLogin = () => {
        const loggedInUsername = usernameInput.trim();
        setUsername(loggedInUsername);
        history.push('/dashboard');
    };

    const handleUsernameChange = (event) => {
        setUsernameInput(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPasswordInput(event.target.value);
    };

    return (
        <div>
            <h2>Login Page</h2>
            <div>
                <label>Username:</label>
                <input type="text" value={usernameInput} onChange={handleUsernameChange} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={passwordInput} onChange={handlePasswordChange} />
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
