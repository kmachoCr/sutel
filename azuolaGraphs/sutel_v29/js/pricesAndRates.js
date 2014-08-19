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
   Dynamic Charts
   ========================================================================== */
/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Dynamic Prices And Rates Asimetric Internet Rates Column Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawDynamicPricesAndRatesAsimetricInternetRatesComboChart);

function drawDynamicPricesAndRatesAsimetricInternetRatesComboChart () {

    var data = google.visualization.arrayToDataTable([
        ['Velocidad', 'Tarifa máxima de 2009', 'Tarifa promedio 2013', 'Variación %'],
        ['256/128',  {v:9624, f:'9.624'},{v:4904, f:'4.904'}, {v:-49, f:'-49%'}],
        ['512/256',  {v:12663, f:'12.663'},{v:8088, f:'8.088'}, {v:-36, f:'-36%'}],
        ['1024/512',  {v:19248, f:'19.248'},{v:10343, f:'10.343'}, {v:-46, f:'-46%'}],
        ['2048/768',   {v:31405, f:'31.405'},{v:15138, f:'15.138'}, {v:-52, f:'-52%'}],
        ['3072/768',   {v:46095, f:'46.095'},{v:20209, f:'20.209'}, {v:-56, f:'-56%'}],
        ['4096/768',   {v:85605, f:'85.605'},{v:35672, f:'35.672'}, {v:-58, f:'-58%'}]
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
        containerId: 'dynamic_Prices_And_Rates_Asimetric_Internet_Rates_Column_Chart',
        dataTable: data,
        options: {
            title: '',
            legend: { position: "bottom" },
            width: dynamicWidth,
            height: dynamicHeight,
            seriesType: "bars",
            hAxis: {title: "Velocidad (Kbps)"},
            series:{
               0:{targetAxisIndex:0},
               2:{targetAxisIndex:1, type: "line"},
            },
            hAxes: {
                0: {logScale: false},
            },
            vAxes: {
                0: {logScale: false, title: "Colones"},
            },
            colors: ['#25aaae','#4855a4','#aacca4'],
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
                caption: 'Velocidad',
                sortValues: 'true',
                selectedValuesLayout: 'belowStacked',
                labelStacking: 'vertical',
                allowTyping: false,
                allowMultiple: true
            }
        },
    });

    var dashboard = new google.visualization.Dashboard(
        document.getElementById('dynamic_Prices_And_Rates_Asimetric_Internet_Rates_Column_Chart'));

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
   Static Charts
   ========================================================================== */

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static Prices And Rates Internet Services For Big Companies Column Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawStaticPricesAndRatesInternetServicesForBigCompaniesColumnChart);
function drawStaticPricesAndRatesInternetServicesForBigCompaniesColumnChart() {
  var data = google.visualization.arrayToDataTable([
    ['Velocidad (Kbps)', 'Velocidad (Kbps)'],
    ['1536/512',  {v:12575, f:'12.575'}],
    ['2048/768',  {v:10000, f:'10.000'}],
    ['3072/768',  {v:16822, f:'16.822'}],
    ['4096/1024', {v:22500, f:'22.500'}],
    ['5120/1024', {v:29240, f:'29.240'}],
    ['7168/1024', {v:41865, f:'41.865'}],
    ['11264/1024', {v:51965, f:'51.965'}]
  ]);

  var langEspaBarChart1 = "";

  var options = {
    title: langEspaBarChart1,
    width: dynamicWidth,
    height: dynamicHeight,
    legend: { position: "bottom" },
    colors:['#25aaae'],
    chartArea: { 'left': leftSideMobile, 'top': 30, 'right': 0, 'bottom': 0, 'height': 'auto' },
    hAxis: { minValue: 0, maxValue: 9, },
    vAxes: {
        0: {logScale: false, title: "Colones"},
    },
    curveType: 'function',
    pointSize: 8,

  };

  var chart = new google.visualization.ColumnChart(document.getElementById('static_Prices_And_Rates_Internet_Services_For_Big_Companies_Column_Chart'));
  chart.draw(data, options);
}

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static Prices And Rates Internet Services Corporative Column Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawStaticPricesAndRatesInternetServicesCorporativeColumnChart);
function drawStaticPricesAndRatesInternetServicesCorporativeColumnChart() {
  var data = google.visualization.arrayToDataTable([
    ['Velocidad (Kbps)', 'Velocidad (Kbps)'],
    ['1536/512',  {v:12575, f:'12.575'}],
    ['3072/768',  {v:19645, f:'19.645'}],
    ['5120/1024', {v:29240, f:'29.240'}],
    ['7168/1024', {v:41865, f:'41.865'}],
    ['11264/1024', {v:51965, f:'51.965'}]
  ]);

  var langEspaBarChart1 = "";

  var options = {
    title: langEspaBarChart1,
    width: dynamicWidth,
    height: dynamicHeight,
    legend: { position: "bottom" },
    colors:['#25aaae'],
    chartArea: { 'left': leftSideMobile, 'top': 30, 'right': 0, 'bottom': 0, 'height': 'auto' },
    hAxis: { minValue: 0, maxValue: 9, },
    vAxes: {
        0: {logScale: false, title: "Colones"},
    },
    curveType: 'function',
    pointSize: 8,

  };

  var chart = new google.visualization.ColumnChart(document.getElementById('static_Prices_And_Rates_Internet_Services_Corporative_Column_Chart'));
  chart.draw(data, options);
}

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static Prices And Rates Internet Services For Companies Column Chart CONFIG *********

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawStaticPricesAndRatesInternetServicesForCompaniesColumnChart);
function drawStaticPricesAndRatesInternetServicesForCompaniesColumnChart() {
    var data = google.visualization.arrayToDataTable([
        ['Velocidades', 'Tarifa peq. y med. empresa', 'Grandes Empresas', 'Corporativo'],
        ['1/1',  {v:67500, f:'67.500'},{v:67500, f:'67.500'}, {v:187550, f:'187.550'}],
        ['2/2',  {v:109292, f:'109.292'}, {v:130265, f:'130.265'}, {v:197377, f:'197.377'}],
        ['3/3',  {v:148546, f:'148.546'}, {v:181470, f:'181.470'}, {v:308944, f:'308.944'}],
        ['4/4',  {v:185054, f:'185.054'}, {v:199620, f:'199.620'}, {v:295728, f:'295.728'}],
        ['5/5',  {v:214036, f:'214.036'}, {v:254559, f:'254.559'}, {v:406076, f:'406.076'}],
        ['6/6',  {v:250531, f:'250.531'}, {v:272435, f:'272.435'}, {v:425853, f:'425.853'}],
        ['7/7',  {v:289526, f:'289.526'}, {v:342713, f:'342.713'}, {v:649932, f:'649.932'}],
        ['8/8',  {v:334695, f:'334.695'}, {v:341981, f:'341.981'}, {v:490409, f:'490.409'}],
        ['9/9',  {v:360017, f:'360.017'}, {v:405605, f:'405.605'}, {v:631323, f:'631.323'}],
        ['10/10',  {v:401512, f:'401.512'}, {v:387179, f:'387.179'}, {v:662874, f:'662.874'}],
        ['15/15',  {v:596144, f:'596.144'}, {v:759806, f:'759.806'}, {v:1245620, f:'1.245.620'}],
        ['20/20',  {v:788024, f:'788.024'}, {v:1013075, f:'1.013.075'}, {v:1302117, f:'1.302.117'}]
    ]);

    var langEspaBarChart1 = "";

    var options = {
        title: langEspaBarChart1,
        width: dynamicWidth,
        height: dynamicHeight,
        hAxes: {
            0: {logScale: false, title: "Velocidad Mbps"},
        },
        legend: { position: "bottom" },
        vAxis: {title: "Colones"},
        colors:['#f49735', '#4855a4', '#25aaae'],
        chartArea: { 'left': leftSideMobile, 'top': 30, 'right': 0, 'bottom': 0, 'height': 'auto' }

    };

    var columnChart = new google.visualization.ColumnChart(document.getElementById('static_Prices_And_Rates_Internet_Services_For_Companies_Column_Chart'));
    columnChart.draw(data, options); 
}

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static Prices And Rates Rate Service Internet Asimetric Sector Residential 2013 Intervals Chart CONFIG *********

