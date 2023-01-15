//understanding url module in node js
var url=require('url');
var adr='https://www.google.com/search?q=url+module+in+node+js&rlz=1C1CHBD_enIN927IN927&oq=url+module+in+node+js&aqs=chrome..69i57.5342j0j7&sourceid=chrome&ie=UTF-8';
var q=url.parse(adr,true);
console.log(q);