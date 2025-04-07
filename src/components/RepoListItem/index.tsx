import styles from './repoListItem.module.css';

interface RepoListItemProps {
  repoName: string,
  repoDescription: string,
  repoUrl: string,
}

export const RepoListItem = ({repoName, repoDescription, repoUrl} : RepoListItemProps) => {
  return (
    <li className={styles.item}>
      <h4>{repoName}</h4> - <a href={repoUrl}>🔗</a>
      <p>{repoDescription}</p>
    </li>
  )
}