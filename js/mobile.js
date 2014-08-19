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
   STATIC MOBILE
   ========================================================================== */

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static Mobile Subscriptions Per 100 Column Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawStaticMobileSubscriptionsPer100ColumnChart);
function drawStaticMobileSubscriptionsPer100ColumnChart() {
    var data = google.visualization.arrayToDataTable([
        ['Periodo', 'Porcentaje %'],
        ['2010', {v:69, f:'69%'}],
        ['2011', {v:90, f:'90%'}],
        ['2012', {v:116, f:'116%'}],
        ['2013', {v:151, f:'151%'}]
    ]);

    var langEspaBarChart1 = "";

    var options = {
        title: langEspaBarChart1,
        width: dynamicWidth,
        height: dynamicHeight,
        legend: { position: "bottom" },
        vAxis: {title: "Porcentaje %"},
        colors:['#8b509c'],
        chartArea: { 'left': leftSideMobile, 'top': 40, 'right': 0, 'bottom': 0, 'height': 'auto' }

    };

    var columnChart = new google.visualization.ColumnChart(document.getElementById('static_Mobile_Subscriptions_per_100_Column_Chart'));
    columnChart.draw(data, options); 
}
/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static Mobile Subscriptions Per Operator Pie Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawStaticMobileSubscriptionsPerOperatorPieChart);
function drawStaticMobileSubscriptionsPerOperatorPieChart() {
  var data = google.visualization.arrayToDataTable([
    ['Operador', 'Porcentaje'],
    ['ICE', {v:61, f:'61%'}],
    ['Claro', {v:18, f:'18%'}],
    ['Telefónica', {v:18, f:'18%'}],
    ['Tuyo Móvil', {v:1, f:'1%'}],
    ['Fullmóvil', {v:2, f:'2%'}]
  ]);

  var options = {
    title: '',
    width: dynamicWidth,
    height: dynamicHeightPieChart,
    slices: {  
            0: {color: '#8b509c'},
            1: {color: '#70b835'},
            2: {color: '#1d76c1'},
            3: {color: '#e33261'},
            4: {color: '#f49735'}
         },
    legend: { position: "bottom" },
    chartArea: { 'left': leftSideMobilePieChart, 'top': 0, 'right': 0, 'bottom': 0, 'height': 'auto' }
  };

  var chart = new google.visualization.PieChart(document.getElementById('static_Mobile_Subscriptions_per_Operator_Pie_Chart'));
  chart.draw(data, options);
}

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static Mobile Traffic Voice Per Subscriptions ComboChart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawStaticMobileTrafficVoicePerSubscriptionsComboChart);
function drawStaticMobileTrafficVoicePerSubscriptionsComboChart() {
    var data = google.visualization.arrayToDataTable([
        ['Periodo', 'Porcentaje %', 'Variación %'],
        ['2011', {v:135, f:'135%'}, {v:135, f:'0%'}],
        ['2012', {v:123, f:'123%'}, {v:123, f:'-8%'}],
        ['2013', {v:103, f:'103%'}, {v:103, f:'-16%'}]
    ]);

    var langEspaBarChart1 = "";

    var options = {
        title: langEspaBarChart1,
        width: dynamicWidth,
        height: dynamicHeight,
        legend: { position: "bottom" },
        vAxes: {
                0: {logScale: false, title: "Porcentaje %"},
                1: {logScale: false, maxValue: 2, title: "Variación %"},
        },   
        series:{
               0:{targetAxisIndex:0},
               1:{targetAxisIndex:1, type: "line"},
        },
        colors:['#8b509c', '#70b835'],
        chartArea: { 'left': leftSideMobile, 'top': 40, 'right': 0, 'bottom': 0, 'height': 'auto' }

    };

    var columnChart = new google.visualization.ColumnChart(document.getElementById('static_Mobile_Traffic_Voice_per_Subscriptions_Combo_Chart'));
    columnChart.draw(data, options); 
}

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static Mobile Entry Total Mobile Service Line Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawStaticMobileEntryTotalMobileServiceLineChart);
function drawStaticMobileEntryTotalMobileServiceLineChart() {
  var data = google.visualization.arrayToDataTable([
    ['Periodo', 'Millones de Colones'],
    ['I Trim 2011',  {v:61688, f:'61.688'}],
    ['II Trim 2011',  {v:65164, f:'65.164'}],
    ['III Trim 2011',  {v:67103, f:'67.103'}],
    ['IV Trim 2011',  {v:69718, f:'69.718'}],
    ['I Trim 2012',  {v:75930, f:'75.930'}],
    ['II Trim 2012',  {v:77393, f:'77.393'}],
    ['III Trim 2012',  {v:79781, f:'79.781'}],
    ['IV Trim 2012',  {v:81339, f:'81.339'}],
    ['I Trim 2013',  {v:88703, f:'88.703'}],
    ['II Trim 2013',  {v:92486, f:'92.486'}],
    ['III Trim 2013',  {v:100956, f:'100.956'}],
    ['IV Trim 2013',  {v:104673, f:'104.673'}],
  ]);

  var langEspaBarChart1 = "";

  var options = {
    title: langEspaBarChart1,
    width: dynamicWidth,
    height: dynamicHeight,
    legend: { position: "bottom" },
    vAxis: {title: "Millones de Colones"},
    colors:['#8b509c'],
    pointSize: 5,
    chartArea: { 'left': leftSideMobile, 'top': 40, 'right': 0, 'bottom': 0, 'height': 'auto' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('static_Mobile_Entry_Total_Mobile_Service_Line_Chart'));
  chart.draw(data, options);
}


/* ==========================================================================
   Author's custom js
   ========================================================================== */

//*********  Static Mobile Entry Associated Mobile Service Per Component Stacked Column Chart CONFIG*********

google.load("visualization", "1", {packages: ["corechart"]});
google.setOnLoadCallback(drawStaticMobileEntryAssociatedMobileServicePerComponentStackedColumnChart);
function drawStaticMobileEntryAssociatedMobileServicePerComponentStackedColumnChart() {
  var data = google.visualization.arrayToDataTable([
        ['Periodo', 'Voz', 'SMS/MMS', 'Internet'],
        ['I Trim 2011', {v:73, f:'73%'}, {v:17, f:'17%'}, {v:10, f:'10%'}],
        ['II Trim 2011', {v:73, f:'73%'}, {v:17, f:'17%'}, {v:10, f:'10%'}],
        ['III Trim 2011', {v:76, f:'76%'}, {v:16, f:'16%'}, {v:8, f:'8%'}],
        ['IV Trim 2011', {v:75, f:'75%'}, {v:15, f:'15%'}, {v:10, f:'10%'}],
        ['I Trim 2012', {v:74, f:'74%'}, {v:13, f:'13%'}, {v:13, f:'13%'}],
        ['II Trim 2012', {v:73, f:'73%'}, {v:12, f:'12%'}, {v:15, f:'15%'}],
        ['III Trim 2012', {v:74, f:'74%'}, {v:12, f:'12%'}, {v:14, f:'14%'}],
        ['IV Trim 2012', {v:77, f:'77%'}, {v:12, f:'12%'}, {v:11, f:'11%'}],
        ['I Trim 2013', {v:69, f:'69%'}, {v:10, f:'10%'}, {v:21, f:'21%'}],
        ['II Trim 2013', {v:68, f:'68%'}, {v:9, f:'9%'}, {v:23, f:'23%'}],
        ['III Trim 2013', {v:64, f:'64%'}, {v:10, f:'10%'}, {v:26, f:'26%'}],
        ['IV Trim 2013', {v:64, f:'64%'}, {v:10, f:'10%'}, {v:26, f:'26%'}]
      ]);

      var options = {
        legend: { position: "bottom" },
        width: dynamicWidth,
        height: dynamicHeight,
        bar: { groupWidth: '75%' },
        vAxis: {title: "Porcentaje"},
        colors: ['#8b509c','#70b835','#1d76c1'],
        isStacked: true,
        chartArea: { 'left': leftSideMobile, 'top': topSideMobile, 'right': 0, 'bottom': 0, 'height': 'auto' }
      };
  var chart = new google.visualization.ColumnChart(document.getElementById('static_Mobile_Entry_Associated_Mobile_Service_per_Component_Stacked_Column_Chart'));
  chart.draw(data, options);
}


/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static Mobile Entry Payment Method Line Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawStaticMobileEntryPaymentMethodLineChart);
function drawStaticMobileEntryPaymentMethodLineChart() {
  var data = google.visualization.arrayToDataTable([
    ['Periodo', 'Prepago', 'Postpago'],
    ['I Trim 2011',  {v:26466, f:'26.466'}, {v:35202, f:'35.202'}],
    ['II Trim 2011', {v:31182, f:'31.182'}, {v:33982, f:'33.982'}],
    ['III Trim 2011', {v:34912, f:'34.912'}, {v:32191, f:'32.191'}],
    ['IV Trim 2011', {v:38392, f:'38.392'}, {v:31327, f:'31.327'}],
    ['I Trim 2012', {v:43625, f:'43.625'}, {v:32305, f:'32.305'}],
    ['II Trim 2012', {v:44607, f:'44.607'}, {v:32786, f:'32.786'}],
    ['III Trim 2012', {v:47238, f:'47.238'}, {v:32543, f:'32.543'}],
    ['IV Trim 2012', {v:47904, f:'47.904'}, {v:33495, f:'33.495'}],
    ['I Trim 2013', {v:47728, f:'47.728'}, {v:40975, f:'40.975'}],
    ['II Trim 2013', {v:49327, f:'49.327'}, {v:43159, f:'43.159'}],
    ['III Trim 2013', {v:54783, f:'54.783'}, {v:46174, f:'46.174'}],
    ['IV Trim 2013', {v:55288, f:'55.288'}, {v:49384, f:'49.384'}],
  ]);

  var langEspaBarChart1 = "";

  var options = {
    title: langEspaBarChart1,
    width: dynamicWidth,
    height: dynamicHeight,
    legend: { position: "bottom" },
    vAxis: {title: "Millones de Colones"},
    colors:['#70b835','#8b509c'],
    pointSize: 5,
    chartArea: { 'left': leftSideMobile, 'top': 40, 'right': 0, 'bottom': 0, 'height': 'auto' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('static_Mobile_Entry_Payment_Method_Line_Chart'));
  chart.draw(data, options);
}


/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static Mobile Entry Per Subscription Mobile Service Column Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawStaticMobileEntryPerSubscriptionMobileServiceColumnChart);
function drawStaticMobileEntryPerSubscriptionMobileServiceColumnChart() {
    var data = google.visualization.arrayToDataTable([
        ['Periodo', 'Colones'],
        ['2011', {v:6012, f:'6.012'}],
        ['2012', {v:5325, f:'5.325'}],
        ['2013', {v:3744, f:'3.744'}]
    ]);

    var langEspaBarChart1 = "";

    var options = {
        title: langEspaBarChart1,
        width: dynamicWidth,
        height: dynamicHeight,
        legend: { position: "bottom" },
        vAxis: {title: "Colones"},
        colors:['#8b509c'],
        chartArea: { 'left': leftSideMobile, 'top': 40, 'right': 0, 'bottom': 0, 'height': 'auto' }

    };

    var columnChart = new google.visualization.ColumnChart(document.getElementById('static_Mobile_Entry_per_Subscription_Mobile_Service_Column_Chart'));
    columnChart.draw(data, options); 
}


