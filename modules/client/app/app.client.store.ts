export class Store {
  constructor (reducer, initialState: [] | {}) {
    this.reducer = reducer
    this.state = initialState
    this.listeners = []
  }
  getState () {
    return this.state
  }
  dispatch (action: {}) {
    this.state = this.reducer(this.state, action)

    // call the listener everytime this gets called
    this.listeners.forEach(listener => listener())
  }
  subscribe (listener: () => void) {
    this.listeners = [...this.listeners, listener]

    // return an unsubscribe function
    // when called it filters our the listener
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener)
    }
  }
}
