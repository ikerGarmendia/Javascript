function movieTheater(){
  var seats = 50;
  var seatsSold = 28;

  return{
    remainingSeats: function(){
      return (seats - seatsSold)
    }
  }
}

var roomOne = movieTheater()

// call the remainingSeats method of the instance of movieTheater
var remainingSeatsInRoomOne = roomOne.remainingSeats();
console.log("Remaining Seats in Room One:", remainingSeatsInRoomOne);