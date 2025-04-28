const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");  // Importação do CORS

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());  // Adiciona o CORS para permitir comunicação com o frontend
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail", // Você pode usar outros provedores de e-mail, se preferir
  auth: {
    user: "giolaucm.dev@gmail.com", // Insira seu e-mail
    pass: "s3.5786$$", // Use uma senha de aplicativo, não sua senha normal
  },
});

// Rota para enviar o e-mail
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: "giolaucm.dev@gmail.com", // Seu e-mail
    to: "giolaucm.dev@gmail.com", // Seu e-mail para receber as mensagens do formulário
    subject: "Nova Mensagem do Formulário",
    text: `
      Nome: ${name}
      E-mail: ${email}
      Mensagem: ${message}
    `,
  };

  // Enviar o e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: "Erro ao enviar e-mail", error });
    } else {
      return res.status(200).json({ message: "E-mail enviado com sucesso!" });
    }
  });
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
