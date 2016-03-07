var Handlebars = require("handlebars");
 exports["views"] = exports["views"] || {};
exports["views"]["partials"] = exports["views"]["partials"] || {};
exports["views"]["partials"]["aboutContent"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<section class=\"about__section__mainContent\">\n  <div class=\"about__section__contentBorder\">\n  <div class=\"about__section__contentContainer\">\n    <header class=\"about__section__header\">\n      <h2>\n        About\n      </h2>\n    </header>\n      <p>DS Luxury Travel is a small and intimate executive car hire service run and operated by myself.</p>\n      <p>I am a retired Police Officer and during my career I gained much experience in customer service, as well as receiving advanced driver training.</p>\n      <p>I strive to meet the exacting standards demanded by my clientele, providing a personal experience tailored to their requirements.</p>\n      <p>You can rest assured that I am fully licensed through Rother District Council, my vehicle is maintained to the highest standard and I have a clear DBS (criminal record check).</p>\n    </div>\n    </div>\n  <footer class=\"about__section__footer\">\n  RELIABLE - PROFESSIONAL - COMPETITIVELY PRICED - FULLY INSURED AND LICENSED\n  </footer>\n</section>\n";
},"useData":true});
exports["views"]["partials"]["aboutContinue"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"about__splash__continue\">\n  <a href=\"#top\"><div class=\"arrow-up\"></div></a>\n  <a href=\"#services\">\n    Scroll down to see the services I offer\n    <div class=\"arrow-down\"></div>\n  </a>\n</div>\n";
},"useData":true});
exports["views"]["partials"]["contactContent"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<section class=\"contact__section__mainContent\">\n  <div class=\"contact__section__contentBorder\">\n  <div class=\"contact__section__contentContainer\">\n    <header class=\"contact__section__header\">\n      <h2>\n        Contact me\n      </h2>\n    </header>\n      <p>Fill in your details below and I'll get back to you.</p>\n      <p>"
    + ((stack1 = this.invokePartial(partials.contactForm,depth0,{"name":"contactForm","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</p>\n    </div>\n    </div>\n  <footer class=\"contact__section__footer\">\n  RELIABLE - PROFESSIONAL - COMPETITIVELY PRICED - FULLY INSURED AND LICENSED\n  </footer>\n</section>\n";
},"usePartial":true,"useData":true});
exports["views"]["partials"]["contactContinue"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"contact__splash__continue\">\n  <a href=\"#about\" class=\"scroll\">\n    Scroll down to find out more about me\n    <div class=\"arrow-down\"></div>\n  </a>\n</div>\n";
},"useData":true});
exports["views"]["partials"]["contactForm"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "  <form method=\"post\" name=\"dslContact\" class=\"contact__content__form\">\n  	<p class=\"contact__content__form__name\">Name: <input type=\"text\" name=\"name\" /></p>\n  	<p class=\"contact__content__form__address\">Address: <input type=\"text\" name=\"address\" /></p>\n  	<p class=\"contact__content__form__phoneDay\">Phone (daytime or mobile): <input type=\"text\" name=\"phoneDay\" /></p>\n  	<p class=\"contact__content__form__phoneEve\">Phone (evening): <input type=\"text\" name=\"phoneEve\" /></p>\n  	<p class=\"contact__content__form__pickUp\">Pick-up location (inc. post code if known): <input type=\"text\" name=\"pickUp\" /></p>\n  	<p class=\"contact__content__form__time\">Pick-up time: <input type=\"text\" name=\"time\" /></p>\n  	<p class=\"contact__content__form__dropOff\">Drop-off location (inc. post code if known): <input type=\"text\" name=\"dropOff\" /></p>\n  	<p class=\"contact__content__form__number\">Number of passengers: <input type=\"text\" name=\"number\" /></p>\n  	<p class=\"contact__content__form__children\">Are any of the passengers under the age of 18? <input type=\"text\" name=\"number\" /></p>\n  	<p class=\"contact__content__form__special\">Special requirements: <input type=\"text\" name=\"special\" /></p>\n  	<input type=\"submit\" />\n  </form>\n";
},"useData":true});
exports["views"]["partials"]["homeContent"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<section class=\"home__section__mainContent\">\n  <div class=\"home__section__contentBorder\">\n  <div class=\"home__section__contentContainer\">\n    <header class=\"home__section__header\">\n      <h2>\n        Comfort and luxury combined\n      </h2>\n    </header>\n      <p>Executive Private Hire based in Peasmarsh near Rye, East Sussex.</p>\n      <p>Your own Private Chauffeur available for pre-book services.</p>\n    </div>\n    </div>\n  <footer class=\"home__section__footer\">\n  RELIABLE - PROFESSIONAL - COMPETITIVELY PRICED - FULLY INSURED AND LICENSED\n  </footer>\n</section>\n";
},"useData":true});
exports["views"]["partials"]["homeContinue"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"home__splash__continue\">\n  <a href=\"#about\" class=\"scroll\">\n    Scroll down to find out more about me\n    <div class=\"arrow-down\"></div>\n  </a>\n</div>\n";
},"useData":true});
exports["views"]["partials"]["pageFooter"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"page__footer__byline\">\n  ModPsy WebWorks Limited\n</div>\n\n<p class=\"page__footer__p\">\n  Registered in England & Wales<br />\n  Company Number 08786639<br />\n  VAT No. 177 8452 62\n</p>\n  Contact: <a href=\"mailto:queries@modpsy.co.uk\" class=\"page__footer__a\">queries@modpsy.co.uk</a>\n";
},"useData":true});
exports["views"]["partials"]["pageHead"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<head>\n  <title>"
    + this.escapeExpression(((helper = (helper = helpers.pageTitle || (depth0 != null ? depth0.pageTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"pageTitle","hash":{},"data":data}) : helper)))
    + "</title>\n  <link href=\"/css/main.css\" rel=\"stylesheet\" media=\"screen\" />\n  <script language=\"JavaScript\" type=\"text/javascript\" src=\"/js/ie_html5_elements.js\"></script>\n	<script language=\"JavaScript\" type=\"text/javascript\" src=\"/js/jquery.min.js\"></script>\n	<script language=\"JavaScript\" type=\"text/javascript\" src=\"/js/main.js\"></script>\n  <script language=\"JavaScript\" type=\"text/javascript\" src=\"/js/retina.min.js\"></script>\n  <script language=\"JavaScript\" type=\"text/javascript\" src=\"/js/jquery.mobile.custom.min.js\"></script>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n</head>\n";
},"useData":true});
exports["views"]["partials"]["pageHeader"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<a href=\"/\" class=\"page__header__a\">\n  <h1 title=\"DS Luxury Travel\" class=\"page__header__h1\">\n    <img src=\"/img/ds_logo.png\" class=\"page__header__img\" height=\"135px\" width=\"293px\" alt=\"DS Luxury Travel\">\n  </h1>\n</a>\n";
},"useData":true});
exports["views"]["partials"]["pageNav"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul class=\"page__nav__ul\">\n  <li class=\"page__nav__li\"><a href=\"#about\" class=\"page__nav__about__a\">About</a></li>\n  <li class=\"page__nav__li\"><a href=\"#services\" class=\"page__nav__services__a\">Services</a></li>\n  <li class=\"page__nav__li\"><a href=\"#prices\" class=\"page__nav__prices__a\">Prices</a></li>\n  <li class=\"page__nav__li\"><a href=\"#contact\" class=\"page__nav__contact__a\">Contact</a></li>\n</ul>\n<div class=\"page__nav__contact__div\">\n  <div class=\"page__nav__contact__phone__div\">\n    <a href=\"tel:+447492727377\">+44 (0)7492 727 377</a>\n  </div>\n  <div class=\"page__nav__contact__social__div\">\n    <a href=\"fblink\"><img src=\"/img/fb_logo.png\" alt=\"Facebook logo\" /></a>\n  </div>\n</div>\n<div class=\"page__nav__phone__div\"></div>\n<div class=\"page__nav__reveal__div\"></div>\n";
},"useData":true});
exports["views"]["partials"]["partialTest"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<p>echo: "
    + this.escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"message","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"useData":true});