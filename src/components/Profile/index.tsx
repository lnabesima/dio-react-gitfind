import styles from './profile.module.css';

export const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/163813?v=4" alt="Profile" className={styles.profilePicture}/>
      <div className={styles.name}>
        <h2 className={styles.profile_name}>Placeholder name</h2>
        <p className={styles.profile_handler}>@username</p>
        <p className={styles.profile_description}>Placeholder description</p>
      </div>
    </div>
  )
}