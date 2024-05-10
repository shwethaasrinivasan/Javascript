Creating tooltips using only HTML and CSS is straightforward and can be achieved using the :hover pseudo-class to display information when the user hovers over an element. Here's a basic example:

HTML
<div class="tooltip">Hover over me
  <span class="tooltiptext">Tooltip text</span>
</div>

CSS
/* Container div to position the tooltip text */
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* Optional: adds underline to indicate hoverable */
}

/* Tooltip text styling */
.tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -60px; /* Use half of the width (120px/2 = 60px), to center the tooltip */

  /* Fade in tooltip - animations (optional) */
  opacity: 0;
  transition: opacity 0.3s;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

Explanation
Structure: A <div> element with a class of .tooltip contains the text that, when hovered, shows the tooltip. The tooltip content is placed inside a <span> element with a class of .tooltiptext.

Styling: The .tooltip is styled to indicate it's hoverable (optional underline). The .tooltiptext is initially hidden (visibility: hidden and opacity: 0) and positioned absolutely with respect to its first positioned (not static) ancestor container (.tooltip div).

Visibility: When the .tooltip container is hovered over, the .tooltiptext becomes visible (visibility: visible and opacity: 1) through CSS transitions, creating a fade-in effect.

Positioning: The tooltip text is centered by setting its left position to 50% of its container and then shifting it back by half its width (margin-left: -60px). Adjust the bottom property to control the vertical distance between the tooltip text and the hoverable element.

This method is purely CSS-driven, providing an elegant and simple way to add tooltips without JavaScript. It's highly customizable and can be adapted to fit the design of most websites.