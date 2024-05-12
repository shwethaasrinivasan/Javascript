Throttling is used for performance optimization and rate limiting the function call or function execution.
Limit the events happening on each and every API call. eg: button click.


I I I  I I I I  I I I I I (API call)

i       i
i       i  
FC      FC (function call)

<-------->
  500ms

  eg: window re-size event

  const expensive = () => {
    console.log("Expensive");
  }
  window.addEventlistener("resize",expensive) -> expensive will be replaced with betterExpensive

  const betterExpensive = () => {
    throttle(expensive,limit); if limit is 100ms, after 100ms only the next function call happens
  }

  const throttle = (function, limit) => { //will take function and return a better version of that function
    let flag = true; // closure in order to not re-initialize the flag
    return function() {
        let context=this, args=arguments //to further optimize the code
        if (flag) {
            func(); //call func() only when flag is true after calling function the flag will be set to false, and again the flag will become true after the limit is crossed 
            func.apply(context,args)
            flag=false;
            setTimeout(()=>{
                flag = true;
            },limit);
    }
  }

  ```js
  const loggerFunc = () => {
  console.count("Throttled Function");
}

const throttle = (fn, limit) => {
  let flag = true;
  return function(){
    let context = this;
    let args = arguments;
    if(flag){
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag=true;
      }, limit);
    }
  }
}

const betterLoggerFunction = throttle(loggerFunc, 1000);

window.addEventListener("resize",betterLoggerFunction);

// This is the normal Function without Throttling
//Check the console for the difference between the calls of Normal Function and the Throttled Function 
const normalFunc = () => {
  console.count("Normal Function");
}

window.addEventListener("resize",normalFunc);

```

limit rate of execution and improve performance


**Debouncing**

keypress evennts - only make an API call if the difference between 2 keypress events is greater than the certain limit
difference between 2 key stroke events is > 300ms, then only make an API call and get the result 

**where as Throttling is**

only make an API call after certain amount of time