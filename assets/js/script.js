const container = document.querySelector('.container');
const seat = document.querySelectorAll('.row .seat:not (.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = documet.getElementById('movie');

let ticketPrice = +movieSelect.value;
//Save Selected Movie Index
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

//Update total and count
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

//Cope selected seats into array //Map through the array //Return a new array indexes

const seatsIndex = [...selectedSeats].map(function(seat) {
    return [...seats].indexOf(seat)
});

localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));








    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}


// Movie Selection
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})





// Seat  Selectio.




container.addEventListener('click', (e) => {
if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')
){
e.target.classList.toggle('selected');



updateSelectedCount();
}

});