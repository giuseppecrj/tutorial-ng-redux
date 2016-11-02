import angular from 'angular'
import CommonModule from './common/common'
import ComponentsModule from './components/components'

import { categories, initialCategories } from './components/categories/categories.state'
import ngRedux from 'ng-redux'

import template from './app.client.component.html'
import './app.client.component.css'

class Config {
  static $inject = ['$ngReduxProvider']
  constructor ($ngReduxProvider) {
    // reducers, middleware, storeEnhancer, initial
    $ngReduxProvider.createStoreWith(categories, [], [], initialCategories)
  }
}

const AppComponent = { template }

let app = angular
  .module('app', [
    CommonModule.name,
    ComponentsModule.name,
    ngRedux
  ])
  .config(Config)
  .component('app', AppComponent)

export default app
