export type ChartInstance = { id: string };

export interface ChartSeries {
  name: string;
  data: number[];
}

export type Gridlines = 'x' | 'y' | 'both';

// -----------------------------------------
// --------- GENERATOR INTERFACE -----------
// -----------------------------------------

export interface IGenerator {
  withLegend: () => IGenerator;
  withTitle: (title: string) => IGenerator;
  withGridLines: (which: Gridlines) => IGenerator;
  withTooltip: () => IGenerator;
  generate(): ChartInstance;
}
