import { DiscordNotifier } from "../abstractions/DiscordNotifier";
import { SlackNotifier } from "../abstractions/SlackNotifier";
import { SimpleNotifier } from "../common/SimpleNotifier";

test('testing sending a notifier using simple and discord ', () => {
    const simpleNotifier = new SimpleNotifier();
    const discordNotif = new DiscordNotifier(simpleNotifier);
    const message = "hello world"
    expect(discordNotif.send(message)).toBe(`Sendidng simple notifier: ${message}\nSending discord notifier: ${message}\n`)
});


test('testing sending a notifier using simple, slack and then discord ', () => {
    const slackNotif = new SlackNotifier(new SimpleNotifier); 
    const discordNotif = new DiscordNotifier(slackNotif);
    const message = "another message"
    expect(discordNotif.send(message)).toBe(`Sendidng simple notifier: ${message}\nSending slack notifier: ${message}\nSending discord notifier: ${message}\n`)
});


