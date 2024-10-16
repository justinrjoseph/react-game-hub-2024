import axios, { AxiosRequestConfig } from 'axios';

export interface ApiRes<T> {
  count: number;
  next?: string | null;
  results: T[];
};

const http = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '1db03b73bea94c439d4045c973cbb264'
  }
});

type Endpoint = 'games' |
'genres' |
'platforms/lists/parents' |
`games/${string}/movies` |
`games/${string}/screenshots`;

export default class ApiClient<T> {
  constructor(private endpoint: `/${Endpoint}`) {}

  getAll = (config?: AxiosRequestConfig): Promise<ApiRes<T>> => {
    return http.get<ApiRes<T>>(this.endpoint, config)
      .then((res) => res.data)
  }

  getSingle = (id: string | number): Promise<T> => {
    return http.get<T>(`${this.endpoint}/${id}`)
      .then((res) => res.data)
  }
}