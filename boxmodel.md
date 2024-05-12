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



**FlexBox** - Elements will be in column display - Flexbox positioning

```css
.container{
    background-color: red;
    height:300px; or 100vw - 100 view port;
    display:flex;
    flex-direction: row/column/row-reverse;
    flex-wrap:no-wrap/wrap;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items:center/stretch/flex-start/flex-end;

}

**CSS Grid** - Elements will be in  row display

.container{
    background-color: #f2f2f2;
    padding:10px;
    margin:10px;
    display:grid;
    grid-template-rows: fr; //free space
    grid-auto-flow: column;
    grid-template-columns: 30px 50% 50px; or 1fr 1fr 1fr; 3rem ~ 40px
    grid-gap: 80px;
    grid-template-rows: minmax(100px, auto);
    grid-template-rows:repeat(4, 300px); or (3, 1fr);
    grid-template-columns: repeat(auto-fill,100px) or repeat(auto-fit, minmax(200px, 1fr)); //shrinks/wraps the section
    grid-template-areas: 
    "header header",
    "section aside",
    "footer footer";
    justify-content: space-around;
    align-items:center/stretch/flex-start/flex-end;
    align-content: space-evenly;

}

.span {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-column: 1 / 3; (same as grid-column start and end)
    grid-column: span 3;
    grid-area: span;
};