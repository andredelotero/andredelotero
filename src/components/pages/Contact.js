import { useNav } from "../../customHooks/useNav";
import "./Page.css";
import styled from "styled-components";
import linked from "../../img/linkedin.png";
import github from "../../img/github.png";

const StyledContact = styled.section`
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
    content: "CONTACT";
    font-size: 250px;
    overflow: hidden;
    color: rgba(68, 68, 68, 0.1);
    font-weight: 800;
  }
  p {
    font-size: 18px;
    line-height: 28px;
    margin: 1rem 0;
  }
  .networks {
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
  }
  img {
    height: 30px;
    width: auto;
    display: inline-block;
    margin: 1rem;
  }
`;

const Contact = () => {
  const contactRef = useNav("Contact");

  return (
    <StyledContact ref={contactRef} id="contactContainer">
      <h1>Contact</h1>
      <h2 className="customH2">Let's get in touch</h2>
      <div className="networks">
        <a
          href="https://github.com/andredelotero"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linked}
            alt="visit my Linkedin profile"
            width={30}
            height={30}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/andredelotero/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={github}
            alt="visit my Github profile"
            width={30}
            height={30}
          />
        </a>
      </div>
    </StyledContact>
  );
};

export default Contact;
