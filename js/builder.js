document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main');
    const newElement = document.createElement('p');
    newElement.textContent = 'Welcome to my web application!';
    mainContent.appendChild(newElement);
});

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Обработка полученных данных
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
            const mainContent = document.querySelector('main');
            mainContent.innerHTML = '';
            data.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.textContent = item.name;
                mainContent.appendChild(itemElement);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
