const grade_values = [
  {
    month: "Jan",
    grades: { Algebra: 58, Physics: 64, History: 85, English: 79 },
  },
  {
    month: "Feb",
    grades: { Algebra: 55, Physics: 66, History: 84, English: 79 },
  },
  {
    month: "Mar",
    grades: { Algebra: 63, Physics: 70, History: 82, English: 84 },
  },
  {
    month: "Apr",
    grades: { Algebra: 67, Physics: 66, History: 86, English: 83 },
  },
  {
    month: "May",
    grades: { Algebra: 75, Physics: 69, History: 88, English: 81 },
  },
  {
    month: "Sep",
    grades: { Algebra: 72, Physics: 72, History: 90, English: 85 },
  },
  {
    month: "Oct",
    grades: { Algebra: 78, Physics: 73, History: 90, English: 83 },
  },
  {
    month: "Nov",
    grades: { Algebra: 85, Physics: 77, History: 93, English: 86 },
  },
  {
    month: "Dec",
    grades: { Algebra: 89, Physics: 83, History: 92, English: 91 },
  },
];

const data = {
  datasets: [
    {
      label: "Algebra",
      data: grade_values,
      backgroundColor: "rgba(255, 26, 104, 0.2)",
      borderColor: "rgba(255, 26, 104, 1)",
      borderWidth: 3,
      tension: 0.4,
      parsing: {
        xAxisKey: "month",
        yAxisKey: "grades.Algebra",
      },
    },
    {
      label: "Physics",
      data: grade_values,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 3,
      tension: 0.4,
      parsing: {
        xAxisKey: "month",
        yAxisKey: "grades.Physics",
      },
    },
    {
      label: "History",
      data: grade_values,
      backgroundColor: "rgba(255, 206, 86, 0.2)",
      borderColor: "rgba(255, 206, 86, 1)",
      borderWidth: 3,
      tension: 0.4,
      parsing: {
        xAxisKey: "month",
        yAxisKey: "grades.History",
      },
    },
    {
      label: "English",
      data: grade_values,
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 3,
      tension: 0.4,
      parsing: {
        xAxisKey: "month",
        yAxisKey: "grades.English",
      },
    },
  ],
};

// config
const config = {
  type: "line",
  data,
  options: {
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  },
};

// render init block
const myChart = new Chart(document.getElementById("myChart"), config);

// Instantly assign Chart.js version
const chartVersion = document.getElementById("chartVersion");
chartVersion.innerText = Chart.version;
