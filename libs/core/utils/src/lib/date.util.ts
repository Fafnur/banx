export function getMinDate(age: number = 100): Date {
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - age);

  return minDate;
}

export function getMaxDate(age: number = 18): Date {
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - age);

  return maxDate;
}

export function getMaskDate(value: string, separate: string = '.'): string {
  const date = new Date(value);
  const res = {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };

  return `${res.day.toString().padStart(2, '0')}${separate}${res.month.toString().padStart(2, '0')}${separate}${res.year}`;
}

export function getBackendDate(value: string): string {
  const date = new Date(value);
  const res = {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };

  return `${res.year}-${res.month.toString().padStart(2, '0')}-${res.day.toString().padStart(2, '0')}`;
}
