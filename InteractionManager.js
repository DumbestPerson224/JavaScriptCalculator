/**
 * @author WorldsDumbestPerson224
 * @copyright 2024
 * @readonly true
**/

class Calculator{

     add(a, b){
          /**
           * @description This method adds two numbers
           * @param {number} a 
           * @param {number} b
           * @returns {number} a - b; 
          **/
         return a + b;
     }

     subtract(a, b){
          /**
           * @description This method subtracts two numbers
           * @param {number} a 
           * @param {number} b
           * @returns {number} a - b;
          **/
         return a - b;
     }

     multiply(a, b){
          /**
           * @description This method multiplies two numbers
           * @param {number} a 
           * @param {number} b 
           * @returns {number} a * b 
          **/
         return a * b;
     }

     divide(a, b){
          /**
           * @description This method divides two numbers
           * @param {number} a 
           * @param {number} b 
           * @throws {string} "Division by zero error"
           * @returns a / b 
          **/
          try{
               if(a != b){
                    return a / b;
               }else{
                    throw "Division by zero error";
               }
          }catch(error){
               console.error(error);
          }
     }

     round_up(a){
          /**
           * @description This function rounds up a number
           * @param {number} a 
           * @returns {number} a rounded up 
          **/
          return Math.ceil(a);
     }

     round_down(a){
          /**
           * @description This functon rounds down a number
           * @param {number} a 
           * @returns {number} a rounded down 
          **/
         return Math.floor(a);
     }
}

// Create an instance of Calculator
var calculator = new Calculator();


function get_input(operation, num1, num2){
     /**
      * @description Get the parameters and check if they are valid types if they are call doOperation otherwise return Invalid Type
      * @calls DoOperation 
      * @param {string} operation 
      * @param {number} num1 
      * @param {number} num2 
      * @returns {string} Invalid Type
     **/
     if(typeof operation == "string" && typeof num1 == "number" && typeof num2 == "number"){
          doOperation(operation, num1, num2);
     }else{
          return "Invalid type!";
     }
}

function doOperation(operation, num1, num2){
     /**
      * @description This does the operation provided from the get_input function
      * @param {string} operation
      * @param {number} num1
      * @param {number} num2
      *  @returns {number} the result of the operation
     **/
     switch(operation){
          case "+":
               calculator.add(num1, num2);
               break;      
          case "-":
               calculator.subtract(num1, num2);
               break; 
          case "*":
               calculator.multiply(num1, num2);
               break; 
          case "/":
               calculator.divide(num1, num2);
               break;
          case "roundup":
               calculator.round_up(num1);
               break;
          case "rounddown":
               calculator.round_down(num1);
               break;
          default:
               console.error("No operand provided!");
     }
}
