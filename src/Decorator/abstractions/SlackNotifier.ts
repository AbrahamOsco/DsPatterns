import { BaseNotifier } from "./BaseNotifier";

export class SlackNotifier extends BaseNotifier{
    
    public send(aMessage: string): string {
        return super.send(aMessage) + `Sending slack notifier: ${aMessage}\n`;
    }
    
}