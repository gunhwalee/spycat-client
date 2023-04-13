/* eslint-disable no-unused-vars */
const dailyForm = [
  {
    name: 1,
    value: [],
  },
  {
    name: 2,
    value: [],
  },
  {
    name: 3,
    value: [],
  },
  {
    name: 4,
    value: [],
  },
  {
    name: 5,
    value: [],
  },
  {
    name: 6,
    value: [],
  },
  {
    name: 7,
    value: [],
  },
  {
    name: 8,
    value: [],
  },
  {
    name: 9,
    value: [],
  },
  {
    name: 10,
    value: [],
  },
  {
    name: 11,
    value: [],
  },
  {
    name: 12,
    value: [],
  },
  {
    name: 13,
    value: [],
  },
  {
    name: 14,
    value: [],
  },
  {
    name: 15,
    value: [],
  },
  {
    name: 16,
    value: [],
  },
  {
    name: 17,
    value: [],
  },
  {
    name: 18,
    value: [],
  },
  {
    name: 19,
    value: [],
  },
  {
    name: 20,
    value: [],
  },
  {
    name: 21,
    value: [],
  },
  {
    name: 22,
    value: [],
  },
  {
    name: 23,
    value: [],
  },
  {
    name: 24,
    value: [],
  },
  {
    name: 25,
    value: [],
  },
  {
    name: 26,
    value: [],
  },
  {
    name: 27,
    value: [],
  },
  {
    name: 28,
    value: [],
  },
  {
    name: 29,
    value: [],
  },
  {
    name: 30,
    value: [],
  },
  {
    name: 31,
    value: [],
  },
];

const timeForm = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
};

function dailyTraffics(data) {
  const result = [];

  for (let i = 0; i < 31; i += 1) {
    result[i] = { name: i + 1, value: 0 };
  }

  for (let i = 0; i < data.traffics.length; i += 1) {
    let day = data.traffics[i].createdAt.slice(8, 10);
    if (day < 10) day = day.at(-1);

    for (let j = 0; j < 31; j += 1) {
      if (result[j].name === Number(day)) result[j].value += 1;
    }
  }

  return result;
}

function XAxisArray() {
  const date = new Date();
  const today = date.getDate();
  const year = date.getFullYear();
  const month = date.getMonth();
  const lastDate = new Date(year, month, 0).getDate();
  const result = Array(28)
    .fill()
    .map((v, i) => {
      let num = i + lastDate - 27 + today;
      if (num > lastDate) num -= lastDate;
      return num;
    });

  return result;
}

export default { dailyTraffics, XAxisArray };

/*
  for (let i = 0; i < data.traffics.length; i += 1) {
    let day = data.traffics[i].createdAt.slice(8, 10);
    if (day < 10) day = day.at(-1);
    const time = data.traffics[i].createdAt.slice(11, 13);
    const { path } = data.traffics[i];
    const indexTime = Math.floor(time / 2 + 1);

    result.daily[day] += 1;
    if (!result.path[path]) result.path[path] = 0;
    result.path[path] += 1;
    result.time[indexTime] += 1;
  }
  */
