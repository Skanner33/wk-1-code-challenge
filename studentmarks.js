function score(){
const marks = window.prompt("Please Enter marks", 50);


    if (marks >= 79 && marks < 101){
        alert('You have scored an A')
    }else if(marks >= 60 && marks <= 79){
        alert('You have scored an B')
    }else if(marks >= 49 && marks <= 59){
        alert('You have scored an C')
    }else if(marks >= 40 && marks <= 49){
        alert('You have scored an D')
    }else if(marks < 40){
        alert('You have scored an E')
    }else{
        alert('TRY AGAIN!!!\n Please enter a value between 0 to 100')
    }

}