google.load('visualization', '1', {packages: ['corechart']});
google.setOnLoadCallback(drawStaticPricesAndRatesRateServiceInternetAsimetricSectorResidential2013IntervalsChart);
function drawStaticPricesAndRatesRateServiceInternetAsimetricSectorResidential2013IntervalsChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'x');
    data.addColumn('number', 'Tarifa');
    data.addColumn({id:'i0', type:'number', role:'interval'});
    data.addColumn({id:'i1', type:'number', role:'interval'});

    data.addRows([
        ['256/128', {v:4904, f:'4.904'}, {v:3531, f:'min: 3.531'}, {v:6277, f:'max: 6.277'}],
        ['512/256', {v:8808, f:'8.808'}, {v:4290, f:'min: 4.290'}, {v:17500, f:'max: 17.500'}],
        ['1024/512', {v:10343, f:'10.343'}, {v:6570, f:'min: 6.570'}, {v:22500, f:'max: 22.500'}],
        ['1536/512', {v:11780, f:'11.780'}, {v:8407, f:'min: 8.407'}, {v:17645, f:'max: 17.645'}],
        ['2048/768',  {v:15138, f:'15.138'}, {v:10000, f:'min: 10.000'}, {v:37500, f:'max: 37.500'}],
        ['3072/768', {v:17172, f:'17.172'}, {v:13496, f:'min: 13.496'}, {v:25225, f:'max: 25.225'}],
        ['4096/768', {v:28422, f:'28.422'}, {v:21049, f:'min: 21.049'}, {v:50475, f:'max: 50.475'}],
        ['5120/1024', {v:26275, f:'26.275'}, {v:26275, f:'min: 26.275'}, {v:26275, f:'max: 26.275'}],
        ['10240/1024', {v:45999, f:'45.999'}, {v:45999, f:'min: 45.999'}, {v:45999, f:'max: 45.999'}]]);

    var options_lines = {
        title: '',
        curveType:'function',
        lineWidth: 1,
        width: dynamicWidth,
        height: dynamicHeight,
        hAxes: {
            0: {logScale: false, title: "Velocidad (Kbps)"},
        },
        vAxes: {
            0: {logScale: false, title: "Colones"},
        },
        series:{
            0:{targetAxisIndex:0},
        },
        intervals: { style: 'bars', 'lineWidth': 2, 'barWidth': 0.5/*, 'color':'series-color'*/},
        interval: {
            'i0': { 'color': '#5c6caf'},
        },
        legend: { position: "bottom" },
        chartArea: { 'left': leftSideMobile, 'top': 30, 'right': 0, 'bottom': 0, 'height': 'auto' }
    };

    var chart_lines = new google.visualization.LineChart(document.getElementById('static_Prices_And_Rates_Rate_Service_Internet_Asimetric_Sector_Residential_2013_Intervals_Chart'));
    chart_lines.draw(data, options_lines);
}

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static Prices And Rates Rate Service Internet Simetric Sector Residential 2013 Intervals Chart CONFIG *********

