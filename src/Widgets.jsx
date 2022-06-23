import React from "react";
import Iframe from "react-iframe";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <Iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FArsenal.fc.korean&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="encrypted-media"
      />
    </div>
  );
}

export default Widgets;
