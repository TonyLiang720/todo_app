function get_todos() {
    var todos1 = new Array();
    var todosString = localStorage.getItem('todos');
    
    if (todosString !== null) {
        todos1 = JSON.parse(todosString);
    }
    return todos1;
}

function add() {
    var todos1 = get_todos();
    var textBoxContent = document.getElementById('itemToAdd').value;
    todos1.push(textBoxContent);
    localStorage.setItem("todos", JSON.stringify(todos1));
    show();
}

function remove() {
    var i = this.id.substring(6, this.id.length)
    var todos1 = get_todos();
    todos1.splice(i, 1);
    localStorage.setItem("todos", JSON.stringify(todos1));
    show();
}

function show() {
    var todos1 = get_todos();
    var html = '<ul>';
    for (var i = 0; i < todos1.length; i++) {
        html += '<li id="li' + i + '"' + '>' + todos1[i] + ' <button id="button' + i + '"' + '>x</button></li>';
    }
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;
    for (let i = 0; i < todos1.length; i++) {
        document.getElementById('button' + i).addEventListener('click', remove)
    }
}

show();

document.getElementById('addTodo').addEventListener('click', add);

/* 

notes on deleting items:
1. need a unique id for each item
2. need a delete buttom that can be accessed individually in JS
3. can use the id for each item to give its button a unique id
4. can grab the id for the todo that is to be deleted using JS
5. remember you can create HTML using string - including ids
6. to remove an element from an array, use the function slice()

*/