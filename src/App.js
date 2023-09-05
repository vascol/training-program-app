import React from "react"
import { Route, Routes } from "react-router-dom"
import { Category } from "./components/Category"

import "./index.scss"

import { Easy } from "./pages/Easy"
import { Normal } from "./pages/Normal"
import { Hard } from "./pages/Hard"
import { ButtonScrollUp } from "./components/ButtonScrollUp/ButtonScrollUp"
import { FourDaysTrainings } from "./pages/FourDaysTrainings"
import Female from "./pages/Female"
import { NotFound } from "./pages/NotFound/NotFound"

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [categoryId, setCategoryId] = React.useState(0)
  const [categories, setCategories] = React.useState([])

  React.useEffect(() => {
    setIsLoading(true)
    fetch("http://localhost:3000/data.json")
      .then((res) => res.json())
      .then((json) => {
        setCategories(json.categories)
      })
      .catch((err) => {
        console.warn(err)
        alert("Error...")
      })
      .finally(() => setIsLoading(false))
  }, [categoryId])

  return (
    <div className="App">
      <h1 style={{ marginBottom: "0px" }}>Old school GYM</h1>
      <span
        style={{
          fontSize: "18px",
          color: "red",
          fontWeight: "700",
        }}
      >
        <em>Обережно, можна накачатися!</em>
      </span>
      <Category
        categoryId={categoryId}
        setCategoryId={setCategoryId}
        categories={categories}
      />
      <Routes>
        <Route path="/" element={<Easy />} />
        <Route path="/normal" element={<Normal />} />
        <Route path="/hard" element={<Hard />} />
        <Route path="/fourDays" element={<FourDaysTrainings />} />
        <Route path="/female" element={<Female />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ButtonScrollUp />
    </div>
  )
}

export default App
