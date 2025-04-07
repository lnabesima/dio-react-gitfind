import styles from './repolist.module.css'
import { RepoListItem } from '../RepoListItem';

export const RepoList = () => {
  return (
    <div>
      <h3 className={styles.title}>Repositórios</h3>
      <ul>
        <RepoListItem repoName={'Teste'} repoUrl={'https://google.com.br'}
                      repoDescription={'This is a test'}/>
        <RepoListItem repoName={'Teste'} repoUrl={'https://google.com.br'}
                      repoDescription={'This is a test'}/>
        <RepoListItem repoName={'Teste'} repoUrl={'https://google.com.br'}
                      repoDescription={'This is a test'}/>
        <RepoListItem repoName={'Teste'} repoUrl={'https://google.com.br'}
                      repoDescription={'This is a test'}/>
      </ul>
    </div>
  );
};