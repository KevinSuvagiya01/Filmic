import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";

import useFetch from "../../../hooks/useFetch";

import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [greetingsTitle, setGreetingsTitle] = useState("");
    const [placeHolder, setPlaceholder] = useState("");

    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home);
    const { data, loading } = useFetch("/movie/upcoming");
    const greetings = [
        "Welcome, Explorer!",
        "Unleash.",
        "Cue the binge.",
        "Ready to delve?",
        "Stream on!",
        "Popcorn time?",
        "Binge brigade?",
        "Plot twist incoming.",
        "Obsessed yet?",
        "Down the rabbit hole?",
        "The multiverse awaits.",
        "Binge-worthy vibes.",
        "Snack attack?",
        "Remote control, please.",
        "Let's get lost.",
        "Lights, camera, explore!",
        "Superhero status: Unlocked.",
        "Fantasy awaits."
    ];
    
    const placeholders = [
        "Unearth hidden gems...",
        "What adventure awaits?",
        "Your next obsession starts here.",
        "Seek and you shall find...",
        "Unravel the multiverse ",
        "Where will your curiosity lead you?",
        "Down the rabbit hole?",
        "Millions of stories waiting to be discovered.",
        "Your cinematic journey begins here.",
        "Prepare to be transported.",
        "What will you explore today?",
        "Popcorn time?",
        "Binge brigade, assemble!",
        "Feeling indecisive? We got you.",
        "Need a screen escape? Search away!",
        "Let's get lost in a story.",
        "May the odds be ever in your search.",
        "Feeling a drama attack? Search for your fix!",
        "Snack attack? We have the movies!",
        "Remote control, please.",
        "Feeling funny? Search for comedies!",
        "Explore by genre, director, or actor.",
        "Find your perfect watchlist match.",
        "Discover movies & web series you'll love.",
        "Search for award-winning content.",
        "Millions of titles at your fingertips.",
        "Refine your search with filters.",
        "Find hidden classics and new releases.",
        "Search for specific characters or keywords.",
        "Explore a world of entertainment possibilities.",
        "Immerse yourself in a vast library of content.",
        "Unleash your inner cinephile. Search now!",
        "Fuel your fandom. Start exploring.",
        "Dive deeper. Search for your next favorite.",
        "Get ready to binge. What will you watch?",
        "Let the search begin!",
        "Ignite your movie marathon. Search now!",
        "Find your next favorite show. Search away!",
        "Embark on your cinematic adventure. Search!",
        "Find your next movie/web series! ",
        "Feeling ? Search for inspiration!",
        "Let's get this party started . Search away!",
        "Need a good cry ? We have the movies!",
        "Feeling scared ? Search for thrillers!",
        "Time for a laugh ? Search for comedies!",
        "Feeling adventurous ? Explore new worlds!",
        "Unleash your inner detective ️‍♀️. Search mysteries!",
        "Feeling nostalgic ? Search classic movies!",
        "Let your imagination run wild . Search fantasy!"
      ];
      

    useEffect(() => {
        const randomGreetingIndex = Math.floor(Math.random() * greetings.length);
        setGreetingsTitle(greetings[randomGreetingIndex]);
      }, []);

    useEffect(() => {
        const randomGreetingIndex = Math.floor(Math.random() * placeholders.length);
        setPlaceholder(placeholders[randomGreetingIndex]);
      }, []);

    useEffect(() => {
        const bg =
            url.backdrop +
            data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg);
    }, [data]);

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }
    };

    return (
        <div className="heroBanner">
            {!loading && (
                <div className="backdrop-img">
                    <Img src={background} />
                </div>
            )}

            <div className="opacity-layer"></div>
            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">{greetingsTitle}</span>
                    <span className="subTitle">
                    Dive in! Millions of movies & web series waiting to be discovered..
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder= {placeHolder}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                        <button>Search</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default HeroBanner;
