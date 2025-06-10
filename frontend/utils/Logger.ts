export type LogLevel = 'INFO' | 'WARN' | 'ERROR';

export function log(level: LogLevel, message: string) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${level}] ${message}`);
}
