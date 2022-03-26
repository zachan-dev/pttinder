var Fakerator = require("fakerator");
var fakerator = Fakerator("de-DE");

let images_url = ['adoption/shiba-inu-1.jpg', 'adoption/shiba-inu-2.jpg',
                  'adoption/golden-retriever.jpg', 'adoption/corgi1.jpg', 
                  'adoption/corgi2.jpg', 'adoption/border-collie-1.jpg'];
let pets_type = ['Shiba Inu', 'Shiba Inu', 'Golden Retriever', 'Corgi',
                 'Corgi', 'Border Collie']

let pets_data = [];

for(let i=0; i<30; i++){

  let rand_number = Math.floor(Math.random()*images_url.length);

  pets_data.push({
    "pet_image_url": images_url[rand_number],
    "pet_type": pets_type[rand_number],
    "description": "An adorable dog",
    "user_name": fakerator.names.name(),
    "email": fakerator.internet.email(),
    "phone": fakerator.phone.number(),
    "street": fakerator.address.street(),
    "city": fakerator.address.city(),
    "state": fakerator.address.state(),
    "code": fakerator.address.postCode()
  })
}

exports.data = pets_data;