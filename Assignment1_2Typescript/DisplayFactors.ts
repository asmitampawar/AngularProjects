    function Displayfactors(no : number)
    {
            let factors : number =1;
            
            let i : number ;
            for(i = 1;i<no ;i++)
            {
            if(no%i==0)
            console.log(i);
            }
    }


    Displayfactors(20)
