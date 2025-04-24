import React, { useState } from "react";
import "../forms/styles.css";
import Notificacao from "../alert/index"; // ajuste conforme seu projeto
import imgCopy from "../img/not_copy.svg";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    textarea: "",
  });

  const [status, setStatus] = useState(null);
  const [notificacaoVisivel, setNotificacaoVisivel] = useState(false);
  const [mensagemNotificacao, setMensagemNotificacao] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.textarea);

    try {
      const response = await fetch("https://formsubmit.co/giolaucm.dev@gmail.com", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setFormData({ name: "", email: "", textarea: "" });
        setStatus("Mensagem enviada com sucesso!");
        setMensagemNotificacao("Mensagem enviada com sucesso!");
        setNotificacaoVisivel(true);
      } else {
        setStatus("Algo deu errado. Tente novamente.");
        setMensagemNotificacao("Erro ao enviar. Tente novamente.");
        setNotificacaoVisivel(true);
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setStatus("Erro na conexão. Tente mais tarde.");
      setMensagemNotificacao("Erro na conexão. Tente mais tarde.");
      setNotificacaoVisivel(true);
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="textarea">Como posso te ajudar?</label>
          <textarea
            name="textarea"
            id="textarea"
            rows={10}
            cols={50}
            required
            value={formData.textarea}
            onChange={handleChange}
          />
        </div>

        <button className="form-submit-btn" type="submit">
          Enviar
        </button>
        {status && <p className="form-status">{status}</p>}
      </form>

      <Notificacao
        visivel={notificacaoVisivel}
        onFechar={() => setNotificacaoVisivel(false)}
        mensagem={mensagemNotificacao}
        imagem={imgCopy}
      />
    </div>
  );
};

export default Form;
