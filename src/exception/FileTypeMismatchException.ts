export default class FileTypeMismatchException extends Error {
    constructor(message = '') {
        super('FileTypeMismatch: ' + message);
    }
}