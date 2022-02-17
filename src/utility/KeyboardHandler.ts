
class KeyboardHandler {
    private command: string[] = [];
    private cursorPosition = 0;

    public dispatchEvent(event: KeyboardEvent): void {
        const key: string = event.key;
        console.log(key);
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
        }
        if (RegExp(/^[a-zA-Z0-9 /.]$/).test(key)) {
            this.command.splice(this.cursorPosition, 0, key);
            this.cursorPosition++;
        }
        console.log(this.command);
        console.log(this.cursorPosition);
    }

    public getCommandChars(): string[] { return this.command; }

    public getCommand(): string { return this.command.join(''); }

    public clear(): void {
        this.command = [];
        this.cursorPosition = 0;
    }

    public getCursorPosition(): number { return this.cursorPosition; }
}

export default KeyboardHandler;