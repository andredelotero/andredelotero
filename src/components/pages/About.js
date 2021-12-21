import { useNav } from "../../customHooks/useNav";
import "./Page.css";
import styled from "styled-components";
import Project from "./Project";
import arqHtml from "../../img/arqAlguien.webp";
import jsCommerce from "../../img/jsEcommerce.webp";
import reactCommerce from "../../img/reactEcommerce.webp";
import autocentro from "../../img/autocentro.webp";

const StyledAbout = styled.section`
  color: #fff;
  margin: 5rem 0;
  padding: 1rem;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  position: relative;
  &::before {
    position: absolute;
    top: -70px;
    left: 0;
    max-width: 100%;
    margin: 0;
    z-index: -1;
    line-height: 280px;
    content: "ABOUT";
    font-size: 250px;
    overflow: hidden;
    color: rgba(68, 68, 68, 0.8);
    font-weight: 800;
  }
  p {
    font-size: 18px;
    line-height: 28px;
    margin: 1rem 0;
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  @media screen and (min-width: 950px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const data = [
  {
    name: "arqAlguien",
    description:
      "This project was the first I did during my Frontend career. Main tools/languajes: HTML and SASS",
    img: arqHtml,
    link: "https://arqalguien.vercel.app/",
  },
  {
    name: "ecommerce JS",
    description:
      "The second project I did during my Frontend career. Main tools/languajes: HTML, Javascript and SASS",
    img: jsCommerce,
    link: "https://andredelotero.github.io/ecommerce/",
  },
  {
    name: "ecommerce React",
    description:
      "Third and last project during my Frontend Career. Main tools/languages: HTML, React, JSX, SASS and Styled Components",
    img: reactCommerce,
    link: "https://andre-react.netlify.app/",
  },
  {
    name: "Autocentro",
    description:
      "Real project for local business Autocentro. Project entirely made using HTML and SASS",
    img: autocentro,
    link: "https://autocentro.com.ar/",
  },
];

const About = () => {
  const aboutRef = useNav("About");

  return (
    <div ref={aboutRef} id="aboutContainer">
      <StyledAbout>
        <h1>About me</h1>
        <h2 className="customH2">Who I am, my skills, what I do</h2>
        <div className="info">
          <div className="aboutMe">
            <h3>Me</h3>
            <p>
              I'm a Frontend (react) developer from Brazil, based in Mar del
              Plata, Argentina.
            </p>
            <p>
              I care about site speed, user experience, cross browser
              compatibility, and of course, responsiveness (I always start
              projects in a mobile-first approach)
            </p>
          </div>
          <div className="aboutSkills">
            <h3>Skills</h3>
            <p>
              HTML, CSS, JavaScript, React, JSX, Jquery, Bootstrap, Sass, Styled
              Components (this site is 100% styled whith this library)
            </p>
            <p>
              If needed, I will learn new CSS libraries/frameworks to adapt as
              best as possible to the project requirements.
            </p>
          </div>

          <div className="aboutProjects">
            <h3 className="mb2 ">Projects</h3>
            <ProjectsContainer>
              {data.map((el, index) => (
                <Project data={el} key={index}></Project>
              ))}
            </ProjectsContainer>
          </div>
        </div>
      </StyledAbout>
    </div>
  );
};

export default About;
