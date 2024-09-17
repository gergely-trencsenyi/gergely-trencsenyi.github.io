function ChangePage() { const divs = document.querySelectorAll("div"); //Minden eltüntetése
    divs.forEach(div => {
        div.style.display = "none"})
    }

function Home() { document.getElementById("home").style.display = "block"; }; //Kiválasztott div megjelenítése
function Portfolio() { document.getElementById("pf").style.display = "block"; };
function Galeria() { document.getElementById("gal").style.display = "block"; };
function About() { document.getElementById("abt").style.display = "block"; };
function proba() {alert('PROBA');};

const pf_btn = document.getElementById("pf_btn");
pf_btn.addEventListener('click', () => {
    ChangePage();
    Portfolio();
  });

const gal_btn = document.getElementById("gal_btn");
gal_btn.addEventListener('click', () => {
    ChangePage();
    Galeria();
  });

const abt_btn = document.getElementById("abt_btn");
abt_btn.addEventListener('click', () => {
    ChangePage();
    About();
  });

const hom_btn = document.querySelectorAll('.hom_btn');
hom_btn.forEach(button => {
    button.addEventListener('click', () => {
        ChangePage();
        Home();
      });;
});