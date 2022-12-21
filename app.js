window.addEventListener('load', () =>{
    const form = document.querySelector('#formnew');
    const input = document.querySelector('#task-input');
    const list_el = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); //prevents refreshing of a page when you click submit

        const task = input.value;
        if (!task){
            alert("Please add in your task");
            return;
        }

        //Creating the html taask list in js
         //createElement creates dom nodes to be placed on to the page
        //Creates an instance of the element for the specified tag.
        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content = document.createElement("div");
        task_content.classList.add("content");
        //task_content.innerText = task;

        

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly","readonly");

        task_content.appendChild(task_input_el);
        task_el.appendChild(task_content);

        const task_actions = document.createElement("div");
        task_actions.classList.add("actions");

        const task_edit = document.createElement("button");
        task_edit.classList.add("edit");
        task_edit.innerHTML = "Edit";

        const task_del = document.createElement("button");
        task_del.classList.add("del");
        task_del.innerHTML = "Delete";

        task_actions.appendChild(task_edit);
        task_actions.appendChild(task_del);

        task_el.appendChild(task_actions);

        list_el.appendChild(task_el);

        input.value = "";

        task_edit.addEventListener('click', () => {
            if(task_edit.innerHTML.toLowerCase() == "edit"){
                task_input_el.removeAttribute("readonly"); //enable editing
            task_input_el.focus(); //cursor focuses to text automatically
            task_edit.innerText = "Save";
            } else{
                task_input_el.setAttribute("readonly","readonly");
                task_edit.innerText = "Edit";
            }
        });

        task_del.addEventListener('click', () => {
            list_el.removeChild(task_el);
        });
       
    });
});