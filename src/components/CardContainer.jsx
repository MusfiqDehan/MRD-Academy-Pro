import Card from "./Card";

const CardContainer = ({ allCourses, handleAddToCart }) => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1 w-3/4">
            {allCourses.length > 0 ? (
                allCourses.map((course) => {
                    return (
                        <Card
                            key={course.id}
                            course={course}
                            handleAddToCart={handleAddToCart}
                        />
                    );
                })
            ) : (
                <div className="loader-container"></div>
            )}
        </section>
    );
};

export default CardContainer;
