const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware para parsear dados JSON
app.use(bodyParser.json());

// Rota para receber o formulário
app.post('/send-email', (req, res) => {
  const { name, email, textarea } = req.body;

  // Criação do transporter do Nodemailer para enviar e-mails
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Utilize o serviço de sua escolha
    auth: {
      user: 'seu-email@gmail.com',
      pass: 'sua-senha-ou-app-password',
    },
  });

  // Opções do e-mail
  const mailOptions = {
    from: 'seu-email@gmail.com',
    to: 'giolaucm.dev@gmail.com',
    subject: `Mensagem de ${name}`,
    text: `Nome: ${name}\nE-mail: ${email}\nMensagem: ${textarea}`,
  };

  // Envia o e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Erro ao enviar o e-mail');
    }
    res.status(200).send('Mensagem enviada com sucesso');
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
