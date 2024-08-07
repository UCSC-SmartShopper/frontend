export interface DateTime {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}

export const getDate = (dateTime: DateTime): string => {
  return `${dateTime.year}-${dateTime.month}-${dateTime.day}`;
};

export const getTime = (dateTime: DateTime): string => {
  return `${dateTime.hour}:${dateTime.minute}:${Math.floor(dateTime.second)}`;
};

export const getDateTime = (dateTime: DateTime): string => {
  return `${getDate(dateTime)} ${getTime(dateTime)}`;
};
