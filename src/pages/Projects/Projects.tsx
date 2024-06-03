import React from 'react';
// import AST from '/Users/rikio/Desktop/personal CS/rikiod.github.io/rikiosroom/src/assets/AST.png';


const Projects: React.FC = () => {
    return (
        <div className="about-container">
            <h1>projects</h1>


            <h3>Custom built Python compiler</h3>
            <em>April 2024</em>
            <ul>
                <li>Implemented lexical analysis of Python programs using Java’s JFlex and CUP, navigating RegEx grammars and using
state to recognize indents with accurate row and column recognition. Performed semantic analysis of parse tree, building
symbol table and type checking considering scope, global and nonlocal variables, classes, functions, and expressions.</li>
                <li>Output RISC-V machine code for properly typed parse tree using stack machine, completing full compilation of
program.</li>
            </ul>
            {/* <p>I learned a lot about the underlying logic of a computer program!</p> */}
            {/* <img src={AST} alt="AST tree"/> */}


            <br></br>
            <h3>Secure file storage application</h3>
            <em>November 2023</em>
            <ul>
                <li>Utilized symmetric and non-symmetric encryption to implement user initialize and log in functions, with ability to create,
load, append, send invitation, accept invitation, and revoke access to file. Ensured both confidentiality and integrity.</li>
                <li>Minimized complexity by recomputing necessary information instead of storing redundant data; flattened custom
encryption structs in Go to make storing/fetching easier. Employed fuzz testing to find additional security vulnerabilities.</li>
            </ul>
            {/* <p>I learned how tricky security can be. </p> */}
        

            <br></br>
            <h3>Mobile Developers of Berkeley</h3>
            <em>August 2021 - December 2021</em>
            <ul>
                <li>Developed sports media app for client project; implement account management, navigation bar, screen management, live
sports posts using React Native and Google Firebase SDK’s Authentication, Cloud Firestore, and Storage APIs.</li>
                <li>Built iMDB, a reference application to display movie details, equipped with search and filter function using React Native.</li>
                <li>Engineered social media app for 40+ club members as platform to post events with text and images. Implemented in Swift.</li>
                <li>Created a PokéDex app using SwiftUI, displaying 800+ Pokémon using separate screens with filtering capabilities.</li>
            </ul>
            {/* <p>I learned a lot about mobile development.</p> */}






        </div>
    );
};

export default Projects;