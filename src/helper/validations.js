export const isNull = (word) => {
  if (!word.replace(/\s/g, "").length) return true;
};

export const isOverMaxLength = (word) => {
  if (word.length > 7) return true;
};
