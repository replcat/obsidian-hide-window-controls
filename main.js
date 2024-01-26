const { Plugin } = require("obsidian")

/** @type {(w: Electron.BrowserWindow) => void} */
function hideWindowControls(w) {
  w.setWindowButtonVisibility(false)
}

module.exports = class extends Plugin {
  onload() {
    if (process.platform === "darwin") {

      hideWindowControls(electronWindow)

      this.app.workspace.on("window-open", (_, { activeWindow }) => {
        hideWindowControls(activeWindow)
      })
    }
  }
}
