import { useEffect, useState } from "react";
import collegeServices from "../services/college";
export default function collegeController() {
    const [colleges, setColleges] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            try {
                let data = [];
                data = await collegeServices.getColleges();
                setColleges(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching colleges:", error);
            }
        }

        fetchData();
    }, []);

    return { colleges, isLoading }
}