import { useState } from "react";
import "./App.css";
import Footer from "./footer";
import Form from "./form";
import List from "./list";
import Logo from "./logo";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";


function App() {
  const [items, setItems] = useState([]);

  const [checkedCount, setCheckedCount] = useState(0);

  const handleCheckBox = (id) => {
    const checkItems = items.map((v, i) =>
      v.id === id ? { ...v, packed: !v.packed } : v)
    setItems(checkItems)
  }

  const handleCheckCount = (id) => {
    setCheckedCount((count) => (!items.packed ? count + 1 : count - 1));
  };
  const handleAddItems = (item) => {
    setItems((items) => [...items, item])
  }
  const handleDeleteItems = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id));
  };

  const handleClearItems = (item) => {
    if (window.confirm("Are you sure you want to delete all the items")) {
      setItems((items) => [])
    }
  }
  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <List item={items} handleCheckBox={handleCheckBox} clearList={handleClearItems} deleteItems={handleDeleteItems} />
      <Footer item={items} checkedCount={checkedCount} handleCheckCount={handleCheckCount} />

      {/* <BrowserRouter>
        <Routes>
          <Route path="/logo" element={<Logo />}></Route>
          <Route path="/form" element={<Form onAddItems={handleAddItems} />}></Route>
          <Route path="/list" element={<List item={items} handleCheckBox={handleCheckBox} clearList={handleClearItems} deleteItems={handleDeleteItems} />}></Route>
          <Route path="/footer" element={<Footer item={items} checkedCount={checkedCount} handleCheckCount={handleCheckCount} />}></Route> */}

          {/*<Route path="*" element={<Logo/>}></Route>*/} {/*defaultbrowser */}
{/* 
          <Route path="*" element={<Navigate to={'/form'}/>}></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App; 
