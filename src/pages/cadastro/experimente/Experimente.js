import axios from "axios";
import styles from "./Experimente.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Experimente = () => {
    const navigation = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData);

        try {
            setLoading(true);
            const webhookUrl = 'https://gesistemas.app.n8n.cloud/webhook-test/webhook-gesistemas';
            const requestOptions = {
                headers: { 'Content-Type': 'application/json' }
            };
            const response = await axios.post(webhookUrl, formValues, requestOptions)
            console.log('Sucesso:', response?.data);
            alert('Seu pedido de demonstração foi enviado com sucesso!');
        } catch (error) {
            console.error('Erro:', error.response?.data);
            alert('Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <p>Enviando Dados...</p>
            </div>
        )
    }

    return (
        <form className={styles.experimente} onSubmit={handleSubmit}>
            <h2>Experimente Gratis</h2>

            <label>
                Nome Completo:
                <input
                    required
                    type="text"
                    name="nomeCompleto"
                />
            </label>

            <label>
                Razão Social:
                <input
                    required
                    type="text"
                    name="razaoSocial"
                />
            </label>

            <label>
                CNPJ:
                <input
                    required
                    type="text"
                    name="cnpj"
                />
            </label>

            <label>
                E-mail:
                <input
                    required
                    type="email"
                    name="email"
                />
            </label>

            <label>
                WhatsApp:
                <input
                    required
                    type="text"
                    name="whatsapp"
                />
            </label>

            <button type="submit">Enviar Solicitação</button>
            <button type="button" onClick={() => navigation('/experimente/listar')}>Visualizar Solicitações</button>
        </form>
    );
};

export default Experimente;
