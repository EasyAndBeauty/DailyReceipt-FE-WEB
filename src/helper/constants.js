import dayjs from "dayjs";
const isoWeek = require("dayjs/plugin/isoWeek");

dayjs.extend(isoWeek);

export const SECOND = 1;
export const MINUTE = 60;

export const POMODORO_TIME = 25 * MINUTE;
export const INTERVAL_SECOND = 1000;
export const ELLIPSISLENGTH = 15;

export const TODAY = dayjs().format("YYYY-MM-DD");

export const TOKEN_KEY = "dr-tokens";

/**
 * Messages
 */
export const IS_NULL = "닉네임이 비어있어요.";
export const IS_OVER = "닉네임은 7글자까지 설정가능해요.";
