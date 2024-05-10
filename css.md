**Specificity**

How specific we are with the selectors
style conflicting will be avoided using specificity score
style crossed means another style is overriding it


**Box Model**

1. Content (Surrounded by padding)
2. Padding
3. Border
4. Margin

**CSS Variable**

html {
    --bgcolor: green;
    --bgdiv: red;
    --divpadding: 20px
}

#somediv {
    background: var(--bgdiv, yellow) //fallback if bgdiv is not set
    padding: var(--divpadding);
}

body {
    background: var(--bgcolor)    
}