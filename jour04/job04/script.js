document.addEventListener('DOMContentLoaded', function () {
    const updateButton = document.getElementById('updateButton');
    const utilisateursTableBody = document.querySelector('#utilisateursTable tbody');

    updateButton.addEventListener('click', function () {
        fetch('utilisateur.json')
            .then(response => response.json())
            .then(data => {
                utilisateursTableBody.innerHTML = ''; // Efface les données précédentes du tableau
                data.forEach(user => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${user.id}</td>
                        <td>${user.nom}</td>
                        <td>${user.prenom}</td>
                        <td>${user.email}</td>
                    `;
                    utilisateursTableBody.appendChild(tr);
                });
            })
            .catch(error => console.error('Erreur lors de la récupération des données:', error));
    });
});
