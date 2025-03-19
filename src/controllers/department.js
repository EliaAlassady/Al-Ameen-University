import { useEffect, useState } from "react";
import departmentServices from "../services/department";
export function departmentController() {
    const [departments, setDepartments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function fetchDepatmetsData() {
            setIsLoading(true);
            try {
                let data = [];
                data = await departmentServices.getDepartments();
                setDepartments(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching departments:", error);
            }
        }

        fetchDepatmetsData();
    }, []);

    return { departments, isLoading }
}

export function departmentController2(collegeId) {
    const [collegesDepartment, setCollegesDepartment] = useState([]);
    const [isLoading2, setIsLoading2] = useState(true);
    useEffect(() => {
        async function fetchCollegesDepatmetData() {
            setIsLoading2(true);
            try {
                let data = [];
                data = await departmentServices.getCollegeDepartments(collegeId);
                setCollegesDepartment(data);
                setIsLoading2(false);
            } catch (error) {
                console.error("Error fetching departments:", error);
            }
        }

        fetchCollegesDepatmetData();
    }, [collegeId]);

    return { collegesDepartment, isLoading2 }
}