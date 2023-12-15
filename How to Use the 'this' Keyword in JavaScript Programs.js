var seats = {
  seats: 50,
  seatsSold: 28,
  remainingSeats: function() {
    return (this.seats - this.seatsSold);
  },
  enoughSeats: function() {
    if (this.remainingSeats() > 0) {
      return this.remainingSeats(); // Devuelve el número de asientos restantes
    }
  }
}

seats.enoughSeats(); // Devolverá la cantidad de asientos disponibles
