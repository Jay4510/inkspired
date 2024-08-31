document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const appointmentList = document.getElementById('appointmentList');

    const listItem = document.createElement('li');
    listItem.textContent = `${name} - ${mobile} - ${date} - ${time}`;

    appointmentList.appendChild(listItem);

    // Clear the form fields after submission
    document.getElementById('bookingForm').reset();
});
