import { SimpleNotifier } from "../common/SimpleNotifier";

// si queremos enviar tambien por discord, slack y telegram ? como hacemos? y si solo quiero por discord y slack ? o solo slack y
test('testing decorator1 with only a simpleNotifier', () => {
    const simpleNotifier = new SimpleNotifier()
    const message = "another message"
    expect(simpleNotifier.send(message)).toBe(`Sendidng simple notifier: ${message}\n`)
});


