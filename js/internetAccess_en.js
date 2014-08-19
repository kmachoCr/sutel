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
}
else if(deviceAgent.match(/webso/i)){
    
}
else if(deviceAgent.match(/iphone/i)){
    dynamicWidth = 300;
    dynamicHeight = 400;
    leftSideMobile = 75;
    topSideMobile = 40;
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
}


/* ==========================================================================
   STATIC INTERNET ACCESS
   ========================================================================== */

//********* Static Internet Access Total Income Internet Service Column Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawStaticInternetAccessTotalIncomeInternetServiceColumnChart);
function drawStaticInternetAccessTotalIncomeInternetServiceColumnChart() {
    var data = google.visualization.arrayToDataTable([
        ['Time Period', 'Millions'],
        ['2010 IV Quarter',  {v:19102, f:'19.102'}],
        ['2011 I Quarter',  {v:20336, f:'20.336'}],
        ['2011 II Quarter', {v:21301, f:'21.301'}],
        ['2011 III Quarter',  {v:20684, f:'20.684'}],
        ['2011 IV Quarter',  {v:22797, f:'22.797'}],
        ['2012 I Quarter',  {v:25678, f:'25.678'}],
        ['2012 II Quarter',  {v:28184, f:'28.184'}],
        ['2012 III Quarter',  {v:28019, f:'28.019'}],
        ['2012 IV Quarter',  {v:27039, f:'27.039'}],
        ['2013 I Quarter',  {v:34122, f:'34.122'}],
        ['2013 II Quarter',  {v:38175, f:'38.175'}],
        ['2013 III Quarter',  {v:44204, f:'44.204'}],
        ['2013 IV Quarter',  {v:45413, f:'45.413'}]
    ]);

    var langEspaBarChart1 = "";

    var options = {
        title: langEspaBarChart1,
        width: dynamicWidth,
        height: dynamicHeight,
        legend: { position: "bottom" },
        vAxis: {title: "Millions of colones"},
        colors:['#e33261'],
        chartArea: { 'left': leftSideMobile, 'top': topSideMobile, 'right': 0, 'bottom': 0, 'height': 'auto' }

    };

    var columnChart = new google.visualization.ColumnChart(document.getElementById('static_Internet_Access_Total_Income_Internet_Service_Column_Chart'));
    columnChart.draw(data, options); 
}

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static Internet Access Proportion Relative Income Stacked Column Chart CONFIG*********

