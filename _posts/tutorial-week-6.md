##Tutorial: The Clearfix Hack

Whenever you are creating a grid, you need to use the `clearfix` hack because when you float any box, their height collapses and becomes 0. In this tutorial, I'm going to go over how to fix a common problem- wanting two boxes to be in one column, but them overlapping each other.

###1. Problem: two boxes overlapping each other-

![image](https://cloud.githubusercontent.com/assets/14016133/10472620/6d2c34f2-71f0-11e5-9991-2b4b68d33b07.png)
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

###2. Create the clearfix in css
**Add this to your CSS**
```
.col-2 {
  display: table;
  content: " ";
  clear: both;
}
```
###3. Problem solved!
![image](https://cloud.githubusercontent.com/assets/14016133/10472605/2fcdc7ba-71f0-11e5-92ce-1e6f0b46ccce.png)  
