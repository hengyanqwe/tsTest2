export enum formEnum{
    "test1"='1',
    "test2"='2',
}

export type formType=keyof typeof formEnum;
