const collegeServices = {
    getColleges: async () => {
        try {
            const response = await fetch("http://192.168.88.25:5555/api/colleges", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWVzc2FnZSI6IlVzZXIgbG9nZ2VkIFN1Y2Nlc3NmdWx5IiwiaWF0IjoxNzQyMzQ3NTk0fQ.TR4pNz6bYTPCNYCNtdXGZvUVQ9H2sI3yCJC698SIdLE"
                }
            });
            const data = await response.json();
            if (data.success && Array.isArray(data.colleges)) {
                return data.colleges;
            } else {
                throw new Error("البيانات المستلمة غير صحيحة");
            }
        } catch (error) {
            throw new Error("Error fetching colleges: " + error.message);
        }
    }
}
export default collegeServices;