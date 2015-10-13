###Tutorial: Using the `.eq()` Selector

I found the this selector very useful! The `eq()` selector finds items by order via index number. Each item is returned by a specific jquery object. A jquery object is **array-like**, as it assigns a number to each of it's elements (starting at 0.)

The `eq()` selector can be represented in two ways:
- `.eq()` or `:eq()`

Below are examples of filtering the same element, but written in both ways:
- This targets the third element in the `td` and adds `black` to the class.
```
1. $('td: eq(2)').addClass('black')
2. $('td').eq(2).addClass('black')
```
I personally like the first way because it's written in a way I would understand the correspondence between the two.
