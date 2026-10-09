const metrics = [
  { title: "Average playtime per player", value: "18 min" },
  { title: "Average days played", value: "4.2 days" },
  { title: "Players who returned", value: "38%" },
  { title: "Total Players", value: "1,234" },
];

const dashboard = document.querySelector("#metrics");

dashboard.innerHTML = metrics
  .map(
    (metric) => `
      <section class="card">
        <h2>${metric.title}</h2>
        <p>${metric.value}</p>
      </section>
    `,
  )
  .join("");