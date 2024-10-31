import { ApiRes } from './services/http-client';

export function extractName<T extends { id: number; name:string }>(
  items: ApiRes<T> | undefined, id: number | undefined, defaultName = ''
):string {
  return items?.results.find((item) => item.id === id)?.name || defaultName;
}