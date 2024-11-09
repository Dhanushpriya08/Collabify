import React, { createContext, useReducer } from 'react';
import 'react-bootstrap';
import { Toaster } from 'react-hot-toast';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import MyNavbar from './components/navbar';
import NotFound from './pages/NotFound';
import AddSlides from './pages/addSlides';
import Home from './pages/home';
import Motivation from './pages/motivation';
import PeerCall from './pages/peerCall';
import Slides from './pages/slides';
import { initialState, reducer } from './reducers/userReducer';

// Create context for user data
export const UserContext = createContext();

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {/* Toast notifications */}
            <div>
                <Toaster 
                    position='top-right'
                    toastOptions={{
                        style: {
                            background: '#2D2D2D',
                            color: '#FFF',
                            border: '1px solid #F2B705'
                        }
                    }}
                />
            </div>
            
            <Router>
                <div className='wrapper'>
                    <div className='App'>
                        <MyNavbar />
                        <div className='content d-flex'>
                            <Routes>
                                <Route exact path="/" element={<Home />} />
                                <Route exact path="/call/:roomId" element={<PeerCall />} />
                                <Route exact path='/slides' element={<Slides />} />
                                <Route exact path='/add' element={<AddSlides />} />
                                <Route exact path='/motivation' element={<Motivation />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </Router>
        </UserContext.Provider>
    );
}

export default App;