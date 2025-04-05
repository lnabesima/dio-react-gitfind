import styles from './button.module.css';

interface ButtonProps {
  onClick: () => void;
}

export const Button = ({onClick}:ButtonProps) => {
  return <button type={'button'} className={styles.button} onClick={onClick}>Buscar</button>;
};