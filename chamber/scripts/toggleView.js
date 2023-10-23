document.getElementById('gridView').addEventListener('click', function() {
    let container = document.getElementById('membersContainer');
    container.classList.remove('directory-list');
    container.classList.add('directory-cards');
});

document.getElementById('listView').addEventListener('click', function() {
    let container = document.getElementById('membersContainer');
    container.classList.remove('directory-cards');
    container.classList.add('directory-list');
});