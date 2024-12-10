"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/ui/Navbar"; 
import "./page.css";

const HomePage = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [unexplored, setUnexplored] = useState([]);
  const [bookRecommendations, setBookRecommendations] = useState([]);
  const [username, setUsername] = useState("User");

  const fetchMovies = async () => {
    const mockMovies = [
       {
         title: "Bahubali 2, The End",
         subtitle: "Drama • 2021",
         image: "bahu.jpeg",
       },
      {
        title: "Harry Potter",
        subtitle: "Sci-Fi • 2002",
        image: "harry.jpeg",
      },
      {
        title: "Guntur Kaaram",
        subtitle: "Drama • 2023",
        image: "guntur.jpeg",
      },
      {
        title: "Avengers",
        subtitle: "Action • 2022",
        image: "marvel.jpeg",
      },
      {
        title: "HIT3",
        subtitle: "Crime • 2023",
        image: "hit.jpeg",
      },
      {
        title: "John Wick",
        subtitle: "Action • 2023",
        image: "johnwick.jpeg",
      },
      {
        title: "kung fu Panda",
        subtitle: "Comedy • 2023",
        image: "kunfu.jpg",
      },
      {
        title: "Kalki",
        subtitle: "Sci-Fi • 2023",
        image: "kalki.jpeg",
      },
    ];

    setRecommendations(mockMovies);
    setTrending(mockMovies);
    setPopular(mockMovies);
    setUnexplored(mockMovies); 
    setBookRecommendations(mockMovies); 
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="home-page">
      <Navbar />
      
      <div className="search-section">
        <input type="text" placeholder="Search..." className="search-bar" />
        <select className="genre-select">
          <option>All Genres</option>
          <option>Action</option>
          <option>Book Recommended</option>
          <option>Crime</option>
          <option>Drama</option>
          <option>Documentaries</option>
          <option>Romance</option>
          <option>Unexplored Content</option>
        </select>
      </div>

      <br />
      <div className="welcome-section">
        <h1 className="welcome-title">Welcome, {username}!</h1> {/* Enlarged welcome message */}
      </div>
      
      <br />
      <div className="section" id="recommendations">
        <h2 className="section-title" style={{fontFamily: "revert-layer", fontWeight: "bold", fontSize: "2rem" }}>User Recommendations</h2>
        <div className="content-slider">
          {recommendations.map((movie, index) => (
            <div key={index} className="card">
              <img src={movie.image} alt={movie.title} className="card-image" />
              <div className="card-overlay">
                <h3 className="card-title">{movie.title}</h3>
                <p className="card-subtitle">{movie.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <br />
      <div className="section" id="trending">
        <h2 className="section-title" style={{fontFamily: "revert-layer", fontWeight: "bold", fontSize: "2rem"}}>Trending</h2>
        <div className="content-slider">
          {trending.map((movie, index) => (
            <div key={index} className="card">
              <img src={movie.image} alt={movie.title} className="card-image" />
              <div className="card-overlay">
                <h3 className="card-title">{movie.title}</h3>
                <p className="card-subtitle">{movie.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <br />
      <div className="section" id="popular">
        <h2 className="section-title" style={{fontFamily: "revert-layer", fontWeight: "bold", fontSize: "2rem" }}>Popular</h2>
        <div className="content-slider">
          {popular.map((movie, index) => (
            <div key={index} className="card">
              <img src={movie.image} alt={movie.title} className="card-image" />
              <div className="card-overlay">
                <h3 className="card-title">{movie.title}</h3>
                <p className="card-subtitle">{movie.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <br />
      <div className="section" id="unexplored">
        <h2 className="section-title" style={{fontFamily: "revert-layer", fontWeight: "bold", fontSize: "2rem" }}>Unexplored Content</h2>
        <div className="content-slider">
          {unexplored.map((movie, index) => (
            <div key={index} className="card">
              <img src={movie.image} alt={movie.title} className="card-image" />
              <div className="card-overlay">
                <h3 className="card-title">{movie.title}</h3>
                <p className="card-subtitle">{movie.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <br />
      <div className="section" id="book-recommendations">
        <h2 className="section-title" style={{fontFamily: "revert-layer", fontWeight: "bold", fontSize: "2rem" }}>Book Recommendations</h2>
        <div className="content-slider">
          {bookRecommendations.map((book, index) => (
            <div key={index} className="card">
              <img src={book.image} alt={book.title} className="card-image" />
              <div className="card-overlay">
                <h3 className="card-title">{book.title}</h3>
                <p className="card-subtitle">{book.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
