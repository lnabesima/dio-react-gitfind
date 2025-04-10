import styles from './profile.module.css';
import { JSX } from 'react';

/**
 * Interface representing the properties for a user profile component.
 * I don't really like creating nested props like this, but as this is a simple app, I felt
 * no need to create a type definition file for such a simple implementation.
 *
 * @interface ProfileProps
 * @property {Object} userData - An object containing information about the user.
 * @property {string} userData.name - The full name of the user.
 * @property {string} userData.login - The username or login identifier of the user.
 * @property {string} userData.avatar_url - The URL of the user's avatar image.
 * @property {string} userData.bio - A brief biography or description of the user.
 */
interface ProfileProps {
  userData: {
    name: string;
    login: string;
    avatar_url: string | undefined;
    bio: string;
  };
}

/**
 * A simple profile card containing user's Name, UserName, Avatar and Profile, fetched from
 * their Github Profile.
 */
export const Profile = ({ userData }: ProfileProps): JSX.Element => {
  return (
    <div className={styles.profileContainer}>
      <img src={userData.avatar_url} alt="Profile" className={styles.profilePicture}/>
      <div className={styles.name}>
        <h2 className={styles.profile_name}>{userData.name}</h2>
        <p className={styles.profile_handler}>@{userData.login}</p>
        <p className={styles.profile_description}>{userData.bio}</p>
      </div>
    </div>
  );
};