import "../style/Contact.css";
import BannerImage from "../assets/banner.png";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen adınızı soyadınızı giriniz..."
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen email giriniz..."
          />
          <label>Mesajınız</label>
          <textarea
            rows="6"
            type="email"
            name="email"
            placeholder="Lütfen mesajınızı giriniz..."
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
