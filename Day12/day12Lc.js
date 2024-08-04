//Ques-1
var compose = function(functions) {
    
    return function(x) {
        if (functions.length==0)
        {
            return x;
        }
        let temp=x;
        for(let i=functions.length-1;i>=0;i--)
        {
            k=functions[i](temp);
        }
        return k;
    }
};

//Ques-2
var once = function(fn) {
    let count=0;
    return function(...args){
        let ans;
        if (count<1)
        {
            ans=fn(...args);
            count++;
        }
        return ans;
    }
};