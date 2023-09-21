import { FC, useState } from 'react';
import styles from './CommentForm.module.css';
import { IListData } from '../../utils/interfaces/listData.interface';

const CommentForm: FC<{ selectedCommentId: number | null, onUpdateListData: (data: IListData[]) => void }> = ({ selectedCommentId, onUpdateListData }) => {
    const [textAreaValue, setTextArea] = useState('');
    const [commentColor, setCommentColor] = useState('#000');

    const onFormSubmit = (e: Event) => {
        e.preventDefault();

        if (selectedCommentId) {
            const storedData = localStorage.getItem('list');
            const listData = JSON.parse(storedData) || [];

            const updatedData = listData.map((data) => {
                if (data.id === selectedCommentId) {
                    const updatedComments = [
                        ...data.comments,
                        {
                            name: textAreaValue,
                            color: commentColor,
                        },
                    ];

                    return {
                        ...data,
                        comments: updatedComments,
                    };
                }
                return data;
            });
            
            
            setTextArea('');
            onUpdateListData(updatedData);
            localStorage.setItem('list', JSON.stringify(updatedData));
        }
    }

    return (
        <form className={styles.form} onSubmit={onFormSubmit}>
            <input type="color" value={commentColor} onChange={(e) => setCommentColor(e.target.value)} />
            <textarea
                className={styles.textarea}
                placeholder='Type name here...'
                required
                value={textAreaValue}
                onChange={(e) => setTextArea(e.target.value)}
            />
            <button className={styles['button-add']}>Add New</button>
        </form>
    );
}

export default CommentForm;
