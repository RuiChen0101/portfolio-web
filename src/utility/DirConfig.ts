import FileTypeMismatchException from "@/exception/FileTypeMismatchException";
import NotFoundException from "@/exception/NotFoundException";

enum EFileType {
    EXECUTABLE,
    LINK,
    DIR,
}

interface IFile {
    type: EFileType,
    name: string,
    value?: string,
    subFiles?: { [key: string]: IFile }
}

const fileRoot: IFile = {
    type: EFileType.DIR,
    name: '/',
    value: '/',
    subFiles: {
        'portfolio': {
            type: EFileType.DIR,
            name: 'portfolio',
            value: '/portfolio',
            subFiles: {
                'resume_zh': {
                    type: EFileType.EXECUTABLE,
                    name: 'resume_zh',
                    value: '/resume_zh'
                },
                'resume_en': {
                    type: EFileType.EXECUTABLE,
                    name: 'resume_en',
                    value: '/resume_en'
                },
                'snapshot': {
                    type: EFileType.DIR,
                    name: 'snapshot',
                    value: '/snapshot',
                    subFiles: {}
                }
            }
        }
    }
}

class DirConfig {
    public getDir(pwd: string, path: string): IFile {
        const result: IFile = this.getFile(this.constructPath(pwd, path));
        if (result.type !== EFileType.DIR) {
            throw new FileTypeMismatchException(path);
        }
        return result;
    }

    public getExecutable(pwd: string, path: string): IFile {
        const result: IFile = this.getFile(this.constructPath(pwd, path));
        if (result.type !== EFileType.EXECUTABLE) {
            throw new FileTypeMismatchException(path);
        }
        return result;
    }

    public isDirExist(pwd: string, path: string): string {
        const constructedPath: string[] = this.constructPath(pwd, path);
        this.getFile(constructedPath);
        return '/' + constructedPath.join('/');
    }

    private constructPath(pwd: string, path: string): string[] {
        const paths: string[] = path.split('/').filter((item) => {
            return item !== '';
        });
        const pwds: string[] = pwd.split('/').filter((item) => {
            return item !== '';
        });
        let result: string[] = [];
        if (!path.startsWith('/')) {
            result = pwds;
        }
        for (const path of paths) {
            if (path === '..') {
                result.pop();
            } else if (path === '.') {
                continue;
            } else {
                result.push(path);
            }
        }
        return result;
    }

    private getFile(path: string[]): IFile {
        let result: IFile = fileRoot;
        for (const dir of path) {
            if (result.subFiles === undefined || result.subFiles![dir] === undefined) {
                throw new NotFoundException('/' + path.join('/'));
            }
            result = result.subFiles![dir];
        }
        return result;
    }
}

export default DirConfig;
export { IFile, EFileType };