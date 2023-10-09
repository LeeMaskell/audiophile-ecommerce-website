import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
  width: 100%;
  height: auto;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #101010;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ResponsiveContainer = styled.div`
  width: 67%;
  height: auto;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

export const LinkFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4.688rem;

  @media (max-width: 1280px) {
    flex-direction: column;
    justify-content: start;
    margin-top: 3.75rem;
    margin-left: 2.438rem;
  }

  @media (max-width: 768px) {
    align-items: center;
    margin: 3.25rem auto 0 auto;
  }
`;

export const CompanyLogo = styled.img`
  width: 8.938rem;
  height: 1.563rem;

  @media (max-width: 1280px) {
    margin-bottom: 2rem;
  }
`;

export const LinkButtonContainer = styled.div`
  width: 26.688rem;
  height: 1.563rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1280px) {
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 3rem 0 1rem 0;
    height: auto;
  }
`;

export const PlaceHolderButton = styled.h2`
  font-size: 0.813rem;
  font-weight: 700;
  line-height: 1.563rem;
  color: white;
  margin: auto;
  cursor: pointer;

  :last-child {
    margin-right: 0;
  }

  :active {
    color: #D87D4A;
  }

  @media (max-width: 1280px) {
    :first-child {
        margin-left: 0;
  } 

  @media (max-width: 768px) {
        margin: auto;

        :first-child {
            margin: auto;
        }
            :last-child {
                margin: auto;
            }
  } 
`;

export const TextFlexContainer = styled.div`
  width: 33.75rem;
  margin-top: 2.25rem;
  position: relative;

  @media (max-width: 1280px) {
    margin-left: 2.438rem;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 2.25rem auto 0 auto;
  }
`;

export const FooterText = styled.p`
  color: grey;
  font-size: 0.813rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.563rem;
  margin-top: 0;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const CopyrightText = styled.p`
  color: grey;
  font-size: 0.813rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.563rem;
  margin: 3.5rem 0 2rem 0;
  margin-bottom:
  width: 100%;

  @media (max-width: 768px) {
    margin-left: 2.438rem;
    margin: 3.5rem auto 2rem auto;
    text-align: center;
  }
`;

export const SocialMediaLinkContainer = styled.div`
width: 6.5rem;
display: flex;
justify-content: space-between;

@media (max-width: 768px) {
  margin: 0 auto;
}
`;
