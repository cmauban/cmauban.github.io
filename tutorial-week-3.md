####Tutorial
*one small thing*

**Technique on How to Center a Box:**
Sometimes it's not just the text we need to center, but the box as a whole. A button is a good example of a box that is normally centered on a web page. To do this we want the margins to be equal.

You can can either set the right and left margins to their default, `auto`, with *any fixed percentage* value for width:

```
Selector {
    margin-right: auto;
    margin-left: auto;
    width: 80%;
    }
```

or...
You can set the width to it's default, `auto`, with a fixed percentage value for the right and left margins.

```
Selector {
    margin-right: 10%;
    margin-left: 10%;
    width: auto;
    }
```
