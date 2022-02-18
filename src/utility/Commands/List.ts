import IExecutable, { IExecuteResult } from "./IExecutable";
import * as Injector from "../Injector";
import DirConfig, { IFile } from "../DirConfig";

class List implements IExecutable {
    public execute(pwd: string, args: string[]): IExecuteResult {
        const path: string | undefined = args[1];
        const dirConfig = Injector.get<DirConfig>('DirConfig');
        const dir: IFile = dirConfig.getDir(pwd, path ?? './');
        return {
            props: {
                dir: dir
            }
        };
    }
}

export default List;