import List from "./Commands/List";
import * as Injector from "./Injector";
import ChangeDir from "./Commands/ChangeDir";
import FileSystem, { IFile } from "./FileSystem";
import { IExecuteResult } from "./Commands/IExecutable";

class CommandExecutor {
    public run(command: string, pwd: string): IExecuteResult {
        if (command === '') return {};
        const args: string[] = command.split(' ');
        try {
            const command: string = args[0];
            if (command === 'cd') {
                const cd = new ChangeDir();
                return cd.execute(pwd, args);
            } else if (command === 'ls') {
                const ls = new List();
                return ls.execute(pwd, args);
            } else if (command === 'll') {
                const ls = new List();
                args.push('-l');
                return ls.execute(pwd, args);
            }
            const fileSystem: FileSystem = Injector.get<FileSystem>('FileSystem');
            try {
                const file: IFile = fileSystem.getExecutable(pwd, command);
                return {
                    component: 'NavigationPrint',
                    props: {
                        to: file.value
                    }
                }
            } catch (err: any) {
                console.log(err.message);
            }
            return {
                component: 'PlanTextPrint',
                props: {
                    text: `${command}: command not found`
                }
            }
        } catch (err: any) {
            return {
                component: 'PlanTextPrint',
                props: {
                    text: `${command}: ${err.message}`
                }
            }
        }
    }
}

export default CommandExecutor;