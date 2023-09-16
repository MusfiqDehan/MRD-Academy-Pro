import React from "react";
import { Icon } from "@iconify/react";

const Card = ({ course, handleAddToCart }) => {
    const { image, name, description, price, credit } = course;

    return (
        <div className="card w-80 bg-base-100 shadow-xl mb-5">
            <figure>
                <img className="" src={image} alt="Course Thumbnail" />
            </figure>
            <div className="card-body text-center">
                <h2 className="card-title mx-auto">{name}</h2>
                <p>{description}</p>
                <div className="flex justify-between my-5">
                    <h3 className="flex items-center">
                        <Icon className="text-xl" icon="clarity:dollar-line" />
                        Price: <span className="age">{price}</span>
                    </h3>
                    <h3 className="flex items-center">
                        <Icon
                            className="text-xl mr-1"
                            icon="ion:book-outline"
                        />
                        Credit: <span className="county">{credit}hr</span>
                    </h3>
                </div>
                <div className="card-actions justify-center mt-5">
                    <button
                        onClick={() => handleAddToCart(course)}
                        className="btn btn-primary w-full"
                    >
                        Select Course
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
