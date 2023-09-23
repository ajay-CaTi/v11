// exports.FETCH_URL =
//   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

// exports.Res_Data =
//   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=375041&catalog_qa=undefined&submitAction=ENTER";

exports.CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const restaurants = [
  {
    id: "375041",
    name: "Andhra Gunpowder",
    cloudinaryImageId: "byilgyrcfz690ryoasww",
    locality: "6th Block",
    areaName: "Koramangala",
    costForTwo: "₹350 for two",
    cuisines: ["Andhra", "Biryani", "South Indian"],
    avgRating: 4.3,
    feeDetails: {
      restaurantId: "375041",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 2800,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 2800,
    },
    parentId: "10496",
    avgRatingString: "4.3",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 14,
      lastMileTravel: 0.1,
      serviceability: "SERVICEABLE",
      slaString: "14 mins",
      lastMileTravelString: "0.1 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-23 03:00:00",
      opened: true,
    },
    badges: {
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹100 OFF",
      subHeader: "ABOVE ₹299",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "25620",
    name: "KFC",
    cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
    locality: "Intermediate Ring Road",
    areaName: "Ejipura",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    avgRating: 4.1,
    feeDetails: {
      restaurantId: "25620",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 3500,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 3500,
    },
    parentId: "547",
    avgRatingString: "4.1",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 18,
      lastMileTravel: 1.5,
      serviceability: "SERVICEABLE",
      slaString: "18 mins",
      lastMileTravelString: "1.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-22 23:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "40% OFF",
      subHeader: "UPTO ₹80",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "65797",
    name: "Leon's - Burgers & Wings (Leon Grill)",
    cloudinaryImageId: "r4ufflqojich0r29efvc",
    locality: "Koramangala",
    areaName: "Koramangala",
    costForTwo: "₹300 for two",
    cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
    avgRating: 4.3,
    feeDetails: {
      restaurantId: "65797",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 2800,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 2800,
    },
    parentId: "371281",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 18,
      lastMileTravel: 1.3,
      serviceability: "SERVICEABLE",
      slaString: "18 mins",
      lastMileTravelString: "1.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-23 04:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
];

export default restaurants;
