let store = { deliveries: [], meals: [], employers: [], customers: []}
let deliveryId = 0, customerId = 0

class Customer {
  constructor(name) {
    this.id = ++customerId
    this.name = name
    store.customers.push(this)
  }


}
