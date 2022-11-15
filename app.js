const App = () => {
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
}

export default App;