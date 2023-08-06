export interface expenseDetails {
  _id?: string;
  title: string;
  amount?: number;
  date?: Date;
}

export interface modalTypeDetails {
  title: string;
  onPress: (modalDetails) => void;
  type: modalTypeEnum;
}

export enum modalTypeEnum {
  CREATE = 0,
  EDIT = 1,
  FILTER = 2,
}
