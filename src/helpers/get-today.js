export default function () {
  const date = new Date();
  let [day, month, year, timestamp] = [date.getDate(), date.getMonth() + 1, date.getFullYear(), date.getTime()];

  day = day.toString().split('').length === 1 ? `0${day}` : day;
  month = month.toString().split('').length === 1 ? `0${month}` : month;

  const todayString = `${year}-${month}-${day}`;

  return {
    dateString: todayString,
    day,
    month,
    timestamp,
    year
  };
}