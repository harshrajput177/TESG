import React from "react";
import "../../Style/Blogs.css";

const cards = [
  {
    date: "Dec 07, 2023",
    author: "Mariel Pelaez",
    title: "Programmatic SEO: What Is It and Why Your Business...",
    category: "SEO",
    img: "https://cdn-icons-png.flaticon.com/512/2922/2922522.png", // replace with your own image
  },
  {
    date: "Dec 05, 2023",
    author: "Arrabon Toribio",
    title: "7 Tips for Creating Compelling Visual Conten...",
    category: "Thrive News",
    img: "https://cdn-icons-png.flaticon.com/512/2922/2922522.png", // replace with your own image
  },
  {
    date: "Dec 01, 2023",
    author: "Dolly Kate Ching",
    title: "5 Signs It’s Time for a Website Redesign",
    category: "Web Design",
    img: "https://cdn-icons-png.flaticon.com/512/2922/2922522.png", // replace with your own image
  },
];

const EditorsPicks = () => {
  return (
    <div className="Blog-editors-picks-tesg">
      <h2>Editor’s Picks</h2>
      <div className="Blog-cards-tesg">
        {cards.map((card, index) => (
          <div className="Blog-card-tesg" key={index}>
            <div className="Blog-card-img-tesg">
              <img src={card.img} alt="card" />
            </div>
            <div className="Blog-card-content-tesg">
              <div className="Blog-card-meta-tesg">
                <span>{card.date}</span>
                <span>{card.author}</span>
              </div>
              <h3>{card.title}</h3>
              <div className="Blog-tags-tesg">
                <span className="Blog-tag-tesg">{card.category}</span>
                <span className="Blog-tag-tesg">...</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorsPicks;