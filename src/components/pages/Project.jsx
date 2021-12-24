import styled from "styled-components";

const StyledProject = styled.div`
  margin: 0 auto 2rem auto;
  width: 100%;
  max-width: 450px;
  border: 1px solid #ffffff4c;
  text-align: center;
  height: auto;
  overflow: hidden;
  font-weight: 300;
  letter-spacing: 1px;
  padding-bottom: 1rem;
  &:hover img {
    transform: scale(1.04);
  }

  p {
    padding: 0 1rem;
  }

  .title {
    font-size: 24px;
    font-weight: 600;
  }
  img {
    transition: all 250ms linear;
    max-width: 100%;
    height: auto;
  }
  .link {
    text-decoration: none !important;
    color: #fff;
    font-weight: 300;
    font-size: 16px;
    width: auto;
    display: inline-block;
    overflow: hidden;
    word-break: break-all;
    padding: 0 0.5rem;
    border-bottom: 1px solid transparent;
    transition: border-bottom 250ms linear;
    &:hover {
      border-bottom: 1px solid #8b63d4;
    }
  }
`;

const Project = (data) => {
  const { name, description, img, link } = data.data;

  return (
    <StyledProject>
      <img src={img} alt={name} width={450} height={228} />
      <p className="title">{name}</p>
      <p>{description}</p>
      <a href={link} className="link" target="_blank" rel="noopener noreferrer">
        {link}
      </a>
    </StyledProject>
  );
};

export default Project;
