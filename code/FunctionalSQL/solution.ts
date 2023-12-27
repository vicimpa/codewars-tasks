// https://www.codewars.com/kata/545434090294935e7d0010ab

type TSelect = (v: any) => any;
type TFrom = any[];
type TGroupBy = (v: any) => any;
type TOrderBy = (a: any, b: any) => any;
type TWhere = (v: any) => any;
type THaving = (v: any) => any;

function matrix(data: any[], elements: any[], primary: any[], ...append: any[][]) {
  const next = append.shift();

  for (const element of primary) {
    const newElements = [...elements, element];

    if (next) {
      matrix(data, newElements, next, ...append);
      continue;
    }

    data.push(newElements.length === 1 ? newElements[0] : newElements);
  }

  return data;
}

class FakeQueryBuilder {
  #from?: TFrom[];
  #order?: TOrderBy;
  #having: THaving[] = [];
  #where: TWhere[] = [];
  #group?: TGroupBy[];
  #select?: TSelect;

  from(...froms: TFrom[]) {
    if (this.#from)
      throw new Error('Dublicate FROM');

    this.#from = froms;
    return this;
  }

  groupBy(...groupBy: TGroupBy[]) {
    if (this.#group)
      throw new Error('Dublicate GROUPBY');
    this.#group = groupBy;
    return this;
  }

  select(select?: TSelect) {
    if (this.#select)
      throw new Error('Duplicate SELECT');
    this.#select = select;
    return this;
  }

  orderBy(order?: TOrderBy) {
    if (this.#order)
      throw new Error('Dublicate ORDERBY');
    this.#order = order;
    return this;
  }

  where(...where: TWhere[]) {
    this.#where.push(...where);
    return this;
  }

  having(...having: THaving[]) {
    this.#having.push(...having);
    return this;
  }

  execute() {
    const from = this.#from ?? [[]];
    const select = this.#select ?? (v => v);

    let data = matrix([], [], from[0], ...from.slice(1));

    for (const w of this.#where) {
      data = data.filter(w);
    }

    if (this.#having.length)
      data = data.filter(e => {
        for (const hav of this.#having)
          if (hav(e))
            return true;

        return false;
      });


    return data;
  }
}


export function query() {
  return new FakeQueryBuilder();
};
