import React from 'react';
import "./appRating.css"
import Button from '../common/Button';

const getIosPrefix = () => {
    return (<img src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png"
        className="app-rating-icon"
    />
    );
};
const getAndroidPrefix = () =>{
    return (
        <img src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png"
        className="app-rating-icon"
        />
    )
}


const AppRating = () => {
    return (
        <div className="max-width flex app-rating">
            <div className="app-rating-block flex-col">
                <div className="flex">
                    <div className="app-rating-value flex flex-col">
                        4.8
                        <img src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
                            className="app-rating-stars"
                        />
                    </div>
                    <div className="app-rating-platform">
                        app<br />store
                    </div>
                </div>
                <div className="non-mobile">
                    <Button
                        buttonTaxt="Dowload the app"
                        customClass="app-rating-button"
                        prifix={getIosPrefix()}
                    />
                </div>
            </div>

            <div className="app-rating-block flex-col">
                <div className="flex">
                    <div className="app-rating-value flex flex-col">
                        4.8
                        <img src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
                            className="app-rating-stars"
                        />
                    </div>
                    <div className="app-rating-platform">
                        app<br />store
                    </div>
                </div>
                <div className="non-mobile">
                    <Button
                        buttonTaxt="Dowload the app"
                        customClass="app-rating-button"
                        prifix={getAndroidPrefix()}
                    />
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default AppRating