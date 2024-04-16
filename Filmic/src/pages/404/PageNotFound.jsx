import React from "react";

import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const PageNotFound = () => {
    return (
        <div className="pageNotFound">
            <ContentWrapper>
                <span className="bigText">404</span>
                <span className="smallText">Feeling Lost? at least you found a pretty cool error page, right?</span>
                <span className="smallText">How about searching something else?</span>
            </ContentWrapper>
        </div>
    );
};

export default PageNotFound;
