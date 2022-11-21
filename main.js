// let obj = {
//   leng:function(str){
//     let sanagich = 0
//     while(str(sanagich)){
//       sanagich++
//     }
//   },
//   harf:function(yozuv){
//   let sanagich = 0
//   let leng = 0
//   while(yozuv [leng]){
//     leng++
//       if(yozuv  [leng] *1  != " "){
//         sanagich++
//       }
//     }
//   return sanagich
//   }

// }
// console.log(obj.harf("salom23"));
// -----------------kankulyator------------------
// let raqam1 = prompt("1chi raqam")*1
// let amal = prompt('*/+-')
// let raqam2 = prompt("2chi raqam")*1
// if(amal=='*'){
//   alert(raqam1*raqam2)
// }

// if(amal=='/'){
//     alert(raqam1/raqam2)
// }
// if(amal=='+'){
//     alert(raqam1+raqam2)*1
// }
// if(amal=='-'){
//     alert(raqam1-raqam2)*1
// }


    // -------------masala-------------------
// let str = "fhhty6gf5kkf2"
// let count = 0
// for(let i = 0 ; i <str.length; i ++){
//   if (parseInt(str[i])) {
//     count += +str[i]
//   }
// }
// console.log(count);
 let rew;
 let soone = prompt("son1")*1
 let amalw = prompt(" + , - , * , /")
 let sontwo = prompt("son2")*1
 switch(amalw){
    case "+":
        rew = (soone+sontwo)
        alert(rew);
        break;
        case "-":
            rew = (soone-sontwo)
            alert(rew);
            break
            case "*":
                rew = (soone*sontwo)
                alert(rew);
                break
                case "/":
                rew = (soone/sontwo)
             alert(rew);
             break
             default:
                alert("amalni togri kiriting");
                break
 }
 