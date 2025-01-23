# Projects related to DOM

## project link
[Click Here] (https://verbose-goldfish-9xvxw647pvv2x5jq-5500.app.github.dev/js-projects/project02_BMI%20Calculator/)

# solution code

## project 2 - BMI Calculator

```javascript
console.log("rohit")
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  }
  
  if(weight == '' || height < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height*height)/1000)).toFixed(2)
    results.innerHTML = `<span>${bmi}</span>`;

  }
  
});
```