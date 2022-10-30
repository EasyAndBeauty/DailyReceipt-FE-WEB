/**
 * getHour
 *
 * ms로 주어진 시간을 시간으로 변환
 *
 * @param {*} ms
 * @returns {number} 시간
 */

export const getHour = (ms) => {
  const hour = Math.floor(ms / (1000 * 60 * 60));
  return hour;
};

/**
 * getMin
 *
 * ms로 주어진 시간을 분으로 변환
 *
 * @param {*} ms
 * @returns {number} 분
 */
export const getMin = (ms) => {
  return String(Math.floor((ms / (1000 * 60)) % 60)).padStart(2, "0");
};

/**
 * getSec
 *
 * ms로 주어진 시간을 초로 변환
 *
 * @param {*} ms
 * @returns {number} 초
 */
export const getSec = (ms) => {
  return String(Math.floor((ms / 1000) % 60)).padStart(2, "0");
};
