export const displayLimitTime = (isoTime) => {
  const [date, time] = isoTime.split("T");
  const [year, month, day] = date.split("-");
  const [hour, minute] = time.split(":");
  return `${year}年${month}月${day}日 ${hour}時${minute}分`;
};

const hour = 24;
const minute = 60;
const second = 60;
const milisecond = 1000;

export const displayRestTime = (isoTime) => {
  const now = new Date();
  const limitTime = new Date(isoTime);
  // 日本時間分の 9 時間分ずれる
  const restTime =
    (limitTime - now - 9 * minute * second * milisecond) / milisecond;
  return `
  ${Math.floor(restTime / hour / minute / second)}日
  ${Math.floor((restTime / minute / second) % hour)}時間
  ${Math.floor((restTime / second) % minute)}分
  ${Math.floor(restTime % second)}秒
  `;
};
