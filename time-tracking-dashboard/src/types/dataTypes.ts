export interface Timeframe {
  current: number;
  previous: number;
}

export interface Timeframes {
  daily: Timeframe;
  weekly: Timeframe;
  monthly: Timeframe;
}

export interface DataItem {
  title: string;
  timeframes: Timeframes;
}

export interface CardInfoTypes {
  title: string;
  currentHours: number;
  previousHours: number;
  date: string;
  children?: any;
}
