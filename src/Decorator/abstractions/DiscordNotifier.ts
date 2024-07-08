import { BaseNotifier } from "./BaseNotifier";

export class DiscordNotifier extends BaseNotifier{

    public send(aMessage: string): string {
        return super.send(aMessage) + `Sending discord notifier: ${aMessage}\n`;
    }

}