# https://franz0406.github.io/waxom/

## PlugIN WayPoint

```C
var waypoint = new Waypoint({
  element: document.getElementById('waypoint'),
  handler: function(direction) {
    "실행할 코드 이곳에 작성"
  }
})
```

```C
this.destroy(); 추가시 스크롤 이벤트 한번만 실행
```
```
offset 옵션으로 선택한 요소의 offsetTop 거리조정 가능.
  ex) offset: '50%'; 
```
