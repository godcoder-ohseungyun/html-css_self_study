

+ 본 개요에서는 자세한 구현보단 정형화된 틀을 구성하고 화면 규격에 맞게 반응형으로 웹을 짜는

  규칙에 관하여 정리하고자 한다.

+ 이후 효율성 기반으로 코드 구성하는 법을 학습할 예정이다.

+ 주요 학습자료는 드림코딩 엘리 및 기존 웹 분석이다.

+ 사전지식

> + html 5 를 vscode에 입력하면 기본 폼 자동완성.
>
> + html tag는 대부분 브라우저(웨일 파이어폭스 크롬 등)에서 공통으로 사용하도록 규정되어있다.
>
> + ### **[중요! ]** MDN: https://developer.mozilla.org/ko/docs/Web/HTML 개발자들이 새로dns 정보를 얻는 DOCS 
>
> + [HTML 요소 참고서 - HTML: Hypertext Markup Language | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/HTML/Element) 에서 요소 사용법 및 브라우저 호환여부를 확인할수있다. (옆 aside bar HTML elements에서) CSS도 가능
>
> + https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure 에서 시멘틱 구조에 대한 정보를 얻을수있다.
>
> + emmet: https://docs.emmet.io/cheat-sheet/ html을 빠르게 작성할수있게 해주는 단축문 
>
> + https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=5C6BC0
>
>   색깔 코드 사이트
>
> 

# 박스 모델링

---

![material](C:\Users\afrad\OneDrive\문서\html-css-Js\available\HTML&CSS\material.PNG)

Inline level tag : <b> <span> <input>등 요소를 감싸도 개행이 없는 테그

Block level tag: <div> 등 요소를 감싸면 개행되는 테그

# 시멘틱 구조

> 틀을 나누어 레이아웃을 구현하는데 나누는 기준은 개인차가 있다.

---

**● <header>**

**위에서 언급한 <head>는 <html>바로 밑에 쓰이지만 <header>는 <body>안에 있기 때문에 둘은 전혀 다릅니다. <header>는 주로 머리말, 제목을 표현하기 위해 쓰입니다.** 

**● <nav>**

**HTML5에서 새롭게 생긴 시맨틱 태그이고 네비게이션이라고 불립니다. 콘텐츠를 담고 있는 문서를 사이트간에 서로 연결하는 링크의 역활을 담당합니다. <nav>는 주로 메뉴에 사용되고 위치에 영향을 받지 않아 어디에서든 사용이 가능합니다.** 

**● <section>**

**<body>영역은 콘텐츠를 <Header>,<section>,<footer>의 3가지 공간에 콘텐츠를 저장하는데요. 그 중 <section>은 본문 콘텐츠를 담고 있습니다. <section>안에 <section>을 넣는 것도 가능합니다.**

**● <article>**

**<section>이 콘텐츠를 분류한다면 이 <article>태그안에는 실질적인 내용을 넣습니다. 뉴스로 예를 들면 정치/ 연예/ 사회의 대분류는 <section>이고, 정치의 기사내용과 연예의 기사내용들을 <article>에 넣는 것이죠.** 

**● <aside>**

**사이드바라고 불르기도 하며, 본문 이외의 내용을 담고 있는 시맨틱 태그입니다. 주로 본문옆에 광고를 달거나 링크들을 이 공간에 넣어 표현합니다.**

**● <footer>**

**화면의 구조 중 제일 아래에 위치하고, 회사소개 / 저작권 / 약관 / 제작정보 들이 들어갑니다. 연락처는 <address>태그를 사용하여 표시합니다.**

**●** **<div>**

**위 사진에는 없지만 <div>는 HTML5에 와서 글자나 사진등 콘텐츠들을 묶어서 CSS 스타일을 적용시킬때 사용합니다.** 

● <main> 

메인 본문을 작성하는 박스

# CSS

---

선택자

~~~
* { }: 전체 테그들을 지정
Tag { } : 특정 테그들을 지정 ex) div
# {} : 특정 아이디를 갖는 요소를 지정
. {} : 특정 class를 갖는 요소를 지정

Tag,Tag {} : 다중 지정 가능 ex) div , span {} 
~~~

