export default class NotFoundException extends Error {
    constructor(message = '') {
        super('NotFound: ' + message);
    }
}