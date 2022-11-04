// Atualizado dia 27/10/2022 as 20:17

import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Container,
  H1,
  Image,
  ContainerItens,
  Button,
  //  User

} from "./styles";

import Avatar from '../assets/avatar.svg'
import Arrow from '../assets/arrow.svg'
import Trash from '../assets/trash.svg'


function Users() {
  const [users, setUsers] = useState([]);



  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3005/users");
      setUsers(newUsers);
      console.log("Chamada:useEffect");
    }
    fetchUsers()
  }, [])

  async function deleteUser(userid) {
    await axios.delete(`http://localhost:3005/users${userid}`)
    console.log("Oi, fui chamada para excluir")
    console.log(userid)
    const newUsers = users.filter((user) => user.id !== userid)
    setUsers(newUsers);
  }

  return (
    <Container>
      <Image alt="logo-image" src={Avatar} />

      <ContainerItens>

        <H1>Usuários-3001</H1>
        <ul>

          {users.map((user) => (

            <Users key={user.id} >

              <p>{user.name}</p> <p> {user.age}</p>

              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lixo" />
              </button>
            </Users>
          ))}
        </ul>


        <Button to="/">
          
          <img alt="Seta" src={Arrow} /> Voltar para cadastro 

        </Button>

      </ContainerItens>
    </Container>

  );
}
export default Users;