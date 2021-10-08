const container = document.querySelector('.container');
const seat = document.querySelectorAll('.row .seat:not (.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = documet.getElementById('movie');

let ticketPrice = +movieSelect.value;

//Update total and count
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}


// Movie Selection
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
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