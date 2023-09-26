### prototype method

`forEach, concat, reduce, map ,filter, find, findIndex, sort, slice, splice, push , pop ,shift, unshift`

```
arr.map(function(value, index, array) {
  // return value
});
```

```
arr.forEach(function(value, index, array) {}, thisArg)
// value - 현재 처리 중인 요소
// index - (optional) 처리 중인 요소의 인덱스
// array - (optional) forEach()가 적용되고 있는 배열
// thisArg - (optional) 호출될 때 전달되는 callback의 this 값
```

`arr.filter(function(value, index, array) {}, thisArg)`

```
arr.reduce(function (acc, item, index, array) {}, init);
// acc - 누적값
// item - 각 요소
// index - 인덱스
// array - 배열자신
// init - 누적값의 초깃값
```

\
