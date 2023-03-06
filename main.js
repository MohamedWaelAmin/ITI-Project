//////////////header scroll///////
function scrollWin1(){
    window.scrollTo(0,5);
    }
function scrollWin2(){
    window.scrollTo(0,1800);
    }
function scrollWin3(){
        window.scrollTo(0,630);
        }
//////////////////Galaray/////////
////suppose the image that is aleardy shown (first) /////
var slideIndex =1;
//// function to can show the first image
showSlides(slideIndex);
///to can slider between images
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
//// function to can show the image
function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
// if I want to slide the next img and I am in last img ,then return to the first
    if (n > slides.length) 
    {
        slideIndex = 1;
    }
    // if I want to slide the prev img and I am in first img ,then return to the last
    if (n < 1)
    {
        slideIndex = slides.length
    }
    //to can print the new img without prev
    for (var i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";  
    }
    //the dots when i am in its img
    for (var i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
/////////////////////////registration/////////////////////

///use it after the validation
var Fname=document.getElementsByName("Fname")[0];
var Lname=document.getElementsByName("Lname")[0];
var Username=document.getElementsByName("username")[0];
var Password=document.getElementsByName("password")[0];
var Email=document.getElementsByName("email")[0];
var Age=document.getElementsByName("age")[0];
var Address=document.getElementsByName("address")[0];
/////////////////////////////////////////////////
document.getElementById("validateBtn").onclick=validation;

function validation()
{    /// in this make valid for each field
    ///validation about Fname and Lname
    validateName(document.getElementsByName("Fname")[0],document.getElementsByName("Lname")[0],
    document.getElementsByClassName("errorHolder")[0],document.getElementsByClassName("errorHolder2")[0]);
    ///validation about Username
    validateUsername(document.getElementsByName("username")[0],document.getElementsByClassName("errorHolder3")[0]);
    ///validation about Password
    validatePass(document.getElementsByName("password")[0],document.getElementsByClassName("errorHolder4")[0]);
    ///validation about Email
    validateEmail(document.getElementsByName("email")[0],document.getElementsByClassName("errorHolder5")[0]);
    ///validation about Age
    validateAge(document.getElementsByName("age")[0],document.getElementsByClassName("errorHolder6")[0]);
    ///validation about Country
    validateCountry(document.getElementsByClassName("errorHolder7")[0]);
    ///validation about Gender
    validateGender(document.getElementsByClassName("errorHolder8")[0]);
    ///validation about Interestes
    validateInterestes(document.getElementsByClassName("errorHolder9")[0]);
    ///validation about Address
    validateAddress(document.getElementsByName("address")[0],document.getElementsByClassName("errorHolder10")[0]);
    //////////////////////////////////////////
    validateCompletefields();
}
function validateName(inputfield,inputfield2,errorPlace,errorPlace2)
{
    if(inputfield.value==''){
        errorPlace.innerText='Please Enter Your First name';
    }
    else if(inputfield.value.length<4 || inputfield.value.length>14)
    {
        errorPlace.innerText='First name more than 3 char and less than 15 char'
    }
    else
    {
        errorPlace.innerText='';
    }
    //////////////////// end of Fname/////////////
    if(inputfield2.value==''){
        errorPlace2.innerText='Please Enter Your Last name';
    }
    else if(inputfield2.value.length<4 || inputfield2.value.length>14)
    {
        errorPlace2.innerText='Last name more than 3 char and less than 15 char';
    }
    else
    {
        errorPlace2.innerText='';
    }
        //////////////////// end of Fname/////////////
}

function validateUsername(inputfield,errorPlace){
    if(inputfield.value==''){
        errorPlace.innerText='Please Enter Your Username';

    }
    else if(inputfield.value.length<7 || inputfield.value.length>19)
    {
        errorPlace.innerText='Username more than 6 char and less than 20'
    }
    else
    {
        errorPlace.innerText='';

    }
}

function validatePass(inputfield,errorPlace){
    var passw=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if(inputfield.value==''){
        errorPlace.innerText='Please Enter Your Password';
    }
    else if(inputfield.value.match(passw))
    {
         errorPlace.innerText='';
    }
    else
    {
         errorPlace.innerText='Password must be more than 8 char,spiecal char or numbers and fchar must be upper';
    }
}

function validateEmail(inputfield,errorPlace){
     var emailw= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputfield.value=='')
    {
       errorPlace.innerText='Please Enter Your Email';
    }
    else if(inputfield.value.match(emailw))
    {
        errorPlace.innerText='';
    }
    else 
    {
        errorPlace.innerText='wrong email try again';
    }
}

function validateAge(inputfield,errorPlace){
    var agew=/^\d+/;
    if(inputfield.value==''){
        errorPlace.innerText='Please Enter Your Age';
    }
    else if(!inputfield.value.match(agew))
    {
         errorPlace.innerText='Age must not havs any char';
    }
    else if(inputfield.value.length<16 && inputfield.value.length>45)
    {
        errorPlace.innerText='Age must be between 16 to 45';
    }
    else 
    {
        errorPlace.innerText='';
    }
}

function validateCountry(errorPlace){
    if(document.getElementsByName("country")[0].value == "Default")
    {
        errorPlace.innerText='Select your country from the list';
    }
    else
    {
        errorPlace.innerText='';
    }
}

function validateGender(errorPlace){
    if(document.getElementById("male").checked==true || document.getElementById("female").checked==true )
    {
        errorPlace.innerText='';
    }
    else
    {
        errorPlace.innerText='you must select your gender';
    }

}
function validateInterestes(errorPlace){
    if (
        document.getElementById("sports").checked == true ||
        document.getElementById("reading").checked == true ||
        document.getElementById("singing").checked== true ||
        document.getElementById("enjoying").checked == true)
        {
            errorPlace.innerText='';
        } 
        else 
        {    
            errorPlace.innerText='you must select at least interest';
        }
}
function validateAddress(inputfield,errorPlace)
{
    if(inputfield.value==''){
        errorPlace.innerText='Please Enter Your Address';
    }
    else
    {
        errorPlace.innerText='';

    }
}
function validateCompletefields()
{
    var passw=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    var emailw=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var agew=/^\d+/;
    if(Fname.value!=""&&Fname.value.length>3&&Fname.value.length<15 &&
    Lname.value!="" &&Lname.value.length>3 && Lname.value.length<15 &&
    Username.value!="" &&Username.value.length>6 && Username.value.length<20&&
    Password.value!="" &&Password.value.match(passw)&&
    Email.value!="" && Email.value.match(emailw)&&
    Age.value!="" && Age.value.match(agew)&&(Age.value.length>16 || Age.value.length<45)&&
    document.getElementsByName("country")[0].value != "Default"&&
    (document.getElementById("male").checked==true || document.getElementById("female").checked==true)&&
    (document.getElementById("sports").checked == true ||
    document.getElementById("reading").checked == true ||
    document.getElementById("singing").checked== true ||
    document.getElementById("enjoying").checked == true)&&
    Address.value!='')
    {                            
        alert("Thanks for filling the form");
    }
    else
    {
        alert("There is something wrong , Please follow the rulse!!");
    }
 }
function swipe(){
    var largeImagee=document.getElementById('imgggg');
    var url=largeImagee.getAttribute('src');
    window.open(url,'Image','width=600,height=600,screenX=800,screenY=200')
}