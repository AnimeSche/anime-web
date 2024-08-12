import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Логіка для входу
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleRegister = () => {
    // Логіка для реєстрації
    console.log('Redirect to register page');
  };

  const handleForgotPassword = () => {
    // Логіка для відновлення паролю
    console.log('Redirect to forgot password page');
  };

  return (
    <div className="page-container">
        <div className="container">
        <h2>Логін</h2>
        <div className="input-group">
            <label htmlFor="username">Ім'я користувача</label>
            <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            />
        </div>
        <div className="input-group">
            <label htmlFor="password">Пароль</label>
            <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            />
        </div>
        <button onClick={handleLogin} className="button">
            Вхід
        </button>
        <div className="actions">
            <button onClick={handleRegister} className="link-button">
            Реєстрація
            </button>
            <button onClick={handleForgotPassword} className="link-button">
            Відновлення паролю
            </button>
        </div>
        </div>
    </div>
  );
}

export default Login;
