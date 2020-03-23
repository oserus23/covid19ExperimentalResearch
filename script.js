function DisplayGraph() {
    var data = {
        labels: ["Jan 23", "Feb 01", "Feb 15", "Mar 01", "Mar 15"],
        datasets: [
            {
                label: "World Coronavirus Cases",
                fillColor: "red",
                borderColor: "purple",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [845, 14553, 69197, 88585, 169553]
            },
            /*
            {
                label: "Canada Coronavirus Cases",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [0, 0, 8, 24, 341]
            }
            */
        ]
    };

    //Colors for Donut Graphs!
    var colors = ["red", "greenyellow"];

    // donut 1
    var chDonutData1 = {
        labels: ['Active Cases', 'Closed Cases'],
        datasets: [{
            backgroundColor: colors.slice(0, 2),
            borderWidth: 0,
            data: [223111, 112199]
        }]
    };

    //Donut 2 (Active Cases)
    var chDonutData2 = {
        labels: ['Critical', 'Mild'],
        datasets: [
            {
                backgroundColor: colors.slice(0, 2),
                borderWidth: 0,
                data: [10620, 212491]
            }
        ]
    };

    //Donut 3 (Closed Cases)
    var chDonutData3 = {
        labels: ['Death', 'Recovered'],
        datasets: [
            {
                backgroundColor: colors.slice(0, 2),
                borderWidth: 0,
                data: [14611, 112199]
            }
        ]
    };

    //Chart Options
    var chartOptions = {
        legend: {
            display: false
        },
        title: {
            display: true,
            position: 'top',
            text: 'Coronavirus Timeline',
            textAlign: 'left',
            padding: 3,
            fontColor: "rgb(130, 130, 133)",
            fontSize: 25,
            fontFamily: 'Times New Roman'
        }
    };

    // Donut-1 Charts Options!
    var donutOptions1 = {
        cutoutPercentage: 85,
        legend: { display: true, position: 'bottom', padding: 2, labels: { pointStyle: 'circle', usePointStyle: false } },
        title: {
            display: true,
            position: 'left',
            text: 'Active Cases',
            textAlign: 'left',
            padding: 10,
            fontColor: "rgb(130, 130, 133)",
            fontSize: 18,
            fontFamily: 'Times New Roman'
        }
    };

    // Donut-2 Charts Options!
    var donutOptions2 = {
        cutoutPercentage: 85,
        legend: { display: true, position: 'bottom', padding: 2, labels: { pointStyle: 'circle', usePointStyle: false } },
        title: {
            display: true,
            position: 'left',
            text: 'Critical Cases',
            textAlign: 'left',
            padding: 10,
            fontColor: "rgb(130, 130, 133)",
            fontSize: 18,
            fontFamily: 'Times New Roman'
        }
    };

    // Donut-3 Charts Options!
    var donutOptions3 = {
        cutoutPercentage: 85,
        legend: { display: true, position: 'bottom', padding: 2, labels: { pointStyle: 'circle', usePointStyle: false } },
        title: {
            display: true,
            position: 'left',
            text: 'Deaths Recorded',
            padding: 10,
            fontColor: "rgb(130, 130, 133)",
            fontSize: 18,
            fontFamily: 'Times New Roman'
        }
    };

    // Get the context of the canvas element we want to select
    var ctx = document.getElementById("myChart").getContext('2d');
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: chartOptions
    });

    //Link Donut 1 Graph!
    var chDonut1 = document.getElementById("chDonut1");
    new Chart(chDonut1, {
        type: 'pie',
        data: chDonutData1,
        options: donutOptions1
    });

    //Link Donut 2 Graph!
    var chDonut2 = document.getElementById("chDonut2");
    new Chart(chDonut2, {
        type: 'pie',
        data: chDonutData2,
        options: donutOptions2
    });

    //Link Donut 3 Graph!
    var chDonut3 = document.getElementById("chDonut3");
    new Chart(chDonut3, {
        type: 'pie',
        data: chDonutData3,
        options: donutOptions3
    });
};
