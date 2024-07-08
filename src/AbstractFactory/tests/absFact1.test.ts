import { WindowsPanel } from "../common/WindowsPanel";
import { WindowsButton } from "../common/WindosButton";
import { UnixButton } from "../common/UnixButton";
import { UnixPanel } from "../common/UnixPanel";

test('Create windows and pannels concrets', () => {
    const winButton :WindowsButton = new WindowsButton()
    const winPanel :WindowsPanel = new WindowsPanel()
    const unixButton :UnixButton = new UnixButton()
    const unixPanel :UnixPanel = new UnixPanel()
 
    winPanel.add(winButton)
    expect(winPanel).not.toBeNull()

    unixPanel.add(unixButton)
    expect(unixPanel).not.toBeNull()

    // Deberiamos abstraer la creacion en una factory
});


