$(document).ready(function () {
  $("#calendar").evoCalendar({
    calendarEvents: [
      {
        id: "bHay68s", // Event's ID (required)
        name: "Algebra Test", // Event name (required)
        description: "Systems of Linear Equations",
        date: "April/7/2023", // Event date (required)
        type: "event", // Event type (required)
        everyYear: false, // Same event every year (optional)
      },
      {
        name: "Physics Test",
        date: "April/11/2023", // Date range
        description: "Rotational Motion and Torque", // Event description (optional)
        type: "event",
        color: "#63d867", // Event custom color (optional)
      },
      {
        name: "History Test",
        date: "April/27/2023", // Date range
        description: "The Cold War", // Event description (optional)
        type: "event",
        color: "#FFBF00", // Event custom color (optional)
      },
    ],
  });
});
