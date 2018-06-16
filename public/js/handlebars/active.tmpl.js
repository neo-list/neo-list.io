(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['active'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.equal || (depth0 && depth0.equal) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.status : depth0),"Active",{"name":"equal","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "  <li id=\"project-line\" class=\"list-line w-clearfix\">\r\n    <div class=\"col gap\"></div>\r\n    <div class=\"col-info project w-clearfix\">\r\n      <div class=\"r1 w-row\">\r\n        <div class=\"col1 w-col w-col-5\"><a href=\"."
    + alias2(alias1((depth0 != null ? depth0.link : depth0), depth0))
    + "\" id=\"project-imglink\" class=\"w-inline-block\"><img src=\"images/nex-logo.png\" width=\"46\" id=\"project-image\" class=\"project-image\"></a></div>\r\n        <div class=\"column-11 w-col w-col-7\">\r\n          <div class=\"div-block-4\">\r\n            <div id=\"project-name\" class=\"project-name\"><a id=\"project-textlink\" href=\"."
    + alias2(alias1((depth0 != null ? depth0.link : depth0), depth0))
    + "\" class=\"detail-link\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</a></div>\r\n          </div>\r\n          <div id=\"project-category\" class=\"project-category\">"
    + alias2(alias1((depth0 != null ? depth0.category : depth0), depth0))
    + "</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-info rating\">\r\n      <div id=\"project-rating\" class=\""
    + ((stack1 = (helpers.rating || (depth0 && depth0.rating) || helpers.helperMissing).call(alias3,(depth0 != null ? depth0.rating : depth0),{"name":"rating","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"></div>\r\n    </div>\r\n    <div class=\"col-info guidelines\">\r\n      <div id=\"project-guidelines\">"
    + alias2(alias1((depth0 != null ? depth0.guidelines : depth0), depth0))
    + "</div>\r\n    </div>\r\n    <div class=\"col-info presale\">\r\n      <div id=\"project-presale\">"
    + alias2(alias1((depth0 != null ? depth0.presale : depth0), depth0))
    + "</div>\r\n    </div>\r\n    <div class=\"col-info crowdsale\">\r\n      <div id=\"project-crowdsale\">"
    + alias2(alias1((depth0 != null ? depth0.crowdsale : depth0), depth0))
    + "</div>\r\n    </div>\r\n    <div class=\"col-info goal\">\r\n      <div id=\"project-goal\">"
    + alias2(alias1((depth0 != null ? depth0.goal : depth0), depth0))
    + "</div>\r\n    </div>\r\n    <div class=\"col info\">\r\n      <div class=\"images-row links w-row\">\r\n        <div class=\"images-col w-col w-col-3\"><img src=\"images/neolist-kyc.svg\" width=\"14\" id=\""
    + alias2(alias1((depth0 != null ? depth0["project-id"] : depth0), depth0))
    + "project-kyc\" tooltipster=\"top\" "
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.infokyc : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "></div>\r\n        <div class=\"images-col w-col w-col-3\"><img src=\"images/neolist-whitelist.svg\" id=\""
    + alias2(alias1((depth0 != null ? depth0["project-id"] : depth0), depth0))
    + "project-whitelist\" tooltipster=\"top\" "
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.infokyc : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "></div>\r\n        <div class=\"images-col w-col w-col-3\"><img src=\"images/neolist-location.svg\" id=\""
    + alias2(alias1((depth0 != null ? depth0["project-id"] : depth0), depth0))
    + "project-location\" tooltipster=\"top\" "
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.infokyc : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "></div>\r\n        <div class=\"images-col w-col w-col-3\"><img src=\"images/neolist-bonus.svg\" id=\""
    + alias2(alias1((depth0 != null ? depth0["project-id"] : depth0), depth0))
    + "project-bonus\" tooltipster=\"top\" "
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.infokyc : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col links\">\r\n      <div class=\"images-row w-row\">\r\n        <div class=\"images-col website w-col w-col-3\"><a href="
    + alias2(alias1((depth0 != null ? depth0.linkswebsite : depth0), depth0))
    + " id=\"website-link\" target=\"_blank\" class=\"w-inline-block\"><img src=\"images/neolist-website.svg\" id=\"project-website\" class=\"info-true\"></a></div>\r\n        <div class=\"images-col w-col w-col-3\"><a href="
    + alias2(alias1((depth0 != null ? depth0.linkswhitepaper : depth0), depth0))
    + " id=\"whitepaper-link\" target=\"_blank\" class=\"w-inline-block\"><img src=\"images/neolist-whitepaper.svg\" width=\"14\" id=\"project-whitepaper\" class=\"info-true\"></a></div>\r\n        <div class=\"images-col w-col w-col-3\"></div>\r\n        <div class=\"images-col w-col w-col-3\"></div>\r\n      </div>\r\n    </div>\r\n    </li>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "";
},"5":function(container,depth0,helpers,partials,data) {
    return "title=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.infokyc : depth0), depth0))
    + "\"class=\"info-true\"";
},"7":function(container,depth0,helpers,partials,data) {
    return "title=\"None\"class=\"info-false\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();