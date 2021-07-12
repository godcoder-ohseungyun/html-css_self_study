# 바닐라 Js

## [노션 정리]: https://www.notion.so/07dfed016e914c3a8612fc76dd1542f0?v=c6feaeb5b46e4fdeb1e756113cb529c1



[엘리 JS 문법]https://www.youtube.com/watch?v=tJieVCgGzhs&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=2

[니꼬 JS 적용파트]https://nomadcoders.co/javascript-for-beginners/lectures/2901

[apis]: https://developer.mozilla.org/ko/docs/orphaned/Web/Reference/API



### 타임라인

> **엘리** JSBasic
>
> 1. 기초문법 + 서버통신(json) 개념
>
> 2. 동기 **비동기** callback promise 개념
>
> 3. **async 개념**
>
>    > promise 의 상위 api
>
> **니꼬** JSPractice





---

## **개요**

과거 Js 에 한계를 보안하기 위해 Jquery를 출시 하여 주로 Jquery만을 의지했으나 

꾸준한 발전으로 Js가 보안되면서 **Jquery의 입지를 줄이는 추세**이다. 정말 필요한 경우가 아니면

배제

**바닐라 자바스크립트**: 추가적인 라이브러리나 프레임워크가 없는 순수 Js를 배워야한다.



## 습관

---

+ Js를 활용하여 유저의 유효성을 검사하기 습관화

~~~js
if (userInput ==="") { //유저 입력이 if else ~~
    //...
}
else {
    //...
}
~~~



+ Js는 유연한 언어임으로 위험성도 존재한다.  js파일 상단에 먼저 선언하여 위험 방지

~~~javascript
'use strict';  //언어의 유연성을 억제하여 위험성을 줄여줌
~~~



+ 지원이 가능하게 하고싶은 브라우저들을 조사하여 BABEL을 통해 버전 관리하여 배포



+ **hoisting**: 선언 위치에 상관없이 어디서는 사용할수있는것, 알아서 맨 위로 올려줌 

> ~~~javascript
> //var
> age = 4; //선언전에 사용
> var age;
> 
> //function declaration 함수도 가능
> printHello(); //선언전에 사용
> function printHello() {
>   console.log('Hello');
> }
> 
> //function expression 는 불가능
> //print라는 변수에 함수 자체를 선언과 동시에 할당
> print(); //error
> const print = function () { 
>   console.log('print');
> };
> ~~~



+ Js engine을 보유하고있는 programs

> **NodeJs:** back-end
>
> **React:** mobile app
>
> **Electron:** desktop app

+  **html&css와 Js 파일을 연결**

> 사용자가 web을 켤때 **html parsing   js fetching  executing js** 3가지가 완료되어야 하는데
>
> **asyn** vs **defer**
>
> ~~~html
><script asyn src="main.js"></script> <!--asyn 병렬로 js와 html을 받아옴
> but js fetching 완료후 바로 js executing함 이때 html parsing 종료됨-->
>
> <script defer src="main.js"></script> <!--defer 병렬로 js와 html을 받아오지만  js fetching과 html parsing 둘다 끝난후 js excuting함 , 작업중단x-->
> ~~~
> 
> **defer가 더 좋은 방법임으로 defer Option을 사용하자**
> 
> ![material2](C:\Users\afrad\OneDrive\문서\html-css-Js\available\JS\material2.PNG)



+ ## JS는 기본적으로 동기적 처리를 하기때문에 무거운 작업은 비동기로 처리하는게 좋다!!





# 기타

---

함수는 인자로 사용될수있다.

람다 기능도 인자로 사용가능

ctrl + click으로 해당 api 정의로 이동할수있다.

모든걸 JS로 해결하기 보다 css와 html의 영역(기본 브라우저)을 잘 활용해야한다.

> 1. JS로 css속성 control X
>
> 2. html input tag 자체의 입력text 수 제한 활용 
>
> ~~~js
> //JS를 이용하여 input tag text lenth를 제한할 필요 x
> if (userInput.length ==="") { //유저 입력이 if else ~~
>     //...
> }
> else {
>     //...
> }
> ~~~

브라우저의 기본 기능을 이해하고 필요에 따라 기능을 막는다. ex) **form**: page renew  **link**: go to the linkPage

로컬스토리지:: 웹 브라우저에 정보를 저장하고 있도록 할수있다.

> https://han41858.tistory.com/54

**동기 vs 비동기**

> ### 동기(synchronous : 동시에 일어나는)
>
>  \- 동기는 말 그대로 동시에 일어난다는 뜻입니다. 요청과 그 결과가 동시에 일어난다는 약속인데요. 바로 요청을 하면 시간이 얼마가 걸리던지 요청한 자리에서 결과가 주어져야 합니다.
>
> - 요청과 결과가 한 자리에서 동시에 일어남
> - A노드와 B노드 사이의 작업 처리 단위(transaction)를 동시에 맞추겠다.
>
>  
>
> ### 비동기(Asynchronous : 동시에 일어나지 않는)
>
>  \- 비동기는 동시에 일어나지 않는다를 의미합니다. 요청과 결과가 동시에 일어나지 않을거라는 약속입니다. 
>
> - 요청한 그 자리에서 결과가 주어지지 않음
> - 노드 사이의 작업 처리 단위를 동시에 맞추지 않아도 된다.
>
>  
>
> ###  동기와 비동기는 상황에 따라서 각각의 장단점이 있습니다. 
>
>  **동기방식**은 설계가 매우 간단하고 직관적이지만 결과가 주어질 때까지 아무것도 못하고 대기해야 하는 단점이 있고, 
>
>  **비동기방식**은 동기보다 복잡하지만 결과가 주어지는데 시간이 걸리더라도 그 시간 동안 다른 작업을 할 수 있으므로 자원을 효율적으로 사용할 수 있는 장점이 있습니다.
>
> **무거운 작업은 비동기로 처리하는게 좋다.** **promise  기능**

**콜백**

> **call back**:  **callback이란 나중에 실행할 argument로 다른 함수에게 전달되는 함수를 의미한다.** -> 가독성과 유지보수를 해침



