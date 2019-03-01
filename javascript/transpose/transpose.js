export const transpose = input => {
  const rows = input.map(c => [...c]);
  return Array.from({
    length: Math.max(...rows.map(r => r.length))
  }).map((_, i, arr) => {
    const r = rows.map(x => x[i] || " ").join("");
    return i < arr.length - 1 ? r : r.trimRight();
  });
};
