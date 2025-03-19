const activityServices = {
    getActivities: async () => {
        try {
            const response = await fetch("http://192.168.88.25:5555/api/activities", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWVzc2FnZSI6IlVzZXIgbG9nZ2VkIFN1Y2Nlc3NmdWx5IiwiaWF0IjoxNzQyMzQ3NTk0fQ.TR4pNz6bYTPCNYCNtdXGZvUVQ9H2sI3yCJC698SIdLE"
                }
            });
            const data = await response.json();
            if (data.success && Array.isArray(data.activities)) {
                return data.activities;
            } else {
                throw new Error("البيانات المستلمة غير صحيحة");
            }
        } catch (error) {
            throw new Error("Error fetching activities: " + error.message);
        }
    },

    getStudentsActivities: async () => {
        try {
            const response = await fetch("http://192.168.88.25:5555/api/students_activities", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWVzc2FnZSI6IlVzZXIgbG9nZ2VkIFN1Y2Nlc3NmdWx5IiwiaWF0IjoxNzQyMzQ3NTk0fQ.TR4pNz6bYTPCNYCNtdXGZvUVQ9H2sI3yCJC698SIdLE"
                }
            });
            const data = await response.json();
            if (data.success && Array.isArray(data.activities)) {
                return data.activities;
            } else {
                throw new Error("البيانات المستلمة غير صحيحة");
            }
        } catch (error) {
            throw new Error("Error fetching activities: " + error.message);
        }
    },

    getUniversityActivities: async () => {
        try {
            const response = await fetch("http://192.168.88.25:5555/api/univesity_activities", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWVzc2FnZSI6IlVzZXIgbG9nZ2VkIFN1Y2Nlc3NmdWx5IiwiaWF0IjoxNzQyMzQ3NTk0fQ.TR4pNz6bYTPCNYCNtdXGZvUVQ9H2sI3yCJC698SIdLE"
                }
            });
            const data = await response.json();
            if (data.success && Array.isArray(data.activities)) {
                return data.activities;
            } else {
                throw new Error("البيانات المستلمة غير صحيحة");
            }
        } catch (error) {
            throw new Error("Error fetching activities: " + error.message);
        }
    },

    getDepartmentActivities: async (departmentId) => {
        try {
            const response = await fetch(`http://192.168.88.25:5555/api/department_activities/${departmentId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWVzc2FnZSI6IlVzZXIgbG9nZ2VkIFN1Y2Nlc3NmdWx5IiwiaWF0IjoxNzQyMzQ3NTk0fQ.TR4pNz6bYTPCNYCNtdXGZvUVQ9H2sI3yCJC698SIdLE"
                }
            });
            const data = await response.json();
            if (data.success && Array.isArray(data.activities)) {
                return data.activities;
            } else {
                throw new Error("البيانات المستلمة غير صحيحة");
            }
        } catch (error) {
            throw new Error("Error fetching activities: " + error.message);
        }
    },
}
export default activityServices;