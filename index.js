let store = { deliveries: [], meals: [], employers: [], customers: []}
let deliveryId = 0, customerId = 0

class Customer {
  constructor(name) {
    this.id = ++customerId
    this.name = name
    store.customers.push(this)
  }

}


class Delivery {
  constructor(meal, customer) {
    this.id = ++deliveryId
    this.mealId = meal.id
    this.customerId = customer.id
    store.deliveries.push(this)
  }

}
