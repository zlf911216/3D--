function to_all(num){
    if(num<10){
         return '0'+num;
    }
    else{
        return ''+num;
        }
}
function to_inten(num){
    if(num>=10){
        return num-10;
    }
    else{
        return num;
    }
}

var arr_time=[];
var oDiv=document.getElementsByTagName('div');
    for(var i=0;i<oDiv.length;i++){
        if(oDiv[i].className=="three_d_before"){
            arr_time.push(oDiv[i]);
        }
    }
function all(){
    function time(){
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        return to_all(h) + to_all(m) +to_all(s);
    }
    var str = time();
        for (var i = 0; i < arr_time.length; i++){
        arr_time[i].innerHTML = str.charAt(i);
        arr_time[i].parentNode.getElementsByTagName('div')[1].innerHTML =to_inten(parseInt(str.charAt(i))+2);
        // arr_time[i].parentNode.getElementsByTagName('div')[3].innerHTML =to_inten(parseInt(str.charAt(i))+3);
        // arr_time[i].parentNode.getElementsByTagName('div')[2].innerHTML =to_inten(parseInt(str.charAt(i))+1);
        }   
}
all();
// setInterval(all,1000);