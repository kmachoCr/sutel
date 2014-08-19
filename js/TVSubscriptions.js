//RESPONSIVE DETECTION
var controlCss;
var dynamicWidth = 0;
var dynamicHeight = 0;
//  get the device agent and conver to lover case
var deviceAgent = navigator.userAgent.toLowerCase();

if(deviceAgent.match(/android/i)){
    dynamicWidth = 300;
    dynamicHeight = 400;
    leftSideMobile = 75;
    topSideMobile = 40;
    leftSideMobilePieChart = 55;
    dynamicHeightPieChart = 300;
}
else if(deviceAgent.match(/webso/i)){
    
}
else if(deviceAgent.match(/iphone/i)){
    dynamicWidth = 300;
    dynamicHeight = 400;
    leftSideMobile = 75;
    topSideMobile = 40;
    leftSideMobilePieChart = 55;
    dynamicHeightPieChart = 300;
}
else if(navigator.userAgent.match(/iPad/i) != null){
    dynamicWidth = 400;
    dynamicHeight = 400; 
    leftSideMobile = 180;
    topSideMobile = 100;
}
else if(deviceAgent.match(/blackberry/i)){
   
}
else {
    dynamicWidth = 600;
    dynamicHeight = 500;
    leftSideMobile = 140;
    topSideMobile = 100;
    leftSideMobilePieChart = 110;
    dynamicHeightPieChart = 400;
}


/* ==========================================================================
   STATIC TV SUBSCRIPTIONS
   ========================================================================== */

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static TV Subscriptions Proportion Subscription Service Television Paid Technlogy 3D Pie Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawStaticTVSubscriptionsProportionSubscriptionServiceTelevisionPaidTechnlogy3DPieChart);
function drawStaticTVSubscriptionsProportionSubscriptionServiceTelevisionPaidTechnlogy3DPieChart() {
  var data = google.visualization.arrayToDataTable([
    ['Tipo', 'Porcentaje'],
    ['CATV', 76],
    ['SATV', 23],
    ['IPTV y MMDS', 1]
  ]);

  var options = {
    title: '',
    width: dynamicWidth,
    height: dynamicHeightPieChart,
    slices: {  
            0: {color: '#7ec054'},
            1: {color: '#218ac8'},
            2: {color: '#f8a854'}
         },
    legend: { position: "bottom" },
    chartArea: { 'left': leftSideMobilePieChart, 'top': 0, 'right': 0, 'bottom': 0, 'height': 'auto' }
  };

  var chart = new google.visualization.PieChart(document.getElementById('static_TV_Subscriptions_Proportion_Subscription_Service_Television_Paid_Technlogy_3D_Pie_Chart'));
  chart.draw(data, options);
}

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static TV Subscriptions Proportion Subscriptions Service Television Paid Subscription 3D Pie Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawStaticTVSubscriptionsProportionSubscriptionsServiceTelevisionPaidSubscription3DPieChart);
function drawStaticTVSubscriptionsProportionSubscriptionsServiceTelevisionPaidSubscription3DPieChart() {
  var data = google.visualization.arrayToDataTable([
    ['Tipo', 'Porcentaje'],
    ['Tigo', 39],
    ['Cabletica', 31],
    ['Telecable Económico', 12],
    ['Cable Visión CR', 5],
    ['COOPELESCA', 2],
    ['COOPESANTOS', 2],
    ['Transadatelecom', 2],
    ['Cable Caribe', 1],
    ['Cable Max', 1],
    ['Cable Pacayas o Doble R', 1],
    ['COOPEALFARO RUIZ', 1],
    ['Cablevisión de Occidente,', 1],
    ['Otros', 2]
  ]);

  var options = {
    title: '',
    width: dynamicWidth,
    height: dynamicHeightPieChart,
    slices: {  
            0: {color: '#7ec054'}, // Tigo
            1: {color: '#218ac8'}, // Cabletica
            2: {color: '#9f68a8'}, // Telecable Económico
            3: {color: '#f8a854'}, // Cable Visión CR
            4: {color: '#ed4f75'}, // COOPELESCA
            5: {color: '#ebc52c'}, // COOPESANTOS
            6: {color: '#0d706c'}, // Transadatelecom
            7: {color: '#aacd45'}, // Cable Caribe
            8: {color: '#0a4892'}, // Cable Max
            9: {color: '#8e4843'}, // Cable Pacayas o Doble R
            10: {color: '#a42026'}, // COOPEALFARO RUIZ
            11: {color: '#b43026'}, // COOPEALFARO RUIZ
            12: {color: '#619d4a'} // Otros
         },
    legend: { position: "bottom" },
    chartArea: { 'left': leftSideMobilePieChart, 'top': 0, 'right': 0, 'bottom': 0, 'height': 'auto' }
  };

  var chart = new google.visualization.PieChart(document.getElementById('static_TV_Subscriptions_Proportion_Subscriptions_Service_Television_Paid_Subscription_3D_Pie_Chart'));
  chart.draw(data, options);
}

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static TV Subscriptions Proportion Houses Access Television Subscription 2010 2013 Column Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawstaticTVSubscriptionsProportionHousesAccessTelevisionSubscription20102013ColumnChart);
function drawstaticTVSubscriptionsProportionHousesAccessTelevisionSubscription20102013ColumnChart() {
    var data = google.visualization.arrayToDataTable([
        ['Periodo', 'Porcentaje'],
        ['2010', {v:36, f:'36%'}],
        ['2011', {v:38, f:'38%'}],
        ['2012', {v:41, f:'41%'}],
        ['2013', {v:48, f:'48%'}]
    ]);

    var langEspaBarChart1 = "";

    var options = {
        title: langEspaBarChart1,
        width: dynamicWidth,
        height: dynamicHeight,
        legend: { position: "bottom" },
        vAxis: {title: "Porcentaje %"},
        colors:['#7ec054'],
        chartArea: { 'left': leftSideMobile, 'top': topSideMobile, 'right': 0, 'bottom': 0, 'height': 'auto' }

    };

    var columnChart = new google.visualization.ColumnChart(document.getElementById('static_TV_Subscriptions_Proportion_Houses_Access_Television_Subscription_2010_2013_Column_Chart'));
    columnChart.draw(data, options); 
}
