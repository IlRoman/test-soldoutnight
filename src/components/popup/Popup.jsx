import React from 'react';
import './popup.scss';

const Popup = ({ setPopup }) => {
    return (
        <div className="popup">
            <div className="popup__header">
                <div className="popup__header-text">
                    Add new passport
            </div>
                <button
                    className="popup__close-button"
                    onClick={() => setPopup(false)}
                >+
                </button>
            </div>
            <div className="popup__input-wrapper">
                <div className="popup__input-container">
                    <input type="text" placeholder="First Name" className="popup__input" />
                </div>
                <div className="popup__input-container">
                    <input type="text" placeholder="Last Name" className="popup__input" />
                </div>
                <div className="popup__input-container">
                    <input type="text" placeholder="Passport number" className="popup__input" />
                </div>
                <div className="popup__input-container">
                    <input type="text" placeholder="Passport Country" className="popup__input" />
                </div>
                <div className="popup__input-container">
                    <input type="text" placeholder="Passport Expiration Date" className="popup__input" />
                </div>
                <div className="popup__input-container">
                    <input type="text" placeholder="Nationality" className="popup__input" />
                </div>
            </div>
            <button
                className="popup__save-button"
                onClick={() => setPopup(false)}
            > Save
            </button>
        </div>
    )
}

export default Popup;