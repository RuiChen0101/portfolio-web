import * as Injector from "../Injector";
import FileSystem, { IFile } from "../FileSystem";
import IExecutable, { IExecuteResult } from "./IExecutable";
import FileTypeMismatchException from "@/exception/FileTypeMismatchException";

class SSHCopy implements IExecutable {
    public async execute(pwd: string, args: string[]): Promise<IExecuteResult> {
        const path: string | undefined = args[1];
        if (path === undefined) return {};
        const fileSystem = Injector.get<FileSystem>('FileSystem');
        try {
            const file: IFile = fileSystem.getFile(pwd, path);
            const res = await fetch(file.value!);
            const downloadFile = URL.createObjectURL(await res.blob());
            const link = document.createElement('a');
            link.setAttribute('href', downloadFile);
            link.setAttribute('download', file.name);
            link.click();
            return {
                component: 'PlainTextPrint',
                props: {
                    text: `scp: ${file.name}: Download success!`
                }
            }
        } catch (err: any) {
            if (err instanceof FileTypeMismatchException) {
                return {
                    component: 'PlainTextPrint',
                    props: {
                        text: `cat: ${path}: Is not a file`
                    }
                }
            }
            return {
                component: 'PlainTextPrint',
                props: {
                    text: `cat: ${path}: No such file or directory`
                }
            }
        }
    }
}

export default SSHCopy;