google.load('visualization', '1', {packages: ['corechart']});
google.setOnLoadCallback(drawStaticPricesAndRatesRateServiceInternetSimetricSectorResidential2013IntervalsChart);
function drawStaticPricesAndRatesRateServiceInternetSimetricSectorResidential2013IntervalsChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'x');
    data.addColumn('number', 'Tarifa');
    data.addColumn({id:'i0', type:'number', role:'interval'});
    data.addColumn({id:'i1', type:'number', role:'interval'});

    data.addRows([
        ['512/512 Kbps', {v:29580, f:'29.580'}, {v:29580, f:'min: 29.580'}, {v:29580, f:'max: 29.580'}],
        ['1/1 Mbps', {v:53470, f:'53.470'}, {v:39440, f:'min: 39.440'}, {v:67500, f:'max: 67500'}],
        ['2/2 Mbps', {v:87645, f:'87645'}, {v:59160, f:'min: 59.160'}, {v:116130, f:'max: 116.130'}],
        ['4/4 Mbps', {v:151227, f:'151.227'}, {v:98600, f:'min: 98.600'}, {v:200082, f:'max: 200.082'}],
        ['6/6 Mbps',  {v:198775, f:'198.775'}, {v:172550, f:'min: 172.550'}, {v:225000, f:'max: 225.000'}],
        ['8/8 Mbps', {v:291298, f:'291.298'}, {v:221850, f:'min: 221.850'}, {v:352044, f:'max: 352.044'}],
        ['10/10 Mbps', {v:323075, f:'323.075'}, {v:271150, f:'min: 271.150'}, {v:375000, f:'max: 375.000'}]]);

    var options_lines = {
        title: '',
        curveType:'function',
        lineWidth: 1,
        width: dynamicWidth,
        height: dynamicHeight,
        hAxes: {
            0: {logScale: false, title: "Velocidad (Kbps)"},
        },
        vAxes: {
            0: {logScale: false, title: "Colones"},
        },
        series:{
            0:{targetAxisIndex:0},
        },
        intervals: { style: 'bars', 'lineWidth': 2, 'barWidth': 0.5/*, 'color':'series-color'*/},
        interval: {
            'i0': { 'color': '#5c6caf'},
        },
        legend: { position: "bottom" },
        chartArea: { 'left': leftSideMobile, 'top': 30, 'right': 0, 'bottom': 0, 'height': 'auto' }
    };

    var chart_lines = new google.visualization.LineChart(document.getElementById('static_Prices_And_Rates_Rate_Service_Internet_Simetric_Sector_Residential_2013_Intervals_Chart'));
    chart_lines.draw(data, options_lines);
}

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static Prices And Rates Rate Service Internet Asimetric Sector Corporative 2013 Intervals Chart CONFIG *********

