function fact(n){ 
    if ((n==1)||(n==0)){ 
            return 1;
}
    else{ 
            return n*fact(n-1)
    }
}


console.log(fact(4))