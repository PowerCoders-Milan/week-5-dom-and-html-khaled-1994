function getAttributes() {
   var type = document.getElementsByTagName('A')[0].getAttribute('type');
   console.log("The value of the type attribute of the link is : " + type);
   var hreflang = document.getElementsByTagName('A')[0].getAttribute('hreflang');
   console.log("The value of the hreflang attribute of the link is :" + hreflang);
   var rel = document.getElementsByTagName('A')[0].getAttribute('rel');
   console.log("The value of the rel attribute of the link is :" + rel);
   var target = document.getElementsByTagName('A')[0].getAttribute('target');
   console.log("The value of the target attribute of the link is :" + target);
   var href = document.getElementsByTagName('A')[0].getAttribute('href');
   console.log("The value of the href attribute of the link is : " + href);
   
  }
