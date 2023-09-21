import { FC } from 'react';
import styles from './Comment.module.css';

const Comment: FC<{ color: string, text: string }> = ({ color, text }) => {
  return (
    <div className={styles.card}>
      <div className={styles['card-background']} style={{backgroundColor: color}}></div>
      <div className={styles['card-body']}>
        { text }
      </div>
    </div>
  );
}

export default Comment;
