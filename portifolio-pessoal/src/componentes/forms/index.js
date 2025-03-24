import React from "react";
import "../forms/styles.css"; // Importando o arquivo CSS

const Form = () => {
  return (
    <div className="form-container">
      <form className="form">
        <div className="form-group">
          <label htmlFor="email">Nome</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input type="text" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="textarea">Como posso te ajudar?</label>
          <textarea
            name="textarea"
            id="textarea"
            rows={10}
            cols={50}
            required
            defaultValue={""}
          />
        </div>
        <button className="form-submit-btn" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
