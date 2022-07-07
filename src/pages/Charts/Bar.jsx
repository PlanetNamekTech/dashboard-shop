import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from "@syncfusion/ej2-react-charts";

import { barPrimaryYAxis, barPrimaryXAxis, barCustomSeries } from '../../data/dummy';
import { useStateContext } from "../../contexts/ContextProvider";
import { ChartsHeader } from '../../components';

const Bar = () => {

    const { currentMode } = useStateContext();

    return (
        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Bar" title="Olympic Medal Counts - RIO" />
            <ChartComponent
                id="charts"
                // height="420px"
                primaryXAxis={barPrimaryXAxis}
                primaryYAxis={barPrimaryYAxis}
                chartArea={{ border: {width: 0}}}
                tooltip={{enable: true}}
                background={currentMode === 'Dark' ? '#33373E' : '#FFF'}
                legendSettings={{
                    visible: true,
                    background:'#FFF',
                    title: "Medals"
                }}
            >
                <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
                <SeriesCollectionDirective>
                    {barCustomSeries.map((item, index) => (
                        <SeriesDirective key={index}{...item}  />
                    ))}
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    );
}
export default Bar;