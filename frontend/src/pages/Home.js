import React, { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";


const Home = () => {
    const [workouts, setWorkouts] = useState(null);
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch("/api/workouts");
            const json = await response.json();
            console.log("response", response);
            console.log("json", json);
            if (response.ok) {
            }
            setWorkouts(json);
        };
        fetchWorkouts();
    }, []);
    return (
        <div>
            <div className="workouts">
                {workouts &&
                    workouts.map((workout) => (
                        // <p key={workout._id}>{workout.title}</p>
                        <WorkoutDetails key={workout._id} workout={workout}/>
                    ))}
            </div>
        </div>
    );
};

export default Home;
