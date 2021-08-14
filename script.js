// Kredit

const kredit1 = 30
const kredit2 = 25
const kredit3 = 34
const kredit4 = 34

// Get Input Value


function validateform(){  
    let input1=document.myForm.input1.value  
    let input2=document.myForm.input2.value
    let input3=document.myForm.input3.value 
    let input4=document.myForm.input4.value  
 
    if( input1 == null || input1 == "" || input1 < 0 || input1 > 100 || input2 == null || input2 == ""  || input2 < 0 || input2 > 100 || input3 == null || input3 == "" || input3 < 0 || input3 > 100  || input4 == null || input4 == "" || input4 < 0 || input4 > 100 ){
        document.getElementById("result").innerHTML = "duz deyil";
    }
    else {
        let total = (myForm.input1.value * kredit1 + myForm.input1.value * kredit2 + myForm.input1.value * kredit3 + myForm.input1.value * kredit4) / (kredit1 + kredit2 + kredit3 + kredit4)
        total = total.toFixed(2)
        document.getElementById("result").innerHTML = "Sizin 4 semestr üzrə orta qiymətiniz: " + total + "";
    }

}

