// import React, {useEffect} from "react";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//
// import AppHeader from "../app-header/app-header";
// import HomePage from "../../pages/HomePage";
// import Page404 from "../../pages/Page404";
//
// function App() {
//
//     return (
//       <>
//           <AppHeader />
//           <Router>
//               <Switch>
//                   <Route path="/" exact={true}>
//                       <HomePage />
//                   </Route>
//                   <Route path="/test">
//                       <Page404 />
//                   </Route>
//               </Switch>
//           </Router>
//       </>
//     );
// }
//
//
// export default App;


import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {

    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact={true}>
                        <HomePage />
                    </Route>
                    <Route>
                        <Page404 />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

function HomePage() {
    return (
        <div>home</div>
    )
}

function Page404() {
    return (
        <>
            <div>404</div>
            <Link to="/" >Вернуться на главную</Link>
        </>
    )
}


export default App;

