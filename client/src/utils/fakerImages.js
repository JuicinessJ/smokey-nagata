import { faker } from '@faker-js/faker';


  
// grab a random vehicle from fakerJs
export function randomVehicle(){
        const vehicles = []
        
        for(let i=0; i < 5; i++){
            vehicles.push(faker.image.imageUrl(1200, 1200, 'automobiles',true))
        }
        console.log(vehicles[0]);
        return vehicles[Math.floor(Math.random()*vehicles.length)];
}


