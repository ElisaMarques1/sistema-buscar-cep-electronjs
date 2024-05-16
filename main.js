//importando modulos do electron
const { app, BrowserWindow } = require('electron')

const path = require('path')

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});


//função que cria a janela do electron
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      icon:'imagens/image.png',
    })
  
    win.loadFile('index.html')
  }

//rodando a aplicação
  app.whenReady().then(() => {
    createWindow()
  })
