const tabs= document.querySelectorAll('.tab_btn');
        const all_content= document.querySelectorAll('.content');
        tabs.forEach((tab, index)=>{
            tab.addEventListener('click', (e)=>{
                tabs.forEach(tab=>{tab.classList.remove('active')})
                tab.classList.add('active');
                var line=document.querySelector('.line');
            line.style.left = index*33 + "%";
            all_content.forEach(content=>{content.classList.remove('active')});
            all_content[index].classList.add('active');
            })
            
        })
const seeMore= document.getElementById("see-more2")
const seeMorebtn= document.getElementById("see-more-button")
var topCities=["New York",
"Los Angeles",
"Toronto",
"Chicago",
"Houston",
"Brooklyn",
"San Diego",
"Las Vegas",
"San Francisco",
"Seattle",
"Atlanta",
"Queens",
"Vancouver",
"Miami",
"San Antonio",
"Tallahassee",
"Bend",
"Kamloops",
"Tulsa",
"Austin",
"Salt Lake City",
"Jacksonville",
"Colorado Springs",
"Wilmington",
'Birmingham',
"New Orleans",
"Lexington",
"Orlando",
"Victoria",
"Columbia",
"Scottsdale",
"Augusta",
"Christchurch",
"Milwaukee",
"Pittsburgh",
"Ft. Worth",
"Huntsville",
"Des Moines",
"Quebec City",
"All Cities"
]
var topcuisines=["Pizza",
"Chinese Food",
"Sushi",
"Cafe",
"Thai Food",
"Lunch",
"Seafood",
"Indian Food",
"Dessert",
"Burgers",
"Asian Food",
"Italian Food",
"Vegan Food",
"Sandwiches",
"Restaurants"]
var topchain=["Dunkin'",
"Wingstop",
"Wendy's",
"Subway®",
"Burger King",
"Popeyes Louisiana Kitchen",
"Chick-fil-A",
"Walgreens",
"Taco Bell",
"McDonald's",
"Dollar General",
"Chipotle Mexican Grill",
"Starbucks",
"7-Eleven",
"Panda Express"]
var alcohol=[
    "Alcohol Australia",
"Alcohol Delivery Australia",
"Back To School Delivery",
"Battle Of The Brands",
"Beauty Stores",
"Beauty Supply",
"Catering Near Me",
"Chips Ahoy Big Cookie",
"Convenience Stores Canada",
"Dashmart Near Me",
"Deck The Doorstep",
"Diageo Holiday",
"Drugstores Canada",
"Flower Delivery",
"Grocery Delivery Canada",
"Haleon Well Within Reach",
"Halloween",
"Holiday Hosting",
"Hsa Bank",
"Hsa Fsa Store",
"Large Group Orders",
"Local Eats Deserve Pepsi",
"Make It Date Night",
"Medicine Delivery",
"Mothers Day",
"Pet Store Near Me",
"Play For An Ultra",
"Procter Gamble",
"Retail Stores Near Me",
"Seasonal Holidays",
"Snap Ebt",
"Valentines Day",
"Winter Holidays"
]
var about=["About Us",
"Careers",
"Investors",
"Company Blog",
"Engineering Blog",
"Merchant Blog",
"Gift Cards",
"Package Pickup",
"Promotions",
"Dasher Central",
"LinkedIn",
"Glassdoor",
"Accessibility",
"Newsroom"]
let seemorebtnstate=false
seeMorebtn.addEventListener('click', (e)=>{
    if(seemorebtnstate==false){
        renderTopCities(topCities.length)
        seeMore.textContent="See less"
        seeMorebtn.classList.add('invert-icon')
        seemorebtnstate=true
    }
    else{
        renderTopCities(15)
        seeMore.textContent="See more"
        seeMorebtn.classList.remove('invert-icon')
        seemorebtnstate=false
    }
    
})

let content=document.getElementById('top-cities')
function renderTopCities(len) {
    content.innerHTML=''
    for (let index = 0; index <len; index++) {
        const city = topCities[index];
         var listItem=document.createElement('div')
        var anchor = document.createElement('a')
        anchor.textContent=city
        listItem.appendChild(anchor)
        content.appendChild(listItem)
    }
}
renderTopCities(15)
 let content2=document.getElementById('top-cuisines')
 function rendertopcuisines(len){
    for(index=0; index<len; index++){
        const cuisines=topcuisines[index]
        var listItem=document.createElement('div')
        var anchor = document.createElement('a')
        anchor.textContent=cuisines
        listItem.appendChild(anchor)
        content2.appendChild(listItem)
    }
 }
 rendertopcuisines(15)
 let content3=document.getElementById('top-chain')
 function rendertopchain(len){
    for ( index =0; index <len; index++) {
        const element = topchain[index];
        var listItem=document.createElement('div')
        var anchor=document.createElement('a')
        anchor.textContent=element
        listItem.appendChild(anchor)
        content3.appendChild(listItem)
        
    }
 }
 rendertopchain(15)
  var category=document.getElementById('alcohol')
 function rendercategory(len){
    for ( index =0; index <len; index++) {
        const element = alcohol[index];
        var listItem=document.createElement('div')
        var anchor=document.createElement('a')
        anchor.textContent=element
        listItem.appendChild(anchor)
       category.appendChild(listItem)
        
    }
 }
 rendercategory(alcohol.length)
 var us=document.getElementById('aboutus')
 function renderabout(len){
    for ( index =0; index <len; index++) {
        const element = about[index];
        var listItem=document.createElement('div')
        var anchor=document.createElement('a')
        anchor.textContent=element
        listItem.appendChild(anchor)
        us.appendChild(listItem)
        
    }
 }
 renderabout(about.length)
 window.addEventListener('scroll', function() {
  const topBar = document.getElementById('pop-up');
  const scrollThreshold = 400; 
  
  if (window.scrollY > scrollThreshold) {
    topBar.style.display = 'flex';
  } else {
    topBar.style.display = 'none';
  }
});
function swapAndRenamePopupLinks() {
    if (window.innerWidth >= 1024) {
        const login = document.getElementById('login-link');
        const openApp = document.getElementById('open-app-link');
        const rightContainer = document.getElementById('popup-right');
        rightContainer.innerHTML = '';
        rightContainer.appendChild(openApp);
        rightContainer.appendChild(login);
        login.querySelector('a').textContent = 'Sign up';
        openApp.querySelector('a').textContent = 'Sign in';
    } else {
        const login = document.getElementById('login-link');
        const openApp = document.getElementById('open-app-link');
        const rightContainer = document.getElementById('popup-right');

        rightContainer.innerHTML = '';
        rightContainer.appendChild(login);
        rightContainer.appendChild(openApp);

        login.querySelector('a').textContent = 'Login';
        openApp.querySelector('a').textContent = 'Open App';
    }
}
swapAndRenamePopupLinks();
window.addEventListener('resize', swapAndRenamePopupLinks);

