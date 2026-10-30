
const destinations = [
  {name:"Goa",state:"Goa",desc:"Beautiful beaches, forts and sunsets.",img:"photo-1512343879784-a960bf40e7f2"},
  {name:"Mahabaleshwar",state:"Maharashtra",desc:"Hill stations, strawberry farms and viewpoints.",img:"photo-1500534623283-312aade485b7"},
  {name:"Lonavala",state:"Maharashtra",desc:"Green valleys, waterfalls and forts.",img:"photo-1472396961693-142e6e269027"},
  {name:"Jaipur",state:"Rajasthan",desc:"Pink City, palaces and colourful markets.",img:"photo-1599661046827-dacff0c0f09a"},
  {name:"Manali",state:"Himachal Pradesh",desc:"Mountains, snow views and adventure.",img:"photo-1626621341517-bbf3d9990a23"},
  {name:"Mumbai",state:"Maharashtra",desc:"Marine Drive, Gateway of India and city life.",img:"photo-1570168007204-dfb528c6958f"},
  {name:"Kerala",state:"Kerala",desc:"Backwaters, greenery and peaceful beaches.",img:"photo-1602216056096-3b40cc0c9944"},
  {name:"Delhi",state:"Delhi",desc:"Historic monuments and famous food.",img:"photo-1587474260584-136574528ed5"},
  {name:"Agra",state:"Uttar Pradesh",desc:"Taj Mahal and Mughal heritage.",img:"photo-1564507592333-c60657eea523"},
  {name:"Udaipur",state:"Rajasthan",desc:"Lakes, palaces and romantic architecture.",img:"photo-1606293926075-69a00dbfde81"},
  {name:"Darjeeling",state:"West Bengal",desc:"Tea gardens and Himalayan views.",img:"photo-1544735716-392fe2489ffa"},
  {name:"Ooty",state:"Tamil Nadu",desc:"Tea gardens, hills and scenic train rides.",img:"photo-1500530855697-b586d89ba3ee"},
  {name:"Varanasi",state:"Uttar Pradesh",desc:"Ganga ghats and ancient culture.",img:"photo-1561361513-2d000a50f0dc"},
  {name:"Amritsar",state:"Punjab",desc:"Golden Temple and Punjabi culture.",img:"photo-1598091383021-15ddea10925d"},
  {name:"Rishikesh",state:"Uttarakhand",desc:"River views, yoga and outdoor activities.",img:"photo-1500534623283-312aade485b7"},
  {name:"Andaman",state:"Andaman and Nicobar",desc:"Clear water, islands and beaches.",img:"photo-1510414842594-a61c69b5ae57"},
  {name:"Coorg",state:"Karnataka",desc:"Coffee estates and green landscapes.",img:"photo-1441974231531-c6227db76b6e"},
  {name:"Shimla",state:"Himachal Pradesh",desc:"Mountain views and colonial streets.",img:"photo-1464822759023-fed622ff2c3b"},
  {name:"Jaisalmer",state:"Rajasthan",desc:"Golden desert and historic forts.",img:"photo-1477587458883-47145ed94245"},
  {name:"Pune",state:"Maharashtra",desc:"Forts, gardens and city attractions.",img:"photo-1595658658481-d53d3f999875"},
  {name:"Hyderabad",state:"Telangana",desc:"Charminar, history and famous cuisine.",img:"photo-1572445271230-a78b5944a659"},
  {name:"Kolkata",state:"West Bengal",desc:"Culture, heritage and delicious sweets.",img:"photo-1558431382-27e303142255"}
];

