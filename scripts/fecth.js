let url = "https://jsonplaceholder.typicode.com/users/";

document.getElementById('fetchButton').addEventListener('click', function() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const tableBody = document.getElementById('usersTable').getElementsByTagName('tbody')[0]

        tableBody.innerHTML = '';

    data.forEach(user => {
        const row = tableBody.insertRow();
        const nameCell = row.insertCell(0);
        const phoneCell = row.insertCell(1);

        nameCell.textContent = user.name;
        phoneCell.textContent = user.phone;
    });
})
.catch(error => {
    console.error('Error fetching data', error);
})

})