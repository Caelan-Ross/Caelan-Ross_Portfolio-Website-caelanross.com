import * as React from 'react';
import Box from '@mui/material/Box';

const Projects = () => {
    return (
        <>
        <h2>Projects:</h2>
            {/* First Project */}
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              paddingLeft={10}
              minHeight="10vh"
            >
              <h4 justifyContent="center">Protection Product Cost Sheets | First Canadian Insurance – Internal</h4>
            </Box>
            <h5>
              Overview
            </h5>
            <Box style={{ paddingLeft: 20 }}>
              <p>
              This project was of a larger scale for a singular developer, where I was to take wireframes of blank ‘Cost Sheets’ and convert
              them into an actively Database connected webpage in Next.TS as to not have to re-make separate PDFs for each different Cost
              Sheet and pricing update. With a need for multiple different edge cases for styling on each of the different variants of the Cost
              Sheets for each separate product. This addition saves the company money each time there is a need for adjustments to
              existing pricing structures for existing Cost Sheets in needing to update the dollar amounts and term lengths. Along with saving
              money and time when implementing new price groups entirely and needing entire new Cost Sheet documents. As well as
              providing dealers a singular place to access pricing for all different products they have access to.
              </p>
            </Box>
            <h5>
              Tools & Techniques
            </h5>
            <Box style={{ paddingLeft: 20 }}>
              <p>
                <b>Tools:</b> Typescript, Next.TS, ESLint, SQL, MUI, Visual Studio Code.
              </p>
              <p>
                <b>Techniques:</b> Complex custom objects, Database connectivity, Re-usable components, Complex styling.
              </p>
            </Box>
            <h5>
              Technical Operation Overview
            </h5>
            <Box style={{ paddingLeft: 20 }}>
              <p>
              The webpage would load with a url query selector specifying the dealer's identification number to grab the associated
              database information, along with an optional selector to specify if there was only a specific Cost Sheet to view. The page would
              then send an SQL query to the database and sort/organize all the data into useful objects with sub-maps. After the front-end
              receives the object list, it sends them off to their respective Cost Sheet components where many different methods of sifting
              through the data is used to represent the information of each cost sheet appropriately. Of which, it also uses many different
              re-usable components for re-used sections of each Cost Sheet such as the header, footer, and certain tables.
              </p>
            </Box>
            {/* Seccond Project */}
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              paddingLeft={10}
              minHeight="10vh"
            >
              <h4 justifyContent="center">Monthly Report Generator | CreativeMITE – Internal</h4>

            </Box>
            <h5>
              Overview
            </h5>
            <Box style={{ paddingLeft: 20 }}>
              <p>
                This project was to take the workload of another team member and automate as much of the process as possible to cut down on the large amount of time it took
                to make eight reports for different hotels every month. This saved an average of 1500$ minimum each month on the reports alone, not to mention the increased
                potential revenue from SEO improvements.
              </p>
            </Box>
            <h5>
              Tools & Techniques
            </h5>
            <Box style={{ paddingLeft: 20 }}>
              <p>
                <b>Tools:</b> C#, Windows Terminal, Visual Studio, Crazy Egg, Visual Basic for Applications.
              </p>
              <p>
                <b>Techniques:</b> Automated File Extraction and automated File Tree Creation.
              </p>
            </Box>
            <h5>
              Technical Operation Overview
            </h5>
            <Box style={{ paddingLeft: 20 }}>
              <p>
                The application would take in several .Zip folders the user was provided automatically from Crazy Egg and move them into the processing folder.
                After launching the application, it would extract, sort, and operate on them by digging into the Excel sheets within those .Zip folders and pasting
                the data into a Master Excel sheet with pre-written operations to generate a table for use within the report. Then after a Master has been made for
                each page tracked, the final tables are copied into a Master .Docx file with pre-formatting. Then when the user can input the final details it is unable
                to grab automatically, doing the entire 8 hotels in ~3 minutes when manually it took around 45 minutes per website.
              </p>
            </Box>
            {/* Third Project */}
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              paddingLeft={10}
              minHeight="10vh"
            >
              <h4 justifyContent="center">Capstone Project | University - <a href='https://github.com/Caelan-Ross/FSWD-Capstone-Project' rel="noreferrer" target="_blank">Public</a></h4>

            </Box>
            <h5>
              Overview
            </h5>
            <Box style={{ paddingLeft: 20 }}>
              <p>
              This project was a collaboration between those within the “Full-Stack Web Development Capstone” class. It is a culmination of all the work 
              each of us has done throughout our tenure within the program that worked with a local company “The Battery Doctor” who was seeking a customer and 
              invoice management system.
              </p>
            </Box>
            <h5>
              Tools & Techniques
            </h5>
            <Box style={{ paddingLeft: 20 }}>
              <p>
                <b>Tools:</b> C#, Asp.Net Core, APIs, Next.JS, MariaDB, Entity Framework, MUI, Axios.
              </p>
              <p>
                <b>Techniques:</b> C# Back-end through API endpoints, Next.JS Front-end, MUI for Enhanced Styles, Data Exporting to Excel.
              </p>
            </Box>
            <h5>
              Technical Operation Overview
            </h5>
            <Box style={{ paddingLeft: 20 }}>
              <p>
                The application would allow the user to log in and create new customers, which like with all C.R.U.D actions within it would send 
                a PUT to the C# back-end where the data would be handled and operate on the database from. The user could then create products and 
                set their inventory amounts, along with checking out a customer by attaching the item/s to the customer and creating an invoice that 
                would identify with a unique SIN on the physical unit which is entered for purposes of returns/warranty.
              </p>
            </Box>
        </>
    );
};

export default Projects;