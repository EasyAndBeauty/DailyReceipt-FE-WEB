// Date
export const formatReceiptDate = (date) => {
  return date.replace("-", ". ");
};

// Timer

/**
 * getHour
 *
 * 초로 주어진 시간을 시간으로 변환
 *
 * @param {number} seconds
 * @returns {number} 시간
 */

export const getHour = (seconds) => {
  const hour = Math.floor(seconds / (60 * 60));
  return hour;
};

/**
 * getMin
 *
 * 초로 주어진 시간을 분으로 변환
 *
 * @param {number} seconds
 * @returns {string} 분
 */
export const getMin = (seconds) => {
  return String(Math.floor((seconds / 60) % 60)).padStart(2, "0");
};

/**
 * getSec
 *
 * 초로 표시할 부분만 남김
 *
 * @param {number} seconds
 * @returns {string} 초
 */
export const getSec = (seconds) => {
  return String(Math.floor(seconds % 60)).padStart(2, "0");
};
