

function App() {
  return (
    <div className="App"  style={{ display: "flex", flexDirection: "column", height: "100vh", }}>

      {/* Part 1: Navigation Bar */}
      <div id="NavigationBar" style={{ border: "6px solid #FF0000",  textAlign: "center", flex: "0 0 15%", display: "flex", justifyContent: "center"}}>
        <h1>Navigation Bar</h1>
      </div>

      {/* Part 2: Content Section */}
      <div id="ContentSection" style={{border: "6px solid #39FF14", textAlign: "center", flex: 1, display: "flex", justifyContent: "center", flexDirection: "column"}}>
        <h1>Content</h1>

        <div id="MainContentSection" style={{border: "6px solid #BF40BF", textAlign: "center", flex: 1, margin: "0px 60px", display: "flex", justifyContent: "center", margin: "30px 30px"}}>
        <h1>Main Content</h1>
        </div>
      </div>

      {/* Part 3: Footer Section */}

      <div id="FooterSection" style={{border: "6px solid #1F51FF", textAlign: "center", flex: "0 0 15%", display: "flex", justifyContent: "center"}}>
        <h1>Footer</h1>
      </div>



    </div>

  );
}

export default App;
