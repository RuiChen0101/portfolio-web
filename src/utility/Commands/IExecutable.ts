export interface IExecuteResult {
    pwd?: string,
    component?: string,
    props?: any,
    recommendation?: string[]
}

export default interface IExecutable {
    execute(pwd: string, args: string[]): IExecuteResult;
}