import 'mocha';
import { expect } from 'chai'

import FileSystem, { IFile } from '../../../src/utility/FileSystem';

const FileSystem: FileSystem = new FileSystem();

describe('FileSystem', function () {
    it('should get dir by absolute path', () => {
        const result: IFile = FileSystem.getDir('/portfolio', '/portfolio/snapshot');
        expect(result.name).to.equal('snapshot');
    });

    it('should get dir by relative path', () => {
        const result: IFile = FileSystem.getDir('/portfolio/snapshot', '../../');
        expect(result.name).to.equal('/');
    });

    it('should get dir by local path', () => {
        const result: IFile = FileSystem.getDir('/portfolio', './');
        expect(result.name).to.equal('portfolio');
    });

    it('should throw exception if result is not a dir', () => {
        expect(() => {
            FileSystem.getDir('/portfolio', './resume_zh');
        }).to.throw('FileTypeMismatch: ./resume_zh');
    });

    it('should throw exception if dir not found', () => {
        expect(() => {
            FileSystem.getDir('/portfolio', './not_found');
        }).to.throw('NotFound: portfolio/not_found');
    });

    it('should get executable by absolute path', () => {
        const result: IFile = FileSystem.getExecutable('/portfolio', '/portfolio/resume_zh');
        expect(result.name).to.equal('resume_zh');
    });

    it('should get executable by relative path', () => {
        const result: IFile = FileSystem.getExecutable('/portfolio/snapshot', '../resume_zh');
        expect(result.name).to.equal('resume_zh');
    });

    it('should get executable by local path', () => {
        const result: IFile = FileSystem.getExecutable('/portfolio', './resume_zh');
        expect(result.name).to.equal('resume_zh');
    });

    it('should throw exception if result is not a executable', () => {
        expect(() => {
            FileSystem.getExecutable('/portfolio', './snapshot');
        }).to.throw('FileTypeMismatch: ./snapshot');
    });

    it('should throw exception if dir not found', () => {
        expect(() => {
            FileSystem.getExecutable('/portfolio', './not_found');
        }).to.throw('NotFound: portfolio/not_found');
    });
});