const itineraryData = {
  "Goa":[["Baga Beach","Calangute Beach","Fort Aguada"],["Old Goa Churches","Dona Paula","Miramar Beach"],["Anjuna Beach","Chapora Fort","Local Market"]],
  "Mahabaleshwar":[["Venna Lake","Mapro Garden","Wilson Point"],["Arthur's Seat","Kate's Point","Elephant's Head Point"],["Pratapgad Fort","Lingmala Waterfall","Local Market"]],
  "Lonavala":[["Tiger Point","Bhushi Dam","Lonavala Lake"],["Karla Caves","Bhaja Caves","Lohagad Fort"],["Lion's Point","Wax Museum","Local Market"]],
  "Jaipur":[["Amber Fort","Jal Mahal","Hawa Mahal"],["City Palace","Jantar Mantar","Albert Hall Museum"],["Nahargarh Fort","Patrika Gate","Local Bazaar"]],
  "Manali":[["Hadimba Temple","Old Manali","Mall Road"],["Solang Valley","Atal Tunnel area","Vashisht Temple"],["Naggar Castle","Manu Temple","Local Market"]],
  "Mumbai":[["Gateway of India","Colaba","Marine Drive"],["Siddhivinayak Temple","Haji Ali Dargah","Bandra Bandstand"],["Juhu Beach","Sanjay Gandhi National Park","Local Market"]],
  "Kerala":[["Fort Kochi","Chinese Fishing Nets","Mattancherry Palace"],["Alleppey Backwaters","Alappuzha Beach","Local Village"],["Munnar Tea Gardens","Mattupetty Dam","Echo Point"]],
  "Delhi":[["India Gate","Rashtrapati Bhavan area","Humayun's Tomb"],["Red Fort","Jama Masjid","Chandni Chowk"],["Qutub Minar","Lotus Temple","Akshardham area"]],
  "Agra":[["Taj Mahal","Agra Fort","Mehtab Bagh"],["Fatehpur Sikri","Local Market","Sadar Bazaar"]],
  "Udaipur":[["City Palace","Lake Pichola","Jag Mandir"],["Saheliyon Ki Bari","Fateh Sagar Lake","Sajjangarh Palace"],["Bagore Ki Haveli","Jagdish Temple","Local Market"]],
  "Ooty":[["Ooty Lake","Botanical Garden","Rose Garden"],["Doddabetta Peak","Tea Factory","Pykara Lake"],["Coonoor","Sim's Park","Tea Gardens"]],
  "Shimla":[["The Ridge","Mall Road","Christ Church"],["Jakhoo Temple","Kufri","Green Valley"],["Viceregal Lodge","Annandale","Local Market"]]
};

let pickCount = 4;

function imageUrl(id){
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=80`;
}

function makeCard(place){
  return `<article class="place-card">
    <img src="${imageUrl(place.img)}" alt="${place.name}" loading="lazy">
    <div class="place-info">
      <h3>${place.name}</h3>
      <p>📍 ${place.state}</p>
      <p>${place.desc}</p>
      <button onclick="selectPlace('${place.name}')">Plan this trip ✈</button>
    </div>
  </article>`;
}

function renderPicks(){
  document.getElementById("picksGrid").innerHTML =
    destinations.slice(0,pickCount).map(makeCard).join("");
}

function showMore(){
  pickCount = pickCount >= destinations.length ? 4 : Math.min(pickCount+4,destinations.length);
  renderPicks();
  if(pickCount===4) document.getElementById("picks").scrollIntoView({behavior:"smooth"});
}

function renderPlaces(list=destinations){
  document.getElementById("placesGrid").innerHTML = list.length
    ? list.map(makeCard).join("")
    : "<p>No destination found. Try another name.</p>";
}

function searchPlaces(){
  const q=document.getElementById("placeSearch").value.toLowerCase();
  renderPlaces(destinations.filter(p=>
    p.name.toLowerCase().includes(q) ||
    p.state.toLowerCase().includes(q)
  ));
}

function selectPlace(name){
  document.getElementById("destination").value=name;
  document.getElementById("itineraryPlace").value=itineraryData[name]?name:"Goa";
  displayItinerary();
  document.getElementById("plan").scrollIntoView({behavior:"smooth"});
}

function displayItinerary(){
  const name=document.getElementById("itineraryPlace").value;
  const days=itineraryData[name] || [
    ["Explore the main city attractions","Visit a famous local landmark","Enjoy local food"],
    ["Visit a nearby viewpoint","Explore local culture","Visit a popular market"],
    ["Explore a nature spot","Enjoy sightseeing","Relax and return"]
  ];
  document.getElementById("itineraryOutput").innerHTML=days.map((places,i)=>
    `<div class="day-card"><h3>🌞 Day ${i+1}</h3>
    ${places.map((p,j)=>`<p>${j+1}. ${p}</p>`).join("")}</div>`
  ).join("");
}

function makeTrip(){
  const destination=document.getElementById("destination").value;
  const days=Math.max(1,Math.min(30,Number(document.getElementById("days").value)||1));
  const travellers=Math.max(1,Number(document.getElementById("travellers").value)||1);
  const budget=Math.max(0,Number(document.getElementById("tripBudget").value)||0);
  const style=document.getElementById("style").value;
  const date=document.getElementById("startDate").value || "Not selected";
  const places=itineraryData[destination] || [
    ["Explore the main attractions","Visit a famous landmark","Try local food"],
    ["Visit a nature spot","Explore local culture","Visit a market"]
  ];
  let plan="";
  for(let i=0;i<days;i++){
    const day=places[i%places.length];
    plan+=`<div class="day-card"><h3>Day ${i+1}</h3>${day.join(" • ")}</div>`;
  }
  const trip={destination,days,travellers,budget,style,date};
  const saved=JSON.parse(localStorage.getItem("krachiTrips")||"[]");
  saved.unshift(trip);
  localStorage.setItem("krachiTrips",JSON.stringify(saved.slice(0,20)));
  document.getElementById("tripMessage").innerHTML=
    `<h3>🎉 Your ${destination} trip plan is ready!</h3>
    <p>📅 Start date: ${date}</p><p>👥 Travellers: ${travellers}</p>
    <p>🗓️ Days: ${days} | Style: ${style}</p><p>💰 Planned budget: ₹${budget.toLocaleString("en-IN")}</p>
    ${plan}<p>These are suggested places. Check travel times and local conditions before visiting.</p>`;
  renderSavedTrips();
  document.getElementById("itineraryPlace").value=itineraryData[destination]?destination:"Goa";
  displayItinerary();
}

async function getWeather(){
  const city=document.getElementById("weatherCity").value.trim();
  const out=document.getElementById("weatherResult");
  if(!city){out.textContent="Please enter a city name.";return;}
  out.textContent="Loading weather...";
  try{
    const geo=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);
    const gd=await geo.json();
    if(!gd.results?.length) throw new Error("City not found. Check the spelling.");
    const place=gd.results[0];
    const url=`https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;
    const res=await fetch(url);
    const data=await res.json();
    const c=data.current;
    out.innerHTML=`<h3>🌍 ${place.name}, ${place.country}</h3>
      <h2>🌡️ ${c.temperature_2m}°C</h2>
      <p>Feels like: ${c.apparent_temperature}°C</p>
      <p>💧 Humidity: ${c.relative_humidity_2m}%</p>
      <p>💨 Wind: ${c.wind_speed_10m} km/h</p>
      <p>Today: ${data.daily.temperature_2m_min[0]}°C – ${data.daily.temperature_2m_max[0]}°C</p>
      <small>Source: Open-Meteo</small>`;
  }catch(e){out.textContent="Weather could not be loaded: "+e.message+" Please check your internet connection.";}
}