google.load('visualization', '1', {packages: ['corechart']});
google.setOnLoadCallback(drawStaticPricesAndRatesRateServiceInternetAsimetricSectorCorporative2013IntervalsChart);
function drawStaticPricesAndRatesRateServiceInternetAsimetricSectorCorporative2013IntervalsChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'x');
    data.addColumn('number', 'Tarifa');
    data.addColumn({id:'i0', type:'number', role:'interval'});
    data.addColumn({id:'i1', type:'number', role:'interval'});

    data.addRows([
        ['512/256', {v:12765, f:'12.765'}, {v:8030, f:'min: 8.030'}, {v:17320, f:'max: 17.320'}],
        ['1024/512', {v:16022, f:'16.022'}, {v:9545, f:'min: 9.545'}, {v:22499, f:'max: 22.499'}],
        ['2048/768', {v:20209, f:'20.209'}, {v:6570, f:'min: 10.000'}, {v:30048, f:'max: 30.048'}],
        ['2048/1024', {v:25000, f:'25.000'}, {v:25000, f:'min: 25.000'}, {v:25000, f:'max: 25.000'}],
        ['3072/768', {v:14000, f:'14.000'}, {v:14000, f:'min: 14.000'}, {v:14000, f:'max: 14.000'}],
        ['3072/1024', {v:30392, f:'30.392'}, {v:30392, f:'min: 30.392'}, {v:30392, f:'max: 30.392'}],
        ['4096/768', {v:35672, f:'35.672'}, {v:24695, f:'min: 24.695'}, {v:57500, f:'max: 57.500'}],
        ['4096/1024', {v:36885, f:'36.885'}, {v:22500, f:'min: 22.500'}, {v:50654, f:'max: 50.654'}],
        ['6144/1024', {v:53887, f:'53.887'}, {v:33280, f:'min: 33.280'}, {v:68383, f:'max: 68.383'}],
        ['8192/1024', {v:70000, f:'70.000'}, {v:70000, f:'min: 70.000'}, {v:70000, f:'max: 70.000'}],
        ['10240/1024', {v:64972, f:'64.972'}, {v:49945, f:'min: 49.945'}, {v:80000, f:'max: 80.000'}]]);

    var options_lines = {
        title: '',
        curveType:'function',
        lineWidth: 1,
        width: dynamicWidth,
        height: dynamicHeight,
        hAxes: {
            0: {logScale: false, title: "Velocidad (Kbps)"},
        },
        vAxes: {
            0: {logScale: false, title: "Miles de colones"},
        },
        series:{
            0:{targetAxisIndex:0},
        },
        intervals: { style: 'bars', 'lineWidth': 2, 'barWidth': 0.5/*, 'color':'series-color'*/},
        interval: {
            'i0': { 'color': '#5c6caf'},
        },
        legend: { position: "bottom" },
        chartArea: { 'left': leftSideMobile, 'top': 30, 'right': 0, 'bottom': 0, 'height': 'auto' }
    };

    var chart_lines = new google.visualization.LineChart(document.getElementById('static_Prices_And_Rates_Rate_Service_Internet_Asimetric_Sector_Corporative_2013_Intervals_Chart'));
    chart_lines.draw(data, options_lines);
}

