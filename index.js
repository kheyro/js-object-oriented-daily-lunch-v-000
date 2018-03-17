let store = { deliveries: [], meals: [], employers: [], customers: []}
let deliveryId = 0, customerId = 0, mealId = 0

class Customer {
  constructor(name) {
    this.id = ++customerId
    this.name = name
    store.customers.push(this)
  }

}


class Delivery {
  constructor() {
    this.id = ++deliveryId
    store.deliveries.push(this)
  }
}

class Meal {
  constructor(title) {
    this.id = ++mealId
    this.title = title
    store.meals.push(this)
  }
}
