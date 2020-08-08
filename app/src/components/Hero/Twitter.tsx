import React, { useEffect } from 'react'

let isLoadWidgets = false;

export const Twitter = () => {
  React.useEffect(() => {
    if(!isLoadWidgets) {
      const tag = document.createElement("script");
      tag.setAttribute("src", "https://platform.twitter.com/widgets.js")
      document.body.appendChild(tag);
      isLoadWidgets = true;
    }
  }, []);
  return (
    <div className="tw-section">
      <div className="tw-container">
        <div className="tw-header">
          <h3 className="tw-header-text">Official Twitter</h3>
        </div>
        <div className="tw-implement">
        <a
          className="twitter-timeline"
          data-width="250"
          data-height="350"
          data-chrome="noheadernofooternoborders"
          href="https://twitter.com/melissa_2434?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Eprofile%3Amelissa_2434&ref_url=https%3A%2F%2Fpublish.twitter.com%2F%23"
        />
        </div>
      </div>
    </div>
  );
};