/* ==========================================================================
   Dynamic MOBILE
   ========================================================================== *

/* ==========================================================================
  Author's custom js
   ========================================================================== */

//********* Dynamic Landline Active Available Lines Combo Chart CONFIG *********

google.load('visualization', '1', {packages: ['controls']});
google.setOnLoadCallback(drawDynamicLandlineActiveAvailableLinesComboChart);

function drawDynamicLandlineActiveAvailableLinesComboChart () {

    var data = google.visualization.arrayToDataTable([
        ['Periodo', 'Prepago', 'Postpago', 'Total'],
        ['2010 IV Trim',  {v:1518914, f:'1.518.914'}, {v:1609458, f:'1.609.458'}, {v:3128372, f:'3.128.372'}],
        ['2011 I Trim',  {v:1676271, f:'1.676.271'}, {v:1597757, f:'1.597.757'}, {v:3274028, f:'3.274.028'}],
        ['2011 II Trim', {v:1934401, f:'1.934.401'}, {v:1571178, f:'1.571.178'}, {v:3505579, f:'3.505.579'}],
        ['2011 III Trim',  {v:2123191, f:'2.123.191'}, {v:1561367, f:'1.561.367'}, {v:3684558, f:'3.684.558'}],
        ['2011 IV Trim',  {v:2890378, f:'2.890.378'}, {v:1262689, f:'1.262.689'}, {v:4153067, f:'4.153.067'}],
        ['2012 I Trim',  {v:3327675, f:'3.327.675'}, {v:1222583, f:'1.222.583'}, {v:4550258, f:'4.550.258'}],
        ['2012 II Trim',  {v:3563225, f:'3.563.225'}, {v:1146930, f:'1.146.930'}, {v:4710155, f:'4.710.155'}],
        ['2012 III Trim',  {v:3918197, f:'3.918.197'}, {v:1131617, f:'1.131.617'}, {v:5049814, f:'5.049.814'}],
        ['2012 IV Trim',  {v:4240967, f:'4.240.967'}, {v:1137115, f:'1.137.115'}, {v:5378082, f:'5.378.082'}],
        ['2013 I Trim',  {v:4583743, f:'4.583.743'}, {v:1155590, f:'1.155.590'}, {v:5739333, f:'5.739.333'}],
        ['2013 II Trim',  {v:4859472, f:'4.859.472'}, {v:1144050, f:'1.144.050'}, {v:6003522, f:'6.003.522'}],
        ['2013 III Trim',  {v:5426779, f:'5.426.779'}, {v:1167522, f:'1.167.522'}, {v:6594301, f:'6.594.301'}],
        ['2013 IV Trim',  {v:5884388, f:'5.884.388'}, {v:1227593, f:'1.227.593'}, {v:7111981, f:'7.111.981'}]
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
    // you can set individual columns to be the default columns (instead of populating via the loop above) like this:
    // initState.selectedValues.push(data.getColumnLabel(4));
    
    var chart = new google.visualization.ChartWrapper({
        chartType: 'ComboChart',
        containerId: 'dynamic_Mobile_Active_Subscriptions_Mobile_Services_Combo_Chart',
        dataTable: data,
        options: {
            title: '',
            legend: { position: "bottom" },
            width: dynamicWidth,
            height: dynamicHeight,
            seriesType: "bars",
            
            hAxis: {title: ""},
            vAxes: {
                0: {logScale: false, title: "Cantidad de suscripciones"}
            },
            series:{
               0:{color:'#8b509c'},
               1:{color:'#70b835'},
               2:{color:'#1d76c1',type: "line", pointSize: 5}
               //2:{targetAxisIndex:1},
            },
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
        document.getElementById('dynamic_Mobile_Active_Subscriptions_Mobile_Services_Combo_Chart'));

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

//*********  Dynamic Mobile Traffic Mobile Voice Combo Chart CONFIG *********

google.load('visualization', '1', {packages: ['controls']});
google.setOnLoadCallback(drawDynamicMobileTrafficMobileVoiceComboChart);

function drawDynamicMobileTrafficMobileVoiceComboChart () {

    var data = google.visualization.arrayToDataTable([
        ['Periodo', 'Prepago', 'Postpago', 'Total'],
        ['2011 I Trim',  {v:658, f:'658'}, {v:875, f:'875'}, {v:1532, f:'1.532'}],
        ['2011 II Trim', {v:773, f:'773'}, {v:783, f:'783'}, {v:1556, f:'1.556'}],
        ['2011 III Trim', {v:951, f:'951'}, {v:776, f:'776'}, {v:1727, f:'1.727'}],
        ['2011 IV Trim',  {v:1142, f:'1.142'}, {v:749, f:'749'}, {v:1892, f:'1.892'}],
        ['2012 I Trim', {v:1267, f:'1.267'}, {v:688, f:'688'}, {v:1956, f:'1.956'}],
        ['2012 II Trim', {v:1252, f:'1.252'}, {v:666, f:'666'}, {v:1918, f:'1.918'}],
        ['2012 III Trim', {v:1303, f:'1.303'}, {v:716, f:'716'}, {v:2019, f:'2.019'}],
        ['2012 IV Trim', {v:1407, f:'1.407'}, {v:645, f:'645'}, {v:2053, f:'2.053'}],
        ['2013 I Trim', {v:1426, f:'1.426'}, {v:701, f:'701'}, {v:2127, f:'2.127'}],
        ['2013 II Trim', {v:1482, f:'1.482'}, {v:697, f:'697'}, {v:2178, f:'2.178'}],
        ['2013 III Trim', {v:1489, f:'1.489'}, {v:699, f:'699'}, {v:2187, f:'2.187'}],
        ['2013 IV Trim', {v:1570, f:'1.570'}, {v:735, f:'735'}, {v:2306, f:'2.306'}]
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
    // you can set individual columns to be the default columns (instead of populating via the loop above) like this:
    // initState.selectedValues.push(data.getColumnLabel(4));
    
    var chart = new google.visualization.ChartWrapper({
        chartType: 'ComboChart',
        containerId: 'dynamic_Mobile_Traffic_Mobile_Voice_Combo_Chart',
        dataTable: data,
        options: {
            title: '',
            legend: { position: "bottom" },
            width: dynamicWidth,
            height: dynamicHeight,
            seriesType: "bars",
            
            hAxis: {title: ""},
            vAxes: {
                0: {logScale: false, title: "Millones de minutos"}
            },
            series:{
               0:{color:'#8b509c'},
               1:{color:'#70b835'},
               2:{color:'#1d76c1',type: "line", pointSize: 5}
               //2:{targetAxisIndex:1},
            },
            chartArea: { 'left': leftSideMobile, 'top': topSideMobile, 'right': 0, 'bottom': 0, 'height': 'auto' }
        }
    });

    var columnFilter = new google.visualization.ControlWrapper({
        controlType: 'CategoryFilter',
        containerId: 'colFilter_div_2',
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
        containerId: 'categoryFilterContainer_2',
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
        document.getElementById('dynamic_Mobile_Traffic_Mobile_Voice_Combo_Chart'));

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