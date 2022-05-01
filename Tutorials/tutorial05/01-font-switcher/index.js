let fontSize = 2;

const makeBigger = () => {
   fontSize += 0.4;
   changeFont (); 
};

const makeSmaller = () => {
   fontSize -= 0.4; 
   changeFont ();
};

const changeFont = () => {
   document.querySelector("h1").style.fontSize = `${fontSize + 0.2}em`;
   document.querySelector(".content").style.fontSize = `${fontSize + 0.2}em`;
}


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

