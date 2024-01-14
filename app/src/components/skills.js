import React, { useState, useEffect } from 'react';

const Skills = () => {
    const [yearsPassed, setYearsPassed] = useState(null);

    useEffect(() => {
        // Set your target date
        const targetDate = new Date('2024-01-13'); // Replace with your desired date

        // Get the current date
        const currentDate = new Date();

        // Calculate the difference in milliseconds
        const timeDifference = currentDate - targetDate;

        // Calculate the difference in years
        const years = Math.floor(timeDifference / (365.25 * 24 * 60 * 60 * 1000));

        setYearsPassed(years);
    }, []);

    return (
        <>
            <h2>Skills:</h2>
            {yearsPassed !== null && (
            <ul style={{fontSize:18}}>
                <li>{yearsPassed + 5}+ Years' Experience in JavaScript, HTML5, CSS, Thorough Code Documentation</li>
                <li>{yearsPassed + 4}+ Years' Experience in C#, ASP.net, .NET Core MVC, Python, Visual Studio, Git/Github</li>
                <li>{yearsPassed + 2}+ Years' Experience in React, MySQL, Entity Framework, MariaDB, BitBucket, SourceTree</li>
                <li>{yearsPassed + 1}+ Years' Experience in Next.JS, C++, Java</li>
            </ul>
            )}
        </>
    );
};

export default Skills;