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
   STATIC GENERAL
   ========================================================================== */

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static General Telecommunications PIB Column Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawStaticGeneralTelecommunicationsPIB20102013ColumnChart);
function drawStaticGeneralTelecommunicationsPIB20102013ColumnChart() {
    var data = google.visualization.arrayToDataTable([
        ['Periodo', 'Porcentaje %'],
        ['2010', {v:0.8, f:'0.8%'}],
        ['2011', {v:2.1, f:'2.1%'}],
        ['2012', {v:2.4, f:'2.4%'}],
        ['2013', {v:1.0, f:'1.0%'}]
    ]);

    var langEspaBarChart1 = "";

    var options = {
        title: langEspaBarChart1,
        width: dynamicWidth,
        height: dynamicHeight,
        legend: { position: "bottom" },
        vAxis: {title: "Porcentaje %"},
        colors:['#1d76c1'],
        chartArea: { 'left': leftSideMobile, 'top': 40, 'right': 0, 'bottom': 0, 'height': 'auto' }

    };

    var columnChart = new google.visualization.ColumnChart(document.getElementById('static_General_Telecommunications_PIB_2010_2013_Column_Chart'));
    columnChart.draw(data, options); 
}

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static General Labor Force Telecommunications Line Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawStaticGeneralLaborForceTelecommunicationsLineChart);
function drawStaticGeneralLaborForceTelecommunicationsLineChart() {
  var data = google.visualization.arrayToDataTable([
    ['Period', 'Personas'],
    ['II Sem 2010',  {v:7835, f:'7.835'}],
    ['I Sem 2011',  {v:8766, f:'8.766'}],
    ['II Sem 2011',  {v:9618, f:'9.618'}],
    ['I Sem 2012', {v:9933, f:'9.933'}],
    ['II Sem 2012', {v:9900, f:'9.900'}],
    ['I Sem 2013', {v:10347, f:'10.347'}],
    ['II Sem 2013', {v:10442, f:'10.442'}]
  ]);

  var langEspaBarChart1 = "";

  var options = {
    title: langEspaBarChart1,
    width: dynamicWidth,
    height: dynamicHeight,
    legend: { position: "bottom" },
    vAxis: {title: "Personas"},
    colors:['#1d76c1'],
    chartArea: { 'left': leftSideMobile, 'top': 40, 'right': 0, 'bottom': 0, 'height': 'auto' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('static_General_Labor_Force_Telecommunications_Line_Chart'));
  chart.draw(data, options);
}

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static General Telecommunications Income 2011 2013 Combo Chart CONFIG *********

google.load("visualization", "1", {packages: ["corechart"]});
google.setOnLoadCallback(drawStaticGeneralTelecommunicationsIncome20112013ComboChart);
function drawStaticGeneralTelecommunicationsIncome20112013ComboChart() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    ['Periodo', 'Ingreso', 'Variación %'],
    ['2011 I Trim',  {v:93709, f:'93.709'},{v:0, f:'0%'}],
    ['2011 II Trim',  {v:97965, f:'97.965'},{v:5, f:'5%'}],
    ['2011 III Trim',  {v:100175, f:'100.175'},{v:2, f:'2%'}],
    ['2011 IV Trim',  {v:103369, f:'103.369'},{v:3, f:'3%'}],
    ['2012 I Trim',  {v:110823, f:'110.823'},{v:7, f:'7%'}],
    ['2012 II Trim',  {v:113605, f:'113.605'},{v:3, f:'3%'}],
    ['2012 III Trim',  {v:116743, f:'116.743'},{v:3, f:'3%'}],
    ['2012 IV Trim',  {v:119587, f:'119.587'},{v:2, f:'2%'}],
    ['2013 I Trim',  {v:124262, f:'124.262'},{v:4, f:'4%'}],
    ['2013 II Trim',  {v:131435, f:'131.435'},{v:6, f:'6%'}],
    ['2013 III Trim',  {v:139200, f:'139.200'},{v:6, f:'6%'}],
    ['2013 IV Trim',  {v:144869, f:'144.869'},{v:4, f:'4%'}]
  ]);

  var options = {
      title: '',
      legend: { position: "bottom" },
      width: dynamicWidth,
      height: dynamicHeight,
      seriesType: "bars",
      hAxis: {title: ""},
      vAxes: {
                0: {logScale: false, title: "Millones de colones"},
                1: {logScale: false, maxValue: 2, title: "Variación %"},
            },
      series:{
               0:{targetAxisIndex:0},
               1:{targetAxisIndex:1, type: "line"},
      },
      colors: ['#218ac8','#f49735'],
      chartArea: { 'left': leftSideMobile, 'top': 40, 'right': 0, 'bottom': 0, 'height': 'auto' }
  };

  var chart = new google.visualization.ComboChart(document.getElementById('static_General_Telecommunications_Income_2011_2013_Combo_Chart'));
  chart.draw(data, options);
}

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static General Telecommunications Total Income Service 2011 2013 Stacked Column Chart CONFIG *********

