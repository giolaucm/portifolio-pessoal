const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

// Configuração do transporter (use variáveis de ambiente!)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Configure no painel do Vercel
    pass: process.env.EMAIL_PASSWORD // SENHA NUNCA NO CÓDIGO!
  }
});

module.exports = (req, res) => {
  // Habilitar CORS
  cors(req, res, async () => {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Método não permitido" });
    }

    try {
      const { name, email, message } = req.body;

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        subject: "Nova Mensagem do Portfólio",
        text: `Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "E-mail enviado com sucesso!" });
    } catch (error) {
      console.error("Erro:", error);
      res.status(500).json({ message: "Erro ao enviar e-mail", error });
    }
  });
};