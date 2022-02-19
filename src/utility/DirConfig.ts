import EFileType from "@/enum/EFileType";
import { IFile } from "./FileSystem";

const fileRoot: IFile = {
    type: EFileType.DIR,
    name: '/',
    value: '/',
    date: 'Feb 18 20:24',
    size: '4096',
    recommendation: ['cd /portfolio'],
    subFiles: {
        'portfolio': {
            type: EFileType.DIR,
            name: 'portfolio',
            value: '/portfolio',
            date: 'Feb 18 20:24',
            size: '4096',
            recommendation: ['./resume', 'cd ./snapshot', 'cd ./download'],
            subFiles: {
                'resume': {
                    type: EFileType.EXECUTABLE,
                    date: 'Feb 18 20:24',
                    name: 'resume',
                    value: '/resume',
                    size: '0'
                },
                'download': {
                    type: EFileType.DIR,
                    name: 'download',
                    value: '/download',
                    date: 'Feb 18 20:24',
                    size: '4096',
                    recommendation: ['cd ../', 'scp ./resume_zh.pdf', 'scp ./resume_en.pdf'],
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
                    recommendation: ['cd ../'],
                    subFiles: {}
                }
            }
        }
    }
}

export default fileRoot;