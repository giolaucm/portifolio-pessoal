import './video.css';
import Image from "../img/background-video.svg";

function Video() {
  return (
    <div className="video">
      <div className="video-text" data-aos="fade-right">
        <h2 className="subtitulo">LOREM IPSUM</h2>
        <p className="apresentacao-descricao">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. ahhdjaosd
          ahsfhsakfb dfsbsjd dfbs skdfnsl sofnsldnf skfndmos ddknf Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="video-player" data-aos="fade-left">
        <video src="https://www.youtube.com/watch?v=J8yVvUweA4c" controls></video>
        <img src={Image} alt="play" className="play" />
      </div>
    </div>
  );
}

export default Video;
