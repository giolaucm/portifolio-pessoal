import React, { useState } from "react";
import "../forms/styles.css";
import Notificacao from "../alert/index";
import imgCopy from "../img/not_copy.svg";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "", // Alterado de 'textarea' para 'message' para consistência com a API
  });

  const [notificacaoVisivel, setNotificacaoVisivel] = useState(false);
  const [mensagemNotificacao, setMensagemNotificacao] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validação básica no frontend
    if (!formData.name || !formData.email || !formData.message) {
      setMensagemNotificacao("Por favor, preencha todos os campos");
      setNotificacaoVisivel(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/index", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
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
          <label htmlFor="message">Como posso te ajudar?</label>
          <textarea
            name="message"
            id="message"
            rows={10}
            cols={50}
            required
            value={formData.message}
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