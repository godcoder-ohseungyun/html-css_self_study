
//1. 유저가 값 입력 form 숨기고 상단에 숨겨졌던 유저 이름 플로팅 

//form tag는 submit 시에 page renew ->  renew 없이 정보만 전달하게 할수있다. (기본 브라우저 기능 제거)
const btForm = document.querySelector("#login-Form");
const btInput = document.querySelector("#login-Form > input"); //valuetest > input
const greeting = document.querySelector("#greeting");


const HIDDEN_CLASSNAME = "hidden" //자주 사용 되면 상수화

function methodd(event){ //브라우저기본정보를 받아올때 event 라는 이름에 argument "공간"을 주면 브라우저 기본 정보를 활용할수있다. 다른 이름도 ㄱㅊ event가 관행
    event.preventDefault(); //브라우저 디폴트를 막는다. form tag submit 시에 자동 page renew를 막는다.
    btInput.classList.add(HIDDEN_CLASSNAME);
    const username = btInput.value;
    greeting.innerText = `Hello ${username}`; //  (~)표시 //"Hello" + username 와 같은 동작
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

btForm.addEventListener("submit",methodd);


//2. 유저 입력 기억하기

//로컬스토리지를 통해 로컬에서 정보를 저장 밎 불러올수있다. 필요할때 방법 알아보기
//https://han41858.tistory.com/54

//3 .







