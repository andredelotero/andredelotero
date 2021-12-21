import { useNav } from "../../customHooks/useNav";
import profile from "../../img/perfil.webp";
import StyledCta from "../buttons/Cta";
import styled from "styled-components";
import "./Page.css";

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 65px auto 0 auto;
  padding: 3rem 1rem;
  color: #fff;
  position: relative;
  &::before {
    position: absolute;
    top: -70px;
    left: 0;
    max-width: 100%;
    margin: 0;
    z-index: -1;
    line-height: 280px;
    content: "HOME";
    font-size: 250px;
    overflow: hidden;
    color: rgba(68, 68, 68, 0.2);
    font-weight: 800;
  }

  img {
    width: 350px;
    height: auto;
    border-radius: 50%;
    display: none;
  }
  .StyledTitlesCta {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    max-width: 550px;
  }
  @media screen and (min-width: 850px) {
    flex-direction: row;

    justify-content: space-evenly;
    padding: 3rem;
    h1 {
      font-size: 90px;
      line-height: 100px;
    }
    img {
      display: block;
    }
    .StyledTitlesCta {
      align-items: flex-start;
      text-align: left;
      margin: 0;
    }
  }
`;

const handleClick = () => {
  document
    .getElementById("contactContainer")
    .scrollIntoView({ behavior: "smooth" });
};

const Home = () => {
  const homeRef = useNav("Home");
  return (
    <StyledHeader ref={homeRef} id="homeContainer">
      <div className="StyledTitlesCta">
        <h1>Hello.</h1>
        <h1> I'm André,</h1>
        <h1>Frontend (React) developer.</h1>
        <StyledCta onClick={handleClick}>CONTACT ME</StyledCta>
      </div>
      <img src={profile} alt="" />
    </StyledHeader>
  );
};

export default Home;
