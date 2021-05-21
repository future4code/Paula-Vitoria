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