/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static Prices And Rates Rate Service Internet Mobile Postpaid Intervals Chart CONFIG *********

google.load('visualization', '1', {packages: ['corechart']});
google.setOnLoadCallback(drawStaticPricesAndRatesRateServiceInternetMobilePostpaidIntervalsChart);
function drawStaticPricesAndRatesRateServiceInternetMobilePostpaidIntervalsChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'x');
    data.addColumn('number', 'Tarifa');
    data.addColumn({id:'i0', type:'number', role:'interval'});
    data.addColumn({id:'i1', type:'number', role:'interval'});

    data.addRows([
        ['256', {v:2623, f:'2.623'}, {v:1250, f:'min: 1.250'}, {v:3995, f:'max: 3.995'}],
        ['512', {v:3500, f:'3.500'}, {v:2000, f:'min: 2.000'}, {v:6500, f:'max: 6.500'}],
        ['1024', {v:6000, f:'6.000'}, {v:4000, f:'min: 4.000'}, {v:10000, f:'max: 10.000'}],
        ['1536', {v:9500, f:'9.500'}, {v:7000, f:'min: 7.000'}, {v:12000, f:'max: 12.000'}],
        ['2048', {v:12000, f:'12.000'}, {v:12000, f:'12.000'}, {v:12000, f:'12.000'}],
        ['3072', {v:13000, f:'13.000'}, {v:13000, f:'13.000'}, {v:13000, f:'13.000'}],
        ['4096', {v:15000, f:'15.000'}, {v:15000, f:'15.000'}, {v:15000, f:'15.000'}],
        ['5120', {v:20500, f:'20.500'}, {v:17000, f:'min: 17.000'}, {v:24000, f:'max: 24.000'}]
       ]);

    var options_lines = {
        title: '',
        curveType:'function',
        lineWidth: 1,
        width: dynamicWidth,
        height: dynamicHeight,
        hAxes: {
            0: {logScale: false, title: "Velocidad máxima (Kbps)"},
        },
        vAxes: {
            0: {logScale: false, title: "Colones"},
        },
        series:{
            0:{targetAxisIndex:0},
        },
        intervals: { style: 'bars', 'lineWidth': 2, 'barWidth': 0.5/*, 'color':'series-color'*/},
        interval: {
            'i0': { 'color': '#5c6caf'},
        },
        legend: { position: "bottom" },
        chartArea: { 'left': leftSideMobile, 'top': 30, 'right': 0, 'bottom': 0, 'height': 'auto' }
    };

    var chart_lines = new google.visualization.LineChart(document.getElementById('static_Prices_And_Rates_Rate_Service_Internet_Mobile_Postpaid_Intervals_Chart'));
    chart_lines.draw(data, options_lines);
}
/* ==========================================================================
   Author's custom js
   ========================================================================== */

