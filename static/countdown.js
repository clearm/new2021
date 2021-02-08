
const year = (new Date().getFullYear());
const month = (new Date().getMonth());

const lastDay = ( new Date( year, month+1, 0) ).getDate(); // 현재 달의 마지막 일자

const targetDate = new Date(year, month, lastDay).getTime();  // 현재가 12월 이면 month 는 11 이 나온다.

function fn_count()
{
    // get today's date
    const today = new Date().getTime();

    // get the difference
    const diff = Math.floor(targetDate - today);

    let days = 0; let days_ten =0; let days_il = 0;
    let hours_ten = 0;  let hours_il = 0;
    let min_ten=min_il =0;
    let sec_ten = sec_il = 0;

    if(diff < 0 ){
         days = 0;
         hours_ten = 0;
         hours_il = 0;
         min_ten=min_il =0;
         sec_ten = sec_il = 0;
    } else {
       // math
        days = Math.floor(diff / (1000 * 60 * 60 * 24));
        if(days >= 10){
            days_ten = Math.floor(days/10);

            days_il = Math.floor(days - 10*days_ten);
        }else{
            days_ten =0;
            days_il = days;
        }

       let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        hours_ten = 0;   hours_il = 0;
       if(hours > 9){
            hours_ten = Math.floor(hours / 10);
            hours_il = Math.floor(hours - 10);
       }else {
            hours_ten = 0;
            hours_il = hours;
       }

       let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        min_ten=min_il =0;
       if(minutes > 9){
           min_ten = Math.floor(minutes /10);
           min_il  = Math.floor(minutes - min_ten*10);
       }else {
           min_ten = 0;
           min_il  = minutes;
       }

       let seconds = Math.floor((diff % (1000 * 60)) / 1000);
        sec_ten = sec_il = 0;
       if(seconds > 9){
           sec_ten = Math.floor(seconds /10);
           sec_il  = Math.floor(seconds - sec_ten*10);
       }else {
           sec_ten = 0;
           sec_il  = seconds;
       }
    }


    // display  ///////////////////////
    let v_days_ten = document.querySelector("#days_ten");
    let v_days_il  = document.querySelector("#days_il");
    let v_hour_ten = document.querySelector("#hour_ten");
    let v_hour_il  = document.querySelector("#hour_il");
    let v_min_ten  = document.querySelector("#min_ten");
    let v_min_il   = document.querySelector("#min_il");
    let v_sec_ten  = document.querySelector("#sec_ten");
    let v_sec_il   = document.querySelector("#sec_il");

    v_days_ten.innerHTML = days_ten;
    v_days_il.innerHTML  = days_il;
    v_hour_ten.innerHTML = hours_ten;
    v_hour_il.innerHTML  = hours_il;
    v_min_ten.innerHTML  = min_ten;
    v_min_il.innerHTML   = min_il;
    v_sec_ten.innerHTML  = sec_ten;
    v_sec_il.innerHTML   = sec_il;

}


let timer = setInterval(function() {
    fn_count()
}, 1000);

// countdown ////////////////////////////////////////

function fn_today_number()
{
    let v_this_year_num = document.querySelector("#this_year_num");
    let v_this_month_num = document.querySelector("#this_month_num");

    v_this_year_num.innerHTML = year;
    v_this_month_num.innerHTML = month+1;

}
fn_today_number()
