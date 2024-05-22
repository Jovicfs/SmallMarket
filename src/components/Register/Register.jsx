import React, { useState } from 'react';
import api from '../../api';
import './register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('As senhas não coincidem.');
            return;
        }
        try {
            const response = await api.post('/auth/register', { username, email, password });
            setMessage('Usuário registrado com sucesso!');
            setError('');
        } catch (err) {
            setError('Erro ao registrar o usuário.');
            setMessage('');
        }
    };

    return (
        <div id="register-container">
            <div id="form-container">
                <h2>Cadastre-se</h2>
                <form onSubmit={handleRegister}>
                    <div id="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="input-field"
                        />
                    </div>
                    <div id="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-field"
                        />
                    </div>
                    <div id="form-group">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-field"
                        />
                    </div>
                    <div id="form-group">
                        <label htmlFor="confirmPassword">Confirme a Senha</label>
                        <input
                            type="password"
                            placeholder="Confirme a Senha"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="input-field"
                        />
                    </div>
                    <button type="submit" className="register-button">Cadastrar</button>
                </form>
                {error && <p className="error-message">{error}</p>}
                {message && <p className="success-message">{message}</p>}
            </div>
        </div>
    );
};

export default Register;
