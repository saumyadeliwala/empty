import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import { FaUser, FaStar } from "react-icons/fa";

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(2);

    const testimonials = [
        {
            name: "Ashwini",
            review: "This restaurant, conveniently located near Versova metro station, has a relaxing vibe with live TV projection. The Punjabi Chole with Jeera Rice and Veg Diwani Handi were delicious. The Cilantro Fizz Mocktail added a refreshing touch.",
            rating: 5
        },
        {
            name: "Ramila",
            review: "Had lunch at this vegetarian place with a lovely ambiance and comfortable wooden seating. The Mexican Meal and Spicy Guacamole Tarts were fantastic. The Guava Mary Mocktail was a refreshing drink to wash down the food.",
            rating: 5
        },
        {
            name: "Rajesh",
            review: "Great experience with an amazing view. The Thai Green Curry and Sushi were top-notch. The Blue Lagoon Mocktail is a must-try.",
            rating: 4
        },
        {
            name: "Priya",
            review: "Loved the peaceful atmosphere. The Paneer Tikka and Butter Naan were excellent. The Mango Tango Mocktail was delightful.",
            rating: 5
        },
        {
            name: "Dwvil",
            review: "I had a fun time with drinks and fast food items here. The Litchi Juice and Spicy Veg Hakka Noodles with Stir-Fried Gravy were my favorites. The overall quality of service, ambience, and taste at this place was excellent. It was the perfect place for a spontaneous dinner with my best friend.",
            rating: 5
        },
        {
            name: "Zuba",
            review: "This open-air restaurant had a pleasant vibe and quick bites. I loved the Mozzarella Sticks and Apple Juice. The polite staff and nice music selection made it a recommended spot for vegetarians, and I can't wait to go back with my friends.",
            rating: 5
        },
    ];

    useEffect(() => {
        const updateItemsPerSlide = () => {
            if (window.innerWidth <= 480) {
                setItemsPerSlide(1);
            } else if (window.innerWidth <= 768) {
                setItemsPerSlide(1);
            } else {
                setItemsPerSlide(2);
            }
        };

        updateItemsPerSlide();
        window.addEventListener('resize', updateItemsPerSlide);

        return () => window.removeEventListener('resize', updateItemsPerSlide);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + itemsPerSlide) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - itemsPerSlide + testimonials.length) % testimonials.length);
    };

    return (
        <div className='testimonials'>
            <div className="testimonials_content">
                <div className="testimonials_header">
                    <h1>Reviews</h1>
                </div>
                <div className="reviews" style={{ transform: `translateX(-${(currentIndex / itemsPerSlide) * 100}%)` }}>
                    {testimonials.map((testimonial, index) => (
                        <div className="testimonials-item" key={index}>
                            <div className="info">
                                <i><FaUser /></i>
                                <div className="text-box">
                                    <h3 className="name">{testimonial.name}</h3>
                                </div>
                            </div>
                            <p>{testimonial.review}</p>
                            <div className="rating">
                                {[...Array(testimonial.rating)].map((star, i) => (
                                    <i key={i}><FaStar /></i>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="nav-buttons">
                    <button onClick={prevSlide}>Previous</button>
                    <button onClick={nextSlide}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
