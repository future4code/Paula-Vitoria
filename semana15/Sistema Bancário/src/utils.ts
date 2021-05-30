export const getAge = (birthDate: string) => {
  let now = new Date();
  const birthMonth = Number(birthDate.substring(3, 5));
  const birthYear = Number(birthDate.substring(6, 10));
  const nowMonth = now.getMonth() + 1;
  const nowYear = now.getFullYear();
  let age = nowYear - birthYear;
  if (nowMonth < birthMonth) {
    age = age - 1;
    return age;
  } else {
    return age;
  }
};

export const oldDate = (date: String) => {
  const month = Number(date.substring(3, 5));
  const year = Number(date.substring(6, 10));
  const day = Number(date.substring(0, 2));
  const old = `${day}/${month}/${year}`;
  console.log(old);
  let now = new Date();
  const nowMonth = now.getMonth() + 1;
  const nowYear = now.getFullYear();
  const nowDay = now.getDate();
  console.log;
  let oldDate: String;
  console.log("year", year);
  console.log("nowYear", nowYear);

  if (year < nowYear) {
    oldDate = old;
    return oldDate;
  } else if (year === nowYear) {
    if (month < nowMonth) {
      oldDate = old;
      return oldDate;
    } else if (month === nowMonth) {
      if (day < nowDay) {
        oldDate = old;
        return oldDate;
      } else {
        return 0;
      }
    }
  } else {
    return 0;
  }
};
