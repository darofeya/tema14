document.addEventListener("DOMContentLoaded", function()

{

    if(window.localStorage)

    {

        localStorage.getItem("color")//key

        {

            document.body.style.backgroundColor =localStorage.getItem("color")

        }

    }

    else

        console.log("not work localStorage")

})

document.querySelector("#btn").addEventListener('click', function()

{

    if(window.localStorage)

    {

        localStorage.setItem("color",document.querySelector('#col').value)

    }

    else

        console.log("not work localStorage")

    document.body.style.backgroundColor =document.querySelector('#col').value

})
let obj={
    "name":"darofeya",
    age:17,
    married :true
}
if(window.localStorage)

    {

        localStorage.setItem("obj",JSON.stringify(obj))

    }

    