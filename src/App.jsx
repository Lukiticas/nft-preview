import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global.styles.js";
import Card from "./components/Card";
import dark from "./styles/themes/dark.js";

function App() {
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
    <ThemeProvider theme={dark}>
      <div className="app">
        <GlobalStyles />
        <Card informations={exampleCard} key={exampleCard.id} />
      </div>
    </ThemeProvider>
  );
}

export default App;
