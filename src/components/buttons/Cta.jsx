import styled from "styled-components";

const StyledCta = styled.button`
  padding: 1rem 2rem;
  background-color: #6435bb;
  display: inline-block;
  width: fit-content;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 2rem;
  margin-left: 0.3rem;
  border: 0;
  text-decoration: none;
  box-shadow: 0 0 200px #6435bb;
  transition: all 200ms linear;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 100px #4f23a0;
  }
`;

export default StyledCta;
