import React from 'react';
import CharacterList from '../CharacterList';
import logo from './img/Logo.png';
import styles from './App.module.scss';


const App = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.logo} src={logo} alt='logo' />
      <CharacterList />
    </div>
  );
};

export default App;
