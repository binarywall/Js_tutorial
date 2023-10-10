let d=28;
let m=2;
let y=2020;
let date=0;
console.log("date - "+d+"/"+m+"/"+y)

if(y>0){
    if(checkDate(d)){
        date=checkMonth(m)
        console.log(date);
        d++;
        if(d>date){
            d=d-date;
            m++;
            if(m>12){
                m=m-12;
                y++;
            }
        }
        console.log("New date - "+d+"/"+m+"/"+y)
    }
    
}else{
    console.log("Invalid Year")
}



function checkMonth(m){
    let date
    if(m>0 && m<=12){
        if(m==4||m==6||m==9||m==11){
            return date=30;
        }else if(m==2){
            if(y%4==0){
                return  date=29;
            }else{
                return date=28;
            }
        }else{
            return date=31;
        }
    }else{
        console.log("Invalid Month")
    }
}

function checkDate(d){
    let date=checkMonth(m)
    if(d>date){
        console.log("Invalid Date");
    }else{
        console.log("Valid Date");
        return true;
    }
}