export interface ApiResponse<> {
  result: 'ok' | 'error';
  errorMsg?: string;
  errorCode?: string;
}