google.load("visualization", "1", {packages: ["corechart"]});
google.setOnLoadCallback(drawStaticInternetAccessProportionRelativeIncomeStackedColumnChart);
function drawStaticInternetAccessProportionRelativeIncomeStackedColumnChart() {
  var data = google.visualization.arrayToDataTable([
        ['Time Period', 'Fixed wired', 'Fixed wireless', 'Mobile'],
        ['2010', {v:73, f:'73%'}, {v:2, f:'2%'}, {v:25, f:'25%'}],
        ['2011', {v:69, f:'69%'}, {v:2, f:'2%'}, {v:29, f:'29%'}],
        ['2012', {v:59, f:'59%'}, {v:3, f:'3%'}, {v:38, f:'38%'}],
        ['2013', {v:39, f:'39%'}, {v:3, f:'3%'}, {v:58, f:'58%'}]
      ]);

      var options = {
        legend: { position: "bottom" },
        width: dynamicWidth,
        height: dynamicHeight,
        bar: { groupWidth: '75%' },
        vAxis: {title: "Percentage %"},
        colors: ['#e33261','#538e31','#8b509c'],
        isStacked: true,
        chartArea: { 'left': leftSideMobile, 'top': topSideMobile, 'right': 0, 'bottom': 0, 'height': 'auto' }
      };
  var chart = new google.visualization.ColumnChart(document.getElementById('static_Internet_Access_Proportion_Relative_Income_Stacked_Column_Chart'));
  chart.draw(data, options);
}

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static Internet Access Subscriptions Service Access Internet 100 Persons Column Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawStaticInternetAccessSubscriptionsServiceAccessInternet100PersonsColumnChart);
function drawStaticInternetAccessSubscriptionsServiceAccessInternet100PersonsColumnChart() {
    var data = google.visualization.arrayToDataTable([
        ['Time Period', 'Percentage %'],
        ['2010',  {v:8.4, f:'8.4%'}],
        ['2011',  {v:9.1, f:'9.1%'}],
        ['2012',  {v:9.6, f:'9.6%'}],
        ['2013',  {v:10.3, f:'10.3%'}]
    ]);

    var langEspaBarChart1 = "";

    var options = {
        title: langEspaBarChart1,
        width: dynamicWidth,
        height: dynamicHeight,
        legend: { position: "bottom" },
        vAxis: {title: "Percentage %"},
        colors:['#e33261'],
        chartArea: { 'left': leftSideMobile, 'top': topSideMobile, 'right': 0, 'bottom': 0, 'height': 'auto' }

    };

    var columnChart = new google.visualization.ColumnChart(document.getElementById('static_Internet_Access_Subscriptions_Service_Access_Internet_100_Persons_Column_Chart'));
    columnChart.draw(data, options); 
}

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static Internet Access Subscriptions Service Access Internet 100 Houses Column Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawStaticInternetAccessSubscriptionsServiceAccessInternet100HousesColumnChart);
function drawStaticInternetAccessSubscriptionsServiceAccessInternet100HousesColumnChart() {
    var data = google.visualization.arrayToDataTable([
        ['Time Period', 'Percentage %'],
        ['2010',  {v:30, f:'30%'}],
        ['2011',  {v:32, f:'32%'}],
        ['2012',  {v:34, f:'34%'}],
        ['2013',  {v:36, f:'36%'}]
    ]);

    var langEspaBarChart1 = "";

    var options = {
        title: langEspaBarChart1,
        width: dynamicWidth,
        height: dynamicHeight,
        legend: { position: "bottom" },
        vAxis: {title: "Percentage %"},
        colors:['#e33261'],
        chartArea: { 'left': leftSideMobile, 'top': topSideMobile, 'right': 0, 'bottom': 0, 'height': 'auto' }

    };

    var columnChart = new google.visualization.ColumnChart(document.getElementById('static_Internet_Access_Subscriptions_Service_Access_Internet_100_Houses_Column_Chart'));
    columnChart.draw(data, options); 
}

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static Internet Access Subscriptions Service Access Internet Mobile Column Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawStaticInternetAccessSubscriptionsServiceAccessInternetMobileColumnChart);
function drawStaticInternetAccessSubscriptionsServiceAccessInternetMobileColumnChart() {
    var data = google.visualization.arrayToDataTable([
        ['Time Period', 'Subscriptions'],
        ['2010 IV Quarter',  {v:606215, f:'606.215'}],
        ['2011 I Quarter',  {v:834350, f:'834.350'}],
        ['2011 II Quarter', {v:925087, f:'925.087'}],
        ['2011 III Quarter',  {v:1202865, f:'1.202.865'}],
        ['2011 IV Quarter',  {v:1588981, f:'1.588.981'}],
        ['2012 I Quarter',  {v:1988821, f:'1.988.821'}],
        ['2012 II Quarter',  {v:2197211, f:'2.197.211'}],
        ['2012 III Quarter',  {v:2426839, f:'2.426.839'}],
        ['2012 IV Quarter',  {v:2670208, f:'2.670.208'}],
        ['2013 I Quarter',  {v:2920000, f:'2.920.000'}],
        ['2013 II Quarter',  {v:2961933, f:'2.961.933'}],
        ['2013 III Quarter',  {v:3300029, f:'3.300.029'}],
        ['2013 IV Quarter',  {v:3543419, f:'3.543.419'}]
    ]);

    var langEspaBarChart1 = "";

    var options = {
        title: langEspaBarChart1,
        width: dynamicWidth,
        height: dynamicHeight,
        legend: { position: "bottom" },
        vAxis: {title: "Subscriptions"},
        colors:['#e33261'],
        chartArea: { 'left': leftSideMobile, 'top': topSideMobile, 'right': 0, 'bottom': 0, 'height': 'auto' }

    };

    var columnChart = new google.visualization.ColumnChart(document.getElementById('static_Internet_Access_Subscriptions_Service_Access_Internet_Mobile_Column_Chart'));
    columnChart.draw(data, options); 
}

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static Internet Access Proportions Service Access Internet Mobile Payment Stacked Column Chart CONFIG *********

