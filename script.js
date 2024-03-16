document.getElementById('add-btn').addEventListener('click', function() {
    var value = document.getElementById('todo-input').value;
    if (value) {
        addItem(value);
        document.getElementById('todo-input').value = '';
    }
});

function addItem(text) {
    var list = document.getElementById('todo-list');

    var item = document.createElement('li');
    item.textContent = text;

    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        list.removeChild(item);
    };

    var editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';
    editBtn.onclick = function() {
        var newText = prompt('Edit your item:', text);
        if (newText !== null && newText !== '') {
            item.firstChild.textContent = newText;
        }
    };

    item.appendChild(editBtn);
    item.appendChild(deleteBtn);
    list.appendChild(item);
}

document.getElementById('todo-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('add-btn').click();
    }
});
