import React, { useEffect, useRef } from 'react';
import './Food.css';

const Food = () => {
  const detailRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    const currentDetailRef = detailRef.current;

    if (currentDetailRef) {
      observer.observe(currentDetailRef);
    }

    return () => {
      if (currentDetailRef) {
        observer.unobserve(currentDetailRef);
      }
    };
  }, []);

  return (
    <div className='food'>
      <div className="food_detail" ref={detailRef}>
        <h1>
          Menu
        </h1>

        <div className="images">
          <div className="menu_img">
            <div className="menu_items">
              <img src="assets/coffee/coffee.jpg" alt="" />
              <img src="assets/coffee/coldcoffee.jpg" alt="" />
              <img src="assets/coffee/tea.jpg" alt="" />
              <img src="assets/dessert/fudge.jpg" alt="" />
              <img src="assets/mains/hummus.jpg" alt="" />
              <img src="assets/mains/nachos.jpg" alt="" />
              <img src="assets/mains/noodles.jpg" alt="" />
              <img src="assets/mains/paneer.jpg" alt="" />
              <img src="assets/mains/pasta.jpg" alt="" />
            </div>
            <div className="menu_items">
              <img src="assets/coffee/coffee.jpg" alt="" />
              <img src="assets/coffee/coldcoffee.jpg" alt="" />
              <img src="assets/coffee/tea.jpg" alt="" />
              <img src="assets/dessert/fudge.jpg" alt="" />
              <img src="assets/mains/hummus.jpg" alt="" />
              <img src="assets/mains/nachos.jpg" alt="" />
              <img src="assets/mains/noodles.jpg" alt="" />
              <img src="assets/mains/paneer.jpg" alt="" />
              <img src="assets/mains/pasta.jpg" alt="" />
            </div>
          </div>

          <div className="menu_img reverse">
            <div className="menu_items reverse">
              <img src="assets/mains/pavbhaji.jpg" alt="" />
              <img src="assets/mains/ratatouille.jpg" alt="" />
              <img src="assets/mains/sandwich.jpg" alt="" />
              <img src="assets/mocktails/mocktails.jpg" alt="" />
              <img src="assets/soup/Cold Spanish Gazpacho Soup__1.jpg" alt="" />
              <img src="assets/soup/Roasted Pumpkin Soup__2.jpg" alt="" />
              <img src="assets/salad/feta.jpg" alt="" />
              <img src="assets/salad/popcorn.jpg" alt="" />
              <img src="assets/salad/fries.jpg" alt="" />
            </div>
            <div className="menu_items reverse">
              <img src="assets/mains/pavbhaji.jpg" alt="" />
              <img src="assets/mains/ratatouille.jpg" alt="" />
              <img src="assets/mains/sandwich.jpg" alt="" />
              <img src="assets/mocktails/mocktails.jpg" alt="" />
              <img src="assets/soup/Cold Spanish Gazpacho Soup__1.jpg" alt="" />
              <img src="assets/soup/Roasted Pumpkin Soup__2.jpg" alt="" />
              <img src="assets/salad/feta.jpg" alt="" />
              <img src="assets/salad/popcorn.jpg" alt="" />
              <img src="assets/salad/fries.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="buttons">
          <button>
            <a href="https://drive.google.com/file/d/1uDj9Xx3tSq1TnmDwrbtPd70q0aJPUMQ5/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Menu</a>
          </button>
          
          <button>
            <a href="https://www.zomato.com/mumbai/sirocco-versova" target="_blank" rel="noopener noreferrer">Order Online</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Food;
