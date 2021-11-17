var Labels = ['12AM','1AM','2AM','3AM','4AM','5AM','6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM','9PM','10PM','11PM']
var Datas  = [10, 20, 30, 55, 66, 77, 25, 80, 30, 22, 22, 30, 10, 50, 80, 100, 30, 10, 70, 20, 30, 20, 33, 55]
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
  type       : 'line',
  data: {
    labels: Labels,
    datasets: [{
      label           : '用電量(kW)',
      data            : Datas,
      backgroundColor : '#8BCCFF',
      borderColor     : '#6FA3CC',
      scales: 
      {
        yAxes: [{
            display: true,
            ticks: {
                suggestedMin: 0,
                suggestedMax: 100,    
                beginAtZero: true
            }
        }]
      }
    }]
  }
});