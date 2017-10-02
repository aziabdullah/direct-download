function generateOpenGraph() {
  var ogContent = '';
  
  var ogType = document.getElementById('ogType').value;
  var ogTitle = document.getElementById('ogTitle').value;
  var ogDescription = document.getElementById('ogDescription').value;
  var ogUrl = document.getElementById('ogUrl').value;
  var ogImage = document.getElementById('ogImage').value;
  var ogFacebookAppID = document.getElementById('ogFacebookAppID').value;
  var ogBusinessStreetaddress = document.getElementById('ogBusinessStreetaddress').value;
  var ogBusinessLocality = document.getElementById('ogBusinessLocality').value;
  var ogBusinessRegion = document.getElementById('ogBusinessRegion').value;
  var ogBusinessPostalcode = document.getElementById('ogBusinessPostalcode').value;
  var ogBusinessCountryname = document.getElementById('ogBusinessCountryname').value;
  var ogBusinessEmail = document.getElementById('ogBusinessEmail').value;
  var ogBusinessPhoneNumber = document.getElementById('ogBusinessPhoneNumber').value;
  var ogBusinessFaxNumber = document.getElementById('ogBusinessFaxNumber').value;
  var ogBusinessWebsite = document.getElementById('ogBusinessWebsite').value;
  var ogProductPriceAmount = document.getElementById('ogProductPriceAmount').value;
  var ogProductPriceCurrency = document.getElementById('ogProductPriceCurrency').value;
  var ogProductTaxAmount = document.getElementById('ogProductTaxAmount').value;
  var ogProductTaxCurrency = document.getElementById('ogProductTaxCurrency').value;
  var ogProductShippingAmount = document.getElementById('ogProductShippingAmount').value;
  var ogProductShippingCurrency = document.getElementById('ogProductShippingCurrency').value;

  var ogRestaurantStreetaddress = document.getElementById('ogRestaurantStreetaddress').value;
  var ogRestaurantLocality = document.getElementById('ogRestaurantLocality').value;
  var ogRestaurantRegion = document.getElementById('ogRestaurantRegion').value;
  var ogRestaurantPostalcode = document.getElementById('ogRestaurantPostalcode').value;
  var ogRestaurantCountryname = document.getElementById('ogRestaurantCountryname').value;
  var ogRestaurantEmail = document.getElementById('ogRestaurantEmail').value;
  var ogRestaurantPhoneNumber = document.getElementById('ogRestaurantPhoneNumber').value;
  var ogRestaurantWebsite = document.getElementById('ogRestaurantWebsite').value;

  var ogProfileFirstname = document.getElementById('ogProfileFirstname').value;
  var ogProfileLastname = document.getElementById('ogProfileLastname').value;
  var ogProfileGender = document.getElementById('ogProfileGender').value;
  var ogProfileUsername = document.getElementById('ogProfileUsername').value;

  var ogLocationLatitude = document.getElementById('ogLocationLatitude').value;
  var ogLocationLongitude = document.getElementById('ogLocationLongitude').value;

  if (ogType) {ogContent += '<meta property="og:type" content="' + ogType + '">' + "\n"}
  if (ogTitle) {ogContent += '<meta property="og:title" content="' + ogTitle + '">' + "\n"}
  if (ogDescription) {ogContent += '<meta property="og:description" content="' + ogDescription + '">' + "\n"}
  if (ogUrl) {ogContent += '<meta property="og:url" content="' + ogUrl + '">' + "\n"}
  if (ogImage) {ogContent += '<meta property="og:image" content="' + ogImage + '">' + "\n"}
  if (ogFacebookAppID) {ogContent += '<meta property="fb:app_id" content="' + ogFacebookAppID + '">' + "\n"}
  if (ogBusinessStreetaddress) {ogContent += '<meta property="business:contact_data:street_address" content="' + ogBusinessStreetaddress + '">' + "\n"}
  if (ogBusinessLocality) {ogContent += '<meta property="business:contact_data:locality" content="' + ogBusinessLocality + '">' + "\n"}
  if (ogBusinessRegion) {ogContent += '<meta property="business:contact_data:region" content="' + ogBusinessRegion + '">' + "\n"}
  if (ogBusinessPostalcode) {ogContent += '<meta property="business:contact_data:postal_code" content="' + ogBusinessPostalcode + '">' + "\n"}
  if (ogBusinessCountryname) {ogContent += '<meta property="business:contact_data:country_name" content="' + ogBusinessCountryname + '">' + "\n"}
  if (ogBusinessEmail) {ogContent += '<meta property="business:contact_data:email" content="' + ogBusinessEmail + '">' + "\n"}
  if (ogBusinessPhoneNumber) {ogContent += '<meta property="business:contact_data:phone_number" content="' + ogBusinessPhoneNumber + '">' + "\n"}
  if (ogBusinessFaxNumber) {ogContent += '<meta property="business:contact_data:fax_number" content="' + ogBusinessFaxNumber + '">' + "\n"}
  if (ogBusinessWebsite) {ogContent += '<meta property="business:contact_data:website" content="' + ogBusinessWebsite + '">' + "\n"}
  if (ogRestaurantStreetaddress) {ogContent += '<meta property="restaurant:contact_info:street_address" content="' + ogRestaurantStreetaddress + '">' + "\n"}
  if (ogRestaurantLocality) {ogContent += '<meta property="restaurant:contact_info:locality" content="' + ogRestaurantLocality + '">' + "\n"}
  if (ogRestaurantRegion) {ogContent += '<meta property="restaurant:contact_info:region" content="' + ogRestaurantRegion + '">' + "\n"}
  if (ogRestaurantPostalcode) {ogContent += '<meta property="restaurant:contact_info:postal_code" content="' + ogRestaurantPostalcode + '">' + "\n"}
  if (ogRestaurantCountryname) {ogContent += '<meta property="restaurant:contact_info:country_name" content="' + ogRestaurantCountryname + '">' + "\n"}
  if (ogRestaurantEmail) {ogContent += '<meta property="restaurant:contact_info:email" content="' + ogRestaurantEmail + '">' + "\n"}
  if (ogRestaurantPhoneNumber) {ogContent += '<meta property="restaurant:contact_info:phone_number" content="' + ogRestaurantPhoneNumber + '">' + "\n"}
  if (ogRestaurantWebsite) {ogContent += '<meta property="restaurant:contact_info:website" content="' + ogRestaurantWebsite + '">' + "\n"}
  if (ogProductPriceAmount) {ogContent += '<meta property="product:price:amount" content="' + ogProductPriceAmount + '">' + "\n"}
  if (ogProductPriceCurrency) {ogContent += '<meta property="product:price:currency" content="' + ogProductPriceCurrency + '">' + "\n"}
  if (ogProductTaxAmount) {ogContent += '<meta property="product:pretax_price:amount" content="' + ogProductTaxAmount + '">' + "\n"}
  if (ogProductTaxCurrency) {ogContent += '<meta property="product:pretax_price:currency" content="' + ogProductTaxCurrency + '">' + "\n"}
  if (ogProductShippingAmount) {ogContent += '<meta property="product:shipping_cost:amount" content="' + ogProductShippingAmount + '">' + "\n"}
  if (ogProductShippingCurrency) {ogContent += '<meta property="product:shipping_cost:currency" content="' + ogProductShippingCurrency + '">' + "\n"}

  if (ogProfileFirstname) {ogContent += '<meta property="profile:first_name" content="' + ogProfileFirstname + '">' + "\n"}
  if (ogProfileLastname) {ogContent += '<meta property="profile:last_name" content="' + ogProfileLastname + '">' + "\n"}
  if (ogProfileGender) {ogContent += '<meta property="profile:gender" content="' + ogProfileGender + '">' + "\n"}
  if (ogProfileUsername) {ogContent += '<meta property="profile:username" content="' + ogProfileUsername + '">' + "\n"}

  if (ogLocationLatitude) {ogContent += '<meta property="place:location:latitude" content="' + ogLocationLatitude + '">' + "\n"}
  if (ogLocationLongitude) {ogContent += '<meta property="place:location:longitude" content="' + ogLocationLongitude + '">' + "\n"}
  document.getElementById('ogContent').value = ogContent;




}

