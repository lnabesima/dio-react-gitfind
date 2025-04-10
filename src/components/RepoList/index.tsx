import styles from './repolist.module.css'
import { RepoListItem } from '../RepoListItem';
import { repo } from '../../@types/repo';

interface RepoListProps {
  repos: repo[];
}

export const RepoList = ({repos}:RepoListProps) => {
  return (
    <div>
      <h3 className={styles.title}>Repositórios</h3>
      <ul>
        {repos.map((repo) => (
          <RepoListItem key={repo.id} repoName={repo.full_name} repoUrl={repo.html_url}
                        repoDescription={repo.description} isPrivate={repo.private}/>
        ))}
      </ul>
    </div>
  );
};