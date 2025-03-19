import { useEffect, useState } from "react";
import activityServices from "../services/activity";


export default function activityController(type, departmentId) {
    const [activities, setActivities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            try {
                let data = [];
                if (type === 'Students') {
                    data = await activityServices.getStudentsActivities();
                } else if (type === 'University') {
                    data = await activityServices.getUniversityActivities();
                } else if (type === 'Home') {
                    data = await activityServices.getActivities();
                } else {
                    data = await activityServices.getDepartmentActivities(departmentId);
                }
                setActivities(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching activities:", error);
            }
        }

        fetchData();
    }, [type]);

    return { activities, isLoading }
}