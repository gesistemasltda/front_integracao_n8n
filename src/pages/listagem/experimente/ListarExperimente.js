import { useNavigate } from "react-router-dom";
import styles from "./ListarExperimente.module.scss";

const ListarExperimente = () => {
    const navigation = useNavigate();

    const usuariosFake = [
        {
            nomeCompleto: "Lenilson Lima Pantoja",
            razaoSocial: "Lenilson Lima",
            cnpj: "04688508212",
            email: "lenilsonlm.pantoja@gmail.com",
            whatsapp: "67982143134",
        },
        {
            nomeCompleto: "Maria Silva",
            razaoSocial: "Maria Comércio",
            cnpj: "12345678000199",
            email: "maria.silva@gmail.com",
            whatsapp: "67991234567",
        },
        {
            nomeCompleto: "João Santos",
            razaoSocial: "João Serviços",
            cnpj: "98765432000188",
            email: "joao.santos@gmail.com",
            whatsapp: "67999887766",
        },
    ];

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
                    {usuariosFake.map((usuario, index) => (
                        <tr key={index}>
                            <td>{usuario.nomeCompleto}</td>
                            <td>{usuario.razaoSocial}</td>
                            <td>{usuario.cnpj}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.whatsapp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button type="button" onClick={() => navigation(-1)}>Voltar ao Formulário</button>

        </div>
    );
};

export default ListarExperimente;
