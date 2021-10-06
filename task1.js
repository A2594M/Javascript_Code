function add(a,b)
{
    return a+b;
}

const arr=[3,4]
c=add(...arr)
console.log("Sum of array Elements:",c)


function prime(n)
{
    var sum=0;
    
        for(var j=2;j<n;j++)
        {
            var flag=1;
            for(var i=2;i<=j/2;i++)
            {

                
                if(j%i==0)
                {
                   flag=0;
                   break;
            
                }
            }
            if(flag==1)
            {
                sum += j;
            }
            
        }
    return sum;
}


var Addition=prime(50)
console.log("Addtion of prime numbers=",Addition)


function fibo(n)
{
    var num1=0,num2=1;
    var sum=0;
    var temp;
    
    while(num1<=n)
    {
        sum +=num1;
        temp=num1+num2;
        num1=num2;
        num2=temp;
    }
    return sum;
}

var fibo_sum=fibo(10)
console.log("Sum of fibonacci Series=",fibo_sum)