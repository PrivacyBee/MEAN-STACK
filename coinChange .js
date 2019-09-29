var check = function(amount,price){
    return amount - price >= 0
} 

var change = function(amount, ob){
    if(amount <= 0){
        return ob 
    }  

    if(check(amount,100)){
        amount-= 100
        ob.dollar++
       return change(amount, ob)
    } else if(check(amount, 25)){
        amount -= 25
        ob.quarter++
      return  change(amount, ob)
    } else if (check(amount,10)){
        amount -= 10
        ob.dime++
       return  change(amount, ob)
    } else if(check(amount, 5)){
        amount -= 5
        ob.nickel++
       return  change(amount,ob)
    } else if (check(amount,1)) {
        amount -= 1
        ob.pennie++
      return   change(amount, ob)
    }  
}

var coinChange = function(num){
    var obj = change(num,{dollar:0, dime:0, pennie:0})
    return obj 
}

var test = coinChange(312)
console.log(test)




