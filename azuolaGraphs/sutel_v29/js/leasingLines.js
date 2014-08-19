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
   STATIC LEASING LINES
   ========================================================================== */

/* ==========================================================================
   Author's custom js
   ========================================================================== */

   //********* Static Leasing Lines Connections Leasing Lines 2010 2013 Column Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawstaticTVSubscriptionsProportionHousesAccessTelevisionSubscription20102013ColumnChart);
function drawstaticTVSubscriptionsProportionHousesAccessTelevisionSubscription20102013ColumnChart() {
  var data = google.visualization.arrayToDataTable([
  ['Periodo', 'Minorista nacional', 'Mayorista nacional', 'Minorista internacional', 'Mayorista internacional'],
        ['2010 IV Trim', {v:8547, f:'8.547'}, {v:0, f:'0'}, {v:0, f:'0'}, {v:0, f:'0'}],
        ['2011 I Trim', {v:9043, f:'9.043'},  {v:0, f:'0'},  {v:0, f:'0'}, {v:0, f:'0'}],
        ['2011 II Trim', {v:9207, f:'9.207'},  {v:0, f:'0'}, {v:32, f:'32'}, {v:0, f:'0'}],
        ['2011 III Trim', {v:9903, f:'9.903'}, {v:0, f:'0'},  {v:121, f:'121'}, {v:0, f:'0'}],
        ['2011 IV Trim', {v:10148, f:'10.148'}, {v:2, f:'2'}, {v:123, f:'123'}, {v:0, f:'0'}],
        ['2012 I Trim', {v:10907, f:'10.907'}, {v:16, f:'16'}, {v:121, f:'121'}, {v:0, f:'0'}],
        ['2012 II Trim', {v:11447, f:'11.447'}, {v:42, f:'42'}, {v:116, f:'116'}, {v:0, f:'0'}],
        ['2012 III Trim', {v:11110, f:'11.110'}, {v:82, f:'82'}, {v:126, f:'126'}, {v:0, f:'0'}],
        ['2012 IV Trim', {v:11774, f:'11.774'}, {v:97, f:'97'}, {v:122, f:'122'}, {v:0, f:'0'}],
        ['2013 I Trim', {v:14918, f:'14.918'}, {v:175, f:'175'}, {v:122, f:'122'}, {v:0, f:'0'}],
        ['2013 II Trim', {v:15246, f:'15.246'}, {v:262, f:'262'}, {v:118, f:'118'}, {v:0, f:'0'}],
        ['2013 III Trim', {v:15701, f:'15.701'}, {v:308, f:'308'}, {v:118, f:'118'}, {v:0, f:'0'}],
        ['2013 IV Trim', {v:15886, f:'15.886'}, {v:372, f:'372'},  {v:117, f:'117'}, {v:0, f:'0'}]    
     ]); 

    var columnsTable = new google.visualization.DataTable();
    columnsTable.addColumn('number', 'colIndex');
    columnsTable.addColumn('string', 'colLabel');
    var initState= {selectedValues: []};
    // put the columns into this data table (skip column 0)
    for (var i = 1; i < data.getNumberOfColumns(); i++) {
        columnsTable.addRow([i, data.getColumnLabel(i)]);
        // you can comment out this next line if you want to have a default selection other than the whole list
        initState.selectedValues.push(data.getColumnLabel(i));
    }

     var chart = new google.visualization.ChartWrapper({
        chartType: 'ComboChart',
        containerId: 'dynamic_Leasing_Lines_Connections_Leasing_Lines_2010_2013_Stacked_Column_Chart',
        dataTable: data,
        options: {
            title: '',
            legend: { position: "bottom" },
            width: dynamicWidth,
            height: dynamicHeight,
            seriesType: "bars",
            vAxis: {title: "Conexiones"},
            hAxis: {title: ""},
            colors: ['#5c6caf','#aacd45','#ed4f75','#619d4a'],
            isStacked: true,
            chartArea: { 'left': leftSideMobile, 'top': topSideMobile, 'right': 0, 'bottom': 0, 'height': 'auto' }
        }
    });

    var columnFilter = new google.visualization.ControlWrapper({
        controlType: 'CategoryFilter',
        containerId: 'colFilter_div_1',
        dataTable: columnsTable,
        options: {
            filterColumnLabel: 'colLabel',
            ui: {
                label: 'Filtre los datos por:',
                caption: 'Escoja un valor',
                allowTyping: false,
                allowMultiple: true,
                allowNone: false,
                selectedValuesLayout: 'belowStacked'
            }
        },
        state: initState
    });

    var periodPicker = new google.visualization.ControlWrapper({
        controlType: 'CategoryFilter',
        containerId: 'categoryFilterContainer_1',
        options: {
            filterColumnIndex: 0,
            ui: {
                label: 'Filtre los datos por:',
                cssClass: 'categoryFilter',
                caption: 'Período',
                sortValues: true,
                selectedValuesLayout: 'belowStacked',
                labelStacking: 'vertical',
                allowTyping: false,
                allowMultiple: true
            }
        },
    });

    var dashboard = new google.visualization.Dashboard(
        document.getElementById('dynamic_Leasing_Lines_Connections_Leasing_Lines_2010_2013_Stacked_Column_Chart'));

    function setChartView () {
        var state = columnFilter.getState();
        var row;
        var view = {
            columns: [0]
        };
        for (var i = 0; i < state.selectedValues.length; i++) {
            row = columnsTable.getFilteredRows([{column: 1, value: state.selectedValues[i]}])[0];
            view.columns.push(columnsTable.getValue(row, 0));
        }
        // sort the indices into their original order
        view.columns.sort(function (a, b) {
            return (a - b);
        });
        chart.setView(view);
        chart.draw();
    }
    google.visualization.events.addListener(columnFilter, 'statechange', setChartView);
    setChartView();
    columnFilter.draw();
    dashboard.bind(periodPicker, chart).draw(data);
}

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static Leasing Lines Distribution Connection Operator 2013 Pie Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawStaticLeasingLinesDistributionConnectionOperator2013PieChart);
function drawStaticLeasingLinesDistributionConnectionOperator2013PieChart() {
    var data = google.visualization.arrayToDataTable([
        ['Operador', 'Porcentaje'],
        ['ICE', 70], ['Tigo', 9], ['Racsa', 6], ['Reico', 2], ['Konectiva Latam', 2], ['Worldcom', 2], ['Otros', 9]
    ]);
    var langEspaPieChart1 = "";
    var options = {
        title: langEspaPieChart1,
        legend: { position: "bottom" },
        pieSliceText: 'percentage',
        width: dynamicWidth,
        height: dynamicHeightPieChart,
        slices: {  
            0: {color: '#5c6caf'},
            1: {color: '#f8a854', offset:0.1},
            2: {color: '#218ac8', offset:0.1},
            3: {color: '#0d706c', offset:0.1},
            4: {color: '#ed4f75', offset:0.1},
            5: {color: '#9f68a8', offset:0.1},
            6: {color: '#0a4892', offset:0.1}
         },
         chartArea: { 'left': leftSideMobilePieChart, 'top': 25, 'right': 0, 'bottom': 0, 'height': 'auto' }
    };
    var chart = new google.visualization.PieChart(document.getElementById('static_Leasing_Lines_Distribution_Connection_Operator_2013_Pie_Chart'));
    chart.draw(data, options);
}

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static Leasing Lines Distribution Connection Service Benefit 2013 Column Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawStaticLeasingLinesDistributionConnectionServiceBenefit2013ColumnChart1);
function drawStaticLeasingLinesDistributionConnectionServiceBenefit2013ColumnChart1() {
    var data = google.visualization.arrayToDataTable([
        ['Periodo', 'Enlaces', 'VPN', 'Tramas', 'Puertos', 'Fibra oscura'],
        ['I Trim 2013',  {v:49, f:'49%'},{v:41, f:'41%'}, {v:10, f:'10%'}, {v:0.3, f:'0.3%'}, {v:0, f:'0%'}],
        ['II Trim 2013',  {v:48, f:'48%'}, {v:42, f:'42%'}, {v:9, f:'9%'}, {v:0.4, f:'0.4%'}, {v:0, f:'0%'}],
        ['III Trim 2013',  {v:49, f:'49%'}, {v:41, f:'41%'}, {v:10, f:'10%'}, {v:0.3, f:'0.3%'}, {v:0, f:'0%'}],
        ['IV Trim 2013',  {v:50, f:'50%'}, {v:41, f:'41%'}, {v:9, f:'9%'}, {v:0.3, f:'0.3%'}, {v:0, f:'0%'}]
    ]);

    var langEspaBarChart1 = "";

    var options = {
        title: langEspaBarChart1,
        width: dynamicWidth,
        height: dynamicHeight,
        legend: { position: "bottom" },
        vAxis: {title: "Porcentaje %"},
        colors:['#5c6caf', '#aacd45', '#ed4f75', '#218ac8', '#f8a854'],
    };

    var columnChart = new google.visualization.ColumnChart(document.getElementById('static_Leasing_Lines_Distribution_Connection_Service_Benefit_2013_Column_Chart'));
    columnChart.draw(data, options); 
}

