let delay=3; // delay in seconds

const interval=setInterval(function(){
    console.log("Time Remaining:",delay,"s");
    delay--;
    if(delay==0){
        clearInterval(interval);

        const random_number=Math.floor(Math.random()*100);
        console.log("Generated Random Number:",random_number);
    }
},1000)
