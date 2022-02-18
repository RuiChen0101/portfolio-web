import 'mocha';
import { expect } from 'chai'

import DirConfig, { IFile } from '../../../src/utility/DirConfig';

const dirConfig: DirConfig = new DirConfig();

describe('DirConfig', function () {
    it('should get dir by absolute path', () => {
        const result: IFile = dirConfig.getDir('/portfolio', '/portfolio/snapshot');
        expect(result.name).to.equal('snapshot');
    });

    it('should get dir by relative path', () => {
        const result: IFile = dirConfig.getDir('/portfolio/snapshot', '../../');
        expect(result.name).to.equal('/');
    });

    it('should get dir by local path', () => {
        const result: IFile = dirConfig.getDir('/portfolio', './');
        expect(result.name).to.equal('portfolio');
    });

    it('should throw exception if result is not a dir', () => {
        expect(() => {
            dirConfig.getDir('/portfolio', './resume_zh');
        }).to.throw('FileTypeMismatch: ./resume_zh');
    });

    it('should throw exception if dir not found', () => {
        expect(() => {
            dirConfig.getDir('/portfolio', './not_found');
        }).to.throw('NotFound: portfolio/not_found');
    });

    it('should get executable by absolute path', () => {
        const result: IFile = dirConfig.getExecutable('/portfolio', '/portfolio/resume_zh');
        expect(result.name).to.equal('resume_zh');
    });

    it('should get executable by relative path', () => {
        const result: IFile = dirConfig.getExecutable('/portfolio/snapshot', '../resume_zh');
        expect(result.name).to.equal('resume_zh');
    });

    it('should get executable by local path', () => {
        const result: IFile = dirConfig.getExecutable('/portfolio', './resume_zh');
        expect(result.name).to.equal('resume_zh');
    });

    it('should throw exception if result is not a executable', () => {
        expect(() => {
            dirConfig.getExecutable('/portfolio', './snapshot');
        }).to.throw('FileTypeMismatch: ./snapshot');
    });

    it('should throw exception if dir not found', () => {
        expect(() => {
            dirConfig.getExecutable('/portfolio', './not_found');
        }).to.throw('NotFound: portfolio/not_found');
    });
});
