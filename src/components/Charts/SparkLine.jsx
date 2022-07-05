import { SparklineComponent, Inject, SparklineTooltip, TrackLineSettings } from "@syncfusion/ej2-react-charts";

const SparkLine = ({currentColor, id, height, width, color, type, data}) => {
  return (
    <div>
      <SparklineComponent
        id={id}
        height={height}
        widht={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        tooltipSettings={{ 
          visible: true,
          format: '${x} : data ${yval}',
          trackLineSettings: {
            visible: true
          },
        }}
        dataSource={data}
        xName="x"
        yName="yval"
        type={type}
      >
        <Inject services={[SparklineTooltip]} />

      </SparklineComponent>
    </div>
  );
}

export default SparkLine;