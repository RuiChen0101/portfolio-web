
class KeyboardHandler {
    private command: string[] = [];
    private cursorPosition = 0;

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
            case ' ':
                this.command.splice(this.cursorPosition, 0, '\xa0');
                this.cursorPosition++;
                return;
        }
        if (RegExp(/^[a-zA-Z0-9/.-_:"'=]$/).test(key)) {
            this.command.splice(this.cursorPosition, 0, key);
            this.cursorPosition++;
        }
    }

    public getCommandChars(): string[] { return this.command; }

    public getCommand(): string { return this.command.join('').replaceAll("\xa0", ' '); }

    public clear(): void {
        this.command = [];
        this.cursorPosition = 0;
    }

    public getCursorPosition(): number { return this.cursorPosition; }

    // private appendText(text: string): void {

    // }
}

export default KeyboardHandler;