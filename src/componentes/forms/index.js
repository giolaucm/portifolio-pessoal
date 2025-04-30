import React, { useState } from "react";
import "../forms/styles.css";
import Notificacao from "../alert/index";
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = {
      name: formData.name,
      email: formData.email,
      message: formData.textarea,
    };

    try {
      const response = await fetch("/api/index.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });

      const data = await response.json();

      if (response.ok) {
        setFormData({ name: "", email: "", textarea: "" });
        setMensagemNotificacao(data.message || "Mensagem enviada com sucesso!");
      } else {
        setMensagemNotificacao(data.message || "Erro ao enviar mensagem");
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setMensagemNotificacao("Erro na conexão. Tente mais tarde.");
    } finally {
      setNotificacaoVisivel(true);
      setIsSubmitting(false);
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

        <button 
          className="form-submit-btn" 
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
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