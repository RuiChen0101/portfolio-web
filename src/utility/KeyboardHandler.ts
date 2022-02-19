
class KeyboardHandler {
    private history: string[] = [];
    private command: string[] = [];
    private cursorPosition = 0;
    private historyCursor = 0;
    private commandComplete = false;

    public dispatchEvent(event: KeyboardEvent): void {
        const key: string = event.key;
        switch (key) {
            case 'Backspace':
                this.command.splice(this.cursorPosition - 1, 1);
                this.cursorPosition = Math.max(0, this.cursorPosition - 1);
                return;
            case 'Delete':
                this.command.splice(this.cursorPosition, 1);
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
                return;
            case 'ArrowUp':
                event.preventDefault();
                this.historyCursor = Math.min(this.history.length, this.historyCursor + 1);
                this.loadText(this.history[this.historyCursor - 1]);
                return;
            case 'ArrowDown':
                event.preventDefault();
                this.historyCursor = Math.max(0, this.historyCursor - 1);
                this.loadText(this.history[this.historyCursor - 1]);
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
        this.commandComplete = false;
    }

    public getCursorPosition(): number { return this.cursorPosition; }

    private loadText(history: string): void {
        this.command = [];
        this.cursorPosition = 0;
        this.commandComplete = false;
        if (history === undefined || history === '') return;
        for (const ch of history) {
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