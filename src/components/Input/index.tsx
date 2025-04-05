import styles from './input.module.css';

export const Input = () => {
  return (
    <input type="text" name={'user'} placeholder={'@username'} className={styles.input} />
  )
}