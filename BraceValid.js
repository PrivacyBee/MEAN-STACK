
var tayo = /([])|({})|(\(\))/

var braceHelper = function(s){
    var match = s.match(tayo)
    if(match){
        s = s.replace(tayo, '')
        braceHelper(s)
    }else{
        return s 
    }
}

var bracesValid = function(s){
    var str = braceHelper(s)
    return str == null 
}

var test = bracesValid('[[[({})]]]')
console.log(test)


var test2 = bracesValid('([[[]]]}')
console.log(test2)