import { Bar } from 'vue-chartjs'
 
export default {
  extends: Bar,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['Healthy', 'Fair', 'Poor', 'Scrap'],
      datasets: [
        {
          label: 'Equipment State',
          backgroundColor: '#f87979',
          data: [20, 40, 14, 12]
        }
      ]
    })
  }
}