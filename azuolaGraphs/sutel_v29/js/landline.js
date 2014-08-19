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
   STATIC LANDLINE
   ========================================================================== */

/* ==========================================================================
   Author's custom js
   ==========================================================================  */

//********* Static Landline Total Income Landline 2011 2013 Combo Chart CONFIG ********* 

google.load('visualization', '1', {packages: ['controls']});
google.setOnLoadCallback(drawStaticLandlineTotalIncomeLandline20112013ComboChart);

function drawStaticLandlineTotalIncomeLandline20112013ComboChart () {

    var data = google.visualization.arrayToDataTable([
        ['Periodo', 'Ingreso', 'Variación'],
        ['2011',  {v:46326, f:'46.326'},{v:0, f:'0%'}],
        ['2012',  {v:44538, f:'44.538'},{v:-4, f:'-4%'}],
        ['2013',   {v:43938, f:'43.938'},{v:-1, f:'-1%'}]
    ]);
  
    var options = {
            title: '',
            legend: { position: "bottom" },
            width: dynamicWidth,
            height: dynamicHeight,
            seriesType: "bars",
            hAxis: {title: ""},
            vAxes: {
                0: {logScale: false, title: "Colones"},
                1: {logScale: false, maxValue: 2, title: "Variación %"},
            },
            series:{
               0:{targetAxisIndex:0},
               1:{targetAxisIndex:1, type: "line"},
               //2:{targetAxisIndex:1},
            },
            colors: ['#e6903b','#216ba9'],
    };

    var chart = new google.visualization.ComboChart(document.getElementById('static_Landline_Total_Income_Landline_2011_2013_Combo_Chart'));
    chart.draw(data, options);
}

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* STATIC LANDLINE VoIP SUBSCRIPTIONS 2013 PIE CHART CONFIG ********* 

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawStaticLandlineVoIPSubscriptions2013PieChart);
function drawStaticLandlineVoIPSubscriptions2013PieChart() {
    var data = google.visualization.arrayToDataTable([
        ['Operador', 'Porcentaje'],
        ['Tigo', 66], ['Telecable', 15], ['CallMyWay', 11], ['Cabletica', 4], ['Otros', 4] 
    ]);
    var langEspaPieChart1 = "";
    var options = {
        title: langEspaPieChart1,
        legend: { position: "bottom" },
        pieSliceText: 'percentage',
        width: dynamicWidth,
        height: dynamicHeightPieChart,
        slices: {  
            0: {color: '#f8a854'},
            1: {color: '#ed4f75'},
            2: {color: '#288ac8'},
            3: {color: '#7dc055'},
            4: {color: '#0d706c'},
         },
        chartArea: { 'left': leftSideMobilePieChart, 'top': 0, 'right': 0, 'bottom': 0, 'height': 'auto' }

    };
    var chart = new google.visualization.PieChart(document.getElementById('static_Landline_VoIP_Subscriptions_2013_Pie_Chart'));
    chart.draw(data, options);
}

//********* STATIC LANDLINE Total Income Combo Chart CONFIG *********

google.load('visualization', '1', {packages: ['controls']});
google.setOnLoadCallback(drawStaticLandlineTotalIncomeComboChart);

function drawStaticLandlineTotalIncomeComboChart () {

    var data = google.visualization.arrayToDataTable([
        ['Periodo', 'Ingreso', 'Variación'],
        ['2011',  {v:46095, f:'46.095'},{v:0, f:'0%'}],
        ['2012',  {v:43000, f:'43.000'},{v:-7, f:'-7%'}],
        ['2013',   {v:41445, f:'41.445'},{v:-4, f:'-4%'}]
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
               //2:{targetAxisIndex:1},
            },
            colors: ['#e6903b','#216ba9'],
    };

    var chart = new google.visualization.ComboChart(document.getElementById('static_Landline_Total_Income_Combo_Chart'));
    chart.draw(data, options);
}

/* ==========================================================================
   DYNAMIC LANDLINE
   ========================================================================== */

/* ==========================================================================
   #1 Lanline HTML
   ========================================================================== */

//********* Dynamic Landline Active Available Lines Combo Chart CONFIG *********

google.load('visualization', '1', {packages: ['controls']});
google.setOnLoadCallback(drawDynamicLandlineActiveAvailableLinesComboChart);

