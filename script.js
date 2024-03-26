// Create a style element
const dynamicStyles = document.createElement("style");
dynamicStyles.innerHTML = `
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Poppins:wght@400;500;600&display=swap");
body,
html {
  margin: 0;
  padding: 0;
}
.banner {
  display: grid;
  grid-template-columns: 7fr 3fr;
  max-width: 980px;
  font-family: Poppins;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    background-color: #eff7eb;
  }
}
.banner_display {
  display: flex;
  justify-content: flex-start;
  gap: 32px;
  background-color: #eff7eb;
  padding: 42px 0 42px 26px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    padding: 0;
    text-align: center;
    padding-bottom: 36px;
  }
  @media (max-width: 360px) {
    gap: 16px;
    padding-bottom: 16px;
  }
}
.image_wrapper {
  background-color: #033934;
  text-align: center;
  color: #eff7eb;
  font-size: 10px;
  font-weight: 500;
  max-height: 156px;
  @media (max-width: 768px) {
    width: 100%;
    max-height: 127px;
  }
  @media (max-width: 360px) {
    max-height: 70px;
  }
}
.display_picture {
  margin: 0;
  width: 300px;
  height: 156px;
  @media (max-width: 768px) {
    width: 100%;
    height: 127px;
  }
  @media (max-width: 360px) {
    max-height: 70px;
  }
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.image_text {
  margin-block: 2px;
  display: block;
}
.banner_info {
  width: 100%;
  @media (max-width: 768px) {
    box-sizing: border-box;
    width: 100%;
    padding-inline: 20px;
  }
  @media (max-width: 360px) {
    padding-inline: 10px;
  }
}
.banner_title {
  margin-top: 0;
  margin-bottom: 16px;
  color: #033934;
  font-size: 21px;
  font-weight: 600;
  @media (max-width: 360px) {
    font-size: 16px;
    text-align: left;
    margin-bottom: 8px;
  }
}
.checkboxes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  @media (max-width: 768px) {
    gap: 25px 16px;
  }
  @media (max-width: 360px) {
    gap: 6px 7px;
  }
}
input {
  visibility: hidden;
  position: absolute;
}
label {
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  @media (max-width: 360px) {
    gap: 7px;
  }
}
label > div {
  width: 32px;
  height: 32px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 1px 5px 1px #00000038;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in;
  @media (max-width: 360px) {
    width: 25px;
    height: 25px;
  }
}
label > div > svg {
  display: none;
  transition: all 0.2s ease-in;
}

input:checked + label > div > svg {
  display: block;
}

input:checked + label > div {
  background-color: #f3b51b;
}

label:hover > div > svg {
  display: block;
  opacity: 0.8;
}
label:hover > div {
  background-color: #f0d081;
}

.label_text > strong {
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  text-align: left;
  color: #033934;
}

.label_text > p {
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  margin-block: 0;
}

.price_highlight {
  background-color: #efe3ad;
  border-bottom: 2px solid #f3b51b;
  font-style: italic;
}

.banner_cta {
  background-color: #033934;
  padding: 45px 20px 38px 20px;
  text-align: center;

  @media (max-width: 768px) {
    border-radius: 33px 33px 0px 0px;
    padding-block: 17px 15px;
  }
  @media (max-width: 320px) {
    border-radius: 0px;
    padding: 13px 13px 9px 13px;
  }
}
.cta_inline {
  @media (max-width: 320px) {
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    margin-bottom: 10px;
  }
}
.cta_text {
  display: block;
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 16px;
  @media (max-width: 320px) {
    font-size: 12px;
    height: 48px;
    margin-bottom: 0;
  }
}
.cta_result {
  color: #fff;
  text-align: center;
  font-size: 19px;
  font-weight: 600;
  margin-bottom: 7px;
  @media (max-width: 320px) {
    font-size: 16px;
  }
}
.company_logo {
  width: 78px;
  height: 32px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 107px;
    height: 44px;
  }
  @media (max-width: 320px) {
    width: 62px;
    height: 16px;
  }
  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.cta_btn {
  background: #f3b51b;
  margin-bottom: 15px;
  border-radius: 30px;
  > a {
    display: block;
    width: 100%;
    padding-block: 14px;
    color: #033934;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;

    @media (max-width: 320px) {
      font-size: 12px;
      padding: 10px 0px;
    }
  }
  @media (max-width: 768px) {
    margin: 0 auto;
    margin-bottom: 10px;
  }

  @media (max-width: 320px) {
    width: 100%;
  }
}
`;