/* ==========================================================================
   Author's custom js
   ========================================================================== */

   //********* Static Leasing Lines Total Income Connection Leasing Lines 2010 2013 Column Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawStaticLeasingLinesTotalIncomeConnectionLeasingLines20102013ColumnChart);
function drawStaticLeasingLinesTotalIncomeConnectionLeasingLines20102013ColumnChart() {
    var data = google.visualization.arrayToDataTable([
        ['Periodo', 'Colones'],
        ['2010 IV Trim',  {v:5608390, f:'5.608.390'}],
        ['2011 I Trim',  {v:5867610, f:'5.867.610'}],
        ['2011 II Trim', {v:6085199, f:'6.085.199'}],
        ['2011 III Trim',  {v:6271039, f:'6.271.039'}],
        ['2011 IV Trim',  {v:6311011, f:'6.311.011'}],
        ['2012 I Trim',  {v:7562513, f:'7.562.513'}],
        ['2012 II Trim',  {v:8300182, f:'8.300.182'}],
        ['2012 III Trim',  {v:8665221, f:'8.665.221'}],
        ['2012 IV Trim',  {v:9523891, f:'9.523.891'}],
        ['2013 I Trim',  {v:9404059, f:'9.404.059'}],
        ['2013 II Trim',  {v:10438847, f:'10.438.847'}],
        ['2013 III Trim',  {v:10581178, f:'10.581.178'}],
        ['2013 IV Trim',  {v:10676775, f:'10.676.775'}]
    ]);

    var langEspaBarChart1 = "";

    var options = {
        title: langEspaBarChart1,
        width: dynamicWidth,
        height: dynamicHeight,
        legend: { position: "bottom" },
        vAxis: {title: "Miles de colones"},
        colors:['#5c6caf'],
       

    };

    var columnChart = new google.visualization.ColumnChart(document.getElementById('static_Leasing_Lines_Total_Income_Connection_Leasing_Lines_2010_2013_Column_Chart'));
    columnChart.draw(data, options); 
}

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static Leasing Lines Distribution Connection Service Benefit 2013 Column Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawStaticLeasingLinesDistributionConnectionServiceBenefit2013ColumnChartColumnChart);
function drawStaticLeasingLinesDistributionConnectionServiceBenefit2013ColumnChartColumnChart() {
    var data = google.visualization.arrayToDataTable([
        ['Periodo', 'Enlaces', 'VPN', 'Tramas', 'Puertos', 'Fibra oscura'],
        ['I Trim 2013',  {v:53, f:'53%'},{v:39, f:'39%'}, {v:5, f:'5%'}, {v:2, f:'2%'}, {v:0.5, f:'0.5%'}],
        ['II Trim 2013',  {v:56, f:'56%'}, {v:37, f:'37%'}, {v:5, f:'5%'}, {v:2, f:'2%'}, {v:0.4, f:'0.4%'}],
        ['III Trim 2013',  {v:56, f:'56%'}, {v:36, f:'36%'}, {v:5, f:'5%'}, {v:2, f:'2%'}, {v:0.4, f:'0.4%'}],
        ['IV Trim 2013',  {v:57, f:'57%'}, {v:36, f:'36%'}, {v:5, f:'5%'}, {v:2, f:'2%'}, {v:0.3, f:'0.3%'}]
    ]);

    var langEspaBarChart1 = "";

    var options = {
        title: langEspaBarChart1,
        width: dynamicWidth,
        height: dynamicHeight,
        legend: { position: "bottom" },
        vAxis: {title: "Porcentaje %"},
        colors:['#5c6caf', '#aacd45', '#ed4f75', '#218ac8', '#f8a854'],
        

    };

    var columnChart = new google.visualization.ColumnChart(document.getElementById('static_Leasing_Lines_Income_Proportion_Connection_Service_Leasing_Lines_2013_Column_Chart'));
    columnChart.draw(data, options); 
}
