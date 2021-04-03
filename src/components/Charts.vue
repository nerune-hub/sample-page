<template>
  <div class="home-chart">
    <div class="pie-chart">
      {{piechart}}
    </div>
  </div>

</template>

<script>
var pieData = {
  labels: ['Vue.js', 'Node.js', 'Three.js'],
  series: [30, 15, 2]
};

var pieOptions = {
  width: '100%',
  height: '440px'
};

export default {
  data () {
    return {
      piechart: Chartist.Pie('.pie-chart', pieData, pieOptions)
    }
  }
};
</script>

<style scoped>
.ct-label {
  font-size: 1rem;
  fill: #fff;
}

.ct-series-a .ct-slice-pie {
  fill: #2d3374;
}
.ct-series-b .ct-slice-pie {
  fill : #3a7edf;
}
.ct-series-c .ct-slice-pi {
  fill: #9bcbf8;
}
</style>
