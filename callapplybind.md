Call - Call method takes this reference as first argument followed by other args

func.call(this,arg1,arg2)

Apply - Apply method again takes this as reference first arg and then 2nd arg is an array list 

func.apply(this,[arg1,arg2])

Bind - Instead of directly calling methods, bind method binds the method and have a copy of it and we can call the bind method directy since it binds the parent method

let bindfunc = func.bind(this, arg1, arg2)

bindfunc(); //need to invoke the bind func, keep a copy of method and can be invoked when needed.

![alt text](image-1.png)

![alt text](image-2.png)