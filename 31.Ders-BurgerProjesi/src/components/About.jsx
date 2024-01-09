import BannerImage from "../assets/banneryeni.jpg";
import "../style/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos aperiam
          unde eaque nihil at? Nam nihil veritatis reprehenderit magni fuga quo,
          assumenda accusamus labore quae error, quidem, blanditiis dignissimos
          similique. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nam suscipit in ab voluptatum officiis vero nisi beatae accusantium
          dolorum, assumenda, officia, velit earum illum fugiat nemo rem aperiam
          alias dolores. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Error, et. Quis cum repudiandae officia nemo, odit rem natus
          earum aliquam dolor sint hic illo mollitia nesciunt impedit quasi
          cupiditate. Rem. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quaerat, nostrum ad? Explicabo aliquam, tenetur voluptas est
          amet eius excepturi doloribus blanditiis libero, provident, expedita
          nam veniam laborum repellendus iusto vel?Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Ullam, culpa vel repellendus nesciunt
          maiores perferendis repudiandae. Eius eligendi ratione, illum
          perspiciatis ipsam culpa laborum molestias aut nemo quibusdam tempore.
          Animi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
          aut architecto facilis suscipit soluta dolorum, sint, sit quas odio
          eveniet non quos, alias unde reiciendis vel doloribus! Minus, veniam
          voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptas cupiditate dolore aliquid consequuntur quod nobis quas
          reprehenderit corrupti, porro in ut hic, autem commodi assumenda quasi
          molestias iusto eaque fuga! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Natus illo eligendi eaque maxime aut asperiores cum
          perspiciatis expedita optio et quia unde at sunt consequatur,
          blanditiis nam doloremque beatae sapiente!
        </p>
      </div>
    </div>
  );
}

export default About;
