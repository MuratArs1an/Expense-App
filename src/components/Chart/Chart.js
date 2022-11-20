import './Chart.css'
import ChartBar from './ChartBar.js'

function Chart(props) {
    const dataValues=props.dataPoints.map(dataPoint=>dataPoint.value)
    const totalMax=Math.max(...dataValues);

    return (
    <div className='chart'>
        {props.dataPoints.map((dataPoint)=> (
        <ChartBar
        key={dataPoint.label}
        value={dataPoint.value} 
        maxValue={totalMax} 
        label={dataPoint.label}  />
        ))}
    </div>
    )
}

export default Chart