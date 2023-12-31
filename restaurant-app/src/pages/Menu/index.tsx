import Logo from '../../assets/logo.svg';
import { styled } from 'styled-components';
import Search from './Search';
import { useState } from 'react';
import Filters from '../Filters';
import Ordenator from './Ordernator';
import Itens from '../Itens';

// Styles for the Menu component

const StyledMenu = styled.div`
  nav {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;
  }

  header {
    background-image: url('header.png') ;
    background-size: cover;
    background-position: center;
    height: 250px;
    display: flex;
    align-items: center;
    padding: 0 100px;
  }

  h1 {
    color: #fff;
    font-size: 50px;
    font-weight: 400;
    width: 20%;
  }

  h3 {
    font-size: 40px;
    font-weight: 400;
    margin: 20px 0;
    text-align: center;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px ;
`;


// The Menu component

function Menu() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null >(null);
  const [order, setOrder] = useState<string>('');

  console.log(order);
  

  const handleSearch = (value: string) => {
    setSearch(value);
  }

  return (
    <StyledMenu>

      <nav>
      <img src={Logo} alt="" />
      </nav>

      <header>

          <h1>A casa do Codigo e da massa</h1>

      </header>

    <section>
      <h3>Cardapio</h3>
      <Search 
      search={search}
      handleSearch={handleSearch}
      placeholder="Buscar por nome do prato"
      />

      <h3>Filtros</h3>
      <Flex>
        <Filters
        filter={filter}
        setFilter={setFilter}
        />
        <Ordenator 
        order={order}
        setOrder={setOrder}
        />
      </Flex>

      <Itens 
      search={search}
      filter={filter}
      order={order}
      />
    </section>
    

    </StyledMenu>
  );
}

export default Menu;
