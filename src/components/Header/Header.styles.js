import styled from "styled-components";
const icon = "./icon/header-icon.svg";

export const HeaderBody = styled.header`
  width: 100%;
  height: max(3.5rem, 60px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  gap: 1rem;
  background-color: ${(props) => props.theme.colors.bgSecundary};
  color: ${(props) => props.theme.colors.wordPrimary};
`;

export const HeaderImg = styled.img`
  max-width: 2.2rem;
`;

HeaderImg.defaultProps = {
  src: icon,
};

export const HeaderTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 500;
`;
