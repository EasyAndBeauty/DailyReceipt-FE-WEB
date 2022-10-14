export const isNull = (word) => {
  if (!word.length) return;
  if (!word.replace(/\s/g, "").length) return true;
};

export const isOverMaxLength = (word) => {
  if (word.length > 7) return true;
};
