import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './style.css';
import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png';
import api from '../../services/api';

function Logon() {
    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        try {
            history.push('/profile');
        } catch{
            alert('Falha no login, tente novamente.');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça logon</h1>

                    <input
                        placeholder="email"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <input
                        placeholder="senha"
                        value={id}
                        onChange={e => setId(e.target.value)}
                        className="sounou"
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register"><FiLogIn size={16} color="#55c3ad" />Não tenho cadastro</Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}

export default Logon;