function showMap(){
  const place=document.getElementById("mapPlace").value.trim();
  if(!place){alert("Please enter a place.");return;}
  const query=encodeURIComponent(place);
  document.getElementById("mapFrame").src=
    `https://www.openstreetmap.org/export/embed.html?search=${query}`;
  document.getElementById("mapLink").href=
    `https://www.google.com/maps/search/?api=1&query=${query}`;
  document.getElementById("mapLink").textContent="Open "+place+" in Google Maps ↗";
}

function calculateBudget(){
  const travel=Number(document.getElementById("travelCost").value)||0;
  const hotel=Number(document.getElementById("hotelCost").value)||0;
  const nights=Number(document.getElementById("nights").value)||0;
  const food=Number(document.getElementById("foodCost").value)||0;
  const other=Number(document.getElementById("otherCost").value)||0;
  const total=travel+(hotel*nights)+(food*(nights+1))+other;
  document.getElementById("budgetResult").innerHTML=
    `<h3>💰 Estimated Total: ₹${total.toLocaleString("en-IN")}</h3>
    <p>Travel: ₹${travel.toLocaleString("en-IN")}</p>
    <p>Hotel: ₹${(hotel*nights).toLocaleString("en-IN")}</p>
    <p>Food: ₹${(food*(nights+1)).toLocaleString("en-IN")}</p>
    <p>Other: ₹${other.toLocaleString("en-IN")}</p>`;
}

function findHotels(){
  const city=document.getElementById("hotelCity").value.trim();
  if(!city){alert("Enter a destination first.");return;}
  const q=encodeURIComponent("hotels in "+city);
  document.getElementById("hotelResult").innerHTML=
    `<h3>🏨 Hotel search for ${city}</h3>
    <p><a target="_blank" rel="noopener" href="https://www.google.com/search?q=${q}">Search hotels on Google ↗</a></p>
    <p><a target="_blank" rel="noopener" href="https://www.booking.com/searchresults.html?ss=${encodeURIComponent(city)}">Explore Booking.com ↗</a></p>`;
}

