# Projects related to DOM

## project link
[Click Here] (https://verbose-goldfish-9xvxw647pvv2x5jq-5500.app.github.dev/js-projects/project01_colorchanger/)

# solution code

## project 3 - Digital Clock

```javascript
console.log("rohit")
const clock = document.getElementById('clock')
// OR const clock = document.querySelector('#clock')


setInterval(function(){
  let date = new Date()
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```