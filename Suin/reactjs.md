### 2.2
1. react.js와 dom 역할
    - react js -> ui를 interactive하게 만들어주는 라이브러리
    - react dom -> 모든 react element들을 html에 두는 역할

2. vanilla.js와 react.js의 차이
    - vanilla.js: html에서 요소 만들고 javascript로 요소 가져와서 처리 (html -> js)
    - react.js: js로 요소 만들고 react js가 html로 띄움 (react js -> html)

3. React.createElement(외울 필요X, 거의 사용 안함)
    - React.createElement("html 태그", {각종 프로퍼티 값  id, style, event등}, "content 내용");
\
### 2.3
1. eventlistener 등록하기
    - vanilla.js \
    <button id="btn">Click me</button>
    ...
    const button = document.getElementsById("btn");
    function handleClick() {
        console.log("im clicked")
    }
    button.addEventListener("click", handleClick);

    - react.js \
    const btn = React.createElement("button", {
            onClick: () => console.log("im clicked")
        }, "Click me");

### 2.4(복습)

### 2.5, 2.6 JSX
1. JSX 사용법
    - 기본적으로 html과 비슷
    - html 요소 만들기 : 변수 = (<html태그 프로퍼티 ex.이벤트 종류={이벤트 내용} 등 >content</h3>);

2. createElement vs JSX
    -createElement
    const h3 = React.createElement("h3", {
            id: "title",
            onMouseEnter: () => console.log("mouse enter")
        }, "Hello I'm a span");

    -JSX
    const Title = (<h3 id="title" onMouseEnter={() => console.log("mouse enter")}>Hello I'm a title</h3>);
3. 요소를 함수처럼 만들어 사용하기
    1. function 사용
    ex) function Title() {
            return (<h3 id="title" onMouseEnter={() => console.log("mouse enter")}>Hello I'm a title</h3>);
        } 
    2. 화살표 함수
    ex) const Button = () => (<button style={{backgroundColor:"tomato",}} onClick={() => console.log("im clicked")}>Click me</button>);
    - function 함수명 {return(...);} == 변수명(함수명) = () => (...);


4. 주의점
    - **내가 만든 요소는 대문자로 시작해야 함** ..소문자로 시작할시 html 태그처럼 취급될 가능성
    - 함수로 만들어 줘야 <지정함수명 />꼴을 사용하여 렌더링 가능

### 3.0(복습)

