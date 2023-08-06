export const getFormattedDate = (date?: Date) => {
  if (!date) {
    return '';
  }
  const dateObject = new Date(date);
  const yyyy = dateObject?.getFullYear();
  let mm: number | string = dateObject?.getMonth() + 1; // Months start at 0!
  let dd: number | string = dateObject?.getDate();

  if (dd < 10) {
    dd = '0' + dd.toString();
  }
  if (mm < 10) {
    mm = '0' + mm.toString();
  }

  return `${dd} / ${mm} / ${yyyy}`;
};
