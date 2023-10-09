import styled from "@emotion/styled";

export const LinkButtonContainer = styled.a`
  font-size: 0.813rem;
  font-weight: 700;
  line-height: 1.563rem;
  color: white;
  margin: auto;
  text-decoration: none;
  background-color: transparent;
  border: none;
  cursor: pointer;

  :last-child {
    margin-right: 0;
  }

  :link {
    text-decoration: none;
  }
  :visited {
    text-decoration: none;
    color: white;
  }

  @media (max-width: 1280px) {
   :first-child {
      margin-left: 0;
   }
`;
