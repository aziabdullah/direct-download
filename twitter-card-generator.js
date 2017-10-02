function generateTwitter() {
  var twitterContent = '';
  var card = document.getElementById('twitterCard').value;
  var site = document.getElementById('twitterSite').value;
  var title = document.getElementById('twitterTitle').value;
  var description = document.getElementById('twitterDescription').value;
  var image = document.getElementById('twitterImage').value;
  var imageAlt = document.getElementById('twitterImageAlt').value;
  var player = document.getElementById('twitterPlayer').value;
  var playerWidth = document.getElementById('twitterPlayerWidth').value;
  var playerHeight = document.getElementById('twitterPlayerHeight').value;
  var appIDiPhone = document.getElementById('twitterAppIDiPhone').value;
  var appIDiPad = document.getElementById('twitterAppIDiPad').value;
  var appIDGooglePlay = document.getElementById('twitterAppIDGooglePlay').value;
  var appCountry = document.getElementById('twitterAppCountry').value;

  if (card) {twitterContent += '<meta name="twitter:card" content="' + card + '">' + "\n"}
  if (site) {twitterContent += '<meta name="twitter:site" content="' + site + '">' + "\n"}
  if (title) {twitterContent += '<meta name="twitter:title" content="' + title + '">' + "\n"}
  if (description) {twitterContent += '<meta name="twitter:description" content="' + description + '">' + "\n"}
  if (image) {twitterContent += '<meta name="twitter:image" content="' + image + '">' + "\n"}
  if (imageAlt) {twitterContent += '<meta name="twitter:image:alt" content="' + imageAlt + '">' + "\n"}
  if (player) {twitterContent += '<meta name="twitter:player" content="' + player + '">' + "\n"}
  if (playerWidth) {twitterContent += '<meta name="twitter:player:width" content="' + playerWidth + '">' + "\n"}
  if (playerHeight) {twitterContent += '<meta name="twitter:player:height" content="' + playerHeight + '">' + "\n"}
  if (appIDiPhone) {twitterContent += '<meta name="twitter:app:id:iphone" content="' + appIDiPhone + '">' + "\n"}
  if (appIDiPad) {twitterContent += '<meta name="twitter:app:id:ipad" content="' + appIDiPad + '">' + "\n"}
  if (appIDGooglePlay) {twitterContent += '<meta name="twitter:app:id:googleplay" content="' + appIDGooglePlay + '">' + "\n"}
  if (appCountry) {twitterContent += '<meta name="twitter:app:country" content="' + appCountry + '">' + "\n"}
  document.getElementById('twitterContent').value = twitterContent;
}
function selectCardTwitter(card) {
  // twitterSite, twitterTitle, twitterDescription, twitterImage, twitterPlayer, twitterPlayerWidth, twitterPlayerHeight, twitterAppIDiPhone, twitterAppIDiPad, twitterAppIDGooglePlay
  // tSite, tTitle, tDescription, tImage, tPlayer, tPlayerWidth, tPlayerHeight, tAppIDiPhone, tAppIDiPad, tAppIDGooglePlay
  if (card == 'player') {
    // Player
    var showID = ["tSite", "tTitle", "tDescription", "tImage", "tImageAlt", "tPlayer", "tPlayerWidth", "tPlayerHeight"];
    var empty   = ["twitterAppIDiPhone", "twitterAppIDiPad", "twitterAppIDGooglePlay", "twitterAppCountry"];
    var hideID = ["tAppIDiPhone", "tAppIDiPad", "tAppIDGooglePlay", "tAppCountry"];
	var required = ["rSite", "rTitle", "rImage", "rPlayer", "rPlayerWidth", "rPlayerHeight"];
	var notRequired = ["rDescription", "tImageAlt"];
    for (i = 0; i < showID.length; i++) {
      document.getElementById(showID[i]).style.display = "block";
    }
    for (i = 0; i < empty.length; i++) {
      document.getElementById(empty[i]).value = '';
    }
    for (i = 0; i < hideID.length; i++) {
      document.getElementById(hideID[i]).style.display = "none";
    }
    for (i = 0; i < required.length; i++) {
      document.getElementById(required[i]).style.display = "inline-block";
    }
    for (i = 0; i < notRequired.length; i++) {
      document.getElementById(notRequired[i]).style.display = "none";
    }
  }
  if (card == 'app') {
    // App
    var showID = ["tSite", "tDescription", "tAppIDiPhone", "tAppIDiPad", "tAppIDGooglePlay", "tAppCountry"];
    var empty   = ["twitterTitle", "twitterImage", "twitterImageAlt", "twitterPlayer", "twitterPlayerWidth", "twitterPlayerHeight"];
    var hideID = ["tTitle", "tImage", "tImageAlt", "tPlayer", "tPlayerWidth", "tPlayerHeight"];
	var required = ["rSite", "rAppIDiPhone", "rAppIDiPad", "rAppIDGooglePlay"];
	var notRequired = ["rDescription", "rAppCountry"];
    for (i = 0; i < showID.length; i++) {
      document.getElementById(showID[i]).style.display = "block";
    }
    for (i = 0; i < empty.length; i++) {
      document.getElementById(empty[i]).value = '';
    }
    for (i = 0; i < hideID.length; i++) {
      document.getElementById(hideID[i]).style.display = "none";
    }
    for (i = 0; i < required.length; i++) {
      document.getElementById(required[i]).style.display = "inline-block";
    }
    for (i = 0; i < notRequired.length; i++) {
      document.getElementById(notRequired[i]).style.display = "none";
    }
  }
  if (card == 'summary' || card == 'summary_large_image') {
    // Summary or Summary Large Image
    var showID = ["tSite", "tTitle", "tDescription", "tImage", "tImageAlt"];
    var empty   = ["twitterPlayer", "twitterPlayerWidth", "twitterPlayerHeight", "twitterAppIDiPhone", "twitterAppIDiPad", "twitterAppIDGooglePlay", "twitterAppCountry"];
    var hideID = ["tPlayer", "tPlayerWidth", "tPlayerHeight", "tAppIDiPhone", "tAppIDiPad", "tAppIDGooglePlay", "tAppCountry"];
	var required = ["rSite", "rTitle", "rDescription"];
	var notRequired = ["rImage", "rImageAlt"];
    for (i = 0; i < showID.length; i++) {
      document.getElementById(showID[i]).style.display = "block";
    }
    for (i = 0; i < empty.length; i++) {
      document.getElementById(empty[i]).value = '';
    }
    for (i = 0; i < hideID.length; i++) {
      document.getElementById(hideID[i]).style.display = "none";
    }
    for (i = 0; i < required.length; i++) {
      document.getElementById(required[i]).style.display = "inline-block";
    }
    for (i = 0; i < notRequired.length; i++) {
      document.getElementById(notRequired[i]).style.display = "none";
    }
  }
  generateTwitter()
}