google.load("visualization", "1", {packages: ["corechart"]});
google.setOnLoadCallback(drawStaticInternetAccessProportionsServiceAccessInternetMobilePaymentStackedColumnChart);
function drawStaticInternetAccessProportionsServiceAccessInternetMobilePaymentStackedColumnChart() {
  var data = google.visualization.arrayToDataTable([
        ['Time Period', 'Prepaid', 'Postpaid'],
        ['I Quarter 2013', {v:82, f:'82%'}, {v:18, f:'18%'}],
        ['II Quarter 2013', {v:81, f:'81%'}, {v:19, f:'19%'}],
        ['III Quarter 2013', {v:81, f:'81%'}, {v:19, f:'19%'}],
        ['IV Quarter 2013', {v:78, f:'78%'}, {v:22, f:'22%'}]
      ]);

      var options = {
        legend: { position: "bottom" },
        width: dynamicWidth,
        height: dynamicHeight,
        bar: { groupWidth: '75%' },
        vAxis: {title: "Percentage of Subscriptions"},
        colors: ['#e33261','#538e31'],
        isStacked: true,
        chartArea: { 'left': leftSideMobile, 'top': topSideMobile, 'right': 0, 'bottom': 0, 'height': 'auto' }
      };
  var chart = new google.visualization.ColumnChart(document.getElementById('static_Internet_Access_Proportions_Service_Access_Internet_Mobile_Payment_Stacked_Column_Chart'));
  chart.draw(data, options);
}

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static Internet Access Subscriptions Service Access Internet Mobile 100 Persons 2010 2013 Column Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawStaticInternetAccessSubscriptionsServiceAccessInternetMobile100Persons20102013ColumnChart);
function drawStaticInternetAccessSubscriptionsServiceAccessInternetMobile100Persons20102013ColumnChart() {
    var data = google.visualization.arrayToDataTable([
        ['Time Period', 'Percentage %'],
        ['2010',  {v:13, f:'13%'}],
        ['2011',  {v:35, f:'35%'}],
        ['2012',  {v:57, f:'57%'}],
        ['2013',  {v:75, f:'75%'}]
    ]);

    var langEspaBarChart1 = "";

    var options = {
        title: langEspaBarChart1,
        width: dynamicWidth,
        height: dynamicHeight,
        legend: { position: "bottom" },
        vAxis: {title: "Percentage %"},
        colors:['#e33261'],
        chartArea: { 'left': leftSideMobile, 'top': topSideMobile, 'right': 0, 'bottom': 0, 'height': 'auto' }

    };

    var columnChart = new google.visualization.ColumnChart(document.getElementById('static_Internet_Access_Subscriptions_Service_Access_Internet_Mobile_100_Persons_2010_2013_Column_Chart'));
    columnChart.draw(data, options); 
}

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static Internet Access Monthly Income Subscription Service Access Internet Column Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawStaticInternetAccessMonthlyIncomeSubscriptionServiceAccessInternetColumnChart);
function drawStaticInternetAccessMonthlyIncomeSubscriptionServiceAccessInternetColumnChart() {
    var data = google.visualization.arrayToDataTable([
        ['Time Period', 'Fixed wired', 'Fixed wireless', 'Mobile'],
        ['2010', {v:12213, f:'12.213'}, {v:32679, f:'32.679'}, {v:2673, f:'2.673'}],
        ['2011', {v:12142, f:'12.142'}, {v:34219, f:'34.219'}, {v:1884, f:'1.884'}],
        ['2012', {v:12481, f:'12.481'}, {v:32003, f:'32.003'}, {v:1503, f:'1.503'}],
        ['2013', {v:11488, f:'11.488'}, {v:35164, f:'35.164'}, {v:2286, f:'2.286'}]
    ]);

    var langEspaBarChart1 = "";

    var options = {
        title: langEspaBarChart1,
        width: dynamicWidth,
        height: dynamicHeight,
        legend: { position: "bottom" },
        vAxis: {title: "Colones"},
        colors: ['#e33261','#538e31','#8b509c'],
        chartArea: { 'left': leftSideMobile, 'top': topSideMobile, 'right': 0, 'bottom': 0, 'height': 'auto' }

    };

    var columnChart = new google.visualization.ColumnChart(document.getElementById('static_Internet_Access_Monthly_Income_Subscription_Service_Access_Internet_Column_Chart'));
    columnChart.draw(data, options); 
}

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static Internet Access Total Traffic Data Technology 2013 Combo Chart CONFIG *********

