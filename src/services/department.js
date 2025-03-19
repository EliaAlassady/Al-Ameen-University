const departmentServices = {
    getDepartments: async () => {
        try {
            const response = await fetch('http://192.168.88.25:5555/api/departments', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWVzc2FnZSI6IlVzZXIgbG9nZ2VkIFN1Y2Nlc3NmdWx5IiwiaWF0IjoxNzQyMzQ3NTk0fQ.TR4pNz6bYTPCNYCNtdXGZvUVQ9H2sI3yCJC698SIdLE"
                }
            });
            const data = await response.json();
            if (data.success && Array.isArray(data.departments)) {

                return data.departments;
            } else {
                return data.success;
            }
        } catch (error) {
            throw new Error("Error fetching departments: " + error.message);
        }
    },

    getCollegeDepartments: async (collegeId) => {
        try {
            const response = await fetch(`http://192.168.88.25:5555/api/departments/${collegeId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWVzc2FnZSI6IlVzZXIgbG9nZ2VkIFN1Y2Nlc3NmdWx5IiwiaWF0IjoxNzQyMzQ3NTk0fQ.TR4pNz6bYTPCNYCNtdXGZvUVQ9H2sI3yCJC698SIdLE"
                }
            });
            const data = await response.json();
            if (data.success && Array.isArray(data.departments)) {
                return data.departments;
            } else {
                return data.success;
            }

        } catch (error) {
            throw new Error("Error fetching college Departments: " + error.message);
        }
    }
}
export default departmentServices;