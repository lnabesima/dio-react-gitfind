import github from '../../assets/background.png'
import { Header } from '../../components/Header';

function App() {

  return (
    <>
      <Header />
      <div style={{zIndex: -1}}>
        <img src={github} alt="GitHub logo"/>
      </div>
      <p>Henlo frens</p>

      <hr/>
    </>
  )
}

export default App
