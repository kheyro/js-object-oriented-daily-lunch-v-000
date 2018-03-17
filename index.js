let store = { deliveries: [], meals: [], employers: [], customers: []}
let deliveryId = 0, customerId = 0, mealId = 0, employerId = 0

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
  constructor(title, price) {
    this.id = ++mealId
    this.title = title
    this.price = price
    store.meals.push(this)
  }

  static byPrice() {
    store.meals.sort(
      function (a, b) {
        return a.price - b.price
      }
    )
  }
}

class Employer {
  constructor(name) {
    this.id = ++employerId
    this.name = name
    store.employers.push(this)
  }
}
