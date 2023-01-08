
// const adviceid =document.querySelector(".Advice-ID");
// const advicetext =document.querySelector(".Advice-Text");
// const advicebtn =document.getElementById("Dice");

const fetchAdvice = async() => {
  const res = await fetch("https://api.adviceslip.com/advice")
  const data = await res.json()
  // const {slip} = data
  // adviceid.innerHTML='#${slip.id}'
  // advicetext.innerHTML=slip.advice

  console.log(data)

  document.querySelector(".Advice-ID").innerHTML = `Advice # ${data.slip.id}`
  document.querySelector(".Advice-Text").innerHTML = `"${data.slip.advice}"`

};

fetchAdvice()
advicebtn.AddEventListener("Click",fetchData);


// const dice = document.getElementById("Dice");
// const adviceNum = document.querySelector(".Advice-ID");
// const adviceText = document.querySelector(".Advice-Text");
//
// // Run the showQuote function when the page is loaded
// window.onload = showQuote;
//
// // Eventlistener for dice button
// advicebtn.addEventListener("click", function(){
//     showQuote();
// });
//
// // showQuote function to show random quote from API
// function showQuote(){
//     fetch("https://api.adviceslip.com/advice")
//     .then(response => response.json())
//     .then((data) => data.slip)
//     .then((data) => {
//         adviceid.textContent = data.id;
//         advicetext.textContent = data.advice;
//     })
//     .catch((error) => {
//         alert(`Error ${error}`);
//     });
// }
