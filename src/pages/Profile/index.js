import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './style.css';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';

function Profile() {
    const [incidents, setIncidents] = useState([]);
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    const history = useHistory();

    useEffect(() => {
        // if (ongName === null && ongId === null) {
        //     history.push('/');
        // } else if (ongId !== null && ongName !== null) {
        //     // api.get('profile', {
        //     //     headers: {
        //     //         authorization: ongId,
        //     //     }
        //     // }).then(res => {
        //     //     setIncidents(res.data);
        //     // })
        // }
    }, [ongId]);

    async function handleDeleteIncident(id) {
        try {
            // await api.delete(`viagens/${id}`, {
            //     headers: {
            //         Authorization: ongId,
            //     }
            // });
            setIncidents(incidents.filter(inc => inc.id !== id));
        } catch (err) {
            alert("Erro ao deletar, tente novamente");
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vinda, {ongName}</span>
                <Link className="button-navbar" to="/incidents/new">Motoristas</Link>

                <Link className="button-navbar" to="/incidents/new">Vans</Link>
                <Link className="button-navbar" to="/incidents/new">Perfil</Link>

                <button onClick={handleLogout} type="button">
                    <FiPower size={24} color="#55c3ad" />
                </button>
            </header>
            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(inc => (
                    <li key={inc.id}>
                        <strong>CASO:</strong>
                        <p>{inc.title}</p>

                        <strong>DESCRIÇÂO:</strong>
                        <p>{inc.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inc.value)}</p>

                        <button onClick={() => handleDeleteIncident(inc.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>

                ))}

<li>
                        <strong>CASO:</strong>
                        <p>Teste</p>

                        <strong>DESCRIÇÂO:</strong>
                        <p>Teste</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(15)}</p>

                        <button onClick={() => handleDeleteIncident()} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
            </ul>
        </div>
    );
}

export default Profile;