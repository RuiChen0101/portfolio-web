import EFileType from "@/enum/EFileType";
import { IFile } from "./FileSystem";

const fileRoot: IFile = {
    type: EFileType.DIR,
    name: '/',
    value: '/',
    date: 'Feb 18 20:24',
    size: '4096',
    subFiles: {
        'portfolio': {
            type: EFileType.DIR,
            name: 'portfolio',
            value: '/portfolio',
            date: 'Feb 18 20:24',
            size: '4096',
            subFiles: {
                'resume_zh': {
                    type: EFileType.EXECUTABLE,
                    name: 'resume_zh',
                    value: '/resume_zh',
                    date: 'Feb 18 20:24',
                    size: '0'
                },
                'resume_en': {
                    type: EFileType.EXECUTABLE,
                    date: 'Feb 18 20:24',
                    name: 'resume_en',
                    value: '/resume_en',
                    size: '0'
                },
                'linkin': {
                    type: EFileType.LINK,
                    name: 'linkin',
                    value: 'https://www.linkedin.com/in/rui0101/',
                    date: 'Feb 18 20:24',
                    size: '0'
                },
                'github': {
                    type: EFileType.LINK,
                    name: 'github',
                    value: 'https://github.com/RuiChen0101',
                    date: 'Feb 18 20:24',
                    size: '0'
                },
                'download': {
                    type: EFileType.DIR,
                    name: 'download',
                    value: '/download',
                    date: 'Feb 18 20:24',
                    size: '4096',
                    subFiles: {
                        'resume_zh.pdf': {
                            type: EFileType.FILE,
                            name: 'resume_zh.pdf',
                            value: '/resume_zh',
                            date: 'Feb 18 20:24',
                            size: '0'
                        },
                        'resume_en.pdf': {
                            type: EFileType.FILE,
                            name: 'resume_en.pdf',
                            value: '/resume_en',
                            date: 'Feb 18 20:24',
                            size: '0'
                        },
                    }
                },
                'snapshot': {
                    type: EFileType.DIR,
                    name: 'snapshot',
                    value: '/snapshot',
                    date: 'Feb 18 20:24',
                    size: '4096',
                    subFiles: {}
                }
            }
        }
    }
}

export default fileRoot;