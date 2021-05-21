let json = {
  monthPlan: [
    { status: 0, data: "Сделать 100 продаж" },
    { status: 1, data: "Залить разработку по Терре на тестовый сервер" },
    { status: 0, data: "Найти мобильного разработчика в проект" },
  ],
  monthTarget: [
    { status: 0, data: "Внедрить медитации" },
    { status: 1, data: "Решить семейное" },
    { status: 0, data: "Показать ребятам первую MVP SAMO" },
  ],
  nextMonthTarget: [
    { data: "Подписать договор с инвесторами" },
    { data: "всякие цели" },
    { data: "просыпаться раньше" },
  ],
  nextMonthPlan: [
    { data: "Встреча с друзьями" },
    { data: "Планерка по проекту Samo" },
    { data: "Очень важная встреча с инвесторами проекта" },
    { data: "Сходить в театр" },
    { data: "Свидание с Машей" },
    { data: "Записаться на занятия по йоге" },
    { data: "Курсы по саморазвитию и самодисциплине" },
    { data: "Волонтерство" },
  ],
  monthDiary: {
    conclusion: "Неделя прошла не зря, понравилось высыпаться",
    achievements:
      "переборол ненависть к найму, прочитал книгу, написал пост в блог",
    goodThings: "спас котёнка",
  },
};

document.getElementById("conclusion").textContent = json.monthDiary.conclusion;
document.getElementById("achievements").textContent =
  json.monthDiary.achievements;
document.getElementById("goodThings").textContent = json.monthDiary.goodThings;

json.nextMonthTarget.forEach((item) => {
  // console.log(item.data);
  document.getElementById("next_month_target").insertAdjacentHTML(
    "beforeend",
    `
            <li>${item.data}</li>
        `
  );
});

json.nextMonthPlan.forEach((item) => {
  document.getElementById("next_month_plan").insertAdjacentHTML(
    "beforeend",
    `
            <li class="monday">${item.data}</li>
        `
  );
});

json.monthTarget.forEach((item) => {
  if (item.status) {
    document.getElementById("target-month").insertAdjacentHTML(
      "beforeend",
      `
                <label class="checkbox"><input type="checkbox" checked><span>${item.data}</span></label>
            `
    );
  } else {
    document.getElementById("target-month").insertAdjacentHTML(
      "beforeend",
      `
                <label class="checkbox"><input type="checkbox"><span>${item.data}</span></label>
            `
    );
  }
});

json.monthPlan.forEach((item) => {
  if (item.status) {
    document.getElementById("month_plan").insertAdjacentHTML(
      "beforeend",
      `
            <label class="checkbox"><input type="checkbox" checked><span>${item.data}</span></label>
            `
    );
  } else {
    document.getElementById("month_plan").insertAdjacentHTML(
      "beforeend",
      `
         <label class="checkbox"><input type="checkbox"><span>${item.data}</span></label>
            `
    );
  }
});
