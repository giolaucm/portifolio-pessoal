import React from "react";
import "./style.css";
import '@fortawesome/fontawesome-free/css/all.css';

const ShareCard = ({ link, onClose }) => {
  const shareOnSocial = (platform) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${link}`,
      twitter: `https://twitter.com/intent/tweet?url=${link}`,
      linkedin: `https://www.linkedin.com/shareArticle?url=${link}`,
    };

    window.open(urls[platform], "_blank");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    alert("Link copiado!");
  };

  return (
    <div className="overlay">
      <div className="share-card">
        <div className="share-card-title">
            <div className="share-card-button">
                <button className="close-btn" onClick={onClose}>×</button>
            </div>
            <h2 className="subtitulo2 themePurple">Compartilhe</h2>
        </div>
        <div className="share-options">
          <button onClick={() => shareOnSocial("facebook")}>
            <i className="fab fa-facebook"></i></button>
          <button onClick={() => shareOnSocial("twitter")}>
            <i className="fab fa-twitter"></i></button>
          <button onClick={() => shareOnSocial("linkedin")}>
            <i className="fab fa-linkedin"></i></button>
          
        </div>
        <div className="input-container">
            <input type="text" value={link} readOnly />
            <button className="copy-btn" onClick={copyToClipboard}>
                <i className="fi fi-rr-copy"></i>
            </button>
        </div>
      </div>
    </div>
  );
};

export default ShareCard;
