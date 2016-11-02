import { module } from 'angular'
import CategoryItemModule from './category-item/category-item'

import { category, CategoriesActions } from './categories.state'

import template from './categories.html'
import './categories.css'

class CategoriesController {
  static $inject = ['$timeout', '$ngRedux', 'CategoriesActions']
  constructor ($timeout, $ngRedux, CategoriesActions) {
    this.$timeout = $timeout
    this.store = $ngRedux
    this.CategoriesActions = CategoriesActions
  }

  $onInit () {
    this.store.subscribe(() => {
      this.categories = this.store.getState()
    })

    this.store.dispatch(this.CategoriesActions.getCategories())

    this.$timeout(() => {
      const categories = [
        { id: 0, name: 'Redux' },
        { id: 1, name: 'Angular' }
      ]
      this.store.dispatch(this.CategoriesActions.getCategories(categories))
    }, 3000)

    this.$timeout(() => {
      const categories = [
        { id: 0, name: 'Uh, oh!' }
      ]
      this.store.dispatch(this.CategoriesActions.getCategories(categories))
    }, 6000)
  }

  onCategorySelected (currentCategory) {
    this.currentCategory = category(this.currentCategory, this.CategoriesActions.selectCategory(currentCategory))
  }

  isCurrentCategory (category) {
    return this.currentCategory &&
      this.currentCategory.id === category.id
  }
}

const CategoriesComponent = {
  template,
  controller: CategoriesController
}

const CategoriesModule = module('categories',
  [ CategoryItemModule.name ])
  .factory('CategoriesActions', CategoriesActions)
  .component('categories', CategoriesComponent)

export { CategoriesModule, CategoriesComponent, CategoriesController }
