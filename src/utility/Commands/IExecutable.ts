export interface IExecuteResult {
    pwd?: string,
    component?: string,
    props?: any
}

export default interface IExecutable {
    execute(pwd: string, args: string[]): IExecuteResult;
}