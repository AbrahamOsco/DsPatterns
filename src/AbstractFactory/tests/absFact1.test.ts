import { WindowsPanel } from "../common/WindowsPanel";
import { WindowsButton } from "../common/WindosButton";

test('Create windows and pannels concrets', () => {
    const button = new WindowsButton()
    const panel = new WindowsPanel()
    panel.add(button)
    expect(panel).not.toBeNull()
    // Deberiamos abstraer la creacion en una factory
});


