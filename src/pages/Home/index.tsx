import github from '../../assets/background.png';
import { Header } from '../../components/Header';
import styles from './home.module.css';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState<number>(0);

  const handleClick = () => {
    console.log('click');
    setCounter(counter + 1);
  };

  return (
    <>
      <Header/>
      <main className={styles.content}>
        <img src={github} alt="Github logo" className={styles.background}/>
        <div className={styles.info}>
          <div className={styles.search}>
            <Input/>
            <Button onClick={handleClick}/>
          </div>
          <p>The 'search' button was clicked {counter} times.</p>
        </div>
      </main>
    </>
  );
}

export default App;
