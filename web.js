$(document).ready(function()
{
  $(window).scroll(function()
  {
    if(this.scrollY>20) $('.Title').addClass("show");
    else $('.Title').removeClass("show");
  })

  const Labels = ['12AM','1AM','2AM','3AM','4AM','5AM','6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM','9PM','10PM','11PM']
  var Datas = []
  // for(i=0; i<24; i++) Datas[i] = 0;
  
  var ctx = document.getElementById('myChart');
  var myChart = new Chart(ctx, {
    type       : 'line',
    data: {
      labels: Labels,
      datasets: [{
        label           : '用電量(kW)',
        data            : Datas,
        backgroundColor : 'rgba(111, 163, 204, 0.5)',
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

  var Timer = setInterval(function(){updateData(myChart,Math.floor(Math.random() * 100))},1000)

  function updateData(chart,data) {
      Datas.push(data)
      chart.update();
  }

})

