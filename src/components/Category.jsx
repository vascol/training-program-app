import React from "react"
import { Link } from "react-router-dom"

const pathLink = [
  "/training-program-app/",
  "/training-program-app/normal",
  "/training-program-app/hard",
  "/training-program-app/fourDays",
  "/training-program-app/female",
]

export const Category = ({ categoryId, setCategoryId, categories }) => {
  return (
    <div className="top">
      <ul className="tags">
        {categories.map((obj, index) => (
          <Link key={obj.name} to={pathLink[index]}>
            <li
              className={categoryId === index ? "active" : ""}
              onClick={() => setCategoryId(index)}
            >
              {obj.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
