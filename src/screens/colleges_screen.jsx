import Departments from "../components/departments";
import Footer from "../components/footer";
import Header from "../components/header";

export default function CollegesScreen({ college }) {
    console.log(college.id);


    return (
        <>
            <Header title={college.collegeName} />
            <Departments minH={'min-h-150'} collegeId={college.id} />
            <Footer />
        </>
    )
}