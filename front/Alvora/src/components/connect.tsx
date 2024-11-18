import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
    email: string;
    senha: string;
    confirSenha: string;
}

const FormComponent: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        senha: '',
        confirSenha: '',
    });

    // Tipando o evento de mudança
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Tipando o evento de submissão
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Evita o envio padrão do formulário
        try {
            const response = await fetch('http://localhost:8080/alvora/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                const result = await response.json();
                console.log('Sucesso:', result);
            } else {
                console.error('Erro ao enviar:', response.statusText);
            }
        } catch (error) {
            console.error('Erro de rede:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container space-y-6">
            <label htmlFor="email">Nome:</label>
            <input
                type="text"
                id="nome"
                name="nome"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <label htmlFor="email">E-mail:</label>
            <input
                type="text"
                id="email"
                name="email"
                value={formData.senha}
                onChange={handleChange}
                required
            />
            <label htmlFor="confirSenha">Confirmar Senha: </label>
            <input
                type="text"
                id="email"
                name="email"
                value={formData.confirSenha}
                onChange={handleChange}
                required
            />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default FormComponent;