import ChangeDir from "./Commands/ChangeDir";
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
            } else {
                return {
                    component: 'PlanTextPrint',
                    props: {
                        text: `${command}: command not found`
                    }
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