import React from "react";

const Navbar = ({ filterMenu, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                key={curElem}
                onClick={() => filterMenu(curElem)}
              >
                {curElem}
              </button>
            );
          })}
          {/* <button
            className="btn-group__item"
            onClick={() => filterMenu("breakfast")}
          >
            Breakfast
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterMenu("lunch")}
          >
            Lunch
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterMenu("evening")}
          >
            Evening
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterMenu("dinner")}
          >
            Dinner
          </button> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
