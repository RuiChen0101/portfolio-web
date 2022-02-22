import List from "./Commands/List";
import * as Injector from "./Injector";
import ChangeDir from "./Commands/ChangeDir";
import Concatenate from "./Commands/Concatenate";
import FileSystem, { IFile } from "./FileSystem";
import { IExecuteResult } from "./Commands/IExecutable";
import SSHCopy from "./Commands/SSHCopy";

class CommandExecutor {
    private _commandStack: any[] = [];
    private _recommendations: string[] = [];
    private _currentDir = "/portfolio";

    public get commandStack(): any[] {
        return this._commandStack;
    }

    public get recommendations(): string[] {
        return this._recommendations;
    }

    public get currentDir(): string {
        return this._currentDir;
    }

    public initRecommendations(): void {
        const dir: IFile = Injector.get<FileSystem>("FileSystem").getDir(
            this.currentDir,
            "./"
        );
        this._recommendations = dir.recommendation ?? [];
    }

    public async run(command: string): Promise<void> {
        this.commandStack.push({
            component: "CommandLine",
            props: {
                dirPath: this._currentDir,
                command: command,
            },
        });
        return this._run(command, this._currentDir);
    }

    private async _run(command: string, pwd: string): Promise<void> {
        if (command === '') return;
        const args: string[] = command.split(' ');
        try {
            const command: string = args[0];
            if (command === 'cd') {
                const cd = new ChangeDir();
                this.appendResult(await cd.execute(pwd, args));
                return;
            } else if (command === 'ls') {
                const ls = new List();
                this.appendResult(await ls.execute(pwd, args));
                return;
            } else if (command === 'll') {
                const ls = new List();
                args.push('-l');
                this.appendResult(await ls.execute(pwd, args));
                return;
            } else if (command === 'cat') {
                const cat = new Concatenate();
                this.appendResult(await cat.execute(pwd, args));
                return;
            } else if (command === 'scp') {
                const scp = new SSHCopy();
                this.appendResult(await scp.execute(pwd, args));
                return;
            } else if (command === 'pwd') {
                this.appendResult({
                    component: 'PlainTextPrint',
                    props: {
                        text: pwd
                    }
                });
                return;
            } else if (command === 'clear') {
                this._commandStack = [];
                return;
            }
            const fileSystem: FileSystem = Injector.get<FileSystem>('FileSystem');
            try {
                const file: IFile = fileSystem.getExecutable(pwd, command);
                this.appendResult({
                    component: 'NavigationPrint',
                    props: {
                        to: file.value
                    }
                });
            } catch (err: any) {
                console.log(err.message);
            }
            this.appendResult({
                component: 'PlainTextPrint',
                props: {
                    text: `${command}: command not found`
                }
            });
        } catch (err: any) {
            this.appendResult({
                component: 'PlainTextPrint',
                props: {
                    text: `${command}: ${err.message}`
                }
            });
        }
    }

    private appendResult(result: IExecuteResult): void {
        if (result.pwd !== undefined) this._currentDir = result.pwd;
        if (result.recommendation !== undefined) {
            this._recommendations = result.recommendation;
        }
        if (result.component !== undefined) {
            this.commandStack.push({
                component: result.component,
                props: result.props,
            });
        }
    }
}

export default CommandExecutor;