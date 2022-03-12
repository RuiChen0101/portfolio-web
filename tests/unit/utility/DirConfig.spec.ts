import 'mocha';
import { expect } from 'chai'

import FileSystem, { IFile } from '../../../src/utility/FileSystem';

const fileSystem: FileSystem = new FileSystem();

describe('FileSystem', function () {
    it('should get dir by absolute path', () => {
        const result: IFile = fileSystem.getDir('/portfolio', '/portfolio/gallery');
        expect(result.name).to.equal('gallery');
    });

    it('should get dir by relative path', () => {
        const result: IFile = fileSystem.getDir('/portfolio/snapshot', '../../');
        expect(result.name).to.equal('/');
    });

    it('should get dir by local path', () => {
        const result: IFile = fileSystem.getDir('/portfolio', './');
        expect(result.name).to.equal('portfolio');
    });

    it('should throw exception if result is not a dir', () => {
        expect(() => {
            fileSystem.getDir('/portfolio', './resume');
        }).to.throw('FileTypeMismatch: ./resume');
    });

    it('should throw exception if dir not found', () => {
        expect(() => {
            fileSystem.getDir('/portfolio', './not_found');
        }).to.throw('NotFound: /portfolio/not_found');
    });

    it('should get executable by absolute path', () => {
        const result: IFile = fileSystem.getExecutable('/portfolio', '/portfolio/resume');
        expect(result.name).to.equal('resume');
    });

    it('should get executable by relative path', () => {
        const result: IFile = fileSystem.getExecutable('/portfolio/snapshot', '../resume');
        expect(result.name).to.equal('resume');
    });

    it('should get executable by local path', () => {
        const result: IFile = fileSystem.getExecutable('/portfolio', './resume');
        expect(result.name).to.equal('resume');
    });

    it('should throw exception if result is not a executable', () => {
        expect(() => {
            fileSystem.getExecutable('/portfolio', './gallery');
        }).to.throw('FileTypeMismatch: ./gallery');
    });

    it('should throw exception if dir not found', () => {
        expect(() => {
            fileSystem.getExecutable('/portfolio', './not_found');
        }).to.throw('NotFound: /portfolio/not_found');
    });
});
