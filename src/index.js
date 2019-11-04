import state from './js/data';

import './style/main.scss';
import './style/modal.scss';
import './style/todo-list.scss';
import './style/todo-item.scss';
import './style/message.scss';

let { idx, customLabel, customDescription, customPriority, search, currentPriority, currentStatus, todoItems } = state;

const createTodoItem = (label, description, priority) => {
    todoItems.push({
        label,
        description,
        id: idx,
        status: 'open',
        priority
    });
    idx += 1;
};

const message = document.createElement('div');
message.classList.add('message');

const todoList = document.querySelector('.todo-list');

const renderElements = arr => {
    todoList.innerHTML = '';
    if (todoItems.length === 0) {
        message.innerHTML = `
                        <span>It's time to add new todo</span>
                        `;
        todoList.appendChild(message);
    }

    arr.map(({ id, label, description, priority, status }) => {
        const todoItem = document.createElement('div');
        if (status === 'done') {
            todoItem.classList.add('item-done');
        }
        todoItem.classList.add('todo-item');

        todoItem.innerHTML = `            
                <div class="label">
                    <span>${label}</span>
                </div>
                <div class="description">
                    <span>${description}</span>
                </div>
                <div class="info">
                    <div class="priority-info">
                        <span>${priority}</span>
                    </div>
                    <div class="status-info">
                        <button data-done="${id}" class="item-done-button">Done</button>
                        <button data-edit="${id}" class="item-edit-button">Edit</button>
                        <button data-delete="${id}" class="item-delete-button">Delete</button>
                    </div>
                </div>
                `;

        todoList.appendChild(todoItem);
    });

    if (arr.length > 0) {
        const buttonsDone = [...document.querySelectorAll('.item-done-button')];

        buttonsDone.map(el => {
            el.addEventListener('click', () => {
                state.todoItems[el.dataset.done].status = 'done';
                renderElements(filterArrPriority(filterArrStatus(searchedArr(todoItems))));
            });
        });

        const buttonsDelete = [...document.querySelectorAll('.item-delete-button')];

        buttonsDelete.map(el => {
            el.addEventListener('click', () => {
                const index = todoItems.findIndex(item => item.id === parseInt(el.dataset.delete, 10));

                todoItems = [...todoItems.slice(0, index), ...todoItems.slice(index + 1)];
                renderElements(filterArrPriority(filterArrStatus(searchedArr(todoItems))));
            });
        });

        const buttonsEdit = [...document.querySelectorAll('.item-edit-button')];

        buttonsEdit.map(el => {
            const index = todoItems.findIndex(item => item.id === parseInt(el.dataset.edit, 10));

            el.addEventListener('click', () => {
                customLabel = todoItems[index].label;
                customDescription = todoItems[index].description;
                customPriority = todoItems[index].priority;

                popupInputLabel.value = customLabel;
                popupInputDescription.value = customDescription;
                popupPrioritySelect.value = customPriority;

                popup.style.display = 'block';
                back.style.display = 'block';
            });
        });
    }
};

const searchedArr = arr => {
    return arr.filter(el => el.label.toLowerCase().includes(search.toLowerCase()));
};

const filterArrStatus = arr => {
    if (currentStatus === 'all') return arr;
    if (currentStatus === 'open') {
        return arr.filter(el => el.status === 'open');
    }
    if (currentStatus === 'done') {
        return arr.filter(el => el.status === 'done');
    }
};

const filterArrPriority = arr => {
    if (currentPriority === 'all') return arr;
    if (currentPriority === 'high') {
        return arr.filter(el => el.priority === 'high');
    }
    if (currentPriority === 'normal') {
        return arr.filter(el => el.priority === 'normal');
    }
    if (currentPriority === 'low') {
        return arr.filter(el => el.priority === 'low');
    }
};

//
// TODO MODAL
//

const createButton = document.querySelector('.create-button');
const cancelButton = document.querySelector('.cancel-button');
const saveButton = document.querySelector('.save-button');

const popup = document.querySelector('.popup');
const back = document.querySelector('.back');

const popupInputLabel = document.querySelector('.popup-input-label');
const popupInputDescription = document.querySelector('.popup-input-description');

const popupPrioritySelect = document.querySelector('.popup-priority-select');

const closePopup = () => {
    popup.style.display = 'none';
    back.style.display = 'none';
    [customLabel, customDescription, customPriority] = ['', '', 'normal'];
};

createButton.addEventListener('click', () => {
    popupInputLabel.value = customLabel;
    popupInputDescription.value = customDescription;
    popupPrioritySelect.value = customPriority;

    popup.style.display = 'block';
    back.style.display = 'block';
});

cancelButton.addEventListener('click', closePopup);
back.addEventListener('click', closePopup);

saveButton.addEventListener('click', () => {
    if (!customLabel || !customDescription) return;
    createTodoItem(customLabel, customDescription, customPriority);
    renderElements(filterArrPriority(filterArrStatus(searchedArr(todoItems))));
    [customLabel, customDescription, customPriority] = ['', ''];
    closePopup();
});

popupInputLabel.addEventListener('input', () => {
    customLabel = popupInputLabel.value;
});

popupInputDescription.addEventListener('input', () => {
    customDescription = popupInputDescription.value;
});

popupPrioritySelect.addEventListener(
    'change',
    () => {
        customPriority = popupPrioritySelect.value;
    },
    false
);
//
// TODO MODAL
//

// SEARCH
let visibleItems = null;

const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', () => {
    search = searchInput.value;
    visibleItems = filterArrPriority(filterArrStatus(searchedArr(todoItems)));
    renderElements(visibleItems);

    if (visibleItems.length === 0) {
        message.innerHTML = `
                        <span>No todos with this label</span>
                        `;
        todoList.appendChild(message);
    }
});

const statusSelect = document.querySelector('.todo-select-status');

statusSelect.addEventListener(
    'change',
    () => {
        currentStatus = statusSelect.value;
        visibleItems = filterArrPriority(filterArrStatus(searchedArr(todoItems)));
        renderElements(visibleItems);

        if (visibleItems.length === 0) {
            message.innerHTML = `
                            <span>No todos with this status</span>
                            `;
            todoList.appendChild(message);
        }
    },
    false
);

const prioritySelect = document.querySelector('.todo-select-priority');

prioritySelect.addEventListener(
    'change',
    () => {
        currentPriority = prioritySelect.value;
        visibleItems = filterArrPriority(filterArrStatus(searchedArr(todoItems)));
        renderElements(visibleItems);

        if (visibleItems.length === 0) {
            message.innerHTML = `
                            <span>No todos with this priority</span>
                            `;
            todoList.appendChild(message);
        }
    },
    false
);

renderElements(todoItems);
