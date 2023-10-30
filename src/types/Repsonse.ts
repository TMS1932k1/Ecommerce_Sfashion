export type Response<T> = {
  status: string;
  results: number;
  totalPages: number;
  data: {data: T};
};
