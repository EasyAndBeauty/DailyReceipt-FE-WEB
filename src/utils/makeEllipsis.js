import { ELLIPSISLENGTH } from "constants";

/**
 * makeEllipsis
 *
 * description을 EllipsisLENGTH 만큼 자른다.
 *
 * @param {*} description
 * @returns
 */
export const makeEllipsis = (description) => {
  let len = ELLIPSISLENGTH;

  if (description?.length > len) {
    return description.substr(0, len - 2) + "...";
  }

  return description;
};