/*google.load('visualization', '1', {packages: ['controls']});
google.setOnLoadCallback(drawStaticInternetAccessTotalTrafficDataTechnology2013ComboChart);

function drawStaticInternetAccessTotalTrafficDataTechnology2013ComboChart () {

    var data = google.visualization.arrayToDataTable([

        ['Periodo', 'Redes fijas', 'Redes móviles', 'Total'],
        ['I Trim 2013', {v:22793.51, f:'22.793,51'}, {v:4742.31, f:'4.742,31'}, {v:27535.83, f:'27.535,83'}],
        ['II Trim 2013', {v:25528.80, f:'25.528,80'}, {v:5634.31, f:'5.634,31'}, {v:31163.11, f:'31.163,11'}],
        ['III Trim 2013', {v:30375.90, f:'30.375,90'}, {v:6763.20, f:'6.763,20'}, {v:37139.10, f:'37.139,10'}],
        ['IV Trim 2013', {v:34699.20, f:'34.699,20'}, {v:7130.89, f:'7.130,89'}, {v:41830.09, f:'41.830,09'}]
    ]);
  
    var options = {
            title: '',
            legend: { position: "bottom" },
            width: dynamicWidth,
            height: dynamicHeight,
            seriesType: "bars",
            hAxis: {title: ""},
            vAxes: {
                0: {logScale: false, title: "Terabytes"},
               // 1: {logScale: false, maxValue: 2, title: "Variación %"},
            },
            series:{
               0:{targetAxisIndex:0},
               2:{ type: "line"},
            },
            colors: ['#538e31','#e33261','#8b509c'],
            chartArea: { 'left': leftSideMobile, 'top': topSideMobile, 'right': 0, 'bottom': 0, 'height': 'auto' }
    };

    var chart = new google.visualization.ComboChart(document.getElementById('static_Internet_Access_Total_Traffic_Data_Technology_2013_Combo_Chart'));
    chart.draw(data, options);
}*/

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static Internet Relative Participation Traffic Data Access Technology 2013 Column Stacked Chart CONFIG *********

/*google.load("visualization", "1", {packages: ["corechart"]});
google.setOnLoadCallback(drawStaticInternetAccessRelativeParticipationTrafficDataAccessTechnology2013ColumnStackedChart);
function drawStaticInternetAccessRelativeParticipationTrafficDataAccessTechnology2013ColumnStackedChart() {
  var data = google.visualization.arrayToDataTable([
        ['Periodo', 'Redes móviles', 'Redes fijas'],
        ['I Trim 2013', {v:83, f:'83%'}, {v:17, f:'17%%'}],
        ['II Trim 2013', {v:82, f:'82%'}, {v:18, f:'18%'}],
        ['III Trim 2013', {v:82, f:'82%'}, {v:18, f:'18%'}],
        ['IV Trim 2013', {v:83, f:'83%'}, {v:17, f:'17%'}]
      ]);

      var options = {
        legend: { position: "bottom" },
        width: dynamicWidth,
        height: dynamicHeight,
        bar: { groupWidth: '75%' },
        vAxis: {title: "Porcentaje de suscripciones"},
        colors: ['#538e31','#e33261'],
        isStacked: true,
        chartArea: { 'left': leftSideMobile, 'top': topSideMobile, 'right': 0, 'bottom': 0, 'height': 'auto' }
      };
  var chart = new google.visualization.ColumnChart(document.getElementById('static_Internet_Access_Relative_Participation_Traffic_Data_Access_Technology_2013_Column_Stacked_Chart'));
  chart.draw(data, options);
}*/
/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static Internet Access Traffic Monthly Average Data Subscription Column Chart CONFIG *********

google.load("visualization", "1", {packages: ["corechart"]});
google.setOnLoadCallback(drawStaticInternetAccessTrafficMonthlyAverageDataSubscription);
function drawStaticInternetAccessTrafficMonthlyAverageDataSubscription() {
  var data = google.visualization.arrayToDataTable([
        ['Time Period', 'Mobile network', 'Fixed networks'],
        ['I Quarter 2013', {v:568, f:'568'}, {v:17509, f:'17.509'}],
        ['II Quarter 2013', {v:665, f:'665'}, {v:19081, f:'19.081'}],
        ['III Quarter 2013', {v:716, f:'716'}, {v:22637, f:'22.637'}],
        ['IV Quarter 2013', {v:703, f:'703'}, {v:25013, f:'25.013'}]
      ]);

      var options = {
        legend: { position: "bottom" },
        width: dynamicWidth,
        height: dynamicHeight,
        bar: { groupWidth: '75%' },
        vAxis: {title: "Megabytes quantity"},
        colors: ['#538e31','#e33261'],
        isStacked: false,
        chartArea: { 'left': leftSideMobile, 'top': topSideMobile, 'right': 0, 'bottom': 0, 'height': 'auto' }
      };
  var chart = new google.visualization.ColumnChart(document.getElementById('static_Internet_Access_Traffic_Monthly_Average_Data_Subscription_Column_Chart'));
  chart.draw(data, options);
}


