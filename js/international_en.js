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
   DYNAMIC INTERNATIONAL
   ========================================================================== */

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Dynamic International Average Per Capita Income Line Chart CONFIG *********

google.setOnLoadCallback(drawDynamicInternationalAveragePerCapitaLineChart);
function drawDynamicInternationalAveragePerCapitaLineChart() {

    var data = google.visualization.arrayToDataTable([
        ['Country', 'Average Income per Inhabitant', 'Prepaid Subscription Percentages'],
        ['Norway',  {v:99636, f:'99.636'},  {v:26, f:'26%'}],
        ['Switzerland',  {v:78928, f:'78.928'},  {v:39, f:'39%'}],
        ['Denmark', {v:56364, f:'56.364'},  {v:15, f:'15%'}],
        ['Singapore', {v:52052, f:'52.052'}, {v:47, f:'47%'}],
        ['Finland', {v:45694, f:'45.694'},  {v:10, f:'10%'}],
        ['United Kingdom', {v:38920, f:'38.920'}, {v:53, f:'53%'}],
        ['Chile', {v:15452, f:'15.452'}, {v:72, f:'72%'}],
        ['Uruguay', {v:14703, f:'14.703'},  {v:69, f:'69%'}],
        ['Brazil', {v:11339, f:'11.339'},  {v:85, f:'85%'}],
        ['Mexico',  {v:9749, f:'9.749'},  {v:84, f:'84%'}],
        ['Panama',  {v:9534, f:'9.534'},  {v:100, f:'100%'}],
        ['Costa Rica',   {v:9386, f:'9.386'},  {v:79, f:'79%'}],
        ['Colombia', {v:7748, f:'7.748'},  {v:81, f:'81%'}],
        ['Peru', {v:6796, f:'6.796'},  {v:76, f:'76%'}],
        ['Dominican Republic', {v:5746, f:'5.746'},  {v:82, f:'82%'}],
        ['Guatemala', {v:3330, f:'3.330'},  {v:95, f:'95%'}],
        ['Nicaragua', {v:1754, f:'1.754'},  {v:81, f:'81%'}]
    ]);
       
    var linesTable = new google.visualization.DataTable();
    linesTable.addColumn('number', 'colIndex');
    linesTable.addColumn('string', 'colLabel');
    var initState= {selectedValues: []};
    // put the columns into this data table (skip column 0)
    for (var i = 1; i < data.getNumberOfColumns(); i++) {
        linesTable.addRow([i, data.getColumnLabel(i)]);
        // you can comment out this next line if you want to have a default selection other than the whole list
        initState.selectedValues.push(data.getColumnLabel(i));
    }
    // you can set individual columns to be the default columns (instead of populating via the loop above) like this:
    // initState.selectedValues.push(data.getColumnLabel(4));

    var lineFilter = new google.visualization.ControlWrapper({
    controlType: 'CategoryFilter',
    containerId: 'colFilter_div_1',
    dataTable: linesTable,
    options: {
        filterColumnLabel: 'colLabel',
        ui: {
            label: 'Filter data:',
            caption: '',
            allowTyping: false,
            allowMultiple: true,
            allowNone: false,
            selectedValuesLayout: 'belowStacked'
        }
    },
        state: initState
    });

    var categoryPicker = new google.visualization.ControlWrapper({
        controlType: 'CategoryFilter',
        containerId: 'categoryFilterContainer_1',
        options: {
            filterColumnIndex: 0,
            ui: {
                label: 'Filter data:',
                cssClass: 'categoryFilter',
                caption: 'Country',
                sortValues: 'true',
                selectedValuesLayout: 'belowStacked',
                labelStacking: 'vertical',
                allowTyping: false,
                allowMultiple: true
            }
        },

    });

    // Define a line chart
    var lineChart = new google.visualization.ChartWrapper({
        chartType: 'LineChart',
        containerId: 'dynamic_International_Average_Per_Capita_Line_Chart',
        options: {
            height: dynamicHeight,
            curveType: 'allowNone',
            legend: { position: "bottom" },
            width: dynamicWidth,
            hAxis: {title: ""},
            vAxes: {
                0: {logScale: false, title: "Dollars"},
                1: {logScale: false, maxValue: 2, title: "Percentage %"},
            },
            series:{
               0:{targetAxisIndex:0},
               1:{targetAxisIndex:1, type: "line"},
               //2:{targetAxisIndex:1},
            },
            colors: ['#e33061', '#176b64'], 
            chartArea: { 'left': leftSideMobile, 'top': topSideMobile, 'right': 0, 'bottom': 0, 'height': 'auto' }
        }
    });

    var dashboard = new google.visualization.Dashboard(
    document.getElementById('dynamic_International_Average_Per_Capita_Line_Chart'));

    function setChartView () {
        var state = lineFilter.getState();
        var row;
        var view = {
            columns: [0]
        };
        for (var i = 0; i < state.selectedValues.length; i++) {
            row = linesTable.getFilteredRows([{column: 1, value: state.selectedValues[i]}])[0];
            view.columns.push(linesTable.getValue(row, 0));
        }
        // sort the indices into their original order
        view.columns.sort(function (a, b) {
        return (a - b);
        });
        lineChart.setView(view);
        lineChart.draw();
    }
    google.visualization.events.addListener(lineFilter, 'statechange', setChartView);
    lineFilter.draw();
    setChartView();
    dashboard.bind(categoryPicker, lineChart).draw(data);

}

