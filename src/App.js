import "./App.css";
import Aplicativo from "./components/aplicativo";
import Diversao from "./components/diversao";
import Footer from "./components/footer";
import NavBar from "./components/header";
import Main from "./components/main";
import SistemaLocal from "./components/sistemaLocal";



function App() {
  return (
    <>
      <NavBar />
      <Main />
      <Aplicativo/>
      <Diversao/>
      <Footer/>
      {/* seria a ideia para o sistema local de verificação dos funcionarios, n tem haver com o site */}
      <SistemaLocal/> 
    </>
  );
}

export default App;
