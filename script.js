function ChangePage() { const divs = document.querySelectorAll("div"); //Minden eltüntetése
    divs.forEach(div => {
        div.style.display = "none";
        document.getElementById("bottom").style.display = "none";})
    }

function Home() { document.getElementById("home").style.display = "block"; }; //Kiválasztott div megjelenítése
function Portfolio() { document.getElementById("pf").style.display = "block"; };
function Galeria() { document.getElementById("gal").style.display = "block"; };
function About() { document.getElementById("abt").style.display = "block"; };
function Bottom () { document.getElementById("bottom").style.display = "block"; };
function proba() {alert('PROBA');};

const pf_btn = document.getElementById("pf_btn");
pf_btn.addEventListener('click', () => {
    ChangePage();
    Portfolio();
    Bottom();
  });

const gal_btn = document.getElementById("gal_btn");
gal_btn.addEventListener('click', () => {
    ChangePage();
    Galeria();
    Bottom();
  });

const abt_btn = document.getElementById("abt_btn");
abt_btn.addEventListener('click', () => {
    ChangePage();
    About();
    Bottom();
  });

const hom_btn = document.querySelectorAll('.hom_btn');
hom_btn.forEach(button => {
    button.addEventListener('click', () => {
        ChangePage();
        Home();
      });;
});

// Your NASA API key
const apiKey = 'H8DX89OG8TeYGXFCEEPy3zbsGzsIdGTo3LlGJA0M';
const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

// Function to fetch APOD data
async function fetchApod(imageId, date) {
    try {
        const response = await fetch(`${baseUrl}&date=${date}`);
        const data = await response.json();
        document.getElementById(imageId).src = data.url;
        document.getElementById(imageId).alt = data.title;
        if (data.copyright){
            document.getElementById(imageId).title = "Tulajdonos: " + data.copyright;}
        else{
            document.getElementById(imageId).title = "Ismeretlen tulajdonos" ;};
    } catch (error) {
        console.error('Error fetching APOD data:', error);
    }
}

// Function to get the date in YYYY-MM-DD format
function formatDate(date) {
    return date.toISOString().split('T')[0];
}

// Function to load APOD images from the last 7 days
function loadApodImages() {
    const today = new Date();
    for (let i = 0; i < 7; i++) {  
        const pastDate = new Date(today);
        pastDate.setDate(today.getDate() - i); 
        const formattedDate = formatDate(pastDate);
        fetchApod(`apod${i + 1}`, formattedDate);
    }
}
// Load images on page load
window.onload = loadApodImages;        





