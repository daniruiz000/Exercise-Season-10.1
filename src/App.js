import './App.css';
import React from 'react';
import Title from './components/Title/Title';
import AccountBank from './components/AccountBank/AccountBank';
import Bidder from './components/Bidder/Bidder';

function App() {

  const [pujasList, setPujasList] = React.useState([100]);

  const addPuja = () => {
    const newPujasList = [...pujasList, pujasList[pujasList.length - 1] + 5];
    setPujasList(newPujasList);
  }

  return (

    <div className="App">
      <Title text='Listado de Pujas' />
      <ul className='pujasList'>
        {pujasList.map(puja =>
          <li className='pujasList__puja' key={puja}>{puja}</li>
        )}
      </ul>
      <div className='pujasList__button-container'>
        <Bidder name='Pedro' handleClick={addPuja} />
        <Bidder name='Gonzalo' handleClick={addPuja} />
        <Bidder name='Edu' handleClick={addPuja} />
      </div>
      <Title text='Cuenta Bancaria' />
      <AccountBank />
    </div>
  );
}

export default App;
