(this.webpackJsonphana_tube_2019=this.webpackJsonphana_tube_2019||[]).push([[0],{32:function(e,t,a){e.exports=a(65)},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(30),c=a.n(i),o=(a(37),a(12)),l=a(13),r=a(15),m=a(14),d=(a(38),a(8)),u=a(1);a(39);var p=function(){return n.a.createElement("div",{className:"nav-container"},n.a.createElement("div",{className:"row nav-inner inner"},n.a.createElement(d.b,{className:"col-md-2 center-block btn btn-default",to:"/",exact:!0},n.a.createElement("i",{className:"home fas fa-home"})),n.a.createElement(d.b,{className:"col-md-2 center-block btn btn-default",to:"/schana"},"\uc2e0\ucd0c\ud558\ub098\uad50\ud68c"),n.a.createElement(d.b,{className:"col-md-2 center-block btn btn-default",to:"/joychant"},"\uc870\uc774\ucc48\ud2b8"),n.a.createElement(d.b,{className:"col-md-2 center-block btn btn-default",to:"/tbd1"},"TBD"),n.a.createElement(d.b,{className:"col-md-2 center-block btn btn-default",to:"/tbd2"},"TBD")))},v=a(3),h=a.n(v),b=a(9),y=a(10),w=a.n(y);a(63),a(64);document.cookie="safeCookie1=https://youtube.com; SameSite=Lax";var g=function(e){e.id;var t=e.imageLink,a=e.channelId,s=e.title,i=e.description,c=e.videos,o=e.subscribers,l=e.views;return n.a.createElement("div",null,n.a.createElement("div",{className:"channel"},n.a.createElement("div",{className:"channel_logo"},n.a.createElement("img",{className:"channel_img",src:t,alt:"text"}),n.a.createElement("a",{className:"channel_link",href:"https://www.youtube.com/channel/"+a,target:"_black"},"\uc720\ud29c\ube0c \ucc44\ub110 \ub9c1\ud06c")),n.a.createElement("ul",{className:"channel_info"},n.a.createElement("li",{className:"channel_item"},n.a.createElement("strong",null,s)),n.a.createElement("li",{className:"channel_item"},"\ucc44\ub110 \uc124\uba85: ",i),n.a.createElement("li",{className:"channel_item"},"\uc601\uc0c1\uc218: ",c),n.a.createElement("li",{className:"channel_item"},"\uad6c\ub3c5\uc790\uc218: ",o),n.a.createElement("li",{className:"channel_item"},"\uc870\ud68c\uc218: ",l))))},f=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={id:0,apiKey:"AIzaSyC6GWXm4z_sxkiMBkx08qYzmulaeM9aevA",loading:!0,channelId:"UChzI-IJRRWNTdwkHeCs5PKg",imageLink:"",title:"",description:"",videos:"",subscribers:"",views:"",playlistId:"",videoId:[""],videoList:{}},e.GetChannels=Object(b.a)(h.a.mark((function t(){var a,s,n,i,c,o,l,r,m,d;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="https://www.googleapis.com/youtube/v3/channels?key=".concat(e.state.apiKey,"&id=").concat(e.state.channelId,"&part=snippet,contentDetails,statistics"),t.next=3,w.a.get(a);case 3:s=t.sent,n=s.data,console.log(n),i=n.items[0].snippet.thumbnails.medium.url,c=n.items[0].snippet.title,o=n.items[0].snippet.description,l=e.NumberWithCommas(n.items[0].statistics.videoCount),r=e.NumberWithCommas(n.items[0].statistics.subscriberCount),m=e.NumberWithCommas(n.items[0].statistics.viewCount),d=n.items[0].contentDetails.relatedPlaylists.uploads,e.setState({imageLink:i,title:c,description:o,videos:l,subscribers:r,views:m,playlistId:d}),e.GetVideos();case 15:case"end":return t.stop()}}),t)}))),e.GetVideos=Object(b.a)(h.a.mark((function t(){var a,s,n,i,c,o,l,r,m;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://www.googleapis.com/youtube/v3/playlistItems?",a="key=".concat(e.state.apiKey),s="&playlistId=".concat(e.state.playlistId),"&part=snippet&maxResults=12",n="https://www.googleapis.com/youtube/v3/playlistItems?"+a+s+"&part=snippet&maxResults=12",t.next=7,w.a.get(n);case 7:for(i=t.sent,c=i.data,console.log(c),o=c.items,l=[],r=o.length,m=0;m<r;m++)l[m]=c.items[m].snippet.resourceId.videoId;console.log(l),e.setState({loading:!1,videoId:l});case 16:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.GetChannels()}},{key:"NumberWithCommas",value:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{key:"render",value:function(){var e=this.state.loading;return n.a.createElement("div",{className:"body"},n.a.createElement("div",{className:"channel-container container"},n.a.createElement("h1",{className:"title"},"\uc720\ud29c\ube0c \ucc44\ub110 \uc815\ubcf4"),e?n.a.createElement("div",{className:"loading-containger"},"Process Loading"):n.a.createElement(g,{key:this.state.id,imageLink:this.state.imageLink,channelId:this.state.channelId,title:this.state.title,description:this.state.description,videos:this.state.videos,subscribers:this.state.subscribers,views:this.state.views})),n.a.createElement("div",{className:"video-container container"},n.a.createElement("h1",{className:"video-title title"},"\ucd5c\uc2e0 \uc5c5\ub85c\ub4dc \uc601\uc0c1"),n.a.createElement("div",{className:"video-items"},e?n.a.createElement("div",{className:"loading-containger"},"Process Loading"):this.state.videoId.map((function(e){return n.a.createElement("div",{key:e,className:"video-item-container"},n.a.createElement("iframe",{title:e,className:"video-item",src:"https://www.youtube.com/embed/"+e,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}))})))))}}]),a}(n.a.Component),E=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={id:1,apiKey:"AIzaSyC6GWXm4z_sxkiMBkx08qYzmulaeM9aevA",loading:!0,channelId:"UCNF_5nwMVpkp3cTKlT9rvsg",imageLink:"",title:"",description:"",videos:"",subscribers:"",views:"",playlistId:"",videoId:[],videoList:{},playListIdSeason1:"",videoIdSeason1:[]},e.GetChannels=Object(b.a)(h.a.mark((function t(){var a,s,n,i,c,o,l,r,m,d;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="https://www.googleapis.com/youtube/v3/channels?key=".concat(e.state.apiKey,"&id=").concat(e.state.channelId,"&part=snippet,contentDetails,statistics"),t.next=3,w.a.get(a);case 3:s=t.sent,n=s.data,console.log(n),i=n.items[0].snippet.thumbnails.medium.url,c=n.items[0].snippet.title,o=n.items[0].snippet.description,l=n.items[0].statistics.videoCount,r=n.items[0].statistics.subscriberCount,m=n.items[0].statistics.viewCount,d=n.items[0].contentDetails.relatedPlaylists.uploads,e.setState({imageLink:i,title:c,description:o,videos:l,subscribers:r,views:m,playlistId:d}),e.GetVideosLatest();case 15:case"end":return t.stop()}}),t)}))),e.GetVideosLatest=Object(b.a)(h.a.mark((function t(){var a,s,n,i,c,o,l,r,m;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://www.googleapis.com/youtube/v3/playlistItems?",a="key=".concat(e.state.apiKey),s="&playlistId=".concat(e.state.playlistId),"&part=snippet&maxResults=12",n="https://www.googleapis.com/youtube/v3/playlistItems?"+a+s+"&part=snippet&maxResults=12",t.next=7,w.a.get(n);case 7:for(i=t.sent,c=i.data,console.log(c),o=c.items,l=[],r=o.length,m=0;m<r;m++)l[m]=c.items[m].snippet.resourceId.videoId;console.log(l),e.setState({videoId:l});case 16:case"end":return t.stop()}}),t)}))),e.GetPlaylist=Object(b.a)(h.a.mark((function t(){var a,s,n,i,c,o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://www.googleapis.com/youtube/v3/playlists?",a="key=".concat(e.state.apiKey),s="&channelId=".concat(e.state.channelId),"&part=snippet&maxResults=50",n="https://www.googleapis.com/youtube/v3/playlists?"+a+s+"&part=snippet&maxResults=50",t.next=7,w.a.get(n);case 7:i=t.sent,c=i.data,console.log(c),o=c.items[5].id,e.setState({playListIdSeason1:o}),e.GetVideosSeason1();case 13:case"end":return t.stop()}}),t)}))),e.GetVideosSeason1=Object(b.a)(h.a.mark((function t(){var a,s,n,i,c,o,l,r,m;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://www.googleapis.com/youtube/v3/playlistItems?",a="key=".concat(e.state.apiKey),s="&playlistId=".concat(e.state.playListIdSeason1),"&part=snippet&maxResults=50",n="https://www.googleapis.com/youtube/v3/playlistItems?"+a+s+"&part=snippet&maxResults=50",t.next=7,w.a.get(n);case 7:for(i=t.sent,c=i.data,console.log(c),o=c.items,l=[],r=o.length,m=0;m<r;m++)l[m]=c.items[m].snippet.resourceId.videoId;console.log(l),e.setState({videoIdSeason1:l});case 16:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.GetChannels(),this.GetPlaylist()}},{key:"NumberWithCommas",value:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{key:"render",value:function(){return n.a.createElement("div",{className:"body"},n.a.createElement("div",{className:"channel-container container"},n.a.createElement("h1",{className:"title"},"\uc720\ud29c\ube0c \ucc44\ub110 \uc815\ubcf4"),n.a.createElement(g,{key:this.state.id,imageLink:this.state.imageLink,channelId:this.state.channelId,title:this.state.title,description:this.state.description,videos:this.state.videos,subscribers:this.state.subscribers,views:this.state.views})),n.a.createElement("div",{className:"video-container container"},n.a.createElement("h1",{className:"video-title title"},"\ucd5c\uc2e0 \uc5c5\ub85c\ub4dc \uc601\uc0c1"),n.a.createElement("div",{className:"video-items"},this.state.videoId.map((function(e){return n.a.createElement("div",{key:e,className:"video-item-container"},n.a.createElement("iframe",{title:e,className:"video-item",src:"https://www.youtube.com/embed/"+e,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}))})))),n.a.createElement("div",{className:"video-container container"},n.a.createElement("h1",{className:"video-title title"},"\uc870\uc774\ucc48\ud2b8 \uc2dc\uc98c1"),n.a.createElement("div",{className:"video-items"},this.state.videoIdSeason1.map((function(e){return n.a.createElement("div",{key:e,className:"video-item-container"},n.a.createElement("iframe",{title:e,className:"video-item",src:"https://www.youtube.com/embed/"+e,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}))})))))}}]),a}(n.a.Component);var k=function(){return n.a.createElement("div",{className:"home-container"},n.a.createElement("div",{className:"inner"},"\uc2e0\ucd0c\ud558\ub098\uad50\ud68c \uc720\ud29c\ube0c \uc18c\uac1c \uc0ac\uc774\ud2b8"))},N=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement(d.a,null,n.a.createElement(p,null),n.a.createElement(u.a,{exact:!0,path:"/",component:k}),n.a.createElement(u.a,{path:"/schana",component:f}),n.a.createElement(u.a,{path:"/joychant",component:E}))}}]),a}(n.a.Component);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.c7ecff6c.chunk.js.map