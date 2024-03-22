const show = document.querySelector('#show');
const btn = document.querySelector('#submit');
const text1 = document.querySelector('#input1');
const text2 = document.querySelector('#input2');
const text3 = document.querySelector('#input3');

function fun1() {
    const deleteBtn1 = document.createElement('button');
    deleteBtn1.textContent = 'Delete';
    const deleteBtn2 = document.createElement('button');
    deleteBtn2.textContent = 'Delete';
    const deleteBtn3 = document.createElement('button');
    deleteBtn3.textContent = 'Delete';
    const websiteDiv = document.createElement('div');
    const usernameDiv = document.createElement('div');
    const passwordDiv = document.createElement('div');


    websiteDiv.innerHTML = "Website: " + text1.value;
    websiteDiv.appendChild(deleteBtn1);
    usernameDiv.innerHTML = "Username: " + text2.value;
    usernameDiv.appendChild(deleteBtn2);
    passwordDiv.innerHTML = "Password: " + text3.value;
    passwordDiv.appendChild(deleteBtn3);

   
    show.appendChild(websiteDiv);
    show.appendChild(usernameDiv);
    show.appendChild(passwordDiv);

    deleteBtn1.addEventListener('click', function() {
        show.removeChild(websiteDiv);
    });
    deleteBtn2.addEventListener('click', function() {
        show.removeChild(usernameDiv);
    });
    deleteBtn3.addEventListener('click', function() {
        show.removeChild(passwordDiv);
    });
}

btn.addEventListener('click', fun1);
