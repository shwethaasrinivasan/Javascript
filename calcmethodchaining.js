class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.result = value;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.result += value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.result -= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.result *= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) throw new Error("Division by zero is not allowed");
        this.result /= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result = Math.pow(this.result, value);
        return this;
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.result;
    }
}

// Example usage:

// Example 1:
let calc1 = new Calculator(10);
console.log(calc1.add(5).subtract(7).getResult()); // Output: 8

// Example 2:
let calc2 = new Calculator(2);
console.log(calc2.multiply(5).power(2).getResult()); // Output: 100

// Example 3:
try {
    let calc3 = new Calculator(20);
    console.log(calc3.divide(0).getResult());
} catch (error) {
    console.error(error.message); // Output: "Division by zero is not allowed"
}
