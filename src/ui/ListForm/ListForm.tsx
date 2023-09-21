import { generateRandomNumber } from '../../utils/functions/randomNumberGenerator';
import { IListData } from '../../utils/interfaces/listData.interface';
import styles from './ListForm.module.css';
import { FC, useState } from 'react';

const ListForm: FC<{ handleUpdate: (data: IListData[]) => void }> = ({ handleUpdate }) => {
    const [inputValue, setInputValue] = useState('');

    const onFormSubmit = (e: Event) => {
        e.preventDefault();
        
        const storedData = localStorage.getItem('list');
        const id = generateRandomNumber();
        const parsedData = storedData ? JSON.parse(storedData) : [];
        
        const newStorage = [
            ...parsedData,
            { name: inputValue, id, comments: []}
        ];
        setInputValue('');

        handleUpdate(newStorage);
    }

    return (
        <form className={styles.form} onSubmit={(e) => onFormSubmit(e)}>
            <input 
                className={styles.input} 
                type="text" 
                placeholder='Type name here...'
                required
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} />
            <button className={styles['button-add']}>Add New</button>
        </form>
    );
}

export default ListForm;