/* ==========================================================================
   STATIC INTERNATIONAL
   ========================================================================== */

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static International LandLine 100 Bar Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
    google.setOnLoadCallback(drawStaticInternationalLandLine100BarChart);
    function drawStaticInternationalLandLine100BarChart() {
      var data = google.visualization.arrayToDataTable([
     ["Country", "Percentage %", { role: "style" } ],
        ["Nicaragua", {v:5, f:'5%'}, "#176b64"],
        ["Honduras", {v:8, f:'8%'}, "#176b64"],
        ["Guatemala", {v:8, f:'8%'}, "#176b64"],
        ["Dominican Republic", {v:11, f:'11%'}, "#176b64"],
        ["Peru", {v:11, f:'11%'}, "#176b64"],
        ["Finland", {v:12, f:'12%'}, "#176b64"],
        ["Colombia", {v:15, f:'15%'}, "#176b64"],
        ["El Salvador", {v:15, f:'15%'}, "#176b64"],
        ["Panama", {v:15, f:'15%'}, "#176b64"],
        ["Mexico", {v:17, f:'17%'}, "#176b64"],
        ["Chile", {v:18, f:'18%'}, "#176b64"],
        ["Costa Rica", {v:20, f:'20%'}, "#e33061"],
        ["Brazil", {v:22, f:'22%'}, "#176b64"],
        ["Argentina", {v:23, f:'23%'}, "#176b64"],
        ["Norway", {v:26, f:'26%'}, "#176b64"],
        ["Uruguay", {v:31, f:'31%'}, "#176b64"],
        ["Singapore", {v:36, f:'36%'}, "#176b64"],
        ["Denmark", {v:37, f:'37%'}, "#176b64"],
        ["Sweden", {v:41, f:'41%'}, "#176b64"],
        ["USA", {v:42, f:'42%'}, "#176b64"],
        ["Netherlands", {v:43, f:'43%'}, "#176b64"],
        ["United Kingdom", {v:53, f:'53%'}, "#176b64"],
        ["Switzerland", {v:58, f:'58%'}, "#176b64"],
        ["Taiwan", {v:71, f:'71%'}, "#176b64"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
      title: "",
      width: dynamicWidth,
      height: dynamicHeight,
      bar: {groupWidth: "50%"},
        
          legend: { position: "bottom" },
          colors: ['#176b64'],
          chartArea: { 'left': leftSideMobile, 'top': 40, 'right': 0, 'bottom': 0, 'height': 'auto' }
        };
      var chart = new google.visualization.BarChart(document.getElementById("static_International_LandLine_100_Bar_Chart"));
      chart.draw(view, options);
}

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static International Costa Rican Mobile Subscriptions Bar Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
    google.setOnLoadCallback(drawStaticInternationalCostaRicanMobileSubscriptionsBarChart);
    function drawStaticInternationalCostaRicanMobileSubscriptionsBarChart() {
      var data = google.visualization.arrayToDataTable([
     ["Country", "Percentage %", { role: "style" } ],
        ["Mexico", {v:86, f:'86%'}, "#176b64"],
        ["Dominican Republic", {v:88, f:'88%'}, "#176b64"],
        ["USA", {v:96, f:'96%'}, "#176b64"],
        ["Honduras", {v:96, f:'96%'}, "#176b64"],
        ["Peru", {v:98, f:'98%'}, "#176b64"],
        ["Colombia", {v:104, f:'104%'}, "#176b64"],
        ["Norway", {v:112, f:'112%'}, "#176b64"],
        ["Netherlands", {v:114, f:'114%'}, "#176b64"],
        ["Nicaragua", {v:116, f:'116%'}, "#176b64"],
        ["United Kingdom", {v:124, f:'124%'}, "#176b64"],
        ["Sweden", {v:124, f:'124%'}, "#176b64"],
        ["Denmark", {v:127, f:'127%'}, "#176b64"],
        ["Taiwan", {v:127, f:'127%'}, "#176b64"],
        ["Switzerland", {v:134, f:'134%'}, "#176b64"],
        ["Chile", {v:134, f:'134%'}, "#176b64"],
        ["Brazil", {v:135, f:'135%'}, "#176b64"],
        ["El Salvador", {v:136, f:'136%'}, "#176b64"],
        ["Guatemala", {v:140, f:'140%'}, "#176b64"],
        ["Costa Rica", {v:151, f:'151%'}, "#e33061"],
        ["Uruguay", {v:155, f:'155%'}, "#176b64"],
        ["Singapore", {v:156, f:'156%'}, "#176b64"],
        ["Argentina", {v:159, f:'159%'}, "#176b64"],
        ["Panama", {v:163, f:'163%'}, "#176b64"],
        ["Finland", {v:172, f:'172%'}, "#176b64"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
      title: "",
      width: dynamicWidth,
      height: dynamicHeight,
      bar: {groupWidth: "50%"},
          legend: { position: "bottom" },
          colors: ['#176b64'],
          chartArea: { 'left': leftSideMobile, 'top': 40, 'right': 0, 'bottom': 0, 'height': 'auto' }
        };
      var chart = new google.visualization.BarChart(document.getElementById("static_International_CostaRican_Mobile_Subscriptions_Bar_Chart"));
      chart.draw(view, options);
}


/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static International Percent Subscriptions Mobile Postpaid Prepaid Stacked Bar Chart CONFIG *********
/*
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawStaticInternationalPercentSubscriptionsMobilePostpaidPrepaidStackedBarChart);
function drawStaticInternationalPercentSubscriptionsMobilePostpaidPrepaidStackedBarChart() {
  var data = google.visualization.arrayToDataTable([
    ['Pais','2012 Prepago', '2012 Postpago'],
    ['Finlandia', {v:10, f:'10%'},  {v:90, f:'90%'}],
    ['Dinamarca', {v:15, f:'15%'}, {v:85, f:'85%'}],
    ['Taiwán', {v:16, f:'16%'}, {v:84, f:'84%'}],
    ['Noruega', {v:26, f:'26%'}, {v:74, f:'74%'}],
    ['Suiza', {v:39, f:'39%'}, {v:61, f:'61%'}],
    ['Singapur', {v:47, f:'10%'}, {v:53, f:'53%'}],
    ['Costa Rica', {v:79, f:'79%'}, {v:21, f:'21%'}],
    ['Uruguay', {v:69, f:'69%'}, {v:31, f:'31%'}],
    ['Chile', {v:72, f:'72%'}, {v:28, f:'28%'}],
    ['Brasil', {v:85, f:'85%'}, {v:15, f:'15%'}],
    ['Colombia', {v:81, f:'81%'}, {v:19, f:'19%'}],
    ['Rep. Dominicana', {v:82, f:'82%'}, {v:18, f:'18%'}],
    ['Perú', {v:76, f:'76%'}, {v:24, f:'24%'}],
    ['México', {v:84, f:'84%'}, {v:16, f:'16%'}],
    ['Panamá', {v:99.95, f:'99.95%'}, {v:0.05, f:'0.05%'}],
    ['Nicaragua', {v:81, f:'81%'}, {v:19, f:'19%'}],
    ['Guatemala', {v:95, f:'95%'}, {v:5, f:'5%'}]
  ]);
  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1, 2]);
  var options = {
    title: "",
    width: dynamicWidth,
    height: dynamicHeight,
    bar: {groupWidth: "50%"},
    legend: { position: "bottom" },
    isStacked: true,
     colors: ['#e33061', '#176b64'],
     chartArea: { 'left': leftSideMobile, 'top': 40, 'right': 0, 'bottom': 0, 'height': 'auto' }
  
  };
  var chart = new google.visualization.BarChart(document.getElementById("static_International_Percent_Subscriptions_Mobile_Postpaid_Prepaid_Stacked_Bar_Chart"));
  chart.draw(view, options);
}
*/

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static International Internet Access 100 Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
    google.setOnLoadCallback(drawStaticInternationalInternetAccess100BarChart);
    function drawStaticInternationalInternetAccess100BarChart() {
      var data = google.visualization.arrayToDataTable([
     ["Country", "Percentage %", { role: "style" } ],
        ["Honduras", {v:1, f:'1%'}, "#176b64"],
        ["Dominican Republic", {v:5, f:'5%'}, "#176b64"],
        ["Peru", {v:5, f:'5%'}, "#176b64"],
        ["Panama", {v:8, f:'8%'}, "#176b64"],
        ["Colombia", {v:9, f:'9%'}, "#176b64"],
        ["Costa Rica", {v:10, f:'10%'}, "#e33061"],
        ["Mexico", {v:11, f:'11%'}, "#176b64"],
        ["Chile", {v:12, f:'12%'}, "#176b64"],
        ["Uruguay", {v:21, f:'21%'}, "#176b64"],
        ["Taiwan", {v:24, f:'24%'}, "#176b64"],
        ["Singapore", {v:26, f:'26%'}, "#176b64"],
        ["Sweden", {v:33, f:'33%'}, "#176b64"],
        ["United Kingdom", {v:36, f:'36%'}, "#176b64"],
        ["Norway", {v:36, f:'36%'}, "#176b64"],
        ["Netherlands", {v:40, f:'40%'}, "#176b64"],
        ["Denmark", {v:40, f:'40%'}, "#176b64"],
        ["Switzerland", {v:43, f:'43%'}, "#176b64"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
      title: "",
      width: dynamicWidth,
      height: dynamicHeight,
      bar: {groupWidth: "50%"},
          legend: { position: "bottom"},
          colors: ['#176b64'],
          chartArea: { 'left': leftSideMobile, 'top': 40, 'right': 0, 'bottom': 0, 'height': 'auto' }
        };
      var chart = new google.visualization.BarChart(document.getElementById("static_International_Internet_Access_100_Bar_Chart"));
      chart.draw(view, options);
}

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static International Mobile Internet 100 Bar Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
    google.setOnLoadCallback(drawStaticInternationalMobileInternet100BarChart);
    function drawStaticInternationalMobileInternet100BarChart() {
     var data = google.visualization.arrayToDataTable([
     ["Country", "Percentage %", { role: "style" } ],
        ["Nicaragua", {v:1, f:'1%'}, "#176b64"],
        ["Peru", {v:3, f:'3%'}, "#176b64"],
        ["Guatemala", {v:5, f:'5%'}, "#176b64"],
        ["Colombia", {v:5, f:'5%'}, "#176b64"],
        ["El Salvador", {v:5, f:'5%'}, "#176b64"],
        ["Honduras", {v:9, f:'9%'}, "#176b64"],
        ["Dominican Republic", {v:15, f:'15%'}, "#176b64"],
        ["Argentina", {v:16, f:'16%'}, "#176b64"],
        ["Panama", {v:25, f:'25%'}, "#176b64"],
        ["Chile", {v:28, f:'28%'}, "#176b64"],
        ["Uruguay", {v:32, f:'32%'}, "#176b64"],
        ["Brazil", {v:33, f:'33%'}, "#176b64"],
        ["Costa Rica", {v:57, f:'57%'}, "#e33061"],        
        ["Netherlands", {v:61, f:'61%'}, "#176b64"],
        ["United Kingdom", {v:77, f:'77%'}, "#176b64"],
        ["Norway", {v:84, f:'84%'}, "#176b64"],
        ["USA", {v:89, f:'89%'}, "#176b64"],
        ["Denmark", {v:97, f:'97%'}, "#176b64"],
        ["Sweden", {v:105, f:'105%'}, "#176b64"],
        ["Finland", {v:106, f:'106%'}, "#176b64"],
        ["Singapore", {v:124, f:'124%'}, "#176b64"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
      title: "",
      width: dynamicWidth,
      height: dynamicHeight,
      bar: {groupWidth: "50%"},
          legend: { position: "bottom" },
          colors: ['#176b64'],
          chartArea: { 'left': leftSideMobile, 'top': 40, 'right': 0, 'bottom': 0, 'height': 'auto' }
        };
      var chart = new google.visualization.BarChart(document.getElementById("static_International_MobileInternet_100_Bar_Chart"));
      chart.draw(view, options);
}

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static International Mobile Internet 100 Bar Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawStaticInternationalTotalIncomeTelecommunicationsPIB100BarChart);
function drawStaticInternationalTotalIncomeTelecommunicationsPIB100BarChart() {
    var data = google.visualization.arrayToDataTable([
   ["Country", "Percentage %", { role: "style" } ],
      ["Norway", {v:1.1, f:'1.1%'}, "#176b64"],
      ["Sweden", {v:1.5, f:'1.5%'}, "#176b64"],
      ["Netherlands", {v:1.7, f:'1.7%'}, "#176b64"],
      ["Finland", {v:2.0, f:'2.0%'}, "#176b64"],
      ["United Kingdom", {v:2.0, f:'2.0%'}, "#176b64"],
      ["Denmark", {v:2.0, f:'2.0%'}, "#176b64"],
      ["Costa Rica", {v:2.3, f:'2.3%'}, "#e33061"],
      ["Panama", {v:2.5, f:'2.5%'}, "#176b64"],
      ["Uruguay", {v:2.5, f:'2.5%'}, "#176b64"],
      ["Singapore", {v:2.5, f:'2.5%'}, "#176b64"],
      ["Mexico", {v:2.6, f:'2.6%'}, "#176b64"],
      ["Peru", {v:2.7, f:'2.7%'}, "#176b64"],
      ["Brazil", {v:2.9, f:'2.9%'}, "#176b64"],
      ["Argentina", {v:2.9, f:'2.9%'}, "#176b64"],        
      ["Dominican Republic", {v:3.3, f:'3.3%'}, "#176b64"],
      ["USA", {v:3.4, f:'3.4%'}, "#176b64"],
      ["EL Salvador", {v:3.7, f:'3.7%'}, "#176b64"],
      ["Chile", {v:3.7, f:'3.7%'}, "#176b64"],
      ["Honduras", {v:5.4, f:'5.4%'}, "#176b64"],
      ["Colombia", {v:5.4, f:'5.4%'}, "#176b64"]
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,{ calc: "stringify", sourceColumn: 1, type: "string", role: "annotation" }, 2]);
    var options = {
      title: "",
      width: dynamicWidth,
      height: dynamicHeight,
      bar: {groupWidth: "50%"},
      legend: { position: "bottom" },
      colors: ['#176b64'],
      chartArea: { 'left': leftSideMobile, 'top': 40, 'right': 0, 'bottom': 0, 'height': 'auto' }
    };
    var chart = new google.visualization.BarChart(document.getElementById("static_International_TotalIncome_Telecommunications_PIB_100_Bar_Chart"));
    chart.draw(view, options);
}
