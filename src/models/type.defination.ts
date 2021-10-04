/**
 * Value Label Wrap
 */
export interface ValueLabel<V, L> {
  value: V;
  label: L;
}

export interface KeyValue<V, L> {
  key: V;
  value: L;
}

export type ReportUploadFile = {
  name: string;
  type: 'pdf' | 'xlsx' | 'unknow';
};
