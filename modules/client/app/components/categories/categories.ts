import { module } from 'angular'
import CategoryItemModule from './category-item/category-item'

import template from './categories.html'
import './categories.css'

class CategoriesController {
  static $inject = ['CategoriesModel']
  constructor (CategoriesModel) {
    this.CategoriesModel = CategoriesModel
  }

  $onInit () {
    this.CategoriesModel.getCategories()
      .then((result) => { this.categories = result })
  }

  onCategorySelected (category) {
    this.CategoriesModel.setCurrentCategory(category)
  }

  isCurrentCategory (category) {
    return this.CategoriesModel.getCurrentCategory() &&
      this.CategoriesModel.getCurrentCategory().id === category.id
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
