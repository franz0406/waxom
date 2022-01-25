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

## PlugIN BX Slider

### Step 1 마크업
부모태그에 클래스로 적용
```C
<ul class="클래스명">
  <li><img src="/images/pic1.jpg" /></li>
  <li><img src="/images/pic2.jpg" /></li>
  <li><img src="/images/pic3.jpg" /></li>
  <li><img src="/images/pic4.jpg" /></li>
</ul>
```
### Step 2 호출
```C
$(document).ready(function(){
  $('클래스명').bxSlider({
    mode: 이곳에 적용할 옵션 하나씩 추가.
  });
});
```