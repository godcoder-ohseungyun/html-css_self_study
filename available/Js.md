# 바닐라 Js

https://www.youtube.com/watch?v=tJieVCgGzhs&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=2

---

## **개요**

과거 Js 에 한계를 보안하기 위해 Jquery를 출시 하여 주로 Jquery만을 의지했으나 

꾸준한 발전으로 Js가 보안되면서 **Jquery의 입지를 줄이는 추세**이다. 정말 필요한 경우가 아니면

배제

**바닐라 자바스크립트**: 추가적인 라이브러리나 프레임워크가 없는 순수 Js를 배워야한다.



Js는 유연한 언어임으로 위험성도 존재한다.  js파일 상단에 먼저 선언하여 위험 방지

~~~javascript
'use strict';  //언어의 유연성을 억제하여 위험성을 줄여줌
~~~

지원이 가능하게 하고싶은 브라우저들을 조사하여 BABEL을 통해 버전 관리하여 배포

**hoisting**: 선언 위치에 상관없이 어디서는 사용할수있는것, 알아서 맨 위로 올려줌 

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

Js engine을 보유하고있는 programs

> **NodeJs:** back-end
>
> **React:** mobile app
>
> **Electron:** desktop app



**사전준비**

> NodeJs 설치: 웹 없이 터미널 상에서도 컴파일 가능하게 해준다. https://nodejs.org/ko/download/
>
> html&css와 Js 파일을 연결하여 사용할것이다.
>
> 사용자가 web을 켤때 **html parsing   js fetching  executing js** 3가지가 완료되어야 하는데
>
> **asyn** vs **defer**
>
> ~~~html
> <script asyn src="main.js"></script> <!--asyn 병렬로 js와 html을 받아옴
> but js fetching 완료후 바로 js executing함 이때 html parsing 종료됨-->
> 
> <script defer src="main.js"></script> <!--defer 병렬로 js와 html을 받아오지만  js fetching과 html parsing 둘다 끝난후 js excuting함 , 작업중단x-->
> ~~~
>
> **defer가 더 좋은 방법임으로 defer Option을 사용하자**
>
> ![material2](C:\Users\afrad\OneDrive\문서\html-css-Js\available\material2.PNG)



# 실습

---

**차별점**

함수는 인자로 사용될수있다.

람다 기능도 인자로 사용가능

ctrl + click으로 해당 api 정의로 이동할수있다.



