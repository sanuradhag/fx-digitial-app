import React, { Component } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import DetailPage from './pages/DetailPage/DetailPage';

import './global.css';

class App extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Header />
                    <main>
                        <section>
                            <Routes>
                                <Route path={'/elephants/'} element={<Home />} />
                                <Route path={'/elephants/:name'} element={<DetailPage />} />
                                <Route path="/" element={<Navigate replace to="/elephants" />} />
                            </Routes>
                        </section>
                    </main>
                </BrowserRouter>
            </>
        );
    }
}

export default App;
