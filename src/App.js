import "./App.css";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense, useState } from "react";

const DummyTable = React.lazy(() => import("./tabs/dummyTable"));
const DummyChart = React.lazy(() => import("./tabs/dummyChart"));
const DummyList = React.lazy(() => import("./tabs/dummyList"));

function App() {
  const [datamenu, setDatamenu] = useState([
    { id: "dummyTable", title: "Dummy Table", order: 1, path: "tabs/dummyTable.js" },
    { id: "dummyChart", title: "Dummy Chart", order: 2, path: "tabs/dummyChart.js" },
    { id: "dummyList", title: "Dummy List", order: 0, path: "tabs/dummyList.js" },
  ]);

  //-----------при наявності дійсного URL--------------
  // useEffect(() => {
  //   fetch("https://")
  //     .then((data) => data.json())
  //     .then((data) => {
  //       setDatamenu(data.results);
  //     });
  // }, []);

  let firstEl;
  datamenu.some((item) => {
    if (item.order == 0) {
      switch (item.id) {
        case "dummyTable":
          firstEl = <DummyTable />;
        case "dummyChart":
          firstEl = <DummyChart />;
        case "dummyList":
          firstEl = <DummyList />;
      }
    }
  });

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header datamenu={datamenu} />
          <Routes>
            <Route path="/" element={firstEl} />
            <Route path="/dummyTable" element={<DummyTable />} />
            <Route path="/dummyChart" element={<DummyChart />} />
            <Route path="/dummyList" element={<DummyList />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
