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
  const [actionMovies, setActionMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  const [username, setUsername] = useState("");
  
  const [likedMovies, setLikedMovies] = useState([]);
  const [movieRatings, setMovieRatings] = useState({});

  const fetchMovies = async () => {
    const mockMovies = [
    
      { title: "Guntur Kaaram", subtitle: "Drama • 2023", image: "guntur.jpeg" },
      { title: "Mahanati", subtitle: "Drama • 2018", image: "mahanati.jpg" },
      { title: "Arjun Reddy", subtitle: "Drama • 2017", image: "arjunreddy.jpg" },
      { title: "C/o Kancharapalem", subtitle: "Drama • 2018", image: "cokancharapalem.jpg" },
      { title: "Jersey", subtitle: "Drama • 2019", image: "jersey.jpg" },
      { title: "Eega", subtitle: "Drama • 2012", image: "eega.jpg" },
      { title: "Taare Zameen Par", subtitle: "Drama • 2007", image: "taarezameenpar.jpg" },
      { title: "The Pursuit of Happyness", subtitle: "Drama • 2006", image: "pursuitofhappyness.jpg" },
      { title: "Forrest Gump", subtitle: "Drama • 1994", image: "forrestgump.jpg" },
      { title: "The Great Gatsby", subtitle: "Drama • 2013", image: "gatsby.jpg" },
      
      { title: "Baahubali: The Beginning", subtitle: "Action • 2015", image: "baahubali.jpg" },
      { title: "RRR", subtitle: "Action • 2022", image: "rrr.jpg" },
      { title: "Pushpa: The Rise", subtitle: "Action • 2021", image: "pushpa.jpg" },
      { title: "Saaho", subtitle: "Action • 2019", image: "saaho.jpg" },
      { title: "Akhanda", subtitle: "Action • 2021", image: "akhanda.jpg" },
      { title: "Saripodhaa Sanivaaram", subtitle: "Action • 2023", image: "saripodhaa.jpg" },
      { title: "Shershaah", subtitle: "Action • 2021", image: "shershaah.jpg" },
      { title: "Mad Max: Fury Road", subtitle: "Action • 2015", image: "madmax.jpg" },
      { title: "John Wick", subtitle: "Action • 2014", image: "johnwick.jpg" },
      { title: "The Dark Knight", subtitle: "Action • 2008", image: "darkknight.jpg" },
      
      { title: "The Social Dilemma", subtitle: "Documentary • 2020", image: "socialdilemma.jpg" },
      { title: "13th", subtitle: "Documentary • 2016", image: "13th.jpg" },
      { title: "Our Planet", subtitle: "Documentary • 2019", image: "ourplanet.jpg" },
      { title: "Jiro Dreams of Sushi", subtitle: "Documentary • 2011", image: "jiro.jpg" },
      { title: "Blackfish", subtitle: "Documentary • 2013", image: "blackfish.jpg" },
      { title: "Won’t You Be My Neighbor?", subtitle: "Documentary • 2018", image: "wontyoubemyneighbor.jpg" },
      { title: "Man on Wire", subtitle: "Documentary • 2008", image: "manonwire.jpg" },
      { title: "Free Solo", subtitle: "Documentary • 2018", image: "freesolo.jpg" },
      { title: "The Act of Killing", subtitle: "Documentary • 2012", image: "theactofkilling.jpg" },
      { title: "Apollo 11", subtitle: "Documentary • 2019", image: "apollo11.jpg" },
      { title: "He Named Me Malala", subtitle: "Documentary • 2015", image: "henamedmemalala.jpg" },
      { title: "The Cove", subtitle: "Documentary • 2009", image: "thecove.jpg" },
      
      
      { title: "Titanic", subtitle: "Romance • 1997", image: "titanic.jpg" },
      { title: "Geetha Govindam", subtitle: "Romance • 2018", image: "geethagovindam.jpg" },
      { title: "Before Sunrise", subtitle: "Romance • 1995", image: "beforesunrise.jpg" },
      { title: "Sita Ramam", subtitle: "Romance • 2022", image: "sitaramam.jpg" },
      { title: "The Notebook", subtitle: "Romance • 2004", image: "notebook.jpg" },
      { title: "Pride and Prejudice", subtitle: "Romance • 2005", image: "prideandprejudice.jpg" },
      { title: "La La Land", subtitle: "Romance • 2016", image: "lalaland.jpg" },
      { title: "Me Before You", subtitle: "Romance • 2016", image: "mebeforeyou.jpg" },
      { title: "The Fault in Our Stars", subtitle: "Romance • 2014", image: "faultinourstars.jpg" },
      { title: "Crazy Rich Asians", subtitle: "Romance • 2018", image: "crazyrichasians.jpg" },
      
      { title: "The Shawshank Redemption", subtitle: "Drama • 1994", image: "shawshank.jpg" },
      { title: "The Lord of the Rings: The Fellowship of the Ring", subtitle: "Fantasy • 2001", image: "lotr.jpg" },
      { title: "Pride and Prejudice", subtitle: "Romance • 2005", image: "prideandprejudice.jpg" },
      { title: "Harry Potter and the Sorcerer's Stone", subtitle: "Fantasy • 2001", image: "harrypotter.jpg" },
      { title: "To Kill a Mockingbird", subtitle: "Drama • 1962", image: "mockingbird.jpg" },
      { title: "The Great Gatsby", subtitle: "Drama • 2013", image: "gatsby.jpg" },
      { title: "Little Women", subtitle: "Drama • 2019", image: "littlewomen.jpg" },
      { title: "The Hunger Games", subtitle: "Action • 2012", image: "hungergames.jpg" },
      { title: "Gone Girl", subtitle: "Thriller • 2014", image: "gonegirl.jpg" },
      { title: "The Fault in Our Stars", subtitle: "Romance • 2014", image: "faultinourstars.jpg" },
      { title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", subtitle: "Fantasy • 2005", image: "narnia.jpg" },
      { title: "Life of Pi", subtitle: "Adventure • 2012", image: "lifeofpi.jpg" },
  
    ];
    const mockBookMovies = [
        { title: "The Shawshank Redemption", subtitle: "Drama • 1994", image: "shawshank.jpg" },
        { title: "The Lord of the Rings: The Fellowship of the Ring", subtitle: "Fantasy • 2001", image: "lotr.jpg" },
        { title: "Pride and Prejudice", subtitle: "Romance • 2005", image: "prideandprejudice.jpg" },
        { title: "Harry Potter and the Sorcerer's Stone", subtitle: "Fantasy • 2001", image: "harrypotter.jpg" },
        { title: "To Kill a Mockingbird", subtitle: "Drama • 1962", image: "mockingbird.jpg" },
        { title: "The Great Gatsby", subtitle: "Drama • 2013", image: "gatsby.jpg" },
        { title: "Little Women", subtitle: "Drama • 2019", image: "littlewomen.jpg" },
        { title: "The Hunger Games", subtitle: "Action • 2012", image: "hhungergames.jpg" },
        { title: "Gone Girl", subtitle: "Thriller • 2014", image: "gonegirl.jpg" },
        { title: "The Fault in Our Stars", subtitle: "Romance • 2014", image: "faultinourstars.jpg" },
        { title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", subtitle: "Fantasy • 2005", image: "narnia.jpg" },
        { title: "Life of Pi", subtitle: "Adventure • 2012", image: "lifeofpi.jpg" }, 
    ];

    setRecommendations(mockMovies.filter((movie) => movie.subtitle.includes("Drama")));
    setTrending(mockMovies.slice(0, 4));
    setPopular(mockMovies.slice(4));
    setUnexplored(mockMovies); 
    setBookRecommendations(mockBookMovies);
    setActionMovies(mockMovies.filter((movie) => movie.subtitle.includes("Action")));
    setRomanceMovies(mockMovies.filter((movie) => movie.subtitle.includes("Romance")));
    setDramaMovies(mockMovies.filter((movie) => movie.subtitle.includes("Drama")));
  };

  useEffect(() => {
    const user=localStorage.getItem("username");
    setUsername(user);
    fetchMovies();
  }, []);

  const handleLikeClick = (movieTitle) => {
    setLikedMovies((prevLikes) => {
      const updatedLikes = prevLikes.includes(movieTitle)
        ? prevLikes.filter((title) => title !== movieTitle)
        : [...prevLikes, movieTitle];
      return updatedLikes;
    });
  };

  const handleRatingChange = (movieTitle, rating) => {
    setMovieRatings((prevRatings) => ({
      ...prevRatings,
      [movieTitle]: rating,
    }));
  };
   
  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleGenreChange = (e) => setSelectedGenre(e.target.value);

  const filterMovies = (movies) => {
    return movies.filter((movie) => {
      const isMatchingGenre = selectedGenre === "All Genres" || movie.subtitle.includes(selectedGenre);
      const isMatchingSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
      return isMatchingGenre && isMatchingSearch;
    });
  };
  const renderSection = (title, data) => (
    <div className="section" id={title.toLowerCase().replace(" ", "-")}>
      <h2 className="section-title">{title}</h2>
      <div className="content-slider">
        {data.map((movie, index) => {
          const { title, subtitle, image } = movie;
          return (
            <div key={index} className="card">
              <img src={image} alt={title} className="card-image" />
              <div className="card-overlay">
                <h3 className="card-title">{title}</h3>
                <p className="card-subtitle">{subtitle}</p>
                <div className="card-actions">
                  <button
                    className={`like-btn ${likedMovies.includes(title) ? "liked" : ""}`}
                    onClick={() => handleLikeClick(title)}
                  >
                    {likedMovies.includes(title) ? "Liked" : "Like"}
                  </button>
                  <div className="star-rating">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`star ${i < (movieRatings[title] || 0) ? "filled" : ""}`}
                        onClick={() => handleRatingChange(title, i + 1)}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="home-page">
      <Navbar />
      
      <div className="search-section">
        <input type="text" placeholder="Search..." className="search-bar" />
        <select className="genre-select">
          <option>All Genres</option>
          <option>Action</option>
          <option>Book Recommended</option>
          <option>Dramas</option>
          <option>Documentaries</option>
          <option>Romance</option>
        </select>
      </div>

      <br />
      <div className="welcome-section">
        <h1 className="welcome-title">Welcome, {username}!</h1>
      </div>
      
      {renderSection("User Recommendations", recommendations)}
      {renderSection("Trending", trending)}
      {renderSection("Popular", popular)}
      {renderSection("Unexplored Content", unexplored)}
      {renderSection("Book Recommended", bookRecommendations)}
      {renderSection("Action", actionMovies)}
      {renderSection("Romance", romanceMovies)}
      {renderSection("Drama", dramaMovies)}
    </div>
  );
};

export default HomePage;
