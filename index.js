let store = { deliveries: [], meals: [], employers: [], customers: []}
let deliveryId = 0, customerId = 0, mealId = 0, employerId = 0

class Customer {
  constructor(name) {
    this.id = ++customerId
    this.name = name
    store.customers.push(this)
  }

  totalSpent() {

  }

}


class Delivery {
  constructor(meal = null, customer = null) {
    this.id = ++deliveryId

    this.mealId = meal.id

    // this.customerId = customer.id
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
    return store.meals.sort((a, b) => b.price - a.price)
  }
}

class Employer {
  constructor(name) {
    this.id = ++employerId
    this.name = name
    store.employers.push(this)
  }
}
