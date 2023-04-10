import styles from "../src/styles/App.module.css";
import Write from "./Components/Blogs/Write";
import Land from "./Components/Landingpage/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Post from "./Components/Home/Post";
import Admin from "./Components/Dashboard/Admin";

function App() {
  const post = {
    title: "How to master Javascript",
    content: `JavaScript (/ˈdʒɑːvəskrɪpt/), often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.

        JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.[10] It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).
        
        The ECMAScript standard does not include any input/output (I/O), such as networking, storage, or graphics facilities. In practice, the web browser or other runtime system provides JavaScript APIs for I/O.
        
        JavaScript engines were originally used only in web browsers, but are now core components of some servers and a variety of applications. The most popular runtime system for this usage is Node.js.
        
        Although Java and JavaScript are similar in name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design.
        
        History
        Creation at Netscape
        The first popular web browser with a graphical user interface, Mosaic, was released in 1993. Accessible to non-technical people, it played a prominent role in the rapid growth of the nascent World Wide Web.[11] The lead developers of Mosaic then founded the Netscape corporation, which released a more polished browser, Netscape Navigator, in 1994. This quickly became the most-used.[12][13]
        
        During these formative years of the Web, web pages could only be static, lacking the capability for dynamic behavior after the page was loaded in the browser. There was a desire in the flourishing web development scene to remove this limitation, so in 1995, Netscape decided to add a scripting language to Navigator. They pursued two routes to achieve this: collaborating with Sun Microsystems to embed the Java programming language, while also hiring Brendan Eich to embed the Scheme language.[6]
        
        Netscape management soon decided that the best option was for Eich to devise a new language, with syntax similar to Java and less like Scheme or other extant scripting languages.[5][6] Although the new language and its interpreter implementation were called LiveScript when first shipped as part of a Navigator beta in September 1995, the name was changed to JavaScript for the official release in December.[6][1][14]
        
        The choice of the JavaScript name has caused confusion, implying that it is directly related to Java. At the time, the dot-com boom had begun and Java was the hot new language, so Eich considered the JavaScript name a marketing ploy by Netscape.[15]
        
        Adoption by Microsoft
        Microsoft debuted Internet Explorer in 1995, leading to a browser war with Netscape. On the JavaScript front, Microsoft reverse-engineered the Navigator interpreter to create its own, called JScript.[16]
        
        JScript was first released in 1996, alongside initial support for CSS and extensions to HTML. Each of these implementations was noticeably different from their counterparts in Navigator.[17][18] These differences made it difficult for developers to make their websites work well in both browsers, leading to widespread use of "best viewed in Netscape" and "best viewed in Internet Explorer" logos for several years.[17][19]
        
        The rise of JScript
        In November 1996, Netscape submitted JavaScript to Ecma International, as the starting point for a standard specification that all browser vendors could conform to. This led to the official release of the first ECMAScript language specification in June 1997.
        
        The standards process continued for a few years, with the release of ECMAScript 2 in June 1998 and ECMAScript 3 in December 1999. Work on ECMAScript 4 began in 2000.[16]
        
        Meanwhile, Microsoft gained an increasingly dominant position in the browser market. By the early 2000s, Internet Explorer's market share reached 95%.[20] This meant that JScript became the de facto standard for client-side scripting on the Web.
        
        Microsoft initially participated in the standards process and implemented some proposals in its JScript language, but eventually it stopped collaborating on Ecma work. Thus ECMAScript 4 was mothballed.
        
        Growth and standardization
        During the period of Internet Explorer dominance in the early 2000s, client-side scripting was stagnant. This started to change in 2004, when the successor of Netscape, Mozilla, released the Firefox browser. Firefox was well received by many, taking significant market share from Internet Explorer.[21]
        
        In 2005, Mozilla joined ECMA International, and work started on the ECMAScript for XML (E4X) standard. This led to Mozilla working jointly with Macromedia (later acquired by Adobe Systems), who were implementing E4X in their ActionScript 3 language, which was based on an ECMAScript 4 draft. The goal became standardizing ActionScript 3 as the new ECMAScript 4. To this end, Adobe Systems released the Tamarin implementation as an open source project. However, Tamarin and ActionScript 3 were too different from established client-side scripting, and without cooperation from Microsoft, ECMAScript 4 never reached fruition.
        
        Meanwhile, very important developments were occurring in open-source communities not affiliated with ECMA work. In 2005, Jesse James Garrett released a white paper in which he coined the term Ajax and described a set of technologies, of which JavaScript was the backbone, to create web applications where data can be loaded in the background, avoiding the need for full page reloads. This sparked a renaissance period of JavaScript, spearheaded by open-source libraries and the communities that formed around them. Many new libraries were created, including jQuery, Prototype, Dojo Toolkit, and MooTools.
        
        Google debuted its Chrome browser in 2008, with the V8 JavaScript engine that was faster than its competition.[22][23] The key innovation was just-in-time compilation (JIT),[24] so other browser vendors needed to overhaul their engines for JIT.[25]
        
        In July 2008, these disparate parties came together for a conference in Oslo. This led to the eventual agreement in early 2009 to combine all relevant work and drive the language forward. The result was the ECMAScript 5 standard, released in December 2009.
        
        Reaching maturity
        Ambitious work on the language continued for several years, culminating in an extensive collection of additions and refinements being formalized with the publication of ECMAScript 6 in 2015.[26]
        
        The creation of Node.js in 2009 by Ryan Dahl sparked a significant increase in the usage of JavaScript outside of web browsers. Node combines the V8 engine, an event loop, and I/O APIs, thereby providing a stand-alone JavaScript runtime system.[27][28] As of 2018, Node had been used by millions of developers,[29] and npm had the most modules of any package manager in the world.[30]
        
        The ECMAScript draft specification is currently maintained openly on GitHub, and editions are produced via regular annual snapshots.[31] Potential revisions to the language are vetted through a comprehensive proposal process.[32][33] Now, instead of edition numbers, developers check the status of upcoming features individually.[31]
        
        The current JavaScript ecosystem has many libraries and frameworks, established programming practices, and substantial usage of JavaScript outside of web browsers. Plus, with the rise of single-page applications and other JavaScript-heavy websites, several transpilers have been created to aid the development process.[34]
        
        Trademark
        "JavaScript" is a trademark of Oracle Corporation in the United States.[35][36] The trademark was originally issued to Sun Microsystems on 6 May 1997, and was transferred to Oracle when they acquired Sun in 2009.[37]
        
        Website client-side usage
        JavaScript is the dominant client-side scripting language of the Web, with 98% of all websites (mid–2022) using it for this purpose.[38] Scripts are embedded in or included from HTML documents and interact with the DOM. All major web browsers have a built-in JavaScript engine that executes the code on the user's device.
        
        Examples of scripted behavior
        Loading new web page content without reloading the page, via Ajax or a WebSocket. For example, users of social media can send and receive messages without leaving the current page.
        Web page animations, such as fading objects in and out, resizing, and moving them.
        Playing browser games.
        Controlling the playback of streaming media.
        Generating pop-up ads or alert boxes.
        Validating input values of a web form before the data is sent to a web server.
        Logging data about the user's behavior then sending it to a server. The website owner can use this data for analytics, ad tracking, and personalization.
        Redirecting a user to another page.
        Storing and retrieving data on the user's device, via the storage or IndexedDB standards.
        Web libraries and frameworks
        Over 80% of websites use a third-party JavaScript library or web framework for their client-side scripting.[39]
        
        jQuery is by far the most popular client-side library, used by over 75% of websites.[39] Facebook created the React library for its website and later released it as open source; other sites, including Twitter, now use it. Likewise, the Angular framework created by Google for its websites, including YouTube and Gmail, is now an open source project used by others.[39]
        
        In contrast, the term "Vanilla JS" has been coined for websites not using any libraries or frameworks, instead relying entirely on standard JavaScript functionality.[40]
        
        Other usage
        The use of JavaScript has expanded beyond its web browser roots. JavaScript engines are now embedded in a variety of other software systems, both for server-side website deployments and non-browser applications.
        
        Initial attempts at promoting server-side JavaScript usage were Netscape Enterprise Server and Microsoft's Internet Information Services,[41][42] but they were small niches.[43] Server-side usage eventually started to grow in the late 2000s, with the creation of Node.js and other approaches.[43]
        
        Electron, Cordova, React Native, and other application frameworks have been used to create many applications with behavior implemented in JavaScript. Other non-browser applications include Adobe Acrobat support for scripting PDF documents[44] and GNOME Shell extensions written in JavaScript.[45]
        
        JavaScript has recently begun to appear in some embedded systems, usually by leveraging Node.js.[46][47][48]
        
        Features
        The following features are common to all conforming ECMAScript implementations unless explicitly specified otherwise.
        
        Imperative and structured
        JavaScript supports much of the structured programming syntax from C (e.g., if statements, while loops, switch statements, do while loops, etc.). One partial exception is scoping: originally JavaScript only had function scoping with var; block scoping was added in ECMAScript 2015 with the keywords let and const. Like C, JavaScript makes a distinction between expressions and statements. One syntactic difference from C is automatic semicolon insertion, which allow semicolons (which terminate statements) to be omitted.[49]
        
        Weakly typed
        JavaScript is weakly typed, which means certain types are implicitly cast depending on the operation used.[50]
        
        The binary + operator casts both operands to a string unless both operands are numbers. This is because the addition operator doubles as a concatenation operator
        The binary - operator always casts both operands to a number
        Both unary operators (+, -) always cast the operand to a number
        Values are cast to strings like the following:[50]
        
        Strings are left as-is
        Numbers are converted to their string representation
        Arrays have their elements cast to strings after which they are joined by commas (,)
        Other objects are converted to the string [object Object] where Object is the name of the constructor of the object
        Values are cast to numbers by casting to strings and then casting the strings to numbers. These processes can be modified by defining toString and valueOf functions on the prototype for string and number casting respectively.
        
        JavaScript has received criticism for the way it implements these conversions as the complexity of the rules can be mistaken for inconsistency.[51][50] For example, when adding a number to a string, the number will be cast to a string before performing concatenation, but when subtracting a number from a string, the string is cast to a number before performing subtraction.`,
        author: "Seego"
  };
  let posts = [post, post, post];
  const admin = {
    username: "Seego",
    fullName: "Segun Owolabi",
    email: "segun@gmail.com"
  }

  return (
    <div className={styles.App}>
      <div className={styles.App_header}>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Home posts={posts}/>} />
            <Route path={"/home"} element={<Home posts={posts}/>} />
            <Route path={"/posts"} element={<Home posts={posts}/>} />
            <Route path="/login" element={<Land />} />
            <Route path="/register" element={<Land />} />
            <Route path={"/post/:id"} element={<Post posts={posts}/>} />
            <Route path={"/writepost"} element={<Write/>} />
            <Route path={"/admin"} element={<Admin admin={admin}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
