import angular from 'angular'
import CommonModule from './common/common'
import ComponentsModule from './components/components'

import template from './app.client.component.html'
import './app.client.component.css'

const AppComponent = { template }

let app = angular.module('app', [
  CommonModule.name,
  ComponentsModule.name
])
.component('app', AppComponent)

export default app
