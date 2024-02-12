import React from "react"
import {
  AdobeIcon,
  AdobeIcon2,
  AzulIcon,
  HuaweiIcon,
  IBMIcon,
  MicrosoftIcon,
} from "../Common/Icon"

const MarketPlaceTabButton = ({ market, setMarket }) => {
  return (
    <div className="w-full  ">
      <div className="overflow-auto min-w-full w-full ">
        <div className="flex space-x-5  py-2">
          <button
            onClick={() => setMarket(1)}
            className={` py-2  flex justify-center items-center  min-w-[200px] 
                outline-none cursor-pointer transition-all duration-200 ease-in-out bg-white rounded-[80px] ${market === 1 ? "border-primary  border-2" : " border-white  border-2"}`}
          >
            <span>
              <MicrosoftIcon />
            </span>
          </button>
          <button
            onClick={() => setMarket(2)}
            className={` py-2   flex justify-center items-center   min-w-[200px] 
                outline-none cursor-pointer transition-all duration-200 ease-in-out bg-white rounded-[80px] ${market === 2 ? "border-primary  border-2" : " border-white  border-2"}`}
          >
            <span>
              <svg
                width="146"
                height="32"
                viewBox="0 0 146 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50.4856 18.9937C50.4865 19.142 50.4541 19.2886 50.3906 19.4227C50.3272 19.5568 50.2345 19.675 50.1193 19.7684C49.8874 19.9749 49.5877 20.0889 49.2772 20.0884C49.0718 20.0899 48.8703 20.0329 48.6961 19.9242C48.5092 19.8026 48.3626 19.6282 48.2751 19.4231L47.6519 18.021H43.1593L42.5235 19.4231C42.4364 19.6285 42.2897 19.803 42.1024 19.9242C41.9254 20.0334 41.721 20.0903 41.513 20.0884C41.2025 20.0889 40.9027 19.9749 40.6709 19.7684C40.5514 19.6778 40.4546 19.5606 40.3881 19.4261C40.3216 19.2917 40.2872 19.1437 40.2877 18.9937C40.2905 18.8151 40.3337 18.6395 40.414 18.48L44.0645 10.9474C44.1765 10.7053 44.3622 10.5048 44.5951 10.3747C44.8336 10.2392 45.1039 10.1695 45.3782 10.1726C45.651 10.1712 45.9195 10.2409 46.1572 10.3747C46.3932 10.5034 46.582 10.704 46.6961 10.9474L50.3593 18.4673C50.4415 18.6307 50.4847 18.8108 50.4856 18.9937ZM44.0224 16.1095H46.7972L45.4119 13.0147L44.0224 16.1095ZM56.014 19.7431C55.9064 19.6254 55.8237 19.4871 55.7708 19.3366C55.718 19.1861 55.6962 19.0265 55.7066 18.8673V11.4484C55.6885 11.2892 55.7065 11.1279 55.7594 10.9767C55.8122 10.8254 55.8985 10.6879 56.0118 10.5746C56.1251 10.4613 56.2625 10.375 56.4138 10.3222C56.5651 10.2694 56.7263 10.2513 56.8856 10.2695H59.6898C60.6551 10.2429 61.6131 10.4448 62.4856 10.8589C63.2397 11.2264 63.865 11.8136 64.2792 12.5431C64.7138 13.3445 64.9288 14.2466 64.9024 15.1579C64.9285 16.0735 64.7167 16.9802 64.2877 17.7895C63.8773 18.5206 63.2528 19.1084 62.4982 19.4737C61.6195 19.8817 60.6582 20.0806 59.6898 20.0547H56.8856C56.7268 20.0643 56.5677 20.0416 56.4179 19.988C56.2681 19.9345 56.1307 19.8512 56.014 19.7431ZM61.6519 17.2926C61.9095 17.0021 62.1057 16.6625 62.2287 16.2942C62.3517 15.9259 62.399 15.5365 62.3677 15.1495C62.3991 14.7637 62.3518 14.3756 62.2288 14.0087C62.1057 13.6417 61.9095 13.3036 61.6519 13.0147C61.0577 12.5085 60.2869 12.2586 59.5087 12.32H58.2456V17.9958H59.5087C60.2881 18.0548 61.059 17.8019 61.6519 17.2926ZM72.2497 19.5537C71.529 19.1491 70.9433 18.5414 70.5655 17.8063C70.1489 16.9865 69.9393 16.0773 69.955 15.1579C69.9333 14.2371 70.1371 13.325 70.5487 12.501C70.9263 11.768 71.5123 11.163 72.2329 10.7621C73.0408 10.3604 73.9307 10.1514 74.8329 10.1514C75.7351 10.1514 76.625 10.3604 77.4329 10.7621C78.156 11.1597 78.7428 11.7656 79.1171 12.501C79.5273 13.3253 79.7296 14.2375 79.7066 15.1579C79.7288 16.0787 79.525 16.991 79.1129 17.8147C78.7351 18.5498 78.1494 19.1576 77.4287 19.5621C76.6247 19.9691 75.7362 20.1811 74.835 20.1811C73.9339 20.1811 73.0453 19.9691 72.2413 19.5621L72.2497 19.5537ZM76.5824 17.4484C77.0449 16.778 77.2661 15.9704 77.2097 15.1579C77.2661 14.35 77.0431 13.5473 76.5782 12.8842C76.3605 12.6405 76.0939 12.4455 75.7957 12.312C75.4974 12.1784 75.1744 12.1094 74.8476 12.1094C74.5209 12.1094 74.1978 12.1784 73.8996 12.312C73.6014 12.4455 73.3347 12.6405 73.1171 12.8842C72.6573 13.5494 72.4376 14.3512 72.494 15.1579C72.4357 15.97 72.6555 16.7777 73.1171 17.4484C73.3344 17.6934 73.6012 17.8896 73.8998 18.0239C74.1985 18.1582 74.5223 18.2277 74.8497 18.2277C75.1772 18.2277 75.501 18.1582 75.7996 18.0239C76.0983 17.8896 76.3651 17.6934 76.5824 17.4484ZM85.7529 19.7894C85.6373 19.6664 85.5475 19.5213 85.489 19.3629C85.4304 19.2046 85.4041 19.036 85.4118 18.8673V11.4484C85.3937 11.2892 85.4117 11.1279 85.4645 10.9767C85.5174 10.8254 85.6037 10.6879 85.717 10.5746C85.8303 10.4613 85.9677 10.375 86.119 10.3222C86.2703 10.2694 86.4315 10.2513 86.5908 10.2695H90.1402C91.059 10.2169 91.963 10.5183 92.6665 11.1116C92.9735 11.4063 93.213 11.7641 93.3685 12.1602C93.5241 12.5563 93.592 12.9814 93.5676 13.4063C93.5897 13.8304 93.5198 14.2543 93.3628 14.6489C93.2059 15.0435 92.9655 15.3996 92.6581 15.6926C91.9557 16.2878 91.0509 16.5894 90.1318 16.5347H87.955V18.8926C87.9638 19.0618 87.9377 19.231 87.8783 19.3896C87.8189 19.5482 87.7275 19.693 87.6097 19.8147C87.4833 19.9317 87.3347 20.0222 87.1727 20.0808C87.0107 20.1394 86.8386 20.1649 86.6665 20.1558C86.4975 20.159 86.3295 20.1282 86.1726 20.0653C86.0156 20.0023 85.8729 19.9086 85.7529 19.7894ZM90.8434 14.3158C90.9639 14.2006 91.0572 14.0599 91.1162 13.904C91.1752 13.748 91.1985 13.5809 91.1844 13.4147C91.1844 12.6119 90.7213 12.2091 89.795 12.2063H87.9634V14.6063H89.795C90.1677 14.6356 90.5389 14.5328 90.8434 14.3158ZM101.77 19.7894C101.65 19.6711 101.556 19.5291 101.495 19.3725C101.433 19.2159 101.405 19.0481 101.412 18.88V12.3326H99.4581C99.134 12.3589 98.8112 12.2677 98.5486 12.0758C98.4436 11.9758 98.3622 11.8536 98.3105 11.7181C98.2587 11.5826 98.238 11.4372 98.2497 11.2926C98.2393 11.1507 98.2608 11.0082 98.3125 10.8757C98.3642 10.7431 98.4449 10.6237 98.5486 10.5263C98.8133 10.3394 99.1352 10.2515 99.4581 10.2779H105.951C106.274 10.2525 106.595 10.3404 106.86 10.5263C106.965 10.6249 107.045 10.7457 107.096 10.8799C107.147 11.0141 107.167 11.158 107.155 11.301C107.167 11.4453 107.147 11.5905 107.096 11.7259C107.045 11.8614 106.965 11.9838 106.86 12.0842C106.597 12.2748 106.275 12.3658 105.951 12.341H103.993V18.8673C104.001 19.0352 103.973 19.2029 103.912 19.3595C103.851 19.5161 103.758 19.6583 103.639 19.7768C103.377 19.9969 103.046 20.1175 102.704 20.1175C102.362 20.1175 102.031 19.9969 101.77 19.7768V19.7894ZM112.877 19.7894C112.762 19.666 112.673 19.5208 112.615 19.3625C112.558 19.2041 112.532 19.0357 112.54 18.8673V11.4484C112.526 11.279 112.549 11.1085 112.608 10.9489C112.666 10.7893 112.759 10.6443 112.879 10.5241C112.999 10.4039 113.144 10.3113 113.304 10.2528C113.463 10.1943 113.634 10.1712 113.803 10.1853C113.975 10.1747 114.148 10.1995 114.31 10.2582C114.472 10.3168 114.621 10.4081 114.746 10.5263C114.864 10.6457 114.956 10.788 115.016 10.9445C115.076 11.101 115.104 11.2683 115.096 11.4358V18.8673C115.104 19.0368 115.077 19.2062 115.017 19.3648C114.957 19.5235 114.865 19.668 114.746 19.7894C114.621 19.9077 114.472 19.9989 114.31 20.0576C114.148 20.1162 113.975 20.1411 113.803 20.1305C113.634 20.1388 113.465 20.1128 113.305 20.0542C113.146 19.9956 113.001 19.9056 112.877 19.7894ZM122.199 19.0905C121.466 18.3705 121.096 17.3137 121.096 15.9284V11.4484C121.101 11.2005 121.178 10.9594 121.316 10.7539C121.455 10.5484 121.65 10.3873 121.878 10.29C122.106 10.1926 122.358 10.1632 122.602 10.2051C122.846 10.247 123.073 10.3585 123.256 10.5263C123.369 10.6482 123.457 10.7914 123.515 10.9474C123.573 11.1035 123.599 11.2695 123.593 11.4358V16.0252C123.556 16.604 123.723 17.1774 124.064 17.6463C124.242 17.8263 124.454 17.9692 124.687 18.0668C124.921 18.1643 125.171 18.2145 125.424 18.2145C125.677 18.2145 125.928 18.1643 126.161 18.0668C126.395 17.9692 126.607 17.8263 126.784 17.6463C127.128 17.1784 127.295 16.6043 127.256 16.0252V11.4484C127.243 11.2792 127.266 11.109 127.325 10.9497C127.384 10.7904 127.476 10.6458 127.596 10.5257C127.716 10.4057 127.861 10.3131 128.02 10.2543C128.18 10.1955 128.35 10.172 128.519 10.1853C128.686 10.1787 128.853 10.2055 129.01 10.2641C129.167 10.3226 129.311 10.4117 129.433 10.5263C129.55 10.646 129.641 10.7886 129.7 10.945C129.76 11.1015 129.786 11.2686 129.778 11.4358V15.9284C129.778 17.3066 129.406 18.3579 128.662 19.0821C127.918 19.8063 126.835 20.1698 125.412 20.1726C124.008 20.1726 122.937 19.8119 122.199 19.0905ZM145.306 10.5263C145.533 10.7722 145.652 11.0977 145.639 11.4316V18.9937C145.649 19.1473 145.627 19.3013 145.575 19.4462C145.523 19.591 145.441 19.7236 145.336 19.8358C145.116 20.0337 144.83 20.1432 144.534 20.1432C144.238 20.1432 143.952 20.0337 143.732 19.8358C143.624 19.7248 143.541 19.5926 143.487 19.4476C143.433 19.3026 143.411 19.148 143.42 18.9937V14.9137L141.833 17.8273C141.716 18.0721 141.546 18.2878 141.336 18.4589C141.152 18.5857 140.932 18.6506 140.709 18.6442C140.486 18.6506 140.268 18.5857 140.085 18.4589C139.874 18.2889 139.704 18.0729 139.589 17.8273L138.043 14.9979V18.9937C138.053 19.148 138.03 19.3026 137.976 19.4476C137.923 19.5926 137.839 19.7248 137.732 19.8358C137.625 19.9403 137.497 20.0219 137.358 20.0754C137.218 20.129 137.069 20.1535 136.919 20.1473C136.773 20.1527 136.626 20.1282 136.49 20.0754C136.353 20.0226 136.228 19.9425 136.123 19.84C136.016 19.729 135.932 19.5968 135.879 19.4518C135.825 19.3068 135.802 19.1522 135.812 18.9979V11.4484C135.805 11.2824 135.832 11.1166 135.89 10.9611C135.949 10.8056 136.038 10.6634 136.153 10.5432C136.265 10.4293 136.4 10.3399 136.548 10.2805C136.697 10.221 136.856 10.1929 137.016 10.1979C137.26 10.1954 137.499 10.2706 137.698 10.4126C137.917 10.5744 138.093 10.7868 138.212 11.0316L140.763 15.8316L143.29 11.0316C143.379 10.7918 143.538 10.5838 143.745 10.434C143.953 10.2841 144.2 10.199 144.456 10.1895C144.613 10.1847 144.77 10.2121 144.916 10.27C145.062 10.3279 145.195 10.4151 145.306 10.5263ZM15.6604 1.88544e-05C14.365 -0.00298758 13.0943 0.353607 11.9896 1.03009C10.8849 1.70658 9.98967 2.67641 9.40357 3.83159L9.37409 3.88633L9.34883 3.94106L1.01622 22.0042L0.953058 22.1389L0.906742 22.2779C0.591903 23.1441 0.407435 24.0522 0.359375 24.9726C0.360487 26.5597 0.898467 28.0997 1.88583 29.3422C2.8732 30.5848 4.25188 31.4567 5.79767 31.8163C7.34346 32.176 8.96545 32.0021 10.3999 31.3229C11.8343 30.6438 12.9968 29.4994 13.6983 28.0758L20.9362 31.3305C21.8743 31.7751 22.9001 32.0039 23.9383 31.9999C25.8025 31.9977 27.5897 31.2562 28.9079 29.938C30.2261 28.6198 30.9676 26.8326 30.9698 24.9684C30.9238 24.0477 30.7393 23.1393 30.4225 22.2737L30.3762 22.1347L30.3172 22C22.2541 4.55159 21.9214 3.82738 21.8541 3.69685C21.2514 2.57905 20.3575 1.6452 19.267 0.994348C18.1766 0.343493 16.9303 -9.71334e-05 15.6604 1.88544e-05Z"
                  fill="#14003C"
                />
                <path
                  d="M20.1871 26.593L15.665 16.7783L12.2461 24.1888L22.1745 28.6562C21.2858 28.2294 20.5804 27.4971 20.1871 26.593Z"
                  fill="url(#paint0_linear_1_16328)"
                />
                <path
                  d="M27.6304 23.2421L19.4409 5.47367L19.3651 5.31367L19.3062 5.17473L19.2598 5.09473C19.5593 5.64921 19.7259 6.26571 19.7463 6.89557C19.7668 7.52544 19.6406 8.15144 19.3777 8.72419L15.6641 16.7789L20.1862 26.5936C20.5595 27.4551 21.2184 28.1616 22.0517 28.5943C22.885 29.0269 23.8419 29.1592 24.7614 28.9689C25.6808 28.7785 26.5066 28.2773 27.0997 27.5494C27.6928 26.8215 28.017 25.9115 28.0177 24.9726C28.0184 24.3742 27.8861 23.7831 27.6304 23.2421Z"
                  fill="url(#paint1_linear_1_16328)"
                />
                <path
                  d="M15.6597 2.9463C14.9074 2.94561 14.1695 3.15338 13.5281 3.54655C12.8867 3.93973 12.3668 4.50293 12.026 5.17366L11.9671 5.3084C11.9418 5.35892 11.9123 5.41366 11.8913 5.4684L3.69339 23.241C3.47222 23.7298 3.34948 24.2574 3.3322 24.7936C3.31491 25.3298 3.40342 25.8642 3.59265 26.3662C3.78189 26.8682 4.06815 27.3281 4.4351 27.7194C4.80204 28.1108 5.24249 28.4261 5.73128 28.6473C6.22007 28.8685 6.74764 28.9912 7.28387 29.0085C7.82009 29.0258 8.35447 28.9373 8.85649 28.748C9.35851 28.5588 9.81835 28.2725 10.2097 27.9056C10.6011 27.5386 10.9164 27.0982 11.1376 26.6094L19.3776 8.72313C19.6621 8.101 19.7856 7.41731 19.7367 6.73496C19.6879 6.0526 19.4683 5.39348 19.098 4.81822C18.7278 4.24296 18.2189 3.77003 17.618 3.44293C17.0172 3.11582 16.3438 2.94504 15.6597 2.9463Z"
                  fill="url(#paint2_linear_1_16328)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_16328"
                    x1="27.1134"
                    y1="27.4183"
                    x2="6.82716"
                    y2="16.7278"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4E1948" />
                    <stop offset="1" stop-color="#1C1537" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1_16328"
                    x1="14.2283"
                    y1="3.35157"
                    x2="25.3988"
                    y2="28.4252"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#A81255" />
                    <stop offset="1" stop-color="#4E1948" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_1_16328"
                    x1="5.93338"
                    y1="28.8326"
                    x2="16.8597"
                    y2="3.75892"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E72867" />
                    <stop offset="1" stop-color="#A81255" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </button>
          <button
            onClick={() => setMarket(3)}
            className={` py-2 flex justify-center items-center    min-w-[200px] 
                outline-none cursor-pointer transition-all duration-200 ease-in-out bg-white rounded-[80px] ${market === 3 ? "border-primary  border-2" : " border-white  border-2"}`}
          >
            <span>
              <HuaweiIcon />
            </span>
          </button>
          <button
            onClick={() => setMarket(4)}
            className={` py-2   flex justify-center items-center   min-w-[200px] 
                outline-none cursor-pointer transition-all duration-200 ease-in-out bg-white rounded-[80px] ${market === 4 ? "border-primary  border-2" : " border-white  border-2"}`}
          >
            <IBMIcon />
          </button>
          <button
            onClick={() => setMarket(5)}
            className={` py-2    flex justify-center items-center    min-w-[200px] 
                outline-none cursor-pointer transition-all duration-200 ease-in-out bg-white rounded-[80px] ${market === 5 ? "border-primary  border-2" : " border-white  border-2"}`}
          >
            <AzulIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default MarketPlaceTabButton
