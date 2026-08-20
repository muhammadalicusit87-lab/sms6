const { contextBridge } = require('electron')
contextBridge.exposeInMainWorld('schoolDesktop', { version: '1.0.0', offline: true })