import React, { useEffect, useState } from "react";

import Repositories from "./components/Repositories";

import "./App.css";
import Header from "./components/Header";

export default function App() {
  const [repositories, setRepositores] = useState([]);
  const [user, setUser] = useState([]);
  console.log(user);

  //useEffect que aguarda o retorno de um JSON da API com usuários do Git.

  useEffect(async () => {
    const responseUser = await fetch(
      `https://api.github.com/users/leoaraujosa`
    );
    const dataUser = await responseUser.json();

    setUser(dataUser);
  }, []);

  //useEffect que aguarda o retorno de um JSON da API com os repositórios do Git.

  useEffect(async () => {
    const response = await fetch(
      `https://api.github.com/users/leoaraujosa/repos`
    );
    const data = await response.json();

    setRepositores(data);
  }, []);

  //useEffect que filtra os repositorios favoritados e retorna a quantidade.

  useEffect(() => {
    const filterFavorite = repositories.filter((rep) => rep.favorite);
    document.title = `${filterFavorite.length} favorites repositories`;
  }, [repositories]);

  //Function que atribui a propriedade 'Favorite: true' nos repositórios marcados como favoritos.

  function handleFavorite(id) {
    const newRepositories = repositories.map((rep) => {
      return rep.id === id ? { ...rep, favorite: !rep.favorite } : rep;
    });

    setRepositores(newRepositories);
  }

  return (
    <>
      <div className="container">
        <div className="container-infos">
          <Header 
            user={user} 
          />
          <Repositories
            repositories={repositories}
            handleFavorite={handleFavorite}
          />
        </div>
      </div>
    </>
  );
}
