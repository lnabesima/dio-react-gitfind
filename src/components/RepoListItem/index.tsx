import styles from './repoListItem.module.css';

interface RepoListItemProps {
  repoName: string,
  repoDescription: string,
  repoUrl: string,
  isPrivate: boolean,
}

export const RepoListItem = ({ repoName, repoDescription, isPrivate, repoUrl }: RepoListItemProps) => {
  return (
    <>
      <li className={styles.item}>
        <div>
          <h4 className={styles.repoName}>{repoName}</h4>{" "}
          {isPrivate ? <p>🔒</p> : null}
          <a href={repoUrl} target={"_blank"} rel="noreferrer noopener" className={styles.repoUrl}>🔗</a>
        </div>
        <p className={styles.repoDescription}>{repoDescription === null ? "O repositório não" +
          " possui descrição." : repoDescription}</p>
      </li>
      <hr/>
    </>
  );
};