gapiAds = document.getElementsByClassName('PivotalAdBannerDiv');
for(i=0; i<gapiAds.length; i++) {
  s = document.createElement('script');
  s.type = 'text/javascript';
  s.text = ' (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'gaPiAd\'); gaPiAd(\'create\', \'UA-42481901-1\', \'none\'); gaPiAd(\'send\', \'event\', \'Impression\', \'What\'s New in Spring [V1.0] - 15 Dec 2014 - ONLINE\', location.href); var gaPiAdClick_546c6a37e5de882e5a000001 = function() { gaPiAd(\'send\', \'event\', \'Click\', \'What\'s New in Spring [V1.0] - 15 Dec 2014 - ONLINE\', location.href) }; ';
  gapiAds[i].parentNode.insertBefore(s,gapiAds[i]);
  c = document.createElement('style');
  c.innerHTML = '/* docsearchbarspring Training Classes */ .S2UniGeoipBanner {    margin-top: 0px !important;     letter-spacing: 0px !important;     line-height: 1.2 !important;     text-align: left !important;     text-indent: 0 !important;     text-transform: none !important;     word-spacing: 0px !important;    cursor: pointer !important;     left: 210px !important;     position: absolute !important;     top: 6px !important; }  .S2UniGeoipBanner .S2GPcourse_name {    font-size: 11px !important;    font-weight: bold !important;    font-family: Arial !important;    text-transform: uppercase !important;   color: #88f !important; }  .S2UniGeoipBanner .S2GPcity, .S2UniGeoipBanner .S2GPstart_date {   font-family: Arial !important;   font-size: 11px !important;   color: #bbb !important; }  .S2UniGeoipBanner .learn-more-button {   display:none !important; }';
  document.head.appendChild(c);
  gapiAds[i].innerHTML=' <style> /* custom banner style placeholder */ /* #gaPiAdDivId_546c6a37e5de882e5a000001 { } */ </style> <a style="text-decoration:none;" onclick="gaPiAdClick_546c6a37e5de882e5a000001();" href="http://mylearn.vmware.com/gateway/?credits=0&amp;course=245094" target="_new"> <div id="gaPiAdDivId_546c6a37e5de882e5a000001" class="S2UniGeoipBanner">   <span class="S2GPcourse_name">What\'s New in Spring [V1.0]</span>   <span class="S2GPcity">ONLINE, </span>   <span class="S2GPstart_date">15 Dec 2014</span>   <span class="learn-more-button">Learn More</span> </div></a> ';
}