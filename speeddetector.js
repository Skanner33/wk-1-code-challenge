function need(){
    //initiate prompt for user to input data
    const speed = window.prompt("Enter speed", 70);
    //Declare variables to use to determine demerit points and speed
    let above = speed - 70;
    let demerit = (above / 5) * 1;
    
    //use if statements to determine various speed and the consequences
        if (speed < 70){
            alert('Ok')
        }else if(speed >= 70 && speed <=130){
          alert  (demerit)
        }else if (speed >= 130){
            alert ('License suspended')
        }
//alert the user of the results and consequences 
    
}
    