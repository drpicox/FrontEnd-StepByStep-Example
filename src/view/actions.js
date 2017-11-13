export const SET_VIEW = 'SET_VIEW';
export function setView(root, id) {
  return {
    type: SET_VIEW,
    root,
    id,
  };
}
