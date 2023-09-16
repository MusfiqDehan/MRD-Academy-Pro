import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "./App.css";

import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

const App = () => {
    // Instantiating SweetAlert2
    const MySwal = withReactContent(Swal);

    // All State Variables
    const [allCourses, setAllCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);

    // All Variables
    const totalCourses = selectedCourses.length;
    const requiredCredit = 20;
    const totalCost = selectedCourses.reduce(
        (total, course) => total + course.price,
        0
    );
    const totalCredit = selectedCourses.reduce(
        (total, course) => total + course.credit,
        0
    );
    const remainingCredit = requiredCredit - totalCredit;

    // All Functions
    const fetchData = async () => {
        const response = await fetch("./data.json");
        const data = await response.json();
        setAllCourses(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleAddToCart = (course) => {
        const isExist = selectedCourses.find((item) => item.id === course.id);

        if (isExist) {
            MySwal.fire({
                icon: "error",
                title: "Oops...",
                text: "This course is already selected! Select another one!",
            });
            return;
        }

        if (totalCredit + course.credit > requiredCredit) {
            MySwal.fire({
                icon: "error",
                title: "Oops...",
                text: "You have exceeded your credit! You can take maximum 20 credits!",
            });
            return;
        }

        const updatedSelectedActors = [...selectedCourses, course];
        setSelectedCourses(updatedSelectedActors);
    };

    return (
        <>
            <Navbar />
            <main className="my-10 flex pl-5 mt-24">
                <CardContainer
                    allCourses={allCourses}
                    handleAddToCart={handleAddToCart}
                />
                <Cart
                    selectedCourses={selectedCourses}
                    remainingCredit={remainingCredit}
                    totalCredit={totalCredit}
                    totalCost={totalCost}
                />
            </main>
            <Footer />
        </>
    );
};

export default App;