google.load("visualization", "1", {packages: ["corechart"]});
google.setOnLoadCallback(drawStaticGeneralTelecommunicationsTotalIncomeService20112013StackedColumnChart);
function drawStaticGeneralTelecommunicationsTotalIncomeService20112013StackedColumnChart() {
  var data = google.visualization.arrayToDataTable([
        ['Periodo','Telefonía móvil', 'Telefonía básica tradicional y telefonía VoIP', 'Internet','Líneas arrendadas'],
        ['2011', {v:61, f:'61%'}, {v:12, f:'12%'}, {v:22, f:'22%'}, {v:5, f:'5%'}],
        ['2012', {v:59, f:'59%'}, {v:10, f:'10%'}, {v:24, f:'24%'}, {v:7, f:'7%'}],
        ['2013', {v:54, f:'54%'}, {v:8, f:'8%'}, {v:30, f:'30%'}, {v:8, f:'8%'}]
      ]);

      var options = {
        legend: { position: "bottom" },
        width: dynamicWidth,
        height: dynamicHeight,
        bar: { groupWidth: '75%' },
        vAxis: {title: "Porcentaje %"},
        colors: ['#9f68a8','#f8a854','#ed4f75','#5c6caf'],
        isStacked: true,
        chartArea: { 'left': leftSideMobile, 'top': 40, 'right': 0, 'bottom': 0, 'height': 'auto' }
      };
  var chart = new google.visualization.ColumnChart(document.getElementById('static_General_Telecommunications_Total_Income_Service_2011_2013_Stacked_Column_Chart'));
  chart.draw(data, options);
}

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static General Telecommunications Total Income Service Line Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawStaticGeneralTelecommunicationsTotalIncomeServiceLineChart);
function drawStaticGeneralTelecommunicationsTotalIncomeServiceLineChart() {
  var data = google.visualization.arrayToDataTable([
    ['Período','Telefonía fija', 'Telefonía móvil', 'Acceso Internet', 'Líneas arrendadas'],
    ['2011 I Trim',  {v:11709, f:'11.709'}, {v:61688, f:'61.688'}, {v:14464, f:'14.464'}, {v:5868, f:'5.868'}],
    ['2011 II Trim',  {v:11653, f:'11.653'}, {v:65164, f:'65.164'}, {v:15063, f:'15.063'}, {v:6085, f:'6.085'}],
    ['2011 III Trim',  {v:11496, f:'11.496'}, {v:67103, f:'67.103'}, {v:15305, f:'15.305'}, {v:6271, f:'6.271'}],
    ['2011 IV Trim',  {v:11468, f:'11.468'}, {v:69718, f:'69.718'}, {v:15872, f:'15.872'}, {v:6311, f:'6.311'}],
    ['2012 I Trim',  {v:11326, f:'11.326'}, {v:75930, f:'75.930'}, {v:16005, f:'16.005'}, {v:7563, f:'7.563'}],
    ['2012 II Trim',  {v:11335, f:'11.335'}, {v:77393, f:'77.393'}, {v:16557, f:'16.557'}, {v:8300, f:'8.300'}],
    ['2012 III Trim',  {v:11089, f:'11.089'}, {v:79781, f:'79.781'}, {v:17207, f:'17.207'}, {v:8665, f:'8.665'}],
    ['2012 IV Trim',  {v:10789, f:'10.789'}, {v:81339, f:'81.339'}, {v:17875, f:'17.875'}, {v:9524, f:'9.524'}],
    ['2013 I Trim',  {v:10454, f:'10.454'}, {v:88703, f:'88.703'}, {v:15701, f:'15.701'}, {v:9404, f:'9.404'}],
    ['2013 II Trim',  {v:11770, f:'11.770'}, {v:92486, f:'92.486'}, {v:16740, f:'16.740'}, {v:10439, f:'10.439'}],
    ['2013 III Trim',  {v:10068, f:'10.068'}, {v:100956, f:'100.956'}, {v:17594, f:'17.594'}, {v:10581, f:'10.581'}],
    ['2013 IV Trim',  {v:11646, f:'11.646'}, {v:104673, f:'104.673'}, {v:17874, f:'17.874'}, {v:10677, f:'10.677'}] 
  ]);

  var options = {
    legend: { position: "bottom" },
    width: dynamicWidth,
    height: dynamicHeight,
    vAxis: {title: "Millones de colones"},
    colors: ['#218ac8','#f8a854','#7ec054','#ed4f75'],
    title: '',
    chartArea: { 'left': leftSideMobile, 'top': 40, 'right': 0, 'bottom': 0, 'height': 'auto' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('static_General_Telecommunications_Total_Income_Service_Line_Chart'));
  chart.draw(data, options);
}

