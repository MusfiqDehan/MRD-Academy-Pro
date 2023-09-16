import React from "react";

const Cart = ({ selectedCourses, remainingCredit, totalCredit, totalCost }) => {
    return (
        <aside className="flex-shrink sm:flex-col">
            <div className="w-full ml-1 shadow-xl px-5 py-10">
                <h1 className="text-center text-xl font-bold">
                    Course Registration
                </h1>
                <div className="flex justify-between items-center my-5">
                    <h2 className="text-lg text-blue-600 font-medium mx-auto">
                        Credit Hour Remaining {remainingCredit} hr
                    </h2>
                </div>

                <hr />

                {selectedCourses.length === 0 ? (
                    <div className="flex justify-center my-5">
                        <h2 className="text-lg font-medium">
                            No courses selected yet!
                        </h2>
                    </div>
                ) : (
                    <div>
                        <div>
                            <h2 className="text-xl font-bold text-center pt-10">
                                Selected Courses
                            </h2>
                            <ul className="list-disc">
                                {selectedCourses.map((course, index) => (
                                    <li
                                        key={index}
                                        className="flex justify-between items-center my-5"
                                    >
                                        <h2 className="text-base font-normal">
                                            {index + 1}. {course.name}
                                        </h2>
                                        {/* <h2 className="text-base font-normal">
                                            ${course.price}
                                        </h2> */}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                <hr />

                <div className="flex justify-between items-center my-5">
                    <h2 className="text-lg font-medium">Total Credit Hour:</h2>
                    <h2 className="text-lg font-medium">{totalCredit}</h2>
                </div>

                <hr />

                <div className="flex justify-between items-center my-5">
                    <h2 className="text-lg font-bold">Total Cost:</h2>
                    <h2 className="text-lg font-bold">${totalCost}</h2>
                </div>

                <hr />
            </div>
        </aside>
    );
};

export default Cart;
