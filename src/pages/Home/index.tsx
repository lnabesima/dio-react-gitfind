import github from '../../assets/background.png';
import { Header } from '../../components/Header';
import styles from './home.module.css';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Profile } from '../../components/Profile';
import { RepoList } from '../../components/RepoList';

function App() {

  const handleClick = () => {
    console.log('click');
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
          <Profile />
          <hr />
          <RepoList />
        </div>
      </main>
    </>
  );
}

export default App;
