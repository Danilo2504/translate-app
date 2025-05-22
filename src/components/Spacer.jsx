import React from "react";

const Spacer = ({height = 30, display="block"}) => {
   return <div style={{ height: `${height}px`, display: `${display}`, width: '100%' }}></div>;
};

export default Spacer;
