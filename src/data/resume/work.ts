/**
 * Conforms loosely to https://jsonresume.org/schema/.
 * The TeX resume does not include work history, so this stays empty.
 */
export interface Position {
  name: string;
  position: string;
  url?: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [];

export default work;
