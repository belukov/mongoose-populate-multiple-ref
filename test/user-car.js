'use strict';

const CarMdl = require('../lib/models/car');
const UserMdl = require('../lib/models/user');

require ('../lib/mongoose');

describe("Check user-car refs", function() {

  let car1, car2, car3, user1, user2;

  it("Add car1", function(done) {
    car1 = CarMdl({name: 'Car 1'});
    car1.save(done);
  });

  it("Add car2", function(done) {
    car2 = CarMdl({name: 'Car 2'});
    car2.save(done);
  });

  it("Add car3", function(done) {
    car3 = CarMdl({name: 'Car 3'});
    car3.save(done);
  });


  it("Add user1", function(done) {
    user1 = new UserMdl({
      name: 'User 1',
      buyer: {
        cars: [
          {
            carId: car1._id,
            description: 'Desc for car 1',
          },
          {
            carId: car2._id,
            description: 'Descr Car 2'
          }
        ]
      }
    });
    user1.save(done);
  });

  it("get user 1", function(done) {
  
    UserMdl.findById(user1._id)
      .populate('buyer.cars.carId')
      .exec(function(err, usr) {
    
      console.log("Usrr from DB: ", JSON.stringify(usr, null, 2));
      return done(err);
    });
  });

});
