import Tours from "./components/Tours";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  color: #102a42; 
  font-size: 1rem;
  background: #f1f5f8;
}

main{
  width: 90vw;
  max-width: 1170px;
  margin: 5rem auto;
}
`;

function App() {
  return (
    <main>
      <GlobalStyle />
      <Tours />
    </main>
  );
}

export default App;