코드 중복 제거 가능

~~~css
div , span {
    margin : 100px;
    padding:  100px;
}

div {
    background: red;
}

span {
    background: blue;
}
~~~



# Layout

---

display속성

~~~python
div {
	display: inline-block #box단위, 개행x
	display: block # box단위, 개행o 
	display: inline #box가 아닌 요소 단위, 개행x
}
~~~

position 속성

~~~python
position: static #모든 box들의 default 값임 옮기고 싶다면 아래 값중 하나 택 1
    
position: relative # 원래 자신의 위치에서 상대적으로 이동
position: absolute # 자신이 포함된 상위 box기준으로 이동
position: fixed # box개념에서 벗어나 window page에 고정
~~~

> 특히 absolute는 flex요소에서 벗어나서 중복된 행에 위치시키고 싶을때 사용한다.
>
> 박스내 요소들 다 무시하고 자유롭게 이동 가능해짐

 ### jquery 등 라이브러리는 사용하는것을 비추



# FlexBox

---

https://www.youtube.com/watch?v=7neASrWEFEM&list=PLv2d7VI9OotQ1F92Jp9Ce7ovHEsuRQB3Y&index=9

**Float 속성**은 이미지와 본문의 배치를 위해 사용되어진다.

**수평정렬:** 수평선이 중심축 ,수직선이 반대 축

**수직정렬:** 수직선이 중심축, 수평선이 반대 축

## [북마크]

---

[CSS Flexbox 정리 | STUDY_BLOG (u00938.github.io)](https://u00938.github.io/2020/11/01/CSS-Flexbox.html)

https://css-tricks.com/snippets/css/a-guide-to-flexbox/

---



[Flexbox : 박스와 아이템들을 행/열 자유자재로 배치시켜줄 수 있는 유연한 layout](https://u00938.github.io/2020/11/01/CSS-Flexbox.html#flexbox--박스와-아이템들을-행열-자유자재로-배치시켜줄-수-있는-유연한-layout)

[컨테이너 박스의 Flexbox 속성](https://u00938.github.io/2020/11/01/CSS-Flexbox.html#컨테이너-박스의-flexbox-속성)

[컨테이너의 방향: flex-direction](https://u00938.github.io/2020/11/01/CSS-Flexbox.html#컨테이너의-방향-flex-direction)

[컨테이너의 줄바꿈: flex-wrap](https://u00938.github.io/2020/11/01/CSS-Flexbox.html#컨테이너의-줄바꿈-flex-wrap)

[방향 & 줄바꿈 단축: flex-flow](https://u00938.github.io/2020/11/01/CSS-Flexbox.html#방향--줄바꿈-단축-flex-flow)

[중심축 기준 정렬: justify-content](https://u00938.github.io/2020/11/01/CSS-Flexbox.html#중심축-기준-정렬-justify-content)

[반대축 기준 정렬: align-items](https://u00938.github.io/2020/11/01/CSS-Flexbox.html#반대축-기준-정렬-align-items)

[줄 간격: align-content](https://u00938.github.io/2020/11/01/CSS-Flexbox.html#줄-간격-align-content)

[아이템의 Flexbox 속성](https://u00938.github.io/2020/11/01/CSS-Flexbox.html#아이템의-flexbox-속성)

[아이템 순서: order](https://u00938.github.io/2020/11/01/CSS-Flexbox.html#아이템-순서-order)

[아이템 비율: flex-grow](https://u00938.github.io/2020/11/01/CSS-Flexbox.html#아이템-비율-flex-grow)

[아이템 비율: flex-shrink](https://u00938.github.io/2020/11/01/CSS-Flexbox.html#아이템-비율-flex-shrink)

[아이템 기본 크기: flex-basis](https://u00938.github.io/2020/11/01/CSS-Flexbox.html#아이템-기본-크기-flex-basis)

[비율 & 크기 단축: flex](https://u00938.github.io/2020/11/01/CSS-Flexbox.html#비율--크기-단축-flex)

**아이템별 정렬: align-self**

---



# 실습

---

1. 클릭이 필요한 테그(a tag)는  padding을 주어 사용자가 클릭하기 편하도록 영역을 넓혀준다
2. 













