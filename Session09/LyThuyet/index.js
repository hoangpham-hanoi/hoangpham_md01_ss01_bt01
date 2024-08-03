// 1. Câu điều kiện if
let a = 6;
if(a>5) {
    /* nếu điều kiện thỏa mãn, câu lệnh được thực hiện */
    console.log("true");
};

/* 
    viết chương trình cho người dùng nhập vào số tuổi,
    nếu lớn hơn 18 tuổi thì báo bạn đủ tuổi xem phim,
    else thì báo bạn không đủ tuổi xem phim.
*/
/* let age = Number(prompt("mời bạn nhập tuổi: "));
    if(age >= 18) {
        console.log("bạn đã đủ tuổi xem phim")
    }
    else {
        console.log("bạn chưa đủ tuổi xem phim!")
    }; */

    /* 
        viết chương trình cho người dùng nhập vào một ngày bất kỳ trong tuần
        in ra thứ.
    */
 /*    
let day = +prompt("mời nhập ngày trong tuần");
    if(day == 2) {
        console.log("thứ 2")
    }
    else if(day ==3) {
        console.log("thứ 3")
    }
    else if(day ==4) {
        console.log("thứ 4")
    }
    else if(day ==5) {
        console.log("thứ 5")
    }
    else if(day ==6) {
        console.log("thứ 6")
    }
    else if(day ==7) {
        console.log("thứ 7")
    }
    else if(day ==8) {
        console.log("Chủ Nhật")
    }
    else{
        console.log("số bạn chọn không có")
    };
 */
    /* 
        viết chương trình cho người dùng nhập vào 1 số bất kỳ,
        nếu là số chẵn thì kiểm tra xem có lớn hơn 15 hay không?
            + nếu lớn hơn in ra
            + nếu nhỏ hơn in ra
        nếu là số lẻ thì kiểm tra xem có lớn hơn 6 hay không?
    */
// let number = +prompt("nhập số:");
//     if(number%2==0){
//         //đây là số chẵn
//         if(number>15){
//             console.log(`số ${number} là số chẵn lớn hơn 15`)
//             /* template string || literal */
//         }
//         else{
//             console.log(`số ${number} là số chẵn nhỏ hơn 15`)
//         }
//     }
//     else{
//         if(number>6){
//             console.log(`số ${number} là số lẻ lớn hơn 6`)
//         }
//         else{
//             console.log(`số ${number} là số lẻ nhỏ hơn 6`)
//         }
//     };
    switch (key==3||key==5||key==7||key==0) {
        case true:
            console.log("đi học")
            break;
    
        default:
            console.log("nghỉ học")
            break;
    };
    
