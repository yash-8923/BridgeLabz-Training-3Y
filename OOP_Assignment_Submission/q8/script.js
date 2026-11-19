class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

MovieTicket.prototype.printTicket = function() {
  return "Movie: " + this.movieName + ", Seat: " + this.seatNo + ", Ticket price: Rs. " + this.price;
};

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

let tickets = [
  new OnlineTicket("Inception", "A10", 200, 25),
  new OnlineTicket("Interstellar", "B12", 250, 30)
];

let output = document.getElementById("output");
tickets.forEach(ticket => {
  output.innerHTML += `<p>${ticket.printTicket()}</p>`;
  output.innerHTML += `<p>Convenience fee: Rs. ${ticket.convenienceFee}, Total: Rs. ${ticket.getTotalAmount()}</p>`;
});

output.innerHTML += "<p>OnlineTicket can call printTicket() through the prototype chain inherited from MovieTicket.</p>";
