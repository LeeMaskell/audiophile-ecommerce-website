import styled from "@emotion/styled";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 6rem;
  position: sticky;
  top: 0;
  background-color: #101010;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
`;

export const ResponsiveContainer = styled.div`
  width: 67%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid grey;

  @media (max-width: 1280px) {
    width: 100%;
  } 
`;

export const NavIconButton = styled.img`
  width: 23.3333px;
  height: 20px;
  color: white;
  cursor: pointer;
  margin: 0 42px 0 39px;
  display: none;

  @media (max-width: 1280px) {
    display: block;
  } 
`;

export const LogoContainer = styled.span`
  display: flex;
  flex: 1 1 10px;
`;

export const CartContainer = styled.span`
  flex: 1 1 0.625rem;
  display: flex;
  justify-content: end;

  @media (max-width: 1280px) {
    margin-right: 2.438rem;
  } 
`;

export const CompanyLogo = styled.img`
  width: 8.938rem;
  height: 1.563rem;
`;
