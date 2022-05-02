import "./App.css";
import Tracker from "./pages/Tracker/Tracker.lazy";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    --very-dark-gray: hsl(0, 0%, 17%);
    --dark-gray: hsl(0, 0%, 59%);
  }

  * {
    font-size: 18px;
    font-family: 'Rubik', sans-serif;
  }
`;

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Tracker></Tracker>
      </AppContainer>
    </>
  );
}

export default App;
