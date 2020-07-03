import React, { useState } from 'react';
import './travel-preferences.scss';
import { FaStar } from 'react-icons/fa';

const TravelPreferences = () => {
    const [firstRating, setFirstRating] = useState(null);
    const [firstRatingHover, setFirstRatingHover] = useState(null);

    const [secondRating, setSecondRating] = useState(null);
    const [secondRatingHover, setSecondRatingHover] = useState(null);

    const [thirdRating, setThirdRating] = useState(null);
    const [thirdRatingHover, setThirdRatingHover] = useState(null);

    const [fourthRating, setFourthRating] = useState(null);
    const [fourthRatingHover, setFourthRatingHover] = useState(null);

    const [fifthRating, setFifthRating] = useState(null);
    const [fifthRatingHover, setFifthRatingHover] = useState(null);

    return (
        <div className="preferences">
            <div className="preferences__header">
                <div className="preferences__header-text">Preffered Airlines</div>
                <input type="text" placeholder="Add airline" disabled={true} className="preferences__header-input"></input>
            </div>
            <div className="preferences__list">
                <div className="preferences__list-item">Singapore Airlines</div>
                <div className="preferences__list-item">Quatar Airways</div>
                <div className="preferences__list-item">ANA All Nippon Airlines</div>
                <div className="preferences__list-item">Emirates</div>
            </div>
            <div className="preferences__header">
                <div className="preferences__header-text">Preffered Hotel Brands</div>
                <input type="text" placeholder="Add Hotel Brands" disabled={true} className="preferences__header-input" />
            </div>
            <div className="preferences__list">
                <div className="preferences__list-item">Hillton</div>
                <div className="preferences__list-item">Westine</div>
                <div className="preferences__list-item">Four Seasons</div>
                <div className="preferences__list-item">Ritz-Carlton</div>
            </div>
            <div className="preferences__footer-text">Preffered by stars</div>
            <div className="rating-wrapper">
                <div className="rating first">
                    <input type="checkbox" />
                    {[...Array(5)].map((elem, index) => {
                        const ratingValue = index + 1
                        return (
                            <label key={index}>
                                <input
                                    type="radio"
                                    name="rating"
                                    className="rating__input"
                                    value={ratingValue}
                                    onClick={() => setFirstRating(ratingValue)}
                                />
                                <FaStar
                                    className="star"
                                    size={15}
                                    color={ratingValue <= (firstRatingHover || firstRating) ? "#ffc107" : "#e4e5e9"}
                                    onMouseEnter={() => setFirstRatingHover(ratingValue)}
                                    onMouseLeave={() => setFirstRatingHover(null)}
                                />
                            </label>
                        )
                    })}
                </div>
                <div className="rating second">
                    <input type="checkbox" />
                    {[...Array(5)].map((elem, index) => {
                        const ratingValue = index + 1
                        return (
                            <label key={index}>
                                <input
                                    type="radio"
                                    name="rating"
                                    className="rating__input"
                                    value={ratingValue}
                                    onClick={() => setSecondRating(ratingValue)}
                                />
                                <FaStar
                                    className="star"
                                    size={15}
                                    color={ratingValue <= (secondRatingHover || secondRating) ? "#ffc107" : "#e4e5e9"}
                                    onMouseEnter={() => setSecondRatingHover(ratingValue)}
                                    onMouseLeave={() => setSecondRatingHover(null)}
                                />
                            </label>
                        )
                    })}
                </div>
                <div className="rating third">
                    <input type="checkbox" />
                    {[...Array(5)].map((elem, index) => {
                        const ratingValue = index + 1
                        return (
                            <label className="first-rating" key={index}>
                                <input
                                    type="radio"
                                    name="rating"
                                    className="rating__input"
                                    value={ratingValue}
                                    onClick={() => setThirdRating(ratingValue)}
                                />
                                <FaStar
                                    className="star"
                                    size={15}
                                    color={ratingValue <= (thirdRatingHover || thirdRating) ? "#ffc107" : "#e4e5e9"}
                                    onMouseEnter={() => setThirdRatingHover(ratingValue)}
                                    onMouseLeave={() => setThirdRatingHover(null)}
                                />
                            </label>
                        )
                    })}
                </div>
                <div className="rating fourth">
                    <input type="checkbox" />
                    {[...Array(5)].map((elem, index) => {
                        const ratingValue = index + 1
                        return (
                            <label className="first-rating" key={index}>
                                <input
                                    type="radio"
                                    name="rating"
                                    className="rating__input"
                                    value={ratingValue}
                                    onClick={() => setFourthRating(ratingValue)}
                                />
                                <FaStar
                                    className="star"
                                    size={15}
                                    color={ratingValue <= (fourthRatingHover || fourthRating) ? "#ffc107" : "#e4e5e9"}
                                    onMouseEnter={() => setFourthRatingHover(ratingValue)}
                                    onMouseLeave={() => setFourthRatingHover(null)}
                                />
                            </label>
                        )
                    })}
                </div>
                <div className="rating fifth">
                    <input type="checkbox" />
                    {[...Array(5)].map((elem, index) => {
                        const ratingValue = index + 1
                        return (
                            <label className="first-rating" key={index}>
                                <input
                                    type="radio"
                                    name="rating"
                                    className="rating__input"
                                    value={ratingValue}
                                    onClick={() => setFifthRating(ratingValue)}
                                />
                                <FaStar
                                    className="star"
                                    size={15}
                                    color={ratingValue <= (fifthRatingHover || fifthRating) ? "#ffc107" : "#e4e5e9"}
                                    onMouseEnter={() => setFifthRatingHover(ratingValue)}
                                    onMouseLeave={() => setFifthRatingHover(null)}
                                />
                            </label>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TravelPreferences;