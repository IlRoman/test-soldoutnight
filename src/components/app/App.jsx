import React, { useState, useEffect } from 'react';
import { Route, Link, useLocation } from 'react-router-dom';
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
                (<div className="wrapper">
                    <div className="bg-layer"></div>
                    <Popup
                        setPopup={setPopup}
                    />
                </div>)
            }

            <header className={popupIsOpened ? 'header dark' : "header"}></header>
            <main className="main">
                <div className={popupIsOpened ? 'passport passport-dark' : 'passport'}>
                    <div className={popupIsOpened ? 'passport__image dark' : 'passport__image'}>

                    </div>
                    <div className={popupIsOpened ? 'passport__code dark' : 'passport__code'}>

                    </div>
                </div>
                <div className="navigation-wrapper">
                    <div className="navigation">
                        <div
                            className={location.pathname === '/' ? "navigation__item active" : "navigation__item"}
                        >
                            <Link
                                to="/"
                                className="link"
                            >
                                Travel Documents
                            </Link>
                        </div>
                        <div
                            className={location.pathname === '/loyalty-programs' ? "navigation__item active" : "navigation__item"}
                        >
                            <Link
                                to={popupIsOpened ? '/' : "/loyalty-programs"}
                                className="link"
                            >
                                Loyalty Programs
                            </Link>
                        </div>
                        <div
                            className={location.pathname === '/travel-preferences' ? "navigation__item active" : "navigation__item"}
                        >
                            <Link
                                to={popupIsOpened ? '/' : "/travel-preferences"}
                                className="link"
                            >
                                Travel Preferences
                            </Link>
                        </div>
                    </div>
                    <Route exact path="/">
                        <TravelDocuments
                            setPopup={setPopup}
                        />
                    </Route>
                    <Route path="/loyalty-programs">
                        <div className="loyalty-programs"></div>
                    </Route>
                    <Route path="/travel-preferences">
                        <TravelPreferences />
                    </Route>
                </div>
            </main>
            <footer className={popupIsOpened ? 'footer dark' : "footer"}></footer>
        </>
    )
}

export default App;