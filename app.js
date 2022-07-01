//onclick function starts
function fortune(){
    //variable declared to collect data from name input 
    let userName=document.getElementById("userName").value;
    //writing condtion to print value
    userName? document.getElementById("fortune1").innerText=(`Hello, ${userName}`) : document.getElementById("fortune1").innerText=("Hello!");

    //variable declared to print output dynamically 
    let nomsg="Please enter your concern...!"
    //variable declared to collect data from question input 
    let userQuestion=document.getElementById("userQuestion").value;
     //writing condtion to store value in userQuestion variable or nomsg
    userQuestion? userQuestion=userQuestion:userQuestion=nomsg;
    //printing the variable to the document
    document.getElementById("fortune2").innerText=(`${userQuestion} ?`);

    //variable declared to generate random number
    let randomNumber = Math.floor(Math.random()*(9-1)+1);
    //variable declared to print dynamic result
    let eightBall ="";
    //writing condtion to store value in eightBall variable
    if (userQuestion===nomsg){
        eightBall=('Try Again');
    }else if(randomNumber===1){
        eightBall=('It is certain');
      }else if (randomNumber===2){
        eightBall=('It is decidedly so');
      }else if (randomNumber===3){
        eightBall=('Reply hazy try again');
      }else if (randomNumber===4){
        eightBall=('Cannot predict now');
      }else if (randomNumber===5){
        eightBall=('Do not count on it');
      }else if (randomNumber===6){
        eightBall=('My sources say no');
      }else if (randomNumber===7){
        eightBall=('Outlook not so good');
      }else if (randomNumber===8){
        eightBall=('Signs point to yes');
      };
      document.getElementById("fortune3").innerText=eightBall;
    }









