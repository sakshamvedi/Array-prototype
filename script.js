
var box = document.querySelector("#myListContainer");
var arr = [78, 21];
function generate()
{
   
  box.innerHTML = "";
    arr.map((data) => {
     const globalarray = document.createElement('li');
   globalarray.classList.add('list-group-item');
    globalarray.textContent = data;
    box.append(globalarray);
})

}
function push()
{
    var data = Math.floor(Math.random() * 80) + 1;
    arr.push(data);
     const element = document.createElement('li');
    element.classList.add('list-group-item');
    element.textContent = arr[arr.length-1];
    box.append(element);
}
function pop() {
   
    arr.pop();
    generate();

}
function shift()
{
    arr.shift();
    generate();
}

function unshift()
{
     var data = Math.floor(Math.random() * 80) + 1;
    arr.unshift(data);
    generate();
}
function concat() {
    var newArr = [23, 45, 67, 89, 100];
    var modal = document.querySelector(".modal-body");
    modal.innerHTML = "[" + newArr + "]  " + " is concated with your previous array " + "[" + arr + "]";
    console.log(modal);
    arr = newArr.concat(arr);
    console.log(newArr)
    generate();

}

function slice()
{
    var modal = document.querySelector(".modal-body");
     modal.innerHTML = "In JavaScript, the slice() method is used to create a shallow copy of a portion of an array into a new array. The slice() method does not modify the original array, but instead returns a new array containing the selected elements  Here the start index is 0 and end index is 2";
    arr = arr.slice(0, 2);
    generate();
}

function maps()
{
    var modal = document.querySelector(".modal-body");
    modal.innerHTML = "The map() function in JavaScript is a higher-order function that allows you to create a new array by applying a callback function to each element in an existing array. It returns a new array with the same length as the original array, where each element is the result of applying the callback function to the corresponding element in the original array. It's a concise and powerful way to transform arrays in JavaScript."

}

function filters()
{
     var modal = document.querySelector(".modal-body");
    modal.innerHTML = "The Filter Function to filter value of array according to given circumstances , suppose here we want to filter all even values of arrays"
    arr = arr.filter((data) => {
        if (data % 2 == 0)
        {
            return data;
            }
    })
    generate();
}

function reduces()
{
      var modal = document.querySelector(".modal-body");
    modal.innerHTML = " The reduce() function takes a callback function as its first argument. The callback function receives two parameters: the accumulator and the current value from the array. The callback function applies the logic to the current value, and the result is accumulated in the accumulator. The second argument to reduce() is the initial value of the accumulator, in this case, 0. The result of the reduction is the final value of the accumulator after iterating through the entire array."
 
    generate();
}


function findindex()
{
    var inputvalue = document.querySelector('#inputindex');
    console.log(inputvalue.value);

    var indexvalue = arr.findIndex((data) => {
        return data == inputvalue.value;
    })
   alert(inputvalue.value +" Having Index of  " + indexvalue)
}


function sorted()
{
    arr.sort((a, b) => { 
        return a > b;
    });
    generate();
}

function reverse()
{
    arr.reverse();
    generate();
}

function some()
{
    var iscontaineven = arr.some((data) => data%2 === 0 )
    alert( "Its Contain even number :"+iscontaineven);
    
}

function every()
{
      var modal = document.querySelector(".modal-body");
    modal.innerHTML = "The every() method returns a boolean value (true or false) based on whether the callback function returns a truthy value for every element in the array or not"
 
    generate();
}

generate();