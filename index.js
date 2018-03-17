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
    return this.meals().reduce((agg, el) => agg + el.price,0)
  }

  deliveries() {
    return store.deliveries.filter((delivery) => delivery.customerId === this.id)
  }

  meals() {
    return this.deliveries().map((delivery) => delivery.meal())
  }
}


class Delivery {
  constructor(meal, customer) {
    this.id = ++deliveryId
    if (customer) {
      this.customerId = customer.id
    }
    if (meal) {
      this.mealId = meal.id
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
    return store.deliveries.filter((delivery) => delivery.mealId === this.id)
  }

  customers() {
    return this.deliveries().map((delivery) => delivery.customer())
  }

}

class Employer {
  constructor(name) {
    this.id = ++employerId
    this.name = name
    store.employers.push(this)
  }

  employees() {
    return store.customers.filter((customer) => customer.employerId === this.id )
  }

  deliveries() {
    return this.employees().map(function (employee) {
      return employee.deliveries()
    })
  }

  meals() {
    return [...new Set(this.employees().map((employee) => employee.meals()))]
  }
}
