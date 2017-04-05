var calc = {
    num1: 0,
    num2: 0,
    
    add: function(num1,num2) {
        return "The sum is: " + (num1 + num2);
    },
    
    sub: function(num1,num2) {
        return "The difference is: " + (num1 - num2);
    },
    
    mul: function(num1,num2) {
        return "The product is: " + (num1 * num2);
    },
    
    div: function(num1,num2) {
        return "The quotient is: " + (num1 / num2);
    }
};





calc.add(3,4);
calc.sub(9,3);
calc.mul(4,7);
calc.div(7,2);