function selectOpenGraph(type) {
  var allFields = ["ogFacebookAppID", "ogTitle", "ogDescription", "ogUrl", "ogImage", "ogLocationLatitude", "ogLocationLongitude",
                   "ogBusinessStreetaddress", "ogBusinessLocality", "ogBusinessRegion", "ogBusinessPostalcode", "ogBusinessCountryname",
                   "ogBusinessEmail", "ogBusinessPhoneNumber", "ogBusinessFaxNumber", "ogBusinessWebsite",
				   "ogProductPriceAmount", "ogProductPriceCurrency", "ogProductTaxAmount", "ogProductTaxCurrency", "ogProductShippingAmount", "ogProductShippingCurrency",
                   "ogRestaurantStreetaddress", "ogRestaurantLocality", "ogRestaurantRegion", "ogRestaurantPostalcode",
				   "ogRestaurantCountryname", "ogRestaurantEmail", "ogRestaurantPhoneNumber", "ogRestaurantWebsite",
				   "ogProfileFirstname", "ogProfileLastname", "ogProfileGender", "ogProfileUsername",
				   ];

/*
    show["ogFacebookAppID"] = 'show';
    show["ogTitle"] = 'req';
    show["ogDescription"] = 'show';
    show["ogUrl"] = 'show';
    show["ogImage"] = 'show';

    show["ogBusinessStreetaddress"] = 'req';
    show["ogBusinessLocality"] = 'req';
    show["ogBusinessRegion"] = 'show';
    show["ogBusinessPostalcode"] = 'req';
    show["ogBusinessCountryname"] = 'req';
    show["ogBusinessEmail"] = 'show';
    show["ogBusinessPhoneNumber"] = 'show';
    show["ogBusinessFaxNumber"] = 'show';
    show["ogBusinessWebsite"] = 'show';

    show["ogRestaurantStreetaddress"] = 'show';
    show["ogRestaurantLocality"] = 'show';
    show["ogRestaurantRegion"] = 'show';
    show["ogRestaurantPostalcode"] = 'show';
    show["ogRestaurantCountryname"] = 'show';
    show["ogRestaurantEmail"] = 'show';
    show["ogRestaurantPhoneNumber"] = 'show';
    show["ogRestaurantWebsite"] = 'show';

    show["ogLocationLatitude"] = 'show';
    show["ogLocationLongitude"] = 'show';

    show["ogProductPriceAmount"] = 'show';
    show["ogProductPriceCurrency"] = 'show';
    show["ogProductTaxAmount"] = 'show';
    show["ogProductTaxCurrency"] = 'show';
    show["ogProductShippingAmount"] = 'show';
    show["ogProductShippingCurrency"] = 'show';

    show["ogProfileFirstname"] = 'show';
    show["ogProfileLastname"] = 'show';
    show["ogProfileGender"] = 'show';
    show["ogProfileUsername"] = 'show';
*/

  // ARTICLE
  if (type == 'article' || type == 'website') {
    var show = {};
    show["ogFacebookAppID"] = 'show';
    show["ogTitle"] = 'req';
    show["ogDescription"] = 'show';
    show["ogUrl"] = 'show';
    show["ogImage"] = 'show';

  }
  // PLACE
  if (type == 'place') {
    var show = {};
    show["ogFacebookAppID"] = 'show';
    show["ogTitle"] = 'req';
    show["ogDescription"] = 'show';
    show["ogUrl"] = 'show';
    show["ogImage"] = 'show';

    show["ogLocationLatitude"] = 'req';
    show["ogLocationLongitude"] = 'req';
  }
  // BUSINESS
  if (type == 'business.business') {
    var show = {};
    show["ogFacebookAppID"] = 'show';
    show["ogTitle"] = 'req';
    show["ogDescription"] = 'show';
    show["ogUrl"] = 'show';
    show["ogImage"] = 'show';

    show["ogBusinessStreetaddress"] = 'req';
    show["ogBusinessLocality"] = 'req';
    show["ogBusinessPostalcode"] = 'req';
    show["ogBusinessRegion"] = 'show';
    show["ogBusinessCountryname"] = 'req';
    show["ogBusinessEmail"] = 'show';
    show["ogBusinessPhoneNumber"] = 'show';
    show["ogBusinessFaxNumber"] = 'show';
    show["ogBusinessWebsite"] = 'show';

    show["ogLocationLatitude"] = 'req';
    show["ogLocationLongitude"] = 'req';
  }

  // RESTAURANT
  if (type == 'restaurant.restaurant') {
    var show = {};
    show["ogFacebookAppID"] = 'show';
    show["ogTitle"] = 'req';
    show["ogDescription"] = 'show';
    show["ogUrl"] = 'show';
    show["ogImage"] = 'show';

    show["ogRestaurantStreetaddress"] = 'show';
    show["ogRestaurantLocality"] = 'show';
    show["ogRestaurantRegion"] = 'show';
    show["ogRestaurantPostalcode"] = 'show';
    show["ogRestaurantCountryname"] = 'show';
    show["ogRestaurantEmail"] = 'show';
    show["ogRestaurantPhoneNumber"] = 'show';
    show["ogRestaurantWebsite"] = 'show';

    show["ogLocationLatitude"] = 'req';
    show["ogLocationLongitude"] = 'req';
  }

  // PRODUCT
  if (type == 'product') {
    var show = {};
    show["ogFacebookAppID"] = 'show';
    show["ogTitle"] = 'req';
    show["ogDescription"] = 'show';
    show["ogUrl"] = 'show';
    show["ogImage"] = 'show';

    show["ogProductPriceAmount"] = 'show';
    show["ogProductPriceCurrency"] = 'show';
    show["ogProductTaxAmount"] = 'show';
    show["ogProductTaxCurrency"] = 'show';
    show["ogProductShippingAmount"] = 'show';
    show["ogProductShippingCurrency"] = 'show';
  }
  
  // PROFILE
  if (type == 'profile') {
    var show = {};
    show["ogFacebookAppID"] = 'show';
    show["ogTitle"] = 'req';
    show["ogUrl"] = 'show';
    show["ogImage"] = 'show';

    show["ogProfileFirstname"] = 'show';
    show["ogProfileLastname"] = 'show';
    show["ogProfileGender"] = 'show';
    show["ogProfileUsername"] = 'show';
  }

  for (i = 0; i < allFields.length; i++) {
    if (show[allFields[i]]) {
      document.getElementById(allFields[i] + 'Display').style.display = "block";
	  if (show[allFields[i]] == 'req') {
        document.getElementById(allFields[i] + 'Required').style.display = "inline-block";
	  }
	} else {
      document.getElementById(allFields[i] + 'Display').style.display = "none";
      document.getElementById(allFields[i] + 'Required').style.display = "none";
      document.getElementById(allFields[i]).value = '';
	}
  }

  generateOpenGraph()
}

