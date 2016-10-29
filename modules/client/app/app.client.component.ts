import angular from 'angular'
import CommonModule from './common/common'
import ComponentsModule from './components/components'

import template from './app.client.component.html'
import './app.client.component.css'

import { Store } from './app.client.store'
import { categories, initialCategories } from './components/categories/categories.state'

const store = new Store(categories, initialCategories)

const AppComponent = { template }

let app = angular
  .module('app', [
    CommonModule.name,
    ComponentsModule.name
  ])
  .value('store', store)
  .component('app', AppComponent)

export default app
