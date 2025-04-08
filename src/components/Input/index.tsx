import styles from './input.module.css';

interface InputProps {
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ value, onChange }: InputProps) => {
  return (
    <input type="text" name={'user'} placeholder={'@username'} className={styles.input}
           value={value} onChange={onChange}/>
  );
};