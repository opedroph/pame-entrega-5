import React from "react";
import {
  HeaderContainer,
  Header,
  LogoEmpresa,
  Menu,
  MenuItem,
} from "./headerElements";

const NavBar = () => {
  return (
    <>
      <HeaderContainer>
        <Header>
          <LogoEmpresa>Clínica Bambino</LogoEmpresa>
          <Menu>
            <MenuItem href="#">Entrar</MenuItem>
            <MenuItem href="#">Cadastre-se</MenuItem>
          </Menu>
        </Header>
      </HeaderContainer>
    </>
  );
};

export default NavBar;
