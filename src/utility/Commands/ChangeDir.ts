import DirConfig from "../DirConfig";
import * as Injector from "../Injector";
import IExecutable, { IExecuteResult } from "./IExecutable";

class ChangeDir implements IExecutable {
    public execute(pwd: string, args: string[]): IExecuteResult {
        const path: string | undefined = args[1];
        if (path === undefined) return {};
        const dirConfig = Injector.get<DirConfig>('DirConfig');
        try {
            const newPath = dirConfig.isDirExist(pwd, path);
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