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
            recommendation: ['./resume', './gallery', 'cd ./download'],
            subFiles: {
                'resume': {
                    type: EFileType.EXECUTABLE,
                    date: 'Feb 18 20:24',
                    name: 'resume',
                    value: '/resume',
                    size: '230400'
                },
                'gallery': {
                    type: EFileType.EXECUTABLE,
                    name: 'gallery',
                    value: '/gallery',
                    date: 'Feb 18 20:24',
                    size: '0',
                },
                'LICENSE': {
                    type: EFileType.FILE,
                    name: 'LICENSE',
                    value: 'https://firebasestorage.googleapis.com/v0/b/ruichen-porfolio.appspot.com/o/LICENSE?alt=media&token=c89c5992-a33e-4265-9788-9dc0a89d3c3c',
                    date: 'Feb 18 20:24',
                    size: '1087'
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
                            value: 'https://firebasestorage.googleapis.com/v0/b/ruichen-porfolio.appspot.com/o/resume_zh.pdf?alt=media&token=f24b2341-26bc-4004-888b-bdefb17d0fa5',
                            date: 'Feb 18 20:24',
                            size: '20641805'
                        },
                        'resume_en.pdf': {
                            type: EFileType.FILE,
                            name: 'resume_en.pdf',
                            value: 'https://firebasestorage.googleapis.com/v0/b/ruichen-porfolio.appspot.com/o/resume_en.pdf?alt=media&token=f4f9d95b-5c8e-48c1-8b01-bea89ae07f50',
                            date: 'Feb 18 20:24',
                            size: '20355759'
                        },
                    }
                },
            }
        }
    }
}

export default fileRoot;