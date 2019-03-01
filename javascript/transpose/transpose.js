export const transpose = input => {
  const rows = input.map(c => [...c]);
  if (!rows.length) {
    return [];
  }
  const result = Array.from({ length: Math.max(...rows.map(r => r.length)) })
    .map((_, i) => rows.map(x => x[i] || " "))
    .map(r => r.join(""));
  result[result.length - 1] = result[result.length - 1].trimRight();
  return result;
};
