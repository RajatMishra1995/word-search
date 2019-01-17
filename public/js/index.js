var scoreManager=function(){var n=0;return{incrementScore:function(){n++},getScore:function(){return n}}}.call(this);(function(){"use strict";var i,c,z,x,y,l,u,s,w,k,a;("undefined"!=typeof exports&&null!==exports?exports:window).wordfind=(i="abcdefghijklmnoprstuvwy",x={horizontal:function(n,e,t,r,o){return n+o<=r},horizontalBack:function(n,e,t,r,o){return o<=n+1},vertical:function(n,e,t,r,o){return e+o<=t},verticalUp:function(n,e,t,r,o){return o<=e+1},diagonal:function(n,e,t,r,o){return n+o<=r&&e+o<=t},diagonalBack:function(n,e,t,r,o){return o<=n+1&&e+o<=t},diagonalUp:function(n,e,t,r,o){return n+o<=r&&o<=e+1},diagonalUpBack:function(n,e,t,r,o){return o<=n+1&&o<=e+1}},y={horizontal:function(n,e,t){return{x:0,y:e+1}},horizontalBack:function(n,e,t){return{x:t-1,y:e}},vertical:function(n,e,t){return{x:0,y:e+100}},verticalUp:function(n,e,t){return{x:0,y:t-1}},diagonal:function(n,e,t){return{x:0,y:e+1}},diagonalBack:function(n,e,t){return{x:t-1,y:t-1<=n?e+1:e}},diagonalUp:function(n,e,t){return{x:0,y:e<t-1?t-1:e+1}},diagonalUpBack:function(n,e,t){return{x:t-1,y:t-1<=n?e+1:e}}},l=function(n,e){var t,r,o,a=[];for(console.log("options = ",e),t=0;t<e.height;t++)for(a.push([]),r=0;r<e.width;r++)a[t].push("");for(t=0,o=n.length;t<o;t++)if(!u(a,e,n[t]))return null;return a},u=function(n,e,t){var r=s(n,e,t);if(0===r.length)return!1;var o=r[Math.floor(Math.random()*r.length)];return a(n,t,o.x,o.y,z[o.orientation]),!0},s=function(n,e,t){for(var r=[],o=e.height,a=e.width,i=t.length,l=0,u=0,c=e.orientations.length;u<c;u++)for(var s=e.orientations[u],f=x[s],d=z[s],h=y[s],g=0,v=0;v<o;)if(f(g,v,o,a,i)){var p=w(t,n,g,v,d);(l<=p||!e.preferOverlap&&-1<p)&&(l=p,r.push({x:g,y:v,orientation:s,overlap:p})),a<=++g&&(g=0,v++)}else{var m=h(g,v,i);g=m.x,v=m.y}return e.preferOverlap?k(r,l):r},w=function(n,e,t,r,o){for(var a=0,i=0,l=n.length;i<l;i++){var u=o(t,r,i),c=e[u.y][u.x];if(c===n[i])a++;else if(""!==c)return-1}return a},k=function(n,e){for(var t=[],r=0,o=n.length;r<o;r++)n[r].overlap>=e&&t.push(n[r]);return t},a=function(n,e,t,r,o){for(var a=0,i=e.length;a<i;a++){var l=o(t,r,a);n[l.y][l.x]=e[a]}},{validOrientations:c=["horizontal","horizontalBack","vertical","verticalUp","diagonal","diagonalUp","diagonalBack","diagonalUpBack"],orientations:z={horizontal:function(n,e,t){return{x:n+t,y:e}},horizontalBack:function(n,e,t){return{x:n-t,y:e}},vertical:function(n,e,t){return{x:n,y:e+t}},verticalUp:function(n,e,t){return{x:n,y:e-t}},diagonal:function(n,e,t){return{x:n+t,y:e+t}},diagonalBack:function(n,e,t){return{x:n-t,y:e+t}},diagonalUp:function(n,e,t){return{x:n+t,y:e-t}},diagonalUpBack:function(n,e,t){return{x:n-t,y:e-t}}},newPuzzle:function(n,e){var t,r,o=0,a=e||{};console.log("newPuzzle() :: settings = ",e),t=n.slice(0).sort(function(n,e){return n.length<e.length?1:0});for(var i={height:a.height||t[0].length,width:a.width||t[0].length,orientations:a.orientations||c,fillBlanks:void 0===a.fillBlanks||a.fillBlanks,maxAttempts:a.maxAttempts||3,preferOverlap:void 0===a.preferOverlap||a.preferOverlap};!r;){for(;!r&&o++<i.maxAttempts;)r=l(t,i);r||(i.height++,i.width++,o=0)}return i.fillBlanks&&this.fillBlanks(r,i),r},fillBlanks:function(n){for(var e=0,t=n.length;e<t;e++)for(var r=0,o=n[e].length;r<o;r++)if(!n[e][r]){var a=Math.floor(Math.random()*i.length);n[e][r]=i[a]}},solve:function(n,e){for(var t={height:n.length,width:n[0].length,orientations:c,preferOverlap:!0},r=[],o=[],a=0,i=e.length;a<i;a++){var l=e[a],u=s(n,t,l);0<u.length&&u[0].overlap===l.length?(u[0].word=l,r.push(u[0])):o.push(l)}return{found:r,notFound:o}},print:function(n){for(var e="",t=0,r=n.length;t<r;t++){for(var o=n[t],a=0,i=o.length;a<i;a++)e+=(""===o[a]?" ":o[a])+" ";e+="\n"}return console.log(e),e}})}).call(this),function(o,h,g){"use strict";var a,l,u,c,s,i,f,d,v,p,m,z;window.wordfindgame=(c=[],s="",i=function(){h(this).addClass("selected"),l=this,c.push(this),s=h(this).text()},f=function(n){if(l){var e=c[c.length-1];if(e!=n){for(var t,r=0,o=c.length;r<o;r++)if(c[r]==n){t=r+1;break}for(;t<c.length;)h(c[c.length-1]).removeClass("selected"),c.splice(t,1),s=s.substr(0,s.length-1);var a=z(h(l).attr("x")-0,h(l).attr("y")-0,h(n).attr("x")-0,h(n).attr("y")-0);a&&(c=[l],s=h(l).text(),e!==l&&(h(e).removeClass("selected"),e=l),u=a);var i=z(h(e).attr("x")-0,h(e).attr("y")-0,h(n).attr("x")-0,h(n).attr("y")-0);i&&(u&&u!==i||(u=i,p(n)))}}},d=function(n){var e=n.originalEvent.touches[0].pageX,t=n.originalEvent.touches[0].pageY,r=o.elementFromPoint(e,t);f(r)},v=function(){f(this)},p=function(n){for(var e=0,t=a.length;e<t;e++)if(0===a[e].indexOf(s+h(n).text())){h(n).addClass("selected"),c.push(n),s+=h(n).text();break}},m=function(){for(var n=0,e=a.length;n<e;n++)a[n]===s&&(h(".selected").addClass("found"),scoreManager.incrementScore(),o.getElementById("score").innerHTML="Your Score : "+scoreManager.getScore(),a.splice(n,1),h("."+s).addClass("wordFound")),0===a.length&&h(".puzzleSquare").addClass("complete");h(".selected").removeClass("selected"),c=[],s="",u=l=null},z=function(n,e,t,r){for(var o in g.orientations){var a=(0,g.orientations[o])(n,e,1);if(a.x===t&&a.y===r)return o}return null},{create:function(n,e,t,r){a=n.slice(0).sort();var o=g.newPuzzle(n,r);return console.log("puzzle = ",o),function(n,e){console.log("drawPuzzle()");for(var t="",r=0,o=e.length;r<o;r++){var a=e[r];t+="<div>";for(var i=0,l=a.length;i<l;i++)t+='<button class="puzzleSquare" x="'+i+'" y="'+r+'">',t+=a[i]||"&nbsp;",t+="</button>";t+="</div>"}h(n).html(t)}(e,o),function(n,e){for(var t="<ul>",r=0,o=e.length;r<o;r++){var a=e[r];t+='<li class="word '+a+'">'+a}t+="</ul>",h(n).prepend(t)}(t,a),window.navigator.msPointerEnabled?(h(".puzzleSquare").on("MSPointerDown",i),h(".puzzleSquare").on("MSPointerOver",f),h(".puzzleSquare").on("MSPointerUp",m)):(h(".puzzleSquare").mousedown(i),h(".puzzleSquare").mouseenter(v),h(".puzzleSquare").mouseup(m),h(".puzzleSquare").on("touchstart",i),h(".puzzleSquare").on("touchmove",d),h(".puzzleSquare").on("touchend",m)),o},solve:function(n,e){for(var t=g.solve(n,e).found,r=0,o=t.length;r<o;r++){var a=t[r].word,i=t[r].orientation,l=t[r].x,u=t[r].y,c=g.orientations[i];if(!h("."+a).hasClass("wordFound")){for(var s=0,f=a.length;s<f;s++){var d=c(l,u,s);h('[x="'+d.x+'"][y="'+d.y+'"]').addClass("solved")}h("."+a).addClass("wordFound")}}h("#solve").addClass("gameSolved")}})}(document,jQuery,wordfind),function(){var n=60;document.getElementById("timer").innerHTML="Time remaining :"+n;var e=setInterval(function(){--n<=0?(document.getElementById("timer").innerHTML="Time is up",$(":button").prop("disabled",!0),$("#solve").prop("disabled",!1),$("#new_game").prop("disabled",!1),clearInterval(e)):document.getElementById("timer").innerHTML="Time remaining : "+n},1e3);document.getElementById("score").innerHTML="Your Score : "+scoreManager.getScore()}.call(this),function(){$("#new_game").click(function(){location.reload()})}.call(this),$(function(){var n=["save","earn","invest","retirement","account","money","credit","debt","assets","loan","interest","accrual","economy","sharing","savings","budget","capital","collateral","bond","market","value","index"],e=wordfindgame.create(n,"#puzzle","#words",{height:8,width:15,fillBlanks:!0});$("#solve").click(function(){wordfindgame.solve(e,n)});var t=wordfind.newPuzzle(n,{height:5,width:15,fillBlanks:!0});wordfind.print(t)});