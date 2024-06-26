document.getElementById('stadium-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const stadiumName = document.getElementById('stadium-name').value;
    const club = document.getElementById('club').value;
    const nickname = document.getElementById('nickname').value;
    const city = document.getElementById('city').value;

    // Verificação para garantir que todos os campos sejam preenchidos
    if (!stadiumName || !club || !nickname || !city) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const tableBody = document.querySelector('#stadium-table tbody');
    const row = document.createElement('tr');
    
    row.innerHTML = `
        <td>${stadiumName}</td>
        <td>${club}</td>
        <td>${nickname}</td>
        <td>${city}</td>
        <td class="actions">
            <button class="edit-btn">Editar</button>
            <button class="delete-btn">Excluir</button>
        </td>
    `;

    tableBody.appendChild(row);

    document.getElementById('stadium-form').reset();

    const editButton = row.querySelector('.edit-btn');
    const deleteButton = row.querySelector('.delete-btn');

    editButton.addEventListener('click', () => editStadium(row));
    deleteButton.addEventListener('click', () => deleteStadium(row));
});

function editStadium(row) {
    const cells = row.querySelectorAll('td');
    const stadiumName = cells[0].innerText;
    const club = cells[1].innerText;
    const nickname = cells[2].innerText;
    const city = cells[3].innerText;

    document.getElementById('stadium-name').value = stadiumName;
    document.getElementById('club').value = club;
    document.getElementById('nickname').value = nickname;
    document.getElementById('city').value = city;

    row.remove();
}

function deleteStadium(row) {
    row.remove();
    displayMessage('Estádio excluído com sucesso.');
}

function displayMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.classList.add('show');
    setTimeout(() => {
        messageDiv.classList.remove('show');
    }, 3000);
}
    