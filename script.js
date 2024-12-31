document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const numberOfPeople = document.getElementById('numberOfPeople').value;

    const confirmationMessage = `Booking confirmed for ${name} on ${date} at ${time} for ${numberOfPeople} people.`;
    
    document.getElementById('confirmation').innerText = confirmationMessage;
});
