import github from '../../assets/background.png';
import { Header } from '../../components/Header';
import styles from './home.module.css';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Profile } from '../../components/Profile';
import { RepoList } from '../../components/RepoList';
import { useState } from 'react';
import { Loading } from '../../components/Loading';
import { repo } from '../../@types/repo';

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
  const [userReposError, setUserReposError] = useState<boolean>(true);
  const [repoList, setRepoList] = useState<repo[]>([]);
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
      const repoRes = await fetch(`${GITHUB_API_URL}/${userInput}/repos?sort=updated`);

      if (!repoRes.ok) {
        setUserDataError(true);
        setIsLoading(false);
        return;
      }

      const jsonUserRes = await userRes.json();
      const jsonReposRes = await repoRes.json();

      /**
       * Represents the mapping of repository data fetched from a JSON response to a specific structure.
       * Each repository object is transformed to include selected properties relevant for further use.
       * <hr/>
       * I know that suppressing this `any` warning is a bad practice, but to fix it I would
       * need to create a **HUMONGOUS** interface, just for this one use. I'll trust GitHub's
       * consistency and just type _my_ end, keeping theirs as `any`.
       * <hr />
       * @type {Array<repo>} mappedRepos - An array containing repository objects with mapped
       * properties.
       * @property {number} id - The unique identifier of the repository.
       * @property {string} full_name - The full name of the repository.
       * @property {string} html_url - The URL to the repository's page.
       * @property {string | null} description - The description of the repository, or null if not provided.
       * @property {boolean} private - A flag indicating whether the repository is private or public.
       */
        // eslint-disable-next-line
      const mappedRepos: Array<repo> = jsonReposRes.map((repo: any): repo => ( {
          id: repo.id,
          full_name: repo.name,
          html_url: repo.html_url,
          description: repo.description,
          private: repo.private,
        } ));

      setRepoList(mappedRepos);
      setUserData({
        login: jsonUserRes.login,
        name: jsonUserRes.name,
        avatar_url: jsonUserRes.avatar_url,
        bio: jsonUserRes.bio,
      });
      setUserDataError(false);
      setUserReposError(false);

    } catch (e) {
      setUserDataError(true);
      setUserReposError(false);
      setRepoList([]);
      console.error('Fetching error:', e);

    } finally {
      setIsLoading(false);
    }
  };

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

          {!userReposError && !isLoading && <RepoList repos={repoList}/>}


        </div>
      </main>
    </>
  );
}

export default App;
