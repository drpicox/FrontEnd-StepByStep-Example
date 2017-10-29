export default payload => {
  const result = {};
  payload.forEach(issue => {
    result[issue.number] = {
      ...issue,
      user: issue.user.login,
      labels: issue.labels.map(label => label.name),
    };
  });
  return result;
};
