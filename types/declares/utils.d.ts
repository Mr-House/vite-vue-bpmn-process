declare module '@/utils/Logger' {
  export class Logger {
    constructor()
    protected type: string[]
    protected typeColor(type: string): string
    isArray(obj: any): boolean
    getInstance(): Logger
    print(type: string, text: any, back?: boolean): void
    printBack(type: string, text: any): void
    pretty(text: any, title: string, ...type: any[]): void
    prettyPrimary(title: string, ...type: any[]): void
    prettySuccess(title: string, ...type: any[]): void
    prettyWarn(title: string, ...type: any[]): void
    prettyError(title: string, ...type: any[]): void
    prettyInfo(title: string, ...type: any[]): void
  }
  export default Logger
}
