import React from "react"
import { Route, Routes } from "react-router-dom"
import { Category } from "./components/Category"

import "./index.scss"

import { Easy } from "./pages/Easy"
import { Normal } from "./pages/Normal"
import { Hard } from "./pages/Hard"
import { ButtonScrollUp } from "./components/ButtonScrollUp/ButtonScrollUp"
import { FourDaysTrainings } from "./pages/FourDaysTrainings"
import { Female } from "./pages/Female"
import { NotFound } from "./pages/NotFound/NotFound"
import { Search } from "./components/Search/Search"
import Footer from "./components/Footer"

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [categoryId, setCategoryId] = React.useState(0)
  const [categories, setCategories] = React.useState([])
  const [searchValue, setSearchValue] = React.useState("")

  React.useEffect(() => {
    setIsLoading(true)
    fetch("https://vascol.github.io/training-program-app/data.json")
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
      <div className="header">
        <div className="search">
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <div>
          <h1 style={{ marginBottom: "0px", marginTop: "14px" }}>
            Old school GYM
          </h1>
          <span
            style={{
              fontSize: "18px",
              color: "red",
              fontWeight: "700",
            }}
          >
            <em>Продам гараж</em>
          </span>
        </div>
      </div>
      <Category
        categoryId={categoryId}
        setCategoryId={setCategoryId}
        categories={categories}
      />
      <Routes>
        <Route
          path="/training-program-app/"
          element={
            <Easy
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              searchValue={searchValue}
              categoryId={categoryId}
            />
          }
        />
        <Route
          path="/training-program-app/normal"
          element={
            <Normal
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              searchValue={searchValue}
              categoryId={categoryId}
            />
          }
        />
        <Route
          path="/training-program-app/hard"
          element={
            <Hard
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              searchValue={searchValue}
              categoryId={categoryId}
            />
          }
        />
        <Route
          path="/training-program-app/fourDays"
          element={
            <FourDaysTrainings
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              searchValue={searchValue}
              categoryId={categoryId}
            />
          }
        />
        <Route
          path="/training-program-app/female"
          element={
            <Female
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              searchValue={searchValue}
              categoryId={categoryId}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ButtonScrollUp />
      {!isLoading && <Footer />}
    </div>
  )
}

export default App
