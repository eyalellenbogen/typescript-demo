export type ChartInstance = { id: string };

export interface ChartSeries {
  name: string;
  data: number[];
}

export type Gridlines = 'x' | 'y' | 'both';

// -----------------------------------------
// --------- GENERATOR INTERFACE -----------
// -----------------------------------------

type Omitter<O extends string> = Omit<IGenerator<O>, O>;

export interface IGenerator<O extends string = never> {
  withLegend: () => Omitter<O | 'withLegend'>;
  withTitle: (title: string) => Omitter<O | 'withTitle'>;
  withGridLines: (which: Gridlines) => Omitter<O | 'withGridLines'>;
  withTooltip: () => Omitter<O | 'withTooltip'>;
  generate(): ChartInstance;
}
