// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "../../components/Button";
// import useAuth from "../../hooks/useAuth";
// import * as C from "./styles";

import styles from "./Home.module.css";
import savings from "../../img/savings.svg";
import LinkButton from "../../layout/LinkButton";

const Home = () => {
  // const { signout } = useAuth();
  // const navigate = useNavigate();

  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>Costs</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar Projeto" />
      <img src={savings} alt="Costs" />
    </section>
    
    
    // <C.Container>
    //   <C.Title>Home</C.Title>
    //   <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
    //     Sair
    //   </Button>
    // </C.Container>
  );
};

export default Home;