//********* Static Prices And Rates Rate Service Internet Simetric Sector Corporative 2013 Intervals Chart CONFIG *********
/*
google.load('visualization', '1', {packages: ['corechart']});
google.setOnLoadCallback(drawStaticPricesAndRatesRateServiceInternetSimetricSectorCorporative2013IntervalsChart);
function drawStaticPricesAndRatesRateServiceInternetSimetricSectorCorporative2013IntervalsChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'x');
    data.addColumn('number', 'Tarifa');
    data.addColumn({id:'i0', type:'number', role:'interval'});
    data.addColumn({id:'i1', type:'number', role:'interval'});

    data.addRows([
        ['512/256', {v:12765, f:'12.765'}, {v:8030, f:'min: 8.030'}, {v:17320, f:'max: 17.320'}],
        ['1024/512', {v:16022, f:'16.022'}, {v:9545, f:'min: 9.545'}, {v:22499, f:'max: 22.499'}],
        ['2048/768', {v:20209, f:'20.209'}, {v:6570, f:'min: 10.000'}, {v:30048, f:'max: 30.048'}],
        ['2048/1024', {v:25000, f:'25.000'}, {v:25000, f:'min: 25.000'}, {v:25000, f:'max: 25.000'}],
        ['3072/768', {v:14000, f:'14.000'}, {v:14000, f:'min: 14.000'}, {v:14000, f:'max: 14.000'}],
        ['3072/1024', {v:30392, f:'30.392'}, {v:30392, f:'min: 30.392'}, {v:30392, f:'max: 30.392'}],
        ['4096/768', {v:35672, f:'35.672'}, {v:24695, f:'min: 24.695'}, {v:57500, f:'max: 57.500'}],
        ['4096/1024', {v:36885, f:'36.885'}, {v:22500, f:'min: 22.500'}, {v:50654, f:'max: 50.654'}],
        ['6144/1024', {v:53887, f:'53.887'}, {v:33280, f:'min: 33.280'}, {v:68383, f:'max: 68.383'}],
        ['8192/1024', {v:70000, f:'70.000'}, {v:70000, f:'min: 70.000'}, {v:70000, f:'max: 70.000'}],
        ['10240/1024', {v:64972, f:'64.972'}, {v:49945, f:'min: 49.945'}, {v:80000, f:'max: 80.000'}]]);

    var options_lines = {
        title: '',
        curveType:'function',
        lineWidth: 1,
        width: dynamicWidth,
        height: dynamicHeight,
        hAxes: {
            0: {logScale: false, title: "Velocidad (Kbps)"},
        },
        vAxes: {
            0: {logScale: false, title: "Miles de colones"},
        },
        series:{
            0:{targetAxisIndex:0},
        },
        intervals: { style: 'bars', 'lineWidth': 2, 'barWidth': 0.5},
        interval: {
            'i0': { 'color': '#5c6caf'},
        },
        legend: { position: "bottom" }
    };

    var chart_lines = new google.visualization.LineChart(document.getElementById('static_Prices_And_Rates_Rate_Service_Internet_Simetric_Sector_Corporative_2013_Intervals_Chart'));
    chart_lines.draw(data, options_lines);
}
*/
