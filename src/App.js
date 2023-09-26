import React , { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro , temaOscuro} from "./Components/UI/temas";
import Header from "./Components/Header";
import Container from "./Components/Container";
import GlobalStyle from "./GlobalStyle";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

console.log(temaClaro,temaOscuro);

function App() {

  const [tema, setTema] = useState(
    localStorage.getItem('temaSeleccionado') === 'oscuro' ? true : false
  );

  // Función para cambiar el tema y actualizar Local Storage
  const toggleTema = () => {
    const nuevoTema = !tema;
    setTema(nuevoTema);
    localStorage.setItem('temaSeleccionado', nuevoTema ? 'oscuro' : 'claro');
  };

  useEffect(() => {
    // Define el tema inicial al cargar la página
    const temaGuardado = localStorage.getItem('temaSeleccionado');
    if (temaGuardado === 'oscuro') {
      setTema(true);
    } else {
      setTema(false);
    }
  }, []);

  return (
    <ThemeProvider theme={tema ? temaOscuro : temaClaro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema}/>
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
