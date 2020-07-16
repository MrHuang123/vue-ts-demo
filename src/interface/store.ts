import { Common } from './common';

export namespace Store {
  export interface Action {
    state: Common;
    rootState: Common;
    getters: Common;
    rootGetters: Common;
    commit: Function;
    dispatch: (type: string, data?: any, root?: object) => void
  }
  export interface State extends Common {
    [propState: number]: any;
  }
}
