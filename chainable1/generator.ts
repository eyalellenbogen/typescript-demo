import { ChartSeries, ChartInstance, Gridlines, IGenerator } from './types';

export class ChartGenerator implements IGenerator {
  constructor(type: string, series: ChartSeries[]) {}
  withLegend() {
    //TODO: set legend
    return this;
  }

  withGridLines(which: Gridlines) {
    //TODO: set gridlines
    return this;
  }

  withTitle(title: string) {
    //TODO: set title
    return this;
  }

  withTooltip() {
    //TODO: set tooltip
    return this;
  }

  generate() {
    //TODO: generate chart instance
    return {} as ChartInstance;
  }
}
