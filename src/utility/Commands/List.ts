import IExecutable, { IExecuteResult } from "./IExecutable";
import * as Injector from "../Injector";
import FileSystem, { IFile } from "../FileSystem";

class List implements IExecutable {
    public execute(pwd: string, args: string[]): IExecuteResult {
        let path: string | undefined = undefined;
        let isLong = false;
        for (const arg of args) {
            if (arg !== 'ls' && arg !== 'll' && !arg.startsWith('-') && path === undefined) {
                path = arg;
            } else if (arg === '-l') {
                isLong = true;
            }
        }
        const FileSystem = Injector.get<FileSystem>('FileSystem');
        const dir: IFile = FileSystem.getDir(pwd, path ?? './');
        return {
            component: isLong ? 'LongListPrint' : 'ListPrint',
            props: {
                dir: dir
            }
        };
    }
}

export default List;