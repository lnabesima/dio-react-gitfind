import github from '../../assets/background.png';
import { Header } from '../../components/Header';
import styles from './home.module.css';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Profile } from '../../components/Profile';
import { RepoList } from '../../components/RepoList';
import { useEffect, useState } from 'react';
import { Loading } from '../../components/Loading';

interface userDataProps {
  login: string,
  name: string
  avatar_url: string | undefined,
  bio: string,
}

function App() {
  const [userInput, setUserInput] = useState<string>('');
  const [userData, setUserData] = useState<userDataProps>(
    { login: "", name: "", avatar_url: undefined, bio: "" });
  const [userDataError, setUserDataError] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(false);

  const GITHUB_API_URL = 'https://api.github.com/users';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const userRes = await fetch(`${GITHUB_API_URL}/${userInput}`);
      if (!userRes.ok) {
        setUserDataError(true);
        setIsLoading(false);
        return;
      }
      }

      const jsonUserRes = await userRes.json();
      setUserData({
        login: jsonUserRes.login,
        name: jsonUserRes.name,
        avatar_url: jsonUserRes.avatar_url,
        bio: jsonUserRes.bio,
      });
      setUserDataError(false);

    } catch (e) {
      setUserDataError(true);
      console.error('Fetching error:', e);

    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <>
      <Header/>
      <main className={styles.content}>
        <img src={github} alt="Github logo" className={styles.background}/>
        <div className={styles.info}>
          <div className={styles.search}>
            <Input value={userInput} onChange={handleChange}/>
            <Button onClick={handleClick}/>
          </div>

          {isLoading && (
            <>
              <Loading/>
              <hr/>
            </>
          )}

          {!userDataError && !isLoading &&
            (
              <>
                <Profile userData={userData}/>
                <hr/>
              </>
            )
          }

          <RepoList/>
        </div>
      </main>
    </>
  );
}

export default App;
