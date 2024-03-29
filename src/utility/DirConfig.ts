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
            recommendation: ['./resume', 'cd ./gallery', 'cd ./download'],
            subFiles: {
                'resume': {
                    type: EFileType.EXECUTABLE,
                    date: 'Feb 18 20:24',
                    name: 'resume',
                    value: '/resume',
                    size: '230400'
                },
                'LICENSE': {
                    type: EFileType.FILE,
                    name: 'LICENSE',
                    value: 'https://firebasestorage.googleapis.com/v0/b/ruichen-porfolio.appspot.com/o/LICENSE?alt=media&token=c89c5992-a33e-4265-9788-9dc0a89d3c3c',
                    date: 'Feb 19 21:39',
                    size: '1087'
                },
                'gallery': {
                    type: EFileType.DIR,
                    name: 'gallery',
                    value: '/gallery',
                    date: 'Feb 20 14:20',
                    size: '4096',
                    recommendation: ['cd ../', 'cat ./tigermaster.jpg', 'cat ./scam.jpg', 'cat ./cincinnati.jpg', 'cat ./line.jpg', 'cat ./codingape.jpg'],
                    subFiles: {
                        'tigermaster.jpg': {
                            type: EFileType.IMAGE,
                            name: 'tigermaster.jpg',
                            description: 'ScreenShots of TigerMaster, product of Federal IntelliGence Co., Ltd.',
                            value: 'https://firebasestorage.googleapis.com/v0/b/ruichen-porfolio.appspot.com/o/gallery%2Ftigermaster.jpg?alt=media&token=3205bf10-6197-4bd6-a6bb-ae82a0acf525',
                            date: 'Feb 20 14:48',
                            size: '76469'
                        },
                        'scam.jpg': {
                            type: EFileType.IMAGE,
                            name: 'scam.jpg',
                            description: 'Smart camera with object detection capability base on Google Edge TPU.',
                            value: 'https://firebasestorage.googleapis.com/v0/b/ruichen-porfolio.appspot.com/o/gallery%2Fscam.jpg?alt=media&token=9fa06414-cd37-4c22-94a2-a04f1195df07',
                            date: 'Feb 20 23:16',
                            size: '36099'
                        },
                        'cincinnati.jpg': {
                            type: EFileType.IMAGE,
                            name: 'cincinnati.jpg',
                            description: 'Studying machine learning and industrial 4.0 at University of Cincinnati as exchange student.',
                            value: 'https://firebasestorage.googleapis.com/v0/b/ruichen-porfolio.appspot.com/o/gallery%2Fcincinnati.jpg?alt=media&token=94b69e6a-7bbb-407b-b4db-28301c9e343e',
                            date: 'Feb 20 14:48',
                            size: '125102'
                        },
                        'line.jpg': {
                            type: EFileType.IMAGE,
                            name: 'line.jpg',
                            description: 'Pitching our graduate project to LINE Developer Relations Team.',
                            value: 'https://firebasestorage.googleapis.com/v0/b/ruichen-porfolio.appspot.com/o/gallery%2Fline.jpg?alt=media&token=ae58bd88-503c-42bc-b78a-0a851a3e0e33',
                            date: 'Feb 20 14:48',
                            size: '73353'
                        },
                        'codingape.jpg': {
                            type: EFileType.IMAGE,
                            name: 'codingape.jpg',
                            description: 'Teaching u12 children programing and logical thinking.',
                            value: 'https://firebasestorage.googleapis.com/v0/b/ruichen-porfolio.appspot.com/o/gallery%2Fcodingape.jpg?alt=media&token=622ba8f4-61e7-4b65-b002-187d1be09c21',
                            date: 'Feb 20 14:48',
                            size: '73258'
                        }
                    }
                },
                'download': {
                    type: EFileType.DIR,
                    name: 'download',
                    value: '/download',
                    date: 'Feb 18 20:24',
                    size: '4096',
                    recommendation: ['cd ../', 'scp ./resume_en.pdf'],
                    subFiles: {
                        'resume_en.pdf': {
                            type: EFileType.FILE,
                            name: 'resume_en.pdf',
                            value: 'https://firebasestorage.googleapis.com/v0/b/ruichen-porfolio.appspot.com/o/resume_en.pdf?alt=media&token=a823a949-249e-46b7-b885-a87bcb2cc978',
                            date: 'Sept 22 23:20',
                            size: '432724'
                        },
                    }
                },
            }
        }
    }
}

export default fileRoot;