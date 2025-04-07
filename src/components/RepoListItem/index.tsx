import styles from './repoListItem.module.css';

interface RepoListItemProps {
  repoName: string,
  repoDescription: string,
  repoUrl: string,
}

export const RepoListItem = ({ repoName, repoDescription, repoUrl }: RepoListItemProps) => {
  return (
    <>
      <li className={styles.item}>
        <div>
          <h4 className={styles.repoName}>{repoName}</h4>{" "}
          <a href={repoUrl} target={"_blank"} rel="noreferrer noopener" className={styles.repoUrl}>🔗</a>
        </div>
        <p className={styles.repoDescription}>{repoDescription}</p>
      </li>
      <hr/>
    </>
  );
};