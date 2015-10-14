##Tutorial: The Clearfix Hack

Whenever you are creating a grid, you need to use the `clearfix` hack because when you float any box, their height collapses and becomes 0. In this tutorial, I'm going to go over how to fix a common problem- wanting two boxes in one column, but them overlapping each other.

###1. problem: two boxes overlapping each other-
![GitHub Logo](/Users/camillemauban/Desktop/problem.png)
**HTML**
```
<section class="col-1">
  <p>1</p>
</section>
<section class="col-2">
  <p>2</p>
</section>
```
**CSS**
```
.col-1 {
  border: 1px solid #000000;
  float: left;
  width: 20%;
  margin: 2%;
}
  
.col-2 {
  border: 2px solid #ff0000;
  width: 20%;
  color: #ff0000;
  margin: 2%
}
```

###2. create clearfix in css or html
**Add this to your CSS**
```
.col-2 {
  display: table;
  content: " ";
  clear: both;
}
```
###3. solved!
  - show new and improved image
