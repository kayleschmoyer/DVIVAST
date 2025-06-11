export class Logger {
  private static format(level: string, message: string): string {
    const timestamp = new Date().toISOString();
    return `[${level}] ${timestamp} - ${message}`;
  }

  static info(message: string): void {
    console.log(this.format('INFO', message));
  }

  static warn(message: string): void {
    console.warn(this.format('WARN', message));
  }

  static error(message: string, error?: any): void {
    const detail = error ? `${message}: ${error instanceof Error ? error.message : error}` : message;
    console.error(this.format('ERROR', `Something went wrong: ${detail}`));
  }
}

export default Logger;
