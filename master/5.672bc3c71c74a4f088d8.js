(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{pxZ6:function(t,e,n){"use strict";n.r(e),n.d(e,"createSwipeBackGesture",function(){return a});var r=n("u3ma"),a=function(t,e,n,a,i){var o=t.ownerDocument.defaultView;return Object(r.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:n,onMove:function(t){a(t.deltaX/o.innerWidth)},onEnd:function(t){var e=o.innerWidth,n=t.deltaX/e,r=t.velocityX,a=r>=0&&(r>.2||t.deltaX>e/2),u=(a?1-n:n)*e,c=0;if(u>5){var s=u/Math.abs(r);c=Math.min(s,540)}i(a,n,c)}})}}}]);