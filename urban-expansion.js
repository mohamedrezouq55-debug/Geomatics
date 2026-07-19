/* ==========================================
   Urban Expansion Project
   Part 1
========================================== */




// ==========================================
// CREATE MAP
// ==========================================

const projectMap = L.map("project-map").setView(

[33.5731,-7.5898],

11

);






// ==========================================
// OPEN STREET MAP
// ==========================================

L.tileLayer(

"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",

{

attribution:

"&copy; OpenStreetMap Contributors"

}

).addTo(projectMap);






// ==========================================
// PROJECT LOCATION
// ==========================================

const marker=L.marker(

[33.5731,-7.5898]

).addTo(projectMap);





marker.bindPopup(

`

<h3>

Urban Expansion Analysis

</h3>

<p>

Study Area

<br>

Casablanca, Morocco

</p>

`

);






// ==========================================
// CIRCLE OF ANALYSIS
// ==========================================

L.circle(

[33.5731,-7.5898],

{

radius:4500,

color:"#118ab2",

fillColor:"#38bdf8",

fillOpacity:0.35

}

).addTo(projectMap);






// ==========================================
// SCALE
// ==========================================

L.control.scale().addTo(projectMap);






// ==========================================
// MAP ANIMATION
// ==========================================

setTimeout(()=>{

projectMap.flyTo(

[33.5731,-7.5898],

12,

{

duration:3

}

);

},1200);
/* ==========================================
   BASE MAPS
========================================== */

// OpenStreetMap

const osm = L.tileLayer(
"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{
    attribution:"&copy; OpenStreetMap"
});



// Satellite (Esri)

const satellite = L.tileLayer(
"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
{
    attribution:"Tiles © Esri"
});



// Layer Control

L.control.layers(

{
    "OpenStreetMap":osm,
    "Satellite":satellite
},

{}

).addTo(projectMap);





/* ==========================================
   STUDY LOCATIONS
========================================== */

const studyLocations=[

{

name:"City Center",

coords:[33.5731,-7.5898],

description:"Main urban core."

},

{

name:"Industrial Zone",

coords:[33.545,-7.620],

description:"Industrial expansion."

},

{

name:"Residential Area",

coords:[33.595,-7.540],

description:"Residential growth."

},

{

name:"Future Development",

coords:[33.610,-7.500],

description:"Potential urban expansion."

}

];





studyLocations.forEach(location=>{

L.marker(location.coords)

.addTo(projectMap)

.bindPopup(

`

<h3>${location.name}</h3>

<p>${location.description}</p>

`

);

});





/* ==========================================
   FIT MAP
========================================== */

const group = new L.featureGroup();

studyLocations.forEach(location=>{

group.addLayer(

L.marker(location.coords)

);

});

projectMap.fitBounds(group.getBounds(),{

padding:[50,50]

});
