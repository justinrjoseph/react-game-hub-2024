export type OrderingValue = '' |
'-added' |
'name' |
'-released' |
'-metacritic' |
'-rating';

type OrderingLabel = 'Relevance' |
'Date added' |
'Name' |
'Release date' |
'Popularity' |
'Average rating';

export const orderings: { [key in OrderingValue]: OrderingLabel } = {
  '': 'Relevance',
  '-added': 'Date added',
  'name': 'Name',
  '-released': 'Release date',
  '-metacritic': 'Popularity',
  '-rating': 'Average rating'
};

export default orderings;