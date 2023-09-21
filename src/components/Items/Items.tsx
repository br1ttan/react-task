import { useState, FC } from 'react';
import ListItem from '../../ui/List/ListItem';
import { IListData } from '../../utils/interfaces/listData.interface';
import styles from './Items.module.css';
import ListForm from '../../ui/ListForm/ListForm';

const Items: FC<{
    handleDataSelect: (data: IListData | null) => void;
    listData: IListData[];
    onUpdateListData: (data: IListData[]) => void;
}> = ({ handleDataSelect, listData, onUpdateListData }) => {
    const [selectedListId, setSelectedListId] = useState<number | null>(null);
    
    const updateSelectedList = (data: IListData) => {
        setSelectedListId(data.id);
        handleDataSelect(data);
    }

    return (
        <div className={styles.card}>
            <h2>Items</h2>
            <ListForm handleUpdate={onUpdateListData} />

            <ul>
                {listData.map((listItem) => (
                    <ListItem
                        key={listItem.id}
                        data={listItem}
                        handleUpdate={onUpdateListData}
                        handleSelect={updateSelectedList} 
                        isSelected={selectedListId === listItem.id} />
                ))}
            </ul>
        </div>
    );
}

export default Items;
