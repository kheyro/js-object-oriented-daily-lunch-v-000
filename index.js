let store = { deliveries: [], meals: [], employers: [], customers: []}
let deliveryId = 0

class Delivery {

  contructor(name) {
    this.name = name
    this.id = deliveryId++
  }
  
}