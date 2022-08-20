import { HeaderBody, HeaderImg, HeaderTitle } from "./Header.styles";
import { DefaultAnchor } from "../../styles/global.styles.js"; //  a
import { ThemeContext } from "styled-components";
import ReactSwitch from "react-switch";
import { useContext } from "react";

function Header({ handleThemes }) {
  const { colors, title } = useContext(ThemeContext);
  return (
    <HeaderBody>
      <HeaderImg />
      <HeaderTitle>
        NFT preview by
        <DefaultAnchor
          to="https://www.frontendmentor.io/profile/Lukiticas"
          target="_blank"
        >
          Lucas Matheus
        </DefaultAnchor>
      </HeaderTitle>
      <ReactSwitch
        checked={title === "white"}
        onChange={() => handleThemes()}
        uncheckedIcon={false}
        checkedIcon={false}
        height={20}
        width={40}
        handleDiameter={20}
        offColor={colors.bgTerciary}
        onColor={colors.bgPrimary}
        onHandleColor={colors.wordPrimary}
        offHandleColor={colors.wordSecundary}
      />
    </HeaderBody>
  );
}

export default Header;
