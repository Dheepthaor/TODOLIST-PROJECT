import { useState } from "react";
import "./Todolist.css"

function New() {
  const [tasks, setTasks] = useState({
    Mon: [""],
    Tue: [""],
    Wed: [""],
    Thu: [""],
    Fri: [""],
    Sat: [""],
    Sun: [""],
  });
  
  const [colors, setColors] = useState({
    Mon: [""],
    Tue: [""],
    Wed: [""],
    Thu: [""],
    Fri: [""],
    Sat: [""],
    Sun: [""],
  });


  const addTask = (day) => {
    const newTasks = { ...tasks };
    const newColors = { ...colors };

    newTasks[day].push("");
    newColors[day].push("white");

    setTasks(newTasks);
    setColors(newColors);
  };

 
  const handleChange = (day, index, value) => {
    const newTasks = { ...tasks };
    newTasks[day][index] = value;
    console.log(newTasks)
    setTasks(newTasks);
  };

  const deleteTask = (day, index) => {
    const newTasks = { ...tasks };
    const newColors = { ...colors };

    newTasks[day].splice(index, 1);
    newColors[day].splice(index, 1);

    setTasks(newTasks);
    setColors(newColors);
  };


  const handleDone = (day, index) => {
    const newColors = { ...colors };
    if (newColors[day][index] === "lightgreen") {
  newColors[day][index] = "white";
} else {
  newColors[day][index] = "lightgreen";
}

    setColors(newColors);
  };

  return (
    <>
   <h1 className="title">🗓️ Weekly TO-DO LIST</h1>

   <div className="week-container">
    {Object.keys(tasks).map((day) => (
      <div key={day} className="day-section">
       <h2 className="day-heading">{day}</h2>

        {tasks[day].map((task, i) => (
        <div className="task-row" key={i}>
                <input
                  type="text"
                  placeholder={`Enter ${day}'s task`}
                  className="task-input"
      
                  value={task}
                  style={{
                    backgroundColor: colors[day][i],
                  }}
                  onChange={(e) => handleChange(day, i, e.target.value)}
                />

                <button
                 
                  style={{backgroundColor:"#41ad4aff",width:"70px",height:"40px",borderRadius:"20px",border:"none"}}
                  onClick={() => handleDone(day, i)}
                >
                  {colors[day][i] === "lightgreen" ? "↩ Undo" : "✅ Done"}
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteTask(day, i)}
                >
                  🗑️
                </button>
              </div>
            ))}

            <button className="add-btn" onClick={() => addTask(day)}>
              ➕ Add Task
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default New;
