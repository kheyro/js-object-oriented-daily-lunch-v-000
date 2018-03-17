let store = { deliveries: [], meals: [], employers: [], customers: []}
let deliveryId = 0

class Delivery {

  contructor(name, employer) {
    this.name = name
    this.id = deliveryId++
    this.employerId = this.employer.id
  }

  

}
