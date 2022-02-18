import FileSystem from "../FileSystem";
import * as Injector from "../Injector";
import IExecutable, { IExecuteResult } from "./IExecutable";

class ChangeDir implements IExecutable {
    public execute(pwd: string, args: string[]): IExecuteResult {
        const path: string | undefined = args[1];
        if (path === undefined) return {};
        const FileSystem = Injector.get<FileSystem>('FileSystem');
        try {
            const newPath = FileSystem.isDirExist(pwd, path);
            return { pwd: newPath };
        } catch (err: any) {
            return {
                component: 'PlanTextPrint',
                props: {
                    text: `cd: ${path}: No such file or directory`
                }
            }
        }
    }
}

export default ChangeDir;