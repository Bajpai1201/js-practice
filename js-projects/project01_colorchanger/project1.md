# Projects related to DOM

## project link
[Click Here] (https://verbose-goldfish-9xvxw647pvv2x5jq-5500.app.github.dev/js-projects/project01_colorchanger/)

# solution code

## project 1 - Color Theme Switcher

```javascript
console.log("rohit")
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id == 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == 'purple'){
      body.style.backgroundColor = e.target.id;
    }
  })
})
```