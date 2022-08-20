import { ThemeProvider } from "styled-components";
import usePersistedState from "./utils/UsePersistedState.jsx";
import Card from "./components/Card";
import Header from "./components/Header/index.jsx";
import GlobalStyles from "./styles/global.styles.js";
import dark from "./styles/themes/dark.js";
import light from "./styles/themes/light.js";

function App() {
  const [theme, setTheme] = usePersistedState("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title == "white" ? dark : light);
  };
  const exampleCard = {
    nftName: "Equilibrium",
    id: "3429",
    description: "Our Equilibrium collection promotes balance and calm.",
    price: "0.041",
    currency: "ethereum",
    period: "3 days left",
    artistName: "Jules Wyvern",
    artistIcon: "./images/image-avatar.png",
    cardPreview: "./images/image-equilibrium.jpg",
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <GlobalStyles />
        <Header handleThemes={toggleTheme} />
        <div className="cardsWrapper">
          <Card informations={exampleCard} key={exampleCard.id} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
