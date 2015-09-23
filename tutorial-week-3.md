####Tutorial

**Technique on How to Center a Box:**
It's annoying when you want to do something you think is so simple, yet you can't figure it out. Why was centering a box not working out for me at first.. Oh, because I was using `text-align: center`. Dumb. That was all I knew at the time. Sometimes, it's not just the text we need to center, but the box as a whole. A button is a good example of a box that is normally centered on a web page. Yep, the text will center align in the button, but not the button itself! As a starting point, grab the element for your button and make that your selector.

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
