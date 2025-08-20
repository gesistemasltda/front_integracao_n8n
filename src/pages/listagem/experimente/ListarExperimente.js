import { useNavigate } from "react-router-dom";
import styles from "./ListarExperimente.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const ListarExperimente = () => {
    const navigation = useNavigate();
    const [dados, setDados] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        handleDados();
    }, []);
    const handleDados = async () => {
        try {
            setLoading(true);
            const requestOptions = {
                headers: { 'Content-Type': 'application/json' }
            };
            const response = await axios.get('https://api-integracao-n8n.vercel.app/n8n', requestOptions);
            setDados(response.data.registros);
        } catch (error) {
            setDados([]);
            alert('Erro ao buscar dados, tente novamente.');
            console.log(error.response.data);
        } finally {
            setLoading(false);
        }
    }
    if (loading) {
        return (
            <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <p>Buscando Dados...</p>
            </div>
        )
    }
    return (
        <div className={styles.listar_experimente}>
            <h2>Listagem de Usuários</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Razão Social</th>
                        <th>CNPJ</th>
                        <th>E-mail</th>
                        <th>WhatsApp</th>
                    </tr>
                </thead>
                <tbody>
                    {dados?.map((item, index) => (
                        <tr key={index}>
                            <td>{item.nomecompleto}</td>
                            <td>{item.razaosocial}</td>
                            <td>{item.cnpj}</td>
                            <td>{item.email}</td>
                            <td>{item.whatsapp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button type="button" onClick={() => navigation(-1)}>Voltar ao Formulário</button>

        </div>
    );
};

export default ListarExperimente;
