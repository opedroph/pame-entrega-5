import "./App.css";
import Aplicativo from "./components/aplicativo";
import Footer from "./components/footer";
import NavBar from "./components/header";
import Main from "./components/main";



function App() {
  return (
    <>
      <NavBar />
      <Main />
      <Aplicativo/>
      <Footer/>
      {/* seria a ideia para o sistema local de verificação dos funcionarios, n tem haver com o site */}
      {/* <SistemaLocal/> */}
    </>
  );
}

export default App;
