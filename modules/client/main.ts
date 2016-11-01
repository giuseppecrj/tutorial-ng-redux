import { element, bootstrap } from 'angular'
import app from './app/app.client.component'

let container = document.getElementById('app')

function initiateHotReloader (window) {
  if (window.location.origin.match(/localhost/)) {
    System.trace = true
    if ((!System.hotReloader)) {
      System.import('systemjs-hot-reloader').then(HotReloader => {
        System.hotReloader = new HotReloader.default('http://localhost:5776/') // eslint-disable-line new-cap
      })
    }
  }
}

element(document).ready(() => {
  initiateHotReloader(window)
  bootstrap(container, [app.name], {
    strictDi: true
  })
})

export function __unload () {
  let newcontainer = document.getElementById('app')
  let noAngularDOM = newcontainer.cloneNode(true)
  newcontainer.remove()
  document.body.insertBefore(noAngularDOM.cloneNode(true), document.body.firstChild)
  // document.documentElement.appendChild(noAngularDOM.cloneNode(true))
  // document.documentElement.insertBefore(noAngularDOM.cloneNode(true), document.body)
}
