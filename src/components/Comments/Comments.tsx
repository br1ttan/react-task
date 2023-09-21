import { FC } from 'react';
import styles from './Comments.module.css';
import { IListData } from '../../utils/interfaces/listData.interface';
import Comment from '../../ui/Comment/Comment';
import CommentForm from '../../ui/CommentForm/CommentForm';

const Comments: FC<{ data: IListData | null, onUpdateListData: (data: IListData[]) => void }> = ({ data, onUpdateListData }) => {
    return (
        <div className={styles.card}>
            <h2>Comments #{ data?.id }</h2>
            {data && (
                data?.comments?.map((comment, i) => (
                    <Comment key={i} color={comment.color} text={comment.name} />
                )
            )
            )}
            <CommentForm onUpdateListData={onUpdateListData} selectedCommentId={data?.id ?? null} />
        </div>
    );
}

export default Comments;
