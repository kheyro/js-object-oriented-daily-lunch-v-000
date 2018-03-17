let store = { deliveries: [], meals: [], employers: [], customers: []}
let deliveryId = 0, customerId = 0, mealId = 0, employerId = 0

class Customer {
  constructor(name, employer) {
    this.id = ++customerId
    this.name = name
    if (employer) {
      this.employerId = employer.id
    }
    store.customers.push(this)
  }

  totalSpent() {

  }

}


class Delivery {
  constructor(meal, customer) {
    this.id = ++deliveryId
    if (meal) {
      this.mealId = meal.id
    }
    if (customer) {
      this.customerId = customer.id
    }
    store.deliveries.push(this)
  }

  customer() {
    return store.customers.find((customer) => customer.id === this.customerId)
  }

  meal() {
    return store.meals.find((meal) => meal.id === this.mealId)
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

  deliveries() {
    return store.deliveries.find((delivery) => delivery.mealId === this.id)
  }

}

class Employer {
  constructor(name) {
    this.id = ++employerId
    this.name = name
    store.employers.push(this)
  }
}
