import { ICommentData } from "./commentData.interface";

export interface IListData {
    readonly comments?: ICommentData[];
    readonly id: number;
    readonly name: string;
    readonly isSelected?: boolean;
}
