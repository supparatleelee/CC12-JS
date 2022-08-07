const product1 = {
  name: 'Water',
  distributor: {
    name: 'Giraffe Water Company',
    address: {
      street: 'Phetchaburi',
      subdistrict: 'Thanonphetchaburi',
      district: 'Ratchathewi',
      province: 'Bangkok'
    }
  }
};

console.log(product1.distributor.address.province)

let product2 = {}

console.log(product2)
console.log(product2.distributor?.address.province) // undefined
console.log(product1.distributor?.address.province)
console.log('name' in product1)