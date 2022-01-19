import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink'
import { NavLink } from 'react-router-dom'
import Card from './components/shared/Card'
import PostPage from './pages/PostPage'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {

    return (
        <FeedbackProvider>
            <BrowserRouter>
                <Header text="Feedback UI" />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        } />

                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/post/:id/:title" element={<PostPage />} />

                    </Routes>

                    <Card>
                        <NavLink to="/" activeclassname="active">Home</NavLink>
                        <NavLink to="/about" activeclassname="active">About</NavLink>
                        <NavLink to="/post/45/test" activeclassname="active">Post</NavLink>
                    </Card>

                </div>
                <AboutIconLink />
            </BrowserRouter>

        </FeedbackProvider>
    )
}

export default App