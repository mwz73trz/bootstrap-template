const App = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h1>Hello World</h1>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go Somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6" style={{ marginTop: "30px" }}>
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: "100%", marginTop: "15px" }}
            >
              Primary
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              style={{ width: "100%", marginTop: "15px" }}
            >
              Secondary
            </button>
            <button
              type="button"
              className="btn btn-success"
              style={{ width: "100%", marginTop: "15px" }}
            >
              Success
            </button>
            <button
              type="button"
              className="btn btn-danger"
              style={{ width: "100%", marginTop: "15px" }}
            >
              Danger
            </button>
            <button
              type="button"
              className="btn btn-warning"
              style={{ width: "100%", marginTop: "15px" }}
            >
              Warning
            </button>
            <button
              type="button"
              className="btn btn-info"
              style={{ width: "100%", marginTop: "15px" }}
            >
              Info
            </button>
            <button
              type="button"
              className="btn btn-light"
              style={{ width: "100%", marginTop: "15px" }}
            >
              Light
            </button>
            <button
              type="button"
              className="btn btn-dark"
              style={{ width: "100%", marginTop: "15px" }}
            >
              Dark
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
