import { FC } from 'react';
import { IListData } from '../../utils/interfaces/listData.interface';
import styles from './ListItem.module.css';

interface ListItemProps {
  readonly data: IListData;
  readonly handleUpdate: (data: IListData[], deletedId: number) => void;
  readonly handleSelect: (data: IListData) => void;
  readonly isSelected: boolean;
}

const ListItem: FC<ListItemProps> = ({ data, handleUpdate, handleSelect, isSelected = false }) => {
    const classes = `${styles.item} ${isSelected ? styles.selected : ''}`;

  const onButtonDeleteClick = () => {
    const storedData = localStorage.getItem('list');
    const storedListData: IListData[] = JSON.parse(storedData!) || [];
    const filteredData = storedListData.filter((list) => list.id !== data.id);

    handleUpdate(filteredData, data.id);
  }

  const onButtonSelectClick = () => {
    handleSelect(data);
  }

  return (
    <li className={classes} onClick={onButtonSelectClick}>
      <span className="name">{data.name}</span>
      <div className={styles.actions}>
        <div className={styles.count}>{data.comments?.length ?? '0'}</div>
        <button className={styles['button-delete']} onClick={onButtonDeleteClick}>Delete</button>
      </div>
    </li>
  );
}

export default ListItem;
