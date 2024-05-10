- **Content**: The actual content (text, images) of the element.
- **Padding**: Clears an area around the content. It's transparent by default.
- **Border**: A border that goes around the padding and content.
- **Margin**: Clears an area outside the border. Also transparent.

```css

body{
background-image: url('https://picsum.photos/1920/1080');
background-repeat: no-repeat;
background-size: cover;
background-position: center;
height: 2000px;

}

div{
    background-color: red;
    margin: 40px 10px 30px 20px; //top,right,bottom,left//spaced around element/content
    padding-left: 30px; //spaced inside the element/content
    padding: 20px 10px 30px 50px; //TRBL
    box-shadow: 6px 8px 7px #aaaaaa;
    position: sticky;
    top: 0px;

}
div p {
position:absolute; //floated out 
left:0px;
}

span {
    background-color: blue; //span element is not a block element so we need to add display as block
    display: block;
}

ul {
    float: left;
}

ul li {
display: inline-block;
}

img {
    float: right;
    position: fixed;
    top:30px;
    bottom:30px;
}
```

**Positions**:
1. Static - default position
2. Sticky
3. Relative
4. Absolute
5. Fixed


**Selectors**

1. Class - can pass multiple classes for one element, <div class="top-section size" >, accessed by dot in css, like .size 
2. Id - cannot pass multiple ids for one element, accessed by #