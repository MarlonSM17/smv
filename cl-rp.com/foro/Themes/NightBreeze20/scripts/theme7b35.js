var topsW, navUser;
// Open SideMenu
jq(document).ready(function() {
	jq(".menuOpener").click(function(){
		if(jq(this).attr("data-state") == "closed") {
			jq("nav").css("right", "0");
			jq("header div.frame").css("overflow", "visible");
			jq("html").css("overflow", "hidden");
			// jq(this).attr("data-state", "opened");
			//jq("nav").addClass("openState");
		} else {
			jq("nav").css("right", "-100%");
			jq("header div.frame").css("overflow", "");
			jq("html").css("overflow", "auto");
			// jq(this).attr("data-state", "closed");
			//jq("nav").removeClass("openState");
		}
	});
	jq("#admin_menu li a").each(function (){
		if(jq(this).attr("href")=="#")
			jq(this).attr("href", "javascript:void(0)");
	});

    jq(window).scroll(function(){
        if (jq(this).scrollTop() > 50) {
            jq('.goup').fadeIn('slow');
        } else {
            jq('.goup').fadeOut('slow');
        }
    });
    jq('.goup').click(function(){
        jq("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });

	// Copyright too stacked ?
	var cpelm = jq("footer li.copyright>span.smalltext>br").length;
	if(cpelm>0)
		jq("footer li.copyright").css("line-height", 16+"px");
	jq("footer li.copyright").css("display", "block");
	jq("footer li.copyright").css("color", "#a4a4a4");
	jq("footer li.copyright").css("opacity", "1");


});
// Mobile
jq(document).ready(function() {
	navUser = jq("#top_section .user").outerWidth()+jq("#top_section nav").outerWidth();
    // run test on initial page load
    checkSize();
    if(jq(".sampleClass").css("display") == "block") {
		headerWatch();
		jq(window).resize(headerWatch);
	}
	if (jq(".sampleClass").css("display") == "none" ){
		//jq("nav").css("height", window.outerHeight+10);
		jq("nav .dropmenu li, .user .dropmenu li").each(function(){
			var $ulHeight = jq(this).find("ul").outerHeight();
			//console.log($ulHeight);
			jq(this).find("ul").css("height", 0);
			jq(this).click(function() {
				if(jq(this).find("ul").attr("class")=="opneEd")
					jq(this).find("ul").css("height", 0);
				else
					jq(this).find("ul").css("height", $ulHeight);
				jq(this).find("ul").toggleClass("opneEd");
			});
			if(jq(this).find("ul").length != 0)
				jq(this).find("a.firstlevel").attr("href", "javascript:void(0)");
		});
	}
    // run test on resize of the window
    jq(window).resize(checkSize);
});
//Function to the css rule
function checkSize(){
    if (jq(".sampleClass").css("display") == "none" ){
		console.log("Mobile");
		jq("nav .dropmenu li").each(function(){
			if(jq(this).find("ul").length != 0)
			jq(this).find("a.firstlevel").attr("href", "javascript:void(0)");
		});
    }
}
function headerWatch() {
	topsW = jq("#top_section").outerWidth();
	if(((topsW-64)-navUser) <= 20 && jq(".dynamic_menu").length == 0)
		jq("head").append("<style class=\'dynamic_menu\'>nav .dropmenu li ul{display:block;position:relative;width:100%;box-sizing:border-box;transform:none;top:0;left:0;margin:0;float:none}#top_section .taphoNone {display: none}#top_section .taphoOnly {display: block}#top_section .taphoOnlyInline {display: inline-block}.sampleClass{float:none;display:none;}header{z-index:1;position:relative}header nav{position:fixed;width:55%;box-sizing:border-box;float:none;right:-100%;background:#1a1919;z-index:99;height:100%;overflow:auto;padding-bottom:2em}header nav .dropmenu>li{float:none}header nav .dropmenu>li>a.firstlevel>i{padding:0;width:31px}header nav .dropmenu>li a.firstlevel{line-height:37px;border-left:4px solid #ffffff5e!important;margin:3px 0}header nav .dropmenu>li a.firstlevel:hover,header nav .dropmenu>li a.firstlevel:active{border-left-color:#fff!important;background:#242323}nav .dropmenu li a.firstlevel i,.dropmenu li a.firstlevel span.firstlevel{display:inline-block}nav .dropmenu li ul{overflow:hidden;transition:all .8s;-webkit-transition:all .8s;-moz-transition:all .8s;-ms-transition:all .8s;-o-transition:all .8s;margin:-4px 0 4px!important;padding:0}nav .dropmenu li ul li a{background:#131212}nav .dropmenu li ul.openEd{padding:0 0 2em}nav .dropmenu li a.active{border-left:5px solid #fff!important;background:#161515}.dropmenu li ul{transition:all .8s;-webkit-transition:all .8s;-moz-transition:all .8s;-ms-transition:all .8s;-o-transition:all .8s}.dropmenu li:hover>ul{animation:none;height:auto}</style>");
	else
		jq(".dynamic_menu").remove();


	checkSize();
}
// The purpose of this code is to fix the height of overflow: auto blocks, because some browsers can't figure it out for themselves.
function smf_codeBoxFix()
{
	var codeFix = document.getElementsByTagName('code');
	for (var i = codeFix.length - 1; i >= 0; i--)
	{
		if (is_webkit && codeFix[i].offsetHeight < 20)
			codeFix[i].style.height = (codeFix[i].offsetHeight + 20) + 'px';

		else if (is_ff && (codeFix[i].scrollWidth > codeFix[i].clientWidth || codeFix[i].clientWidth == 0))
			codeFix[i].style.overflow = 'scroll';

		else if ('currentStyle' in codeFix[i] && codeFix[i].currentStyle.overflow == 'auto' && (codeFix[i].currentStyle.height == '' || codeFix[i].currentStyle.height == 'auto') && (codeFix[i].scrollWidth > codeFix[i].clientWidth || codeFix[i].clientWidth == 0) && (codeFix[i].offsetHeight != 0))
			codeFix[i].style.height = (codeFix[i].offsetHeight + 24) + 'px';
	}
}

// Add a fix for code stuff?
if ((is_ie && !is_ie4) || is_webkit || is_ff)
	addLoadEvent(smf_codeBoxFix);

// Toggles the element height and width styles of an image.
function smc_toggleImageDimensions()
{
	var oImages = document.getElementsByTagName('IMG');
	for (oImage in oImages)
	{
		// Not a resized image? Skip it.
		if (oImages[oImage].className == undefined || oImages[oImage].className.indexOf('bbc_img resized') == -1)
			continue;

		oImages[oImage].style.cursor = 'pointer';
		oImages[oImage].onclick = function() {
			this.style.width = this.style.height = this.style.width == 'auto' ? null : 'auto';
		};
	}
}

// Add a load event for the function above.
addLoadEvent(smc_toggleImageDimensions);

// Adds a button to a certain button strip.
function smf_addButton(sButtonStripId, bUseImage, oOptions)
{
	var oButtonStrip = document.getElementById(sButtonStripId);
	var aItems = oButtonStrip.getElementsByTagName('span');

	// Remove the 'last' class from the last item.
	if (aItems.length > 0)
	{
		var oLastSpan = aItems[aItems.length - 1];
		oLastSpan.className = oLastSpan.className.replace(/\s*last/, 'position_holder');
	}

	// Add the button.
	var oButtonStripList = oButtonStrip.getElementsByTagName('ul')[0];
	var oNewButton = document.createElement('li');
	setInnerHTML(oNewButton, '<a href="' + oOptions.sUrl + '" ' + ('sCustom' in oOptions ? oOptions.sCustom : '') + '><span class="last"' + ('sId' in oOptions ? ' id="' + oOptions.sId + '"': '') + '>' + oOptions.sText + '</span></a>');

	oButtonStripList.appendChild(oNewButton);
}

// Adds hover events to list items. Used for a versions of IE that don't support this by default.
var smf_addListItemHoverEvents = function()
{
	var cssRule, newSelector;

	// Add a rule for the list item hover event to every stylesheet.
	for (var iStyleSheet = 0; iStyleSheet < document.styleSheets.length; iStyleSheet ++)
		for (var iRule = 0; iRule < document.styleSheets[iStyleSheet].rules.length; iRule ++)
		{
			oCssRule = document.styleSheets[iStyleSheet].rules[iRule];
			if (oCssRule.selectorText.indexOf('LI:hover') != -1)
			{
				sNewSelector = oCssRule.selectorText.replace(/LI:hover/gi, 'LI.iehover');
				document.styleSheets[iStyleSheet].addRule(sNewSelector, oCssRule.style.cssText);
			}
		}

	// Now add handling for these hover events.
	var oListItems = document.getElementsByTagName('LI');
	for (oListItem in oListItems)
	{
		oListItems[oListItem].onmouseover = function() {
			this.className += ' iehover';
		};

		oListItems[oListItem].onmouseout = function() {
			this.className = this.className.replace(new RegExp(' iehover\\b'), '');
		};
	}
}

// Add hover events to list items if the browser requires it.
if (is_ie7down && 'attachEvent' in window)
	window.attachEvent('onload', smf_addListItemHoverEvents);
