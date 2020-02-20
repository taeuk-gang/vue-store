export const namespaced = true;

export interface ListInfo {
  no: number,
  name: string,
}

interface State {
  ListName: string,
  item: ListInfo,
}

export const state: State = {
  ListName: `리스트 이름`,
  item: {
    no: 0,
    name: `아이템 1`,
  }
}

