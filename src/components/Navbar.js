const Navbar = ({ onUpload, grayscale, invert, onSave, imageLoaded }) => {
  return (
    <nav class="navbar">
      <ul class="navbar-nav">
        <li class="logo">
          <a href="#" class="nav-link">
            <span class="link-text logo-text">Edit-IT</span>
            <svg
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <g>
                <path
                  fill="currentColor"
                  d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                  class="tt-secondary"
                />
                <path
                  fill="currentColor"
                  d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                  class="tt-primary"
                />
              </g>
            </svg>
          </a>
        </li>

        <li class="nav-item">
          <label class="nav-link">
            <svg
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              class="svg-inline--fa tt-file tt-w-12 tt-9x"
            >
              <g>
                <path
                  fill="currentColor"
                  d="M256 0H24A23.94 23.94 0 0 0 0 23.88V488a23.94 23.94 0 0 0 23.88 24H360a23.94 23.94 0 0 0 24-23.88V128H272a16 16 0 0 1-16-16z"
                  class="tt-secondary"
                />
                <path
                  fill="currentColor"
                  d="M384 121.9v6.1H272a16 16 0 0 1-16-16V0h6.1a24 24 0 0 1 17 7l97.9 98a23.9 23.9 0 0 1 7 16.9z"
                  class="tt-primary"
                />
              </g>
            </svg>
            <input type="file" accept=".jpg, .jpeg, .png" onChange={onUpload} />
            <span class="link-text">Open</span>
          </label>
        </li>

        <li class="nav-item">
          <a
            href="#"
            class={`nav-link ${imageLoaded ? "" : "disabled"}`}
            onClick={grayscale}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path
                  fill="currentColor"
                  d="M448 96h-64l-64-64v134.4a96 96 0 0 0 192 0V32zm-72 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm80 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm-165.41 16a204.07 204.07 0 0 0-34.59 2.89V272l-43.15-64.73a183.93 183.93 0 0 0-44.37 26.17L192 304l-60.94-30.47L128 272v-80a96.1 96.1 0 0 0-96-96 32 32 0 0 0 0 64 32 32 0 0 1 32 32v256a64.06 64.06 0 0 0 64 64h176a16 16 0 0 0 16-16v-16a32 32 0 0 0-32-32h-32l128-96v144a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V289.86a126.78 126.78 0 0 1-32 4.54c-61.81 0-113.52-44.05-125.41-102.4z"
                  class="tt-secondary"
                />
                <path
                  fill="currentColor"
                  d="M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z"
                  class="tt-primary"
                />
              </g>
            </svg>
            <span class="link-text">Grayscale</span>
          </a>
        </li>

        <li class="nav-item">
          <a
            href="#"
            class={`nav-link ${imageLoaded ? "" : "disabled"}`}
            onClick={invert}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path
                  fill="currentColor"
                  d="M224,0C100.28125,0,0,88.0293,0,232.45117,0,344.22852,134.21484,457.04883,194.86328,502.32422a48.70766,48.70766,0,0,0,58.27344,0C313.78516,457.04883,448,344.22852,448,232.45117,448,88.0293,347.71875,0,224,0ZM176,320H144a80.00021,80.00021,0,0,1-80-80,15.99954,15.99954,0,0,1,16-16h32a79.999,79.999,0,0,1,80,80A16.00079,16.00079,0,0,1,176,320Zm128,0H272a16.00079,16.00079,0,0,1-16-16,79.999,79.999,0,0,1,80-80h32a15.99954,15.99954,0,0,1,16,16A80.00021,80.00021,0,0,1,304,320Z"
                  class="tt-secondary"
                />
              </g>
            </svg>
            <span class="link-text">Invert</span>
          </a>
        </li>

        <li class="nav-item">
          <a
            href="#"
            class={`nav-link ${imageLoaded ? "" : "disabled"}`}
            onClick={onSave}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-icon="save"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="svg-inline--fa tt-save tt-w-14 tt-9x"
            >
              <g>
                <path
                  fill="currentColor"
                  d="M288 352a64 64 0 1 1-64-64 64 64 0 0 1 64 64z"
                  class="tt-primary"
                />
                <path
                  fill="currentColor"
                  d="M433.94 129.94l-83.88-83.88A48 48 0 0 0 316.12 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V163.88a48 48 0 0 0-14.06-33.94zM224 416a64 64 0 1 1 64-64 64 64 0 0 1-64 64zm96-204a12 12 0 0 1-12 12H76a12 12 0 0 1-12-12V108a12 12 0 0 1 12-12h228.52a12 12 0 0 1 8.48 3.52l3.48 3.48a12 12 0 0 1 3.52 8.48z"
                  class="tt-secondary"
                />
              </g>
            </svg>
            <span class="link-text">Save</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