function drawDynamicLandlineActiveAvailableLinesComboChart () {

    var data = google.visualization.arrayToDataTable([
        ['Periodo', 'Cantidad líneas activas', 'Cantidad líneas disponibles', 'Porcentaje líneas activas'],
        ['2010 IV Trim',  {v:1060361, f:'1.060.361'}, {v:1489362, f:'1.489.362'}, {v:71, f:'71%'}],
        ['2011 I Trim',  {v:1045563, f:'1.045.563'}, {v:1491019, f:'1.491.019'}, {v:70, f:'70%'}],
        ['2011 II Trim', {v:1037978, f:'1.037.978'}, {v:1492056, f:'1.492.056'}, {v:70, f:'70%'}],
        ['2011 III Trim',  {v:1029250, f:'1.029.250'}, {v:1490592, f:'1.490.592'}, {v:69, f:'69%'}],
        ['2011 IV Trim',  {v:1027847, f:'1.027.847'}, {v:1490784, f:'1.490.784'}, {v:69, f:'69%'}],
        ['2012 I Trim',  {v:1012193, f:'1.012.193'}, {v:1486435, f:'1.486.435'}, {v:68, f:'68%'}],
        ['2012 II Trim',  {v:1005489, f:'1.005.489'}, {v:1496102, f:'1.496.102'}, {v:67, f:'67%'}],
        ['2012 III Trim',  {v:984782, f:'984.782'}, {v:1491617, f:'1.491.617'}, {v:66, f:'66%'}],
        ['2012 IV Trim',  {v:976824, f:'976.824'}, {v:1491869, f:'1.491.869'}, {v:65, f:'65%'}],
        ['2013 I Trim',  {v:966476, f:'966.476'}, {v:1492220, f:'1.492.220'}, {v:65, f:'65%'}],
        ['2013 II Trim',  {v:950494, f:'950.494'}, {v:1491670, f:'1.491.670'}, {v:64, f:'64%'}],
        ['2013 III Trim',  {v:940820, f:'940.820'}, {v:1484117, f:'1.484.117'}, {v:63, f:'63%'}],
        ['2013 IV Trim',  {v:936035, f:'936.035'}, {v:1490790, f:'1.490.790'}, {v:63, f:'63%'}]
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
        containerId: 'dynamic_Landline_Active_Available_Lines_Combo_Chart',
        dataTable: data,
        options: {
            title: '',
            legend: { position: "bottom" },
            width: dynamicWidth,
            height: dynamicHeight,
            seriesType: "bars",
            
            hAxis: {title: ""},
            vAxes: {
                0: {logScale: false, title: "Líneas telefónicas básicas tradicionales"},
                1: {logScale: false, maxValue: 2, title: "Porcentaje %"},
            },
            series:{
               0:{targetAxisIndex:0, color:'#e6903b'},
               1:{color:'#216ba9'},
               2: {targetAxisIndex:1, color:'#68ae38',type: "line"}
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
        document.getElementById('dynamic_Landline_Active_Available_Lines_Combo_Chart'));

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
   #2 Lanline HTML
   ========================================================================== */

//********* Dynamic Landline Traffic Combo Chart CONFIG *********

google.load('visualization', '1', {packages: ['controls']});
google.setOnLoadCallback(drawDynamicLandlineTrafficComboChart);

function drawDynamicLandlineTrafficComboChart () {

    var data = google.visualization.arrayToDataTable([
        ['Periodo', 'Tráfico', 'Variación'],
        ['2011',  {v:5441310, f:'5.441.310'},{v:-24, f:'-24%'}],
        ['2012',  {v:4907979, f:'4.907.979'},{v:-10, f:'-10%'}],
        ['2013',   {v:4144684, f:'4.144.684'},{v:-16, f:'-16%'}]
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
        containerId: 'dynamic_Landline_Traffic_Combo_Chart',
        dataTable: data,
        options: {
            title: '',
            legend: { position: "bottom" },
            width: dynamicWidth,
            height: dynamicHeight,
            seriesType: "bars",
            //series: {1: {type: "line"}},
            hAxis: {title: ""},
            vAxes: {
                0: {logScale: false, title: "Miles de minutos"},
                1: {logScale: false, maxValue: 2, title: "Variación %"},
            },
            series:{
               0:{targetAxisIndex:0},
               1:{targetAxisIndex:1, type: "line"},
               //2:{targetAxisIndex:1},
            },
            colors: ['#e6903b','#216ba9'],
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
                sortValues: 'true',
                selectedValuesLayout: 'belowStacked',
                labelStacking: 'vertical',
                allowTyping: false,
                allowMultiple: true
            }
        },
    });

    var dashboard = new google.visualization.Dashboard(
        document.getElementById('dynamic_Landline_Traffic_Combo_Chart'));

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
   #3 Lanline HTML
   ========================================================================== */

//********* Dynamic LandLine VoIP Line Chart CONFIG *********

google.load('visualization', '1', {packages: ['controls']});
google.setOnLoadCallback(drawDynamicLandlineVoIPLineChart);

function drawDynamicLandlineVoIPLineChart () {

    var data = google.visualization.arrayToDataTable([
        ['Periodo', 'Telefonía básica tradicional', 'VoIP'],
        ['2010 IV Trim',  {v:1060361, f:'1.060.361'}, {v:105, f:'105'}],
        ['2011 I Trim',  {v:1045563, f:'1.045.563'}, {v:446, f:'446'}],
        ['2011 II Trim', {v:1037978, f:'1.037.978'}, {v:706, f:'706'}],
        ['2011 III Trim',  {v:1029250, f:'1.029.250'}, {v:992, f:'992'}],
        ['2011 IV Trim',  {v:1027847, f:'1.027.847'}, {v:992, f:'992'}],
        ['2012 I Trim',  {v:1012193, f:'1.012.193'}, {v:9535, f:'9.535'}],
        ['2012 II Trim',  {v:1005489, f:'1.005.489'}, {v:10599, f:'10.599'}],
        ['2012 III Trim',  {v:984782, f:'984.782'}, {v:12843, f:'12.843'}],
        ['2012 IV Trim',  {v:976824, f:'976.824'}, {v:18265, f:'18.265'}],
        ['2013 I Trim',  {v:966476, f:'966.476'}, {v:22863, f:'22.863'}],
        ['2013 II Trim',  {v:950494, f:'950.494'}, {v:26862, f:'26.862'}],
        ['2013 III Trim',  {v:940820, f:'940.820'}, {v:30253, f:'30.253'}],
        ['2013 IV Trim',  {v:936035, f:'936.035'}, {v:32424, f:'32.424'}]
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
    containerId: 'colFilter_div_3',
    dataTable: linesTable,
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

    var categoryPicker = new google.visualization.ControlWrapper({
        controlType: 'CategoryFilter',
        containerId: 'categoryFilterContainer_3',
        options: {
            filterColumnIndex: 0,
            ui: {
                label: 'Filtre los datos por:',
                cssClass: 'categoryFilter',
                caption: 'Periodo',
                sortValues: 'true',
                selectedValuesLayout: 'belowStacked',
                labelStacking: 'vertical',
                allowTyping: false,
                allowMultiple: true,
            }
        },

    });

    // Define a line chart
    var lineChart = new google.visualization.ChartWrapper({
        chartType: 'LineChart',
        containerId: 'dynamic_Landline_VoIP_Line_Chart',
        options: {
            height: dynamicHeight,
            curveType: 'allowNone',
            width: dynamicWidth,
            hAxis: {title: ""},
            vAxes: {
                0: {logScale: false, title: "Básica Tradicional"},
                1: {logScale: false, maxValue: 2, title: "VoIP"},
            },
            series:{
               0:{targetAxisIndex:0},
               1:{targetAxisIndex:1},
               //2:{targetAxisIndex:1},
            },
            title: "",
            legend: 'bottom',
            animation: { 'duration': 1000, 'easing': 'out' },
            colors: ['#e6903b', '#216ba9'],
            chartArea: { 'left': leftSideMobile, 'top': topSideMobile, 'right': 0, 'bottom': 0, 'height': 'auto' }

        }
    });

    var dashboard = new google.visualization.Dashboard(
    document.getElementById('dynamic_Landline_VoIP_Line_Chart'));

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
    setChartView();
    lineFilter.draw();
    dashboard.bind(categoryPicker, lineChart).draw(data);

    }

/* ==========================================================================
   #4 Lanline HTML
========================================================================== */

//********* Dynamic Landline Traffic VoIP 2012 2013 Combo Chart CONFIG *********

google.setOnLoadCallback(drawDynamicLandlineIncomeVoIP20112013ComboChart);

function drawDynamicLandlineIncomeVoIP20112013ComboChart () {

    var data = google.visualization.arrayToDataTable([
        ['Periodo', 'Ingreso', 'Variación'],
        ['2011',  {v:230740772, f:'230.740.772'},{v:0, f:'0%'}],
        ['2012',  {v:1538903038, f:'1.538.903.038'},{v:567, f:'567%'}],
        ['2013',   {v:2492988516, f:'2.492.988.516'},{v:62, f:'62%'}]
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
        containerId: 'dynamic_Landline_Income_VoIP_2011_2013_Combo_Chart',
        dataTable: data,
        options: {
            title: '',
            legend: { position: "bottom" },
            width: dynamicWidth,
            height: dynamicHeight,
            seriesType: "bars",
            series: {1: {type: "line"}},
            hAxis: {title: ""},
            vAxes: {
                0: {logScale: false, title: "Colones"},
                1: {logScale: false, maxValue: 2, title: "Variación %"},
            },
            series:{
               0:{targetAxisIndex:0},
               1:{targetAxisIndex:1, type: "line"},
               //2:{targetAxisIndex:1},
            },
            colors: ['#e6903b','#216ba9'],
            chartArea: { 'left': leftSideMobile, 'top': topSideMobile, 'right': 0, 'bottom': 0, 'height': 'auto' }
        }
    });

    var columnFilter = new google.visualization.ControlWrapper({
        controlType: 'CategoryFilter',
        containerId: 'colFilter_div_4',
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
        containerId: 'categoryFilterContainer_4',
        options: {
            filterColumnIndex: 0,
            ui: {
                label: 'Filtre los datos por:',
                cssClass: 'categoryFilter',
                caption: 'Período',
                sortValues: 'true',
                selectedValuesLayout: 'belowStacked',
                labelStacking: 'vertical',
                allowTyping: false,
                allowMultiple: true
            }
        },
    });

    var dashboard = new google.visualization.Dashboard(
        document.getElementById('dynamic_Landline_Income_VoIP_2011_2013_Combo_Chart'));

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
   #5 Lanline HTML
========================================================================== */

google.setOnLoadCallback(drawDynamicLandlineTrafficVoIP20102013ComboChart);

function drawDynamicLandlineTrafficVoIP20102013ComboChart () {

    var data = google.visualization.arrayToDataTable([
        ['Periodo', 'Tráfico', 'Variación'],
        ['2011',  {v:6000, f:'6.000'},{v:-15, f:'-15%'}],
        ['2012',  {v:39000, f:'39.000'},{v:595, f:'595%'}],
        ['2013',   {v:83000, f:'83.000'},{v:117, f:'117%'}]
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
        containerId: 'dynamic_Landline_Traffic_VoIP_2010_2013_Combo_Chart',
        dataTable: data,
        options: {
            title: '',
            legend: { position: "bottom" },
            width: dynamicWidth,
            height: dynamicHeight,
            seriesType: "bars",
            series: {1: {type: "line"}},
            hAxis: {title: ""},
            vAxes: {
                0: {logScale: false, title: "Miles de minutos"},
                1: {logScale: false, maxValue: 2, title: "Variación %"},
            },
            series:{
               0:{targetAxisIndex:0},
               1:{targetAxisIndex:1, type: "line"},
               //2:{targetAxisIndex:1},
            },
            colors: ['#e6903b','#216ba9'],
            chartArea: { 'left': leftSideMobile, 'top': topSideMobile, 'right': 0, 'bottom': 0, 'height': 'auto' }
        }
    });

    var columnFilter = new google.visualization.ControlWrapper({
        controlType: 'CategoryFilter',
        containerId: 'colFilter_div_5',
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
        containerId: 'categoryFilterContainer_5',
        options: {
            filterColumnIndex: 0,
            ui: {
                label: 'Filtre los datos por:',
                cssClass: 'categoryFilter',
                caption: 'Período',
                sortValues: 'true',
                selectedValuesLayout: 'belowStacked',
                labelStacking: 'vertical',
                allowTyping: false,
                allowMultiple: true
            }
        },
    });

    var dashboard = new google.visualization.Dashboard(
        document.getElementById('dynamic_Landline_Traffic_VoIP_2010_2013_Combo_Chart'));

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



