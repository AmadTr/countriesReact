import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
            {/* Les images importées depuis la balise Img sont accessibles dans "Public" */}
            <img src="./logo192.png" alt="logo react" />
            <h3>React World</h3>
        </div>
    );
};

export default Logo;