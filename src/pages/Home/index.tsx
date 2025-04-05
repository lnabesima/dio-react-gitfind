import github from '../../assets/background.png'
import { Header } from '../../components/Header';
import styles from './home.module.css'
import { Input } from '../../components/Input';

function App() {

  return (
    <>
      <Header />
      <div style={{zIndex: -1}}>
        <img src={github} alt="GitHub logo"/>
      </div>
      <p>Henlo frens</p>

      <hr/>
      <main className={styles.content}>
        <img src={github} alt="Github logo" className={styles.background}/>
        <div className={styles.info}>
          <div className={styles.search}>
            <Input />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
