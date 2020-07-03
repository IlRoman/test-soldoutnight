import React, { useState } from 'react';
import { Route, Link, useLocation, Redirect } from 'react-router-dom';
import './app.scss';
import TravelDocuments from '../travel-documents/TravelDocuments'
import Popup from '../popup/Popup'
import TravelPreferences from '../travel-preferences/TravelPreferences'

const App = () => {
    const [popupIsOpened, setPopup] = useState(false)
    let location = useLocation()

    return (
        <>
            {popupIsOpened &&
                <div className="popup-wrapper">
                    <div className="bg-layer"></div>
                    <Popup
                        setPopup={setPopup}
                    />
                </div>}

            <header className="header"></header>
            <main className="main">
                <div className="passport">
                    <div className="passport__image"></div>
                    <div className="passport__code"></div>
                </div>
                <div className="navigation-wrapper">
                    <div className="navigation">
                        <div
                            className={
                                location.pathname === '/travel-documents'
                                    ? "navigation__item navigation__item_active"
                                    : "navigation__item"}>
                            <Link
                                to="/travel-documents"
                                className={
                                    location.pathname === '/travel-documents'
                                        ? "link link_active"
                                        : "link"}
                            >Travel Documents
                            </Link>
                        </div>
                        <div
                            className={
                                location.pathname === '/loyalty-programs'
                                    ? "navigation__item navigation__item_active"
                                    : "navigation__item"}>
                            <Link
                                to={popupIsOpened ? '/travel-documents' : "/loyalty-programs"}
                                className={
                                    location.pathname === '/loyalty-programs'
                                        ? "link link_active"
                                        : "link"}
                            >Loyalty Programs
                            </Link>
                        </div>
                        <div
                            className={
                                location.pathname === '/travel-preferences'
                                    ? "navigation__item navigation__item_active"
                                    : "navigation__item"}>
                            <Link
                                to={popupIsOpened ? '/travel-documents' : "/travel-preferences"}
                                className={
                                    location.pathname === '/travel-preferences'
                                        ? "link link_active"
                                        : "link"}
                            >Travel Preferences
                            </Link>
                        </div>
                    </div>
                    <Route exact path="/">
                        <Redirect to="/travel-documents" />
                    </Route>
                    <Route path="/travel-documents">
                        <TravelDocuments setPopup={setPopup} />
                    </Route>
                    <Route path="/loyalty-programs">
                        <div className="loyalty-programs"></div>
                    </Route>
                    <Route path="/travel-preferences">
                        <TravelPreferences />
                    </Route>
                </div>
            </main>
            <footer className="footer"></footer>
        </>
    )
}

export default App;