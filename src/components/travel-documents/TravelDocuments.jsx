import React from 'react';
import './travel-documents.scss';

const TravelDocuments = ({ setPopup }) => {

    return (
        <div className="travel-documents">
            <div className="travel-documents__item">
                <div className="travel-documents__string">
                    <img src="./img/ukrainian_flag.png" alt="ukrainian flag" className="travel-documents__flag" />
                    <div className="travel-documents__country">Ukraine</div>
                </div>
                <div className="travel-documents__string">
                    <div className="travel-documents__code">FJ22346</div>
                    <div className="travel-documents__date">02.07.2020</div>
                </div>
            </div>
            <div className="travel-documents__item">
                <div className="travel-documents__string">
                    <img src="./img/british_flag.png" alt="british flag" className="travel-documents__flag" />
                    <div className="travel-documents__country">United Kingdom</div>
                </div>
                <div className="travel-documents__string">
                    <div className="travel-documents__code">FJ22346</div>
                    <div className="travel-documents__date" >02.07.2020</div>
                </div>
            </div>
            <div
                className="travel-documents__item add-passport-wrapper"
                onClick={() => setPopup(true)}
            >
                <div className="travel-documents__plus">+</div>
                <div className="travel-documents__text">Add New Passport</div>
            </div>
        </div>
    )
}

export default TravelDocuments;