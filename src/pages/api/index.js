import nodemailer from 'nodemailer';

// Configuração do transporter
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default async function handler(req, res) {
  // Configuração de CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Lidar com requisições OPTIONS para CORS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Apenas aceitar requisições POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  try {
    const { name, email, message } = req.body;

    // Validação dos dados
    if (!name || !email || !message) {
      return res.status(400).json({ 
        message: 'Todos os campos são obrigatórios' 
      });
    }

    // Configuração do e-mail
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `Nova mensagem de ${name}`,
      text: `Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`,
      html: `
        <h2>Nova mensagem do portfolio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Envio do e-mail
    await transporter.sendMail(mailOptions);
    
    // Resposta de sucesso
    return res.status(200).json({ 
      success: true,
      message: 'E-mail enviado com sucesso!' 
    });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    
    return res.status(500).json({ 
      success: false,
      message: 'Erro ao processar sua mensagem',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}