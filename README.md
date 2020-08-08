# html-css_self_study

#웹페이지 첫 작업(추가예정)

###부족한 테그 정리(이번 작업에서 이해가 더 필요했던부분)
- position
- [flex](#2)
- [font 관련(family)](#3)
- [검색창 구현](#4)
- [transform library(csshake 적용법)](#5)
- [외부 삽입(image+video+music)](#6)
<br/>

# 1
- **position**<br/>

static : 보통의 일반적인 배치가 적용된다. top, right, bottom, left 속성은 적용되지 않는다.<br/>

relative : 상대적인 위치에 배치된다. 즉 그 엘리먼트의 본래의 위치를 기준으로 배치된다. 위치는 top, right, bottom, left 속성에 의해 지정된다. 뒤에 계속되는 요소의 배치에 영향을 주지 않는다.<br/>

absolute : 절대적인 위치에 배치된다. 즉 포함블럭의 네변을 기준으로 배치된다.  위치는 top, right, bottom, left 속성에 의해 지정된다. 뒤에 계속되는 요소의 배치에 영향을 주지 않는다.<br/>

<pre><code>{   
/*풋테그*/
.foot{ 
        position:absolute;
        bottom:0;
        }
    #footer_p{
        display:flex;}
    #footer{
        padding-left:1rem;           
    }
}</code></pre><br/>


fixed : 고정적인 위치에 배치된다. 브라우저의 스크롤에 의한 영역이동에 대해 고정된다. 또한 인쇄매체에 대해서도 각 페이지의 같은 위치에 인쇄된다. 위치는 top, right, bottom, left 속성에 의해 지정된다. 뒤에 계속되는 요소의 배치에 영향을 주지 않는다.<br/>

<pre><code>{
/*왼쪽상단*/
        #fixed{ 
            display:inline-block;
            border: 2px solid black;
            position:fixed;
            top:0;
            left:0;
            font-size:2rem;
            background-color: green;
          }
}<code><pre><br/>

#2
- **Flex**<br/>

+ Flex 사용법:<https://heropy.blog/2018/11/24/css-flexible-box/>
<br/>

+ 추신) flex는 items의 정렬방식으로 다양한 정렬구현이 가능하다.
구현 태그들을 참조하여 익히도록 하자

#3
- **Font**<br/>

- font-family(글꼴 변경)<br/>
글꼴 이름 : 브라우저에 따라 공백으로 글꼴 이름을 구분할 수 있으므로 공백을 갖는 글꼴 이름일 경우 따옴표로 묶어줘야 한다. (ex: "new century schoolbook", "맑은 고딕")<br/>
대표 글꼴 : serif, sans-serif, cursive, fantasy, monospace가 대표글꼴로 정의되어 있고, 대표글꼴의 이름은 키워드이므로 따옴표 안에 넣으면 안된다. 대표글꼴은 글꼴 이름으로 지정한 글꼴을 사용할 수 없을 때 사용자의 시스템 환경에서 제공하는 글꼴로 대체해준다.<br/>

- font-weight<br/>
normal 또는 400 = 기본적인 굵기 입니다.<br/>
lighter 또는 400 이하 = 기본적인 굵기보다 더 얇은 굵기를 표현합니다.<br/>
bold 또는 700 = 굵은 글씨를 표현합니다.<br/>
bolder 또는 700 이상 = bold 보다도 더 굵은 글씨로 표현합니다.<br/>
inherit = 상위 요소의 값을 상속 받습니다.<br/>

<pre><code>{
 .input{
            width: 348px; height: 21px;
            margin: 6px 0 0 9px;
            border: 0;
            line-height: 21px;
            font-weight: bold;
            font-size: 16px;
            outline: none;
        }
}<code><pre>
<br/>

#4

- **검색창 구현**

<pre><code>{
      #search{
            display: inline-block;
	        width: 366px; height: 34px;
	        border: 3px solid green;
	        background: white;
        }

  .input{
            width: 348px; height: 21px;
            margin: 6px 0 0 9px; /*상 좌 우 하*/
            border: 0;
            line-height: 21px;/*줄간격*/
            font-weight: bold;
            font-size: 16px;
            outline: none;
        }
        .submit{
            width: 54px; height: 40px;
            margin: 0; border: 0;
            vertical-align: top;
            background: green;
            color: white;
            font-weight: bold;
            border-radius: 1px;/*링크참조*/
            cursor: pointer;/*마우스 포인터 속성*/
        }
}<code><pre><br/>

+ border-radius(표면 둥글게):<https://aboooks.tistory.com/287>
+ 사용 테그:
<pre><code>{
<div id="searchmaker">
        <div id="search"><!--검색창-->
            <input type="text" class="input" >       
        </div>
            <button type="submit"class="submit">go</button>  
 </div>
}<code><pre><br/>

#5
- **transform library(csshake 적용법)**<br/>
+ head 태그에 아래 코드 삽입
<pre><code>{
 <link
rel="stylesheet" type="text/css" href="http://csshake.surge.sh/csshake.min.css">
}<code><pre><br/>
+ 라이브러리 속 원하는 div 테그 만들기 아래 코드에게 기능 부여
<pre><code>{
  <div class="shake-vertical">
         <div id="toy"><!--transfrom library 사용-->
   </div>
}<code><pre><br/>

#6
- **외부 삽입(image+video+music)**<br/>

<pre><code>{
/*사진 테그 중앙이미지*/ 
        #pic{
            border:2px solid green;
            background-color: white;
            width:580px;
            height:200px;
            background-image: url("캡처.PNG");
            margin-left:30%;
            margin-top:70px;
            background-repeat:no-repeat;
            background-position: center;
        }
}<code><pre><br/>

+ 동영상 삽입:<https://www.codingfactory.net/11880>


#추가예정