function sendMessage(){
  const input=document.getElementById("chatInput");
  const message=input.value.trim();
  if(!message)return;
  addChat(message,"user-msg");
  input.value="";
  setTimeout(()=>addChat(getBotReply(message),"bot-msg"),250);
}

function addChat(message,cls){
  const box=document.getElementById("chatMessages");
  const div=document.createElement("div");
  div.className=cls;
  div.textContent=message;
  box.appendChild(div);
  box.scrollTop=box.scrollHeight;
}

function getBotReply(text){
  const q=text.toLowerCase();
  if(/hello|hi|hey|नमस्कार|नमस्ते/.test(q))
    return "Hi! Welcome to Krachi World! ✈️ How can I help with your travel plans?";
  if(/weather|हवामान|पाऊस|temperature/.test(q))
    return "For live weather, open the Live Weather section and enter your city name.";
  if(/budget|cost|खर्च|पैसे|किती रुपये/.test(q))
    return "Use our Smart Budget Planner. Add travel, hotel, food and other costs to estimate your trip budget.";
  if(/hotel|stay|राहणे|हॉटेल/.test(q))
    return "Open Hotels & Stays, enter your destination and explore hotel search links. Always check reviews and prices.";
  if(/food|खाणे|जेवण|dish/.test(q))
    return "Try local specialities! Maharashtra has Misal Pav, Rajasthan has Dal Baati, Punjab has Chole Bhature and South India has Dosa.";
  if(/goa/.test(q))
    return "Goa ideas: Baga Beach, Calangute Beach, Fort Aguada, Anjuna Beach and Chapora Fort. Check local conditions before visiting.";
  if(/mahabaleshwar/.test(q))
    return "Mahabaleshwar ideas: Venna Lake, Mapro Garden, Arthur's Seat, Kate's Point and Pratapgad Fort.";
  if(/lonavala/.test(q))
    return "Lonavala ideas: Tiger Point, Bhushi Dam, Karla Caves, Bhaja Caves and Lohagad Fort.";
  if(/jaipur/.test(q))
    return "Jaipur ideas: Amber Fort, Hawa Mahal, City Palace, Jantar Mantar and Nahargarh Fort.";
  if(/manali/.test(q))
    return "Manali ideas: Hadimba Temple, Old Manali, Solang Valley and Mall Road. Check weather and road conditions.";
  if(/place|destination|कुठे|ठिकाण|फिरायला|travel/.test(q))
    return "Explore Goa, Jaipur, Manali, Kerala, Mahabaleshwar, Lonavala, Udaipur, Ooty and many more destinations in our Explore India section.";
  if(/plan|itinerary|trip|प्रवास|सहल/.test(q))
    return "Open Plan Your Dream Trip, choose a destination, number of days and budget, then click Create My Itinerary.";
  if(/thank|धन्यवाद/.test(q))
    return "You're welcome! Have a wonderful journey with Krachi World. 💜";
  return "I can help with travel topics such as destinations, itinerary, weather, hotels, food and budget. Try asking a travel-related question!";
}

function renderSavedTrips(){
  const trips=JSON.parse(localStorage.getItem("krachiTrips")||"[]");
  const box=document.getElementById("savedTrips");
  if(!trips.length){box.innerHTML="<p>No saved trips yet. Create your first trip above!</p>";return;}
  box.innerHTML=trips.map((t,i)=>`
    <article class="food-card">
      <div class="food-emoji">🧳</div>
      <h3>${t.destination}</h3>
      <p>${t.days} days • ${t.travellers} travellers</p>
      <p>Budget: ₹${Number(t.budget).toLocaleString("en-IN")}</p>
      <p>Style: ${t.style}</p>
      <button class="btn" onclick="deleteTrip(${i})">Delete</button>
    </article>`).join("");
}

function deleteTrip(index){
  const trips=JSON.parse(localStorage.getItem("krachiTrips")||"[]");
  trips.splice(index,1);
  localStorage.setItem("krachiTrips",JSON.stringify(trips));
  renderSavedTrips();
}

function toggleTheme(){
  document.body.classList.toggle("dark");
  localStorage.setItem("krachiDark",document.body.classList.contains("dark")?"yes":"no");
}

function toggleMenu(){
  document.getElementById("nav").classList.toggle("open");
}

document.addEventListener("DOMContentLoaded",()=>{
  renderPicks();
  renderPlaces();
  displayItinerary();
  renderSavedTrips();
  if(localStorage.getItem("krachiDark")==="yes")document.body.classList.add("dark");
  document.getElementById("mapPlace").value="Gateway of India, Mumbai";
});
