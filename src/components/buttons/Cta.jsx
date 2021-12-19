import styled from "styled-components";

const StyledCta = styled.button`
  padding: 1rem 2rem;
  background-color: #8b63d4;
  display: inline-block;
  width: fit-content;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 2rem;
  border: 0;
  text-decoration: none;
  box-shadow: 0 0 300px #d014ff;
  transition: all 200ms linear;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 150px #d014ff;
  }
`;

export default StyledCta;
