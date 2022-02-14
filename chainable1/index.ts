import { ChartGenerator } from './generator';
import { IGenerator } from './types';

const generator: IGenerator = new ChartGenerator('population', [{ name: 'Israel', data: [4, 5, 6] }]);
generator
  .withTitle('Best Chart Ever ever ever ever ever ever ever ever ever')
  .withGridLines('x')
  .withLegend()
  .withTooltip()
  .generate();
