const TMDB_LINKS = {
    base_url: "https://api.themoviedb.org/3/",
    trending: "trending/",
    week: "/week?",
    popular: "/popular?",
    topRated: "/top_rated?",

    trending_movies: "trending/movie/week?",
    trending_tv: "trending/tv/week?",
    popular_movies: "movie/popular?",
    popular_tv: "tv/popular?",
    highestRated_movies: "movie/top_rated?",
    highestRated_tv: "tv/top_rated?",


    search: "search/",
    search_query: "&query=",
    
    language: "&language=it IT"
}

export const apiData = {
    TMDB: TMDB_LINKS,
}