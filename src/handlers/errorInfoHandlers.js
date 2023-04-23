function ErrorNameHandler(data) {
  const errorNames = [];

  for (let i = 0; i < data.length; i += 1) {
    const { errorName } = data[i];
    const hasName = element => element.name === errorName;

    if (!errorNames.some(hasName))
      errorNames.push({ name: errorName, value: [] });

    errorNames.forEach(element => {
      if (element.name === errorName) {
        element.value.push(element);
      }
    });
  }

  return errorNames;
}

function totalErrors(data) {
  const result = { dailyError: [], routesError: [], errorNames: [] };

  for (let i = 0; i < 32; i += 1) {
    result.dailyError[i] = { name: i + 1, value: 0 };
  }

  for (let i = 0; i < data.length; i += 1) {
    let day = data[i].createdAt.slice(8, 10);
    if (day < 10) day = day.at(-1);

    for (let j = 0; j < 31; j += 1) {
      if (result.dailyError[j].name === Number(day))
        result.dailyError[j].value += 1;
    }

    const { path } = data[i];
    const hasPath = element => element.name === path;

    if (!result.routesError.some(hasPath))
      result.routesError.push({ name: path, value: 0 });

    result.routesError.forEach(element => {
      if (element.name === path) {
        element.value += 1;
      }
    });

    const { errorName } = data[i];
    const hasName = element => element.name === errorName;

    if (!result.errorNames.some(hasName))
      result.errorNames.push({ name: errorName, value: 0 });

    result.errorNames.forEach(element => {
      if (element.name === errorName) {
        element.value += 1;
      }
    });
  }

  result.routesError.sort((a, b) => b.value - a.value);

  return result;
}

function dailyErrors(data, date) {
  if (date === null) return null;
  const result = { routesError: [], errorNames: [] };
  for (let i = 0; i < data.length; i += 1) {
    let day = data[i].createdAt.slice(8, 10);
    if (day < 10) day = day.at(-1);
    if (day !== date) continue;

    const { path } = data[i];
    const hasPath = element => element.name === path;

    if (!result.routesError.some(hasPath))
      result.routesError.push({ name: path, value: 0 });

    result.routesError.forEach(element => {
      if (element.name === path) {
        element.value += 1;
      }
    });

    const { errorName } = data[i];
    const hasName = element => element.name === errorName;

    if (!result.errorNames.some(hasName))
      result.errorNames.push({ name: errorName, value: 0 });

    result.errorNames.forEach(element => {
      if (element.name === errorName) {
        element.value += 1;
      }
    });
  }

  result.routesError.sort((a, b) => b.value - a.value);

  return result;
}

export default {
  totalErrors,
  dailyErrors,
  ErrorNameHandler,
};
