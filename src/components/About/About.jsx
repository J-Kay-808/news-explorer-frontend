import "./About.css";
import selfie from "../../assets/photo_me.jpg";

function About() {
  return (
    <section className="about">
      <div className="about__image-container">
        <img src={selfie} alt="close up on Jarad's face" className="about__image" />
      </div>
      <div className="about__info">
        <h2 className="about__title">About the author</h2>
        <p className="about__description">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.</p>
        <p className="about__description">You can also talk about your experience with TripleTen, what you learned
          there, and how you can help potential customers.</p>
      </div>
    </section>
  );
}

export default About;