import Header from "./Components/header/Header";
import Wordle from "./pages/wordle/Wordle";

function App() {
  let game = "wordle";
  return (
    <>
      <Header />
      <div className="container">{game === "wordle" && <Wordle />}</div>
    </>
  );
}

export default App;
