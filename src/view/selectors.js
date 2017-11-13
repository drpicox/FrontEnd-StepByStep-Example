export function getView(state) {
  return state.view;
}

export function getViewRoot(state) {
  return getView(state).root;
}

export function getViewId(state) {
  return getView(state).id;
}
