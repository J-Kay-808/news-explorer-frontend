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
          Hi, I’m Jarad, a software developer skilled in full-stack technologies like JavaScript, React, Node.js, and MongoDB. I’m currently sharpening my skills through TripleTen’s software engineering bootcamp,
          where I’ve built full-stack applications, learned best practices for scalable development, and gained hands-on experience with modern web technologies.</p>
        <p className="about__description">TripleTen has equipped me with the tools to solve complex problems, write clean and efficient code, and collaborate effectively on team projects.
          Whether it’s creating intuitive user experiences or building reliable back-end systems, I’m here to deliver innovative solutions tailored to your needs.</p>
        <p className="about__description">When I’m not coding, I enjoy woodworking, surfing, diving, and crafting
          unique cocktails—activities that inspire my creativity and problem-solving approach..</p>
        <p className="about__description">I’m excited to bring your ideas to life—let’s make it happen!
        </p>
      </div>
    </section>
  );
}

export default About;