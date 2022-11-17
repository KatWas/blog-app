import {Container} from 'react-bootstrap';
import {Route, Routes} from 'react-router-dom';
import Header from './components/Container/Header';
import Footer from './components/Container/Footer';
import NavBar from 'react-bootstrap/Navbar';
import Home from './components/pages/Home';
import SinglePost from './components/pages/SinglePost';
import PostAdd from './components/pages/PostAdd';
import PostEdit from './components/pages/PostEdit';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';



const App = () => (
<Container>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/post/:id" element={<SinglePost />} />
    <Route path="/post/add" element={<PostAdd />} />
    <Route path="/post/edit/:id" element={<PostEdit />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  <Footer />
</Container>
)

export default App;