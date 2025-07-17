export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const currentMonth = new Date().toLocaleString("default", {
  month: "long",
});

export const currentDay = new Date().getDate();

export const currentYear = new Date().getFullYear();

export const dayOfWeek = new Date().toLocaleString("default", {
  weekday: "long",
});

export const today = `${dayOfWeek}, ${currentMonth} ${currentYear}`;
