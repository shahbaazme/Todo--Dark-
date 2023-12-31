var input = document.getElementById('input');
var btn = document.getElementById('input_btn');
var todoContainer = document.querySelector('.todo_container');
var timer = document.querySelector('.timer');


function createTask(){

    //creating task container

    var taskConatiner = document.createElement('div');
    taskConatiner.classList.add('todo_task');
    



    //createing container for task and checkbox

    var task = document.createElement('div');
    task.classList.add('task', 'd_flex');
    taskConatiner.appendChild(task);
    


    // creating task and checkbox

    var checkbox = document.createElement('input');
    checkbox.setAttribute('type' , 'checkbox');
    checkbox.classList.add('task_checkbox')
    task.appendChild(checkbox);
    todoContainer.appendChild(taskConatiner);


    // creating task 

    var taskContent = document.createElement('input');
    taskContent.setAttribute('readonly' , 'readonly');
    taskContent.classList.add('task_content');
    taskContent.value = input.value;
    task.appendChild(taskContent);

    console.log(taskContent.value);

    // Creating Divider

    var devider = document.createElement('div');
    devider.classList.add('devider');
    taskConatiner.appendChild(devider);


    //creating btns container

    var btnSection = document.createElement('div');
    btnSection.classList.add('btn_section', 'd_flex');


    //creating timer Container

    var timerContainer = document.createElement('div');
    timerContainer.classList.add('timer_content', 'd_flex');
    btnSection.appendChild(timerContainer);
    taskConatiner.appendChild(btnSection);

    //creating timer

    var timer = document.createElement('div');
    timer.classList.add('timer');
    timer.textContent = '00:00:00';
    timerContainer.appendChild(timer);


    //creating timer button 

    var timerBtn = document.createElement('button');
    timerBtn.classList.add('timer_btn');
    timerBtn.textContent = 'start timer';
    timerContainer.appendChild(timerBtn);

    //creating stop button 
    
    
    var stopBtn = document.createElement('button');
    stopBtn.classList.add('timer_btn');
    stopBtn.textContent = 'stop timer';
    timerContainer.appendChild(stopBtn);


    //creating Reset Button 

    var resetBtn = document.createElement('button');
    resetBtn.classList.add('timer_btn');
    resetBtn.textContent = 'Reset timer';
    timerContainer.appendChild(resetBtn);


   
    



    // vreating timer function

    let [hours,minutes,seconds] = [0,0,0];
    var tem_timer = null;

    function stopWatch(){

        seconds++

        if(seconds == 60){

            seconds = 0;
            minutes++

            if(minutes == 60){

                minutes = 0;
                hours++;
            }
        }


         

        var h = hours < 10 ? '0' + hours  : hours;
        var m = minutes < 10 ? '0' + minutes  : minutes;
        var s = seconds < 10 ? '0' + seconds  : seconds;

        timer.textContent = h + ':' + m + ':' + s;


    }


    // watch start function

    function watchStart(){

        if(tem_timer !== null){

            clearInterval(tem_timer);
        }

        tem_timer = setInterval(stopWatch, 1000);
    }

    // watch stop function

    function watchStop(){

        clearInterval(tem_timer);

    }

    // watch reset function

    function watchReset(){

        clearInterval(tem_timer);
        [hours,minutes,seconds] = [0,0,0];
        timer.textContent = '00:00:00';

    }




    // starting btn

    timerBtn.addEventListener('click', watchStart);
    stopBtn.addEventListener('click', watchStop);
    resetBtn.addEventListener('click', watchReset);


    let a = 22;
    


















    //creating btn container
    var btnContainer = document.createElement('div');
    btnContainer.classList.add('btn', 'd_flex');
    btnSection.appendChild(btnContainer);


    //creating Edit button

    var editBtn = document.createElement('button');
    editBtn.classList.add('edit_btn');
    editBtn.textContent = 'Edit';
    btnContainer.appendChild(editBtn);


    //creating Delete button

    var deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete_btn');
    deleteBtn.textContent = 'Delete';
    btnContainer.appendChild(deleteBtn);


    // Delete Function

    deleteBtn.addEventListener('click', function(){
        taskConatiner.remove();
    })


    // edit function

    editBtn.addEventListener('click', function(){
        if(editBtn.textContent === 'Edit')
        {

            taskContent.removeAttribute('readonly');
            taskContent.focus();
            editBtn.textContent = 'Save';
        }
        else
        
        {
            taskContent.setAttribute('readonly' , 'readonly');
            editBtn.textContent = 'Edit';

        }
    })

    //toggle function

    checkbox.addEventListener('click', function(){

        taskContent.classList.toggle('toggle');

    })



    

    input.value = '';

    
}


function createAfterClick(){

    if(input.value !== ""){

        createTask();
    }
    else
    {
        alert("Enter Your Task");
    }
}


function createAfterKeyPress(evnt){

    if(evnt.key === "Enter" && input.value !== '')
    
    {
        createTask();
    }
    

    
}





btn.addEventListener('click', createAfterClick)

input.addEventListener('keypress', createAfterKeyPress);