const bannerContainer = document.createElement("div");
bannerContainer.innerHTML = `
<div class="banner">
<div class="banner_display">
  <div class="image_wrapper">
    <figure class="display_picture">
      <img src="img/dunstan-farm.jpg" alt="" />
    </figure>
  </div>
  <div class="banner_info">
    <h5 class="banner_title">Förebygg och betala mindre</h5>

    <div class="checkboxes">
      <div>
        <input type="checkbox" id="option1" name="option1" checked="true" disabled="true" />
        <label for="option1">
          <div class="checkbox">
            <svg
              width="27"
              height="24"
              viewBox="0 0 27 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_2186_122)">
                <path
                  d="M21 2L10.5 14L6 9.2"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  shape-rendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_2186_122"
                  x="0"
                  y="0"
                  width="27"
                  height="24"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2186_122"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2186_122"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <span class="label_text">
            <strong>Gårdsförsäkring</strong>
            <p>250 p</p>
          </span>
        </label>
      </div>
      <div>
        <input type="checkbox" id="option2" name="option2" />
        <label for="option2">
          <div class="checkbox">
            <svg
              width="27"
              height="24"
              viewBox="0 0 27 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_2186_122)">
                <path
                  d="M21 2L10.5 14L6 9.2"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  shape-rendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_2186_122"
                  x="0"
                  y="0"
                  width="27"
                  height="24"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2186_122"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2186_122"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <span class="label_text">
            <strong>Jordfelsbrytare</strong>
            <p>250 p</p>
          </span>
        </label>
      </div>
      <div>
        <input type="checkbox" id="option3" name="option3" />
        <label for="option3">
          <div class="checkbox">
            <svg
              width="27"
              height="24"
              viewBox="0 0 27 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_2186_122)">
                <path
                  d="M21 2L10.5 14L6 9.2"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  shape-rendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_2186_122"
                  x="0"
                  y="0"
                  width="27"
                  height="24"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2186_122"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2186_122"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <span class="label_text">
            <strong>Brandsläckare</strong>
            <p>250 p</p>
          </span>
        </label>
      </div>
      <div>
        <input type="checkbox" id="option4" name="option4"/>
        <label for="option4">
          <div class="checkbox">
            <svg
              width="27"
              height="24"
              viewBox="0 0 27 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_2186_122)">
                <path
                  d="M21 2L10.5 14L6 9.2"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  shape-rendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_2186_122"
                  x="0"
                  y="0"
                  width="27"
                  height="24"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2186_122"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2186_122"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <span class="label_text">
            <strong>Åskskydd</strong>
            <p>250 p</p>
          </span>
        </label>
      </div>
    </div>
  </div>
</div>
<div class="banner_cta">
  <div class="cta_inline">
    <span class="cta_text"
      >Du kan få: 
      <strong class="cta_result"
        ><span class="cta_price" id="final_price">250</span> poäng</strong
      ></span
    >
    <div class="cta_btn">
      <a href="https://dunstan.se/forsakra-gard/" target="_blank"
        >Allt om gårdsförsäkringen</a
      >
    </div>
  </div>

  <figure class="company_logo">
    <img src="img/logo.svg" alt="" />
  </figure>
</div>
</div>
`;

// Append elements to body
document.addEventListener("DOMContentLoaded", function () {
  document.body.appendChild(bannerContainer);
  document.head.appendChild(dynamicStyles);

  initializeBanner();
});

function initializeBanner() {
    const checkboxes = document.querySelectorAll('.checkboxes input[type="checkbox"]');
    const finalPrice = document.getElementById("final_price");
  
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
  
        let price = 0;
        checkboxes.forEach(cb => {
          if (cb.checked) {
            price += 250; 
          }
        });
        finalPrice.textContent = price;
  
        const checkedCount = document.querySelectorAll('.checkboxes input[type="checkbox"]:checked').length;
        checkboxes.forEach(cb => {
          if (checkedCount === 1 && cb.checked) {
            cb.disabled = true;
          } else {
            cb.disabled = false;
          }
        });
      });
    });
  }
  
  
  
  
