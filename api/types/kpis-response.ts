export interface KpisResponse {
    arpu: number;
    conversion: number;
    retention: number;
    churn: number;
    arpuTrend: number[];
    conversionTrend: number[];
    labels: string[];
  }