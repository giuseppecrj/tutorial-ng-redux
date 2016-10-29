import { module } from 'angular'
import CategoryItemModule from './category-item/category-item'

import { categories, GET_CATEGORIES, category, GET_CURRENT_CATEGORY } from './categories.state'

import template from './categories.html'
import './categories.css'

class CategoriesController {
  static $inject = ['$timeout', 'store']
  constructor ($timeout, store) {
    this.$timeout = $timeout
    this.store = store
  }

  $onInit () {
    this.store.dispatch({ type: GET_CATEGORIES })
    this.categories = this.store.getState()

    this.$timeout(() => {
      const payload = [
        { id: 0, name: 'Redux' },
        { id: 1, name: 'Angular' }
      ]
      this.store.dispatch({ type: GET_CATEGORIES, payload })
      this.categories = this.store.getState()
    }, 3000)

    this.$timeout(() => {
      const payload = [
        { id: 0, name: 'Uh, oh!' }
      ]
      this.store.dispatch({ type: GET_CATEGORIES, payload })
      this.categories = this.store.getState()
    }, 6000)
  }

  onCategorySelected (currentCategory) {
    this.currentCategory = category(this.currentCategory, { type: GET_CURRENT_CATEGORY, payload: currentCategory })
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

const CategoriesModule = module('categories', [
  CategoryItemModule.name
])
  .component('categories', CategoriesComponent)

export { CategoriesModule, CategoriesComponent, CategoriesController }
