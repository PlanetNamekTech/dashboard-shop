import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, AccumulationTooltip, PieSeries, AccumulationDataLabel } from "@syncfusion/ej2-react-charts";

import { useStateContext } from "../../contexts/ContextProvider";
import { ChartsHeader } from '../../components';

const Doughnut = ({ id, data, height}) => {

  const { currentMode } = useStateContext();

  return (
      <AccumulationChartComponent
        id={id}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#FFF'}
        legendSettings={{
          visible: true,
          background: '#FFF',
          position:"Top",
        }}
        height={height}
      >
        <Inject services={[PieSeries, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip]} />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            name="Sale"
            dataSource={data}
            xName='x'
            yName='y'
            innerRadius='40%'
            startAngle={0}
            endAngle={360} 
            radius='70%' 
            explode={true} 
            explodeOffset='10%' 
            explodeIndex={3} 
            dataLabel={{
              visible: true,
              name: 'text',
              position: 'Inside',
              font: {
                fontWeight: '600',
                color: '#fff',
              },
            }}
            />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
  );
}
export default Doughnut;