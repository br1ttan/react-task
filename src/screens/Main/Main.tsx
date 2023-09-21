import styles from './Main.module.css';
import Comments from '../../components/Comments/Comments';
import Items from "../../components/Items/Items";
import { IListData } from '../../utils/interfaces/listData.interface';
import { useState, useEffect } from 'react';

const Main = () => {
    const [selectedData, setSelectedData] = useState<IListData | null>(null);
    const [listData, setListData] = useState<IListData[]>([]);

    useEffect(() => {
        const storedData = localStorage.getItem('list');
        
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setListData(parsedData);
        }
    }, []);

    const onDataSelect = (data: IListData | null) => {
        setSelectedData(data);
    };

    const onUpdateListData = (data: IListData[]) => {
        if (data) {
            setListData(data);
            localStorage.setItem('list', JSON.stringify(data));
        }
    };

    return (
        <div className={styles.container}>
            <Items
                handleDataSelect={onDataSelect}
                listData={listData}
                onUpdateListData={onUpdateListData} />
            <Comments 
                data={listData.find((list) => list.id === selectedData?.id)} 
                onUpdateListData={onUpdateListData}
                selectedCommentId={selectedData?.id ?? null} />
        </div>
    );
}

export default Main;
