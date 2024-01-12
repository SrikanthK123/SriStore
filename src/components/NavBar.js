import React from "react";
import Logo from "../Images/SristoreLogo.png";
import {
  Link
} from "react-router-dom";
import avatar from "../Images/avatar.gif"
import LogoTest from '../Images/SriStoreLogo1.png'
const NavBar = () => {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg"
        style={{ backgroundColor: "#01497B" }}
      >
        <div class="container-fluid">
          <Link class="navbar-brand " to="/SriStore">
            <img src={LogoTest} className="LogoMain" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="ToggleImage"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item mx-2">
                <Link to="/SriStore" class="nav-link" id="Nav-Item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="27"
                    fill="currentColor"
                    class="bi bi-house-door-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                  </svg>
                  Home
                </Link>
              </li>
              <li class="nav-item mx-2">
                <Link class="nav-link" to="/Mobile" id="Nav-Item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="27"
                    fill="currentColor"
                    class="bi bi-phone"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                  </svg>
                  Mobiles
                </Link>
              </li>
              <li class="nav-item mx-2">
                <Link class="nav-link" to="/Laptops" id="Nav-Item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="27"
                    fill="currentColor"
                    class="bi bi-laptop"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                  </svg>
                  Laptops
                </Link>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="#" id="Nav-Item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="27"
                    fill="currentColor"
                    class="bi bi-headset"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5" />
                  </svg>
                  Service
                </a>
              </li>
              <li class="nav-item dropdown mx-2">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="Nav-Item"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="27"
                    fill="currentColor"
                    class="bi bi-card-checklist"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                    <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
                  </svg>More
                </a>
                <ul class="dropdown-menu" style={{backgroundColor:'rgb(201 200 230)'}}>
                  <li>
                    <Link class="dropdown-item" id="KitchBg"  to="/KitchenProduct" style={{fontWeight:'bold',color:'#01497B'}}>
                      Kitchen Products
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{fontWeight:'bold',color:'#01497B'}}
                    >
                      Fashion
                    </a>
                    <ul class="dropdown-menu1" style={{ listStyle: "none" }}>
                      <li>
                        <Link class="dropdown-item" id="SubDrop" to="/MenFashionItems" style={{fontWeight:'bold',color:'#06AEE8'}}>
                          Men
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" id="SubDrop" to="/WomenFashionItems" style={{fontWeight:'bold',color:'#06AEE8'}}>
                          Women
                        </Link>
                      </li>
                      <li>
                        <Link
                         class="dropdown-item" id="SubDrop" to="/KidItems" style={{fontWeight:'bold',color:'#06AEE8'}}>
                          Kids
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex"  role="search">
             
              <img src= {avatar} className="avatarImg"  />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
