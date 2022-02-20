import * as Injector from "./Injector";
import FileSystem, { IFile } from "./FileSystem";

class KeyboardHandler {
    private history: string[] = [];
    private command: string[] = [];
    private cursorPosition = 0;
    private historyCursor = 0;
    private autocompleteCandidate?: string[] = undefined;
    private autocompleteIndex = 0;
    private commandComplete = false;

    public dispatchEvent(pwd: string, event: KeyboardEvent): void {
        const key: string = event.key;
        switch (key) {
            case 'Backspace':
                this.command.splice(this.cursorPosition - 1, 1);
                this.cursorPosition = Math.max(0, this.cursorPosition - 1);
                this.autocompleteCandidate = undefined;
                this.autocompleteIndex = 0;
                return;
            case 'Delete':
                this.command.splice(this.cursorPosition, 1);
                this.autocompleteCandidate = undefined;
                this.autocompleteIndex = 0;
                return;
            case 'ArrowLeft':
                this.cursorPosition = Math.max(0, this.cursorPosition - 1);
                return;
            case 'ArrowRight':
                this.cursorPosition = Math.min(this.command.length, this.cursorPosition + 1);
                return;
            case 'Home':
                this.cursorPosition = 0;
                return;
            case 'End':
                this.cursorPosition = this.command.length;
                return;
            case 'Tab':
                event.preventDefault();
                this.autocomplete(pwd, this.getCommand());
                return;
            case 'ArrowUp':
                event.preventDefault();
                this.historyCursor = Math.min(this.history.length, this.historyCursor + 1);
                this.loadHistory(this.history[this.historyCursor - 1]);
                return;
            case 'ArrowDown':
                event.preventDefault();
                this.historyCursor = Math.max(0, this.historyCursor - 1);
                this.loadHistory(this.history[this.historyCursor - 1]);
                return;
            case 'Enter':
                event.preventDefault();
                this.commandComplete = true;
                this.insertHistory(this.getCommand());
                return;
            case ' ':
                this.command.splice(this.cursorPosition, 0, '\xa0');
                this.cursorPosition++;
                return;
        }
        if (RegExp(/^[a-zA-Z0-9/.-_:"'=]$/).test(key)) {
            this.command.splice(this.cursorPosition, 0, key);
            this.cursorPosition++;
            this.historyCursor = 0;
            this.autocompleteCandidate = undefined;
            this.autocompleteIndex = 0;
        }
    }

    public insertHistory(history: string): void {
        this.history.unshift(history);
    }

    public getCommandChars(): string[] { return this.command; }

    public getCommand(): string { return this.command.join('').replaceAll("\xa0", ' '); }

    public hasCommand(): boolean {
        return this.commandComplete;
    }

    public clear(): void {
        this.command = [];
        this.cursorPosition = 0;
        this.historyCursor = 0;
        this.autocompleteCandidate = undefined;
        this.autocompleteIndex = 0;
        this.commandComplete = false;
    }

    public getCursorPosition(): number { return this.cursorPosition; }

    private autocomplete(pwd: string, command: string): void {
        const args: string[] = command.split(' ');
        const last: string | undefined = args.pop();
        if (last === undefined || !(last!.startsWith('.') || last!.startsWith('/'))) return;
        const path: string[] = last.split('/');
        if (last === '.' || last === '..') path.push('');
        const partialDir = path.pop();
        if (this.autocompleteCandidate !== undefined) {
            this.autocompleteIndex = (this.autocompleteIndex + 1) % this.autocompleteCandidate.length;
            path.push(this.autocompleteCandidate[this.autocompleteIndex]);
            args.push(path.join(('/')));
            this.loadAutocomplete(args.join(' '));
            return;
        }
        const findDir = last === '/' ? '/' : path.join('/');
        try {
            const dir: IFile = Injector.get<FileSystem>('FileSystem').getDir(pwd, findDir);
            const keys: string[] = Object.keys(dir.subFiles ?? {}).filter((item) => RegExp(`^${partialDir}`).test(item));
            if (keys.length === 0) return;
            this.autocompleteCandidate = keys;
            path.push(this.autocompleteCandidate[this.autocompleteIndex]);
            args.push(path.join(('/')));
            this.loadAutocomplete(args.join(' '));
            return;
        } catch (err) {
            return;
        }
    }

    private loadHistory(history: string): void {
        this.command = [];
        this.cursorPosition = 0;
        this.autocompleteCandidate = undefined;
        this.autocompleteIndex = 0;
        this.commandComplete = false;
        this.loadText(history);
    }

    private loadAutocomplete(autocomplete: string): void {
        this.command = [];
        this.cursorPosition = 0;
        this.commandComplete = false;
        this.loadText(autocomplete);
    }

    private loadText(text: string): void {
        if (text === undefined || text === '') return;
        for (const ch of text) {
            if (ch === ' ') {
                this.command.push('\xa0');
                continue;
            }
            this.command.push(ch);
        }
        this.cursorPosition = this.command.length;
    }
}

export default KeyboardHandler;