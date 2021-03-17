interface State {
  language: string;
}

export const state = () => ({
  language: "nl"
} as State);

export const mutations = {
  setLanguage(state: State, payload: string) {
    state.language = payload;
  }
};


