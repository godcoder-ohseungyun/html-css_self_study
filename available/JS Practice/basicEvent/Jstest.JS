//basic
document;


//출력
//console.dir 내부정보(속성값)
//console.log 표면정보

//1. id로 tag 호출
const test = document.getElementById("test"); 
/*
getElementsByClassName
getElementsByTagName
document.querySelector(".hello > h1"); //css 처럼 항목을 찾아올수있다. so sexy!!
document.querySelectorAll(".hello > h1"); //해당하는 모든 요소 선택
*/
test.innerText ="changed";


//2. property 변경
//test.style.color = "blue"; //색상 속성 변경
//하지만 JS에서는 CSS의 영역을 침범하지 않는게 좋다.



//3. event handler
//JS는 모든 EVENT를 Listen한다. (ex, click event , resize event ect api 참고)
//https://developer.mozilla.org/en-US/docs/Web/API/Window
test.addEventListener("click",handleClick);  //"click" 이벤트 발생시 handleClick method execute!

function handleClick() {
    console.log("it was clicked!!")
}


//4. js - css - html interaction

//addEventListener==========================================================================================================
function handleClick() {
    const clickedClass = "active"; // for 오타에러 방지
    //test.className = "active";  //html의 요소의 class Name 을 active로 변경 -> html은 css 로 찾아가 .active 적용
    //className < classList

    if (test.classList.contains(clickedClass)) { //clickedClass value를 포함한다면                            
        test.classList.remove(clickedClass);  //기존의 className을 잃고 싶지 않다. 기존 className - clickedClass value
    }
    else{
        test.classList.add(clickedClass); //기존 className + clickedClass value
    }

    //test.classList.toggle(clickedClass);  //위 코드를 한줄로 요약 API!!!
}

test.addEventListener("click",handleClick);  //"click" 이벤트 발생시 handleClick method execute! //hanldeClick method 에게 필요한 기본브라우저 정보도 같이 인자로 보내준다


//EventControl==========================================================================================================

//form tag X
//form tag로 입력을 만든다면 자동으로 submit 되기때문에 아래 코드가 필요 x
/*
const btForm = document.getElementById("valuetest");

const btInput = btForm.querySelector("input"); //valuetest > input
const btButton = btForm.querySelector("button"); //valuetest > button
//const btButton = document.querySelector("#valuetest > button"); 

function btButtonClicked() {
    console.dir(btInput);
    
    const inputString = btInput.value;
    console.log(inputString.length);

    if(btInput.value === "ss"){  //input에 입력한 값 btInput.value 
        console.log("ok");
    }
}

btButton.addEventListener("click",btButtonClicked)
*/

//form tag O
//form tag는 submit 시에 page renew ->  renew 없이 정보만 전달하게 할수있다. (기본 브라우저 기능 제거)
const btForm = document.getElementById("valuetest");
const btInput = btForm.querySelector("input"); //valuetest > input

function method(event){ //브라우저기본정보를 받아올때 event 라는 이름에 argument "공간"을 주면 브라우저 기본 정보를 활용할수있다. 다른 이름도 ㄱㅊ event가 관행
    event.preventDefault(); //브라우저 디폴트를 막는다. form tag submit 시에 자동 page renew를 막는다.
    console.log(btInput.value);
}

btForm.addEventListener("submit",method);



//linkEvent
/*
const link = document.querySelector("link"); //valuetest > input

function method(event){ 
    event.preventDefault(); //link를 click 해도 linkPage로 이동하지 않게 된다.
    console.log(link.value);
}

btForm.addEventListener("click",method); //모든 event에 관하여 preventDefault 등 기본 브라우저 컨트롤 가능
*/


