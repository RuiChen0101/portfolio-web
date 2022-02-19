import * as Injector from "../Injector";
import FileSystem, { IFile } from "../FileSystem";
import IExecutable, { IExecuteResult } from "./IExecutable";
import FileTypeMismatchException from "@/exception/FileTypeMismatchException";

class Concatenate implements IExecutable {
    public async execute(pwd: string, args: string[]): Promise<IExecuteResult> {
        const path: string | undefined = args[1];
        if (path === undefined) return {};
        const fileSystem = Injector.get<FileSystem>('FileSystem');
        try {
            const file: IFile = fileSystem.getFile(pwd, path);
            if (parseInt(file.size) >= 1048576) {
                return {
                    component: 'PlainTextPrint',
                    props: {
                        text: `cat: ${path}: File exceed 1MB size limit.`
                    }
                }
            }
            const res = await fetch(file.value!);
            return {
                component: 'PlainTextPrint',
                props: {
                    text: await res.text()
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

export default Concatenate;