import Layout from "./Layout.jsx";

import Startseite from "./Startseite";

import Zimmer from "./Zimmer";

import UeberUns from "./UeberUns";

import Galerie from "./Galerie";

import Lage from "./Lage";

import Kontakt from "./Kontakt";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Startseite: Startseite,
    
    Zimmer: Zimmer,
    
    UeberUns: UeberUns,
    
    Galerie: Galerie,
    
    Lage: Lage,
    
    Kontakt: Kontakt,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Startseite />} />
                
                
                <Route path="/Startseite" element={<Startseite />} />
                
                <Route path="/Zimmer" element={<Zimmer />} />
                
                <Route path="/UeberUns" element={<UeberUns />} />
                
                <Route path="/Galerie" element={<Galerie />} />
                
                <Route path="/Lage" element={<Lage />} />
                
                <Route path="/Kontakt" element={<Kontakt />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}