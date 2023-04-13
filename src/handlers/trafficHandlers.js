function totalTraffics(data) {
  const result = { dailyTraffic: [], routesTraffic: [], timeTraffic: null };
  result.timeTraffic = Array(12)
    .fill()
    .map((v, i) => {
      const obj = { name: i, value: 0 };
      return obj;
    });

  for (let i = 0; i < 32; i += 1) {
    result.dailyTraffic[i] = { name: i + 1, value: 0 };
  }

  for (let i = 0; i < data.length; i += 1) {
    let day = data[i].createdAt.slice(8, 10);
    if (day < 10) day = day.at(-1);

    for (let j = 0; j < 31; j += 1) {
      if (result.dailyTraffic[j].name === Number(day))
        result.dailyTraffic[j].value += 1;
    }

    const { path } = data[i];
    const hasPath = element => element.name === path;

    if (!result.routesTraffic.some(hasPath))
      result.routesTraffic.push({ name: path, value: 0 });

    result.routesTraffic.forEach(element => {
      if (element.name === path) {
        element.value += 1;
      }
    });

    const time = Math.floor(data[i].createdAt.slice(11, 13) / 2);
    result.timeTraffic.forEach(element => {
      if (element.name === time) {
        element.value += 1;
      }
    });
  }

  result.routesTraffic.sort((a, b) => b.value - a.value);

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

function dailyTraffics(data, date) {
  if (date === null) return null;
  const result = { routesTraffic: [], timeTraffic: null };
  result.timeTraffic = Array(12)
    .fill()
    .map((v, i) => {
      const obj = { name: i, value: 0 };
      return obj;
    });

  for (let i = 0; i < data.length; i += 1) {
    let day = data[i].createdAt.slice(8, 10);
    if (day < 10) day = day.at(-1);
    if (day !== date) continue;

    const { path } = data[i];
    const hasPath = element => element.name === path;

    if (!result.routesTraffic.some(hasPath))
      result.routesTraffic.push({ name: path, value: 0 });

    result.routesTraffic.forEach(element => {
      if (element.name === path) {
        element.value += 1;
      }
    });

    const time = Math.floor(data[i].createdAt.slice(11, 13) / 2);
    result.timeTraffic.forEach(element => {
      if (element.name === time) {
        element.value += 1;
      }
    });
  }

  result.routesTraffic.sort((a, b) => b.value - a.value);

  return result;
}

export default { totalTraffics, XAxisArray, dailyTraffics };
