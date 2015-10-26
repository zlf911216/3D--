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
function to_infive(num){
    if(num>=6){
        return num-6;
    }
    else{
        return num;
    }
}
function to_infour(num){
    if(num>=4){
        return num-4;
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
var old_time=[];
var time_3d_arr=[0,0,0,0,0,0];
var open_time=true;
function move_time(){
    function time(){
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        return to_all(h) + to_all(m) +to_all(s);
    }
    var str = time();
    for(var a=0;a<old_time.length;a++){
        if(str.charAt(a)!=old_time[a]&&open_time==false){
            $(".warp").children('div:eq('+a+')').animate({ whyNotToUseANonExistingProperty: "-=90" }, {
                step: function(now,fx) {
                $(this).css('-webkit-transform',"rotateX(" + now + "deg)");
                },
            duration:'slow'},'linear');
            time_3d_arr[a]+=1;
            if(time_3d_arr[a]==4){
                if(a==3||a==5){
                    arr_time[a].innerHTML = str.charAt(a);
                    arr_time[a].parentNode.getElementsByTagName('div')[1].innerHTML =to_inten(parseInt(str.charAt(a))+2);
                    arr_time[a].parentNode.getElementsByTagName('div')[3].innerHTML =to_inten(parseInt(str.charAt(a))+3);
                    arr_time[a].parentNode.getElementsByTagName('div')[2].innerHTML =to_inten(parseInt(str.charAt(a))+1);
                    time_3d_arr[a]=0;
                }
                if(a==2||a==4){
                    arr_time[a].innerHTML = str.charAt(a);
                    arr_time[a].parentNode.getElementsByTagName('div')[1].innerHTML =to_infive(parseInt(str.charAt(a))+2);
                    arr_time[a].parentNode.getElementsByTagName('div')[3].innerHTML =to_infive(parseInt(str.charAt(a))+3);
                    arr_time[a].parentNode.getElementsByTagName('div')[2].innerHTML =to_infive(parseInt(str.charAt(a))+1);
                    time_3d_arr[a]=0;
                }
                if(a==1){
                    if(str.charAt(0)==2){
                        arr_time[a].innerHTML = str.charAt(a);
                        arr_time[a].parentNode.getElementsByTagName('div')[1].innerHTML =to_infour(parseInt(str.charAt(a))+2);
                        arr_time[a].parentNode.getElementsByTagName('div')[3].innerHTML =to_infour(parseInt(str.charAt(a))+3);
                        arr_time[a].parentNode.getElementsByTagName('div')[2].innerHTML =to_infour(parseInt(str.charAt(a))+1);
                        time_3d_arr[a]=0
                    }
                    else{
                        arr_time[a].innerHTML = str.charAt(a);
                        arr_time[a].parentNode.getElementsByTagName('div')[1].innerHTML =to_infive(parseInt(str.charAt(a))+2);
                        arr_time[a].parentNode.getElementsByTagName('div')[3].innerHTML =to_infive(parseInt(str.charAt(a))+3);
                        arr_time[a].parentNode.getElementsByTagName('div')[2].innerHTML =to_infive(parseInt(str.charAt(a))+1);
                        time_3d_arr[a]=0;
                    }
                }
            }
        }
    }
    old_time=[];    
    for (var i = 0; i < arr_time.length; i++){
        if(open_time){
            if(i==3||i==5){
                    arr_time[i].innerHTML = str.charAt(i);
                    arr_time[i].parentNode.getElementsByTagName('div')[1].innerHTML =to_inten(parseInt(str.charAt(i))+2);
                    arr_time[i].parentNode.getElementsByTagName('div')[3].innerHTML =to_inten(parseInt(str.charAt(i))+3);
                    arr_time[i].parentNode.getElementsByTagName('div')[2].innerHTML =to_inten(parseInt(str.charAt(i))+1);
                }
                if(i==2||i==4){
                    arr_time[i].innerHTML = str.charAt(i);
                    arr_time[i].parentNode.getElementsByTagName('div')[1].innerHTML =to_infive(parseInt(str.charAt(i))+2);
                    arr_time[i].parentNode.getElementsByTagName('div')[3].innerHTML =to_infive(parseInt(str.charAt(i))+3);
                    arr_time[i].parentNode.getElementsByTagName('div')[2].innerHTML =to_infive(parseInt(str.charAt(i))+1);
                }
                if(i==1){
                    if(str.charAt(0)==2){
                        arr_time[i].innerHTML = str.charAt(i);
                        arr_time[i].parentNode.getElementsByTagName('div')[1].innerHTML =to_infour(parseInt(str.charAt(i))+2);
                        arr_time[i].parentNode.getElementsByTagName('div')[3].innerHTML =to_infour(parseInt(str.charAt(i))+3);
                        arr_time[i].parentNode.getElementsByTagName('div')[2].innerHTML =to_infour(parseInt(str.charAt(i))+1);
                    }
                    else{
                        arr_time[i].innerHTML = str.charAt(i);
                        arr_time[i].parentNode.getElementsByTagName('div')[1].innerHTML =to_infive(parseInt(str.charAt(i))+2);
                        arr_time[i].parentNode.getElementsByTagName('div')[3].innerHTML =to_infive(parseInt(str.charAt(i))+3);
                        arr_time[i].parentNode.getElementsByTagName('div')[2].innerHTML =to_infive(parseInt(str.charAt(i))+1);
                    }
                }
        }
        if(i==0){
                    arr_time[i].innerHTML = str.charAt(i);
                    arr_time[i].parentNode.getElementsByTagName('div')[1].innerHTML =str.charAt(i);
                    arr_time[i].parentNode.getElementsByTagName('div')[3].innerHTML =str.charAt(i);
                    arr_time[i].parentNode.getElementsByTagName('div')[2].innerHTML =str.charAt(i);
                }
        old_time.push(str.charAt(i));
    }
    open_time=false;
}
move_time();
setInterval(move_time,100)