export const transpose = input => {
  const rows = input.map(c => [...c]);
  const maxLength = Math.max(...rows.map(r => r.length));
  if (!rows.length) {
    return [];
  }
  const result = Array(maxLength)
    .fill(null)
    .map((_, i) => rows.map(x => x[i] || " "))
    .map(r => r.join(""));
  result[result.length - 1] = result[result.length - 1].trimRight();
  return result;
};
