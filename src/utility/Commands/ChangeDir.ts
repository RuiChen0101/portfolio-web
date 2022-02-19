import * as Injector from "../Injector";
import FileSystem, { IFile } from "../FileSystem";
import IExecutable, { IExecuteResult } from "./IExecutable";

class ChangeDir implements IExecutable {
    public async execute(pwd: string, args: string[]): Promise<IExecuteResult> {
        const path: string | undefined = args[1];
        if (path === undefined) return {};
        const fileSystem = Injector.get<FileSystem>('FileSystem');
        try {
            const dir: IFile = fileSystem.getDir(pwd, path);
            const newPath: string = '/' + fileSystem.constructPath(pwd, path).join('/');
            return { pwd: newPath, recommendation: dir.recommendation ?? [] };
        } catch (err: any) {
            return {
                component: 'PlainTextPrint',
                props: {
                    text: `cd: ${path}: No such file or directory`
                }
            }
        }
    }
}

export default ChangeDir;