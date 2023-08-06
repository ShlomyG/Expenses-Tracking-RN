export const getFormattedDate = (date?: Date) => {
  if (!date) {
    return '';
  }
  const yyyy = date.getFullYear();
  let mm: number | string = date.getMonth() + 1; // Months start at 0!
  let dd: number | string = date.getDate();

  if (dd < 10) {
    dd = '0' + dd.toString();
  }
  if (mm < 10) {
    mm = '0' + mm.toString();
  }

  return `${dd} / ${mm} / ${yyyy}`;
};
