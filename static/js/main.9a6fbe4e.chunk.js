(this.webpackJsonphana_tube_2019=this.webpackJsonphana_tube_2019||[]).push([[0],{36:function(e,t,a){e.exports=a(79)},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(32),c=a.n(i),l=(a(41),a(12)),o=a(13),r=a(15),m=a(14),u=(a(42),a(16)),p=a(1);a(43);var d=function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"nav"},n.a.createElement(u.b,{to:"/schana"},"\uc2e0\ucd0c\ud558\ub098\uad50\ud68c"),n.a.createElement(u.b,{to:"/joychant"},"\uc870\uc774\ucc48\ud2b8")))},h=a(4),v=a.n(h),y=a(9),b=a(10),g=a.n(b),w=a(17),E=(a(77),function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={apiKey:"AIzaSyC6GWXm4z_sxkiMBkx08qYzmulaeM9aevA",loading:!0,channelId:"UChzI-IJRRWNTdwkHeCs5PKg",imageLink:"",title:"",description:"",videos:"",subscribers:"",views:"",playlistId:"",videoId:[],videoList:{}},e.GetChannels=Object(y.a)(v.a.mark((function t(){var a,s,n,i,c,l,o,r,m,u;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="https://www.googleapis.com/youtube/v3/channels?key=".concat(e.state.apiKey,"&id=").concat(e.state.channelId,"&part=snippet,contentDetails,statistics"),t.next=3,g.a.get(a);case 3:s=t.sent,n=s.data,console.log(n),i=n.items[0].snippet.thumbnails.medium.url,c=n.items[0].snippet.title,l=n.items[0].snippet.description,o=n.items[0].statistics.videoCount,r=n.items[0].statistics.subscriberCount,m=n.items[0].statistics.viewCount,u=n.items[0].contentDetails.relatedPlaylists.uploads,e.setState({imageLink:i,title:c,description:l,videos:o,subscribers:r,views:m,playlistId:u}),e.GetVideos();case 15:case"end":return t.stop()}}),t)}))),e.GetVideos=Object(y.a)(v.a.mark((function t(){var a,s,n,i,c,l,o,r,m;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://www.googleapis.com/youtube/v3/playlistItems?",a="key=".concat(e.state.apiKey),s="&playlistId=".concat(e.state.playlistId),"&part=snippet&maxResults=12",n="https://www.googleapis.com/youtube/v3/playlistItems?"+a+s+"&part=snippet&maxResults=12",t.next=7,g.a.get(n);case 7:for(i=t.sent,c=i.data,console.log(c),l=c.items,o=[],r=l.length,m=0;m<r;m++)o[m]=c.items[m].snippet.resourceId.videoId;console.log(o),e.setState({loading:!1,videoId:o});case 16:case"end":return t.stop()}}),t)}))),e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.GetChannels()}},{key:"NumberWithCommas",value:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{key:"render",value:function(){return n.a.createElement("div",{className:"body"},n.a.createElement("div",{className:"channel-container container"},n.a.createElement("h1",{className:"title"},"\uc720\ud29c\ube0c \ucc44\ub110 \uc815\ubcf4"),n.a.createElement("div",{className:"channel"},n.a.createElement("div",{className:"channel_logo"},n.a.createElement("img",{className:"channel_img",src:this.state.imageLink,alt:"text"}),n.a.createElement("a",{className:"channel_link",href:"https://www.youtube.com/channel/"+this.state.channelId,target:"_black"},"\uc720\ud29c\ube0c \ucc44\ub110 \ub9c1\ud06c")),n.a.createElement("ul",{className:"channel_info"},n.a.createElement("li",{className:"channel_item"},n.a.createElement("strong",null,this.state.title)),n.a.createElement("li",{className:"channel_item"},"\ucc44\ub110 \uc124\uba85: ",this.state.description),n.a.createElement("li",{className:"channel_item"},"\uc601\uc0c1\uc218: ",this.NumberWithCommas(this.state.videos)),n.a.createElement("li",{className:"channel_item"},"\uad6c\ub3c5\uc790\uc218: ",this.NumberWithCommas(this.state.subscribers)),n.a.createElement("li",{className:"channel_item"},"\uc870\ud68c\uc218: ",this.NumberWithCommas(this.state.views))))),n.a.createElement("div",{className:"video-container container"},n.a.createElement("h1",{className:"video-title title"},"\ucd5c\uc2e0 \uc5c5\ub85c\ub4dc \uc601\uc0c1"),n.a.createElement("div",{className:"video-items"},this.state.videoId.map((function(e){return n.a.createElement("div",{className:"video-item-container"},n.a.createElement(w.a,{className:"video-item",videoId:e}))})))))}}]),a}(n.a.Component)),N=(a(78),function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={apiKey:"AIzaSyC6GWXm4z_sxkiMBkx08qYzmulaeM9aevA",loading:!0,channelId:"UCNF_5nwMVpkp3cTKlT9rvsg",imageLink:"",title:"",description:"",videos:"",subscribers:"",views:"",playlistId:"",videoId:[],videoList:{},playListIdSeason1:"",videoIdSeason1:[]},e.GetChannels=Object(y.a)(v.a.mark((function t(){var a,s,n,i,c,l,o,r,m,u;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="https://www.googleapis.com/youtube/v3/channels?key=".concat(e.state.apiKey,"&id=").concat(e.state.channelId,"&part=snippet,contentDetails,statistics"),t.next=3,g.a.get(a);case 3:s=t.sent,n=s.data,console.log(n),i=n.items[0].snippet.thumbnails.medium.url,c=n.items[0].snippet.title,l=n.items[0].snippet.description,o=n.items[0].statistics.videoCount,r=n.items[0].statistics.subscriberCount,m=n.items[0].statistics.viewCount,u=n.items[0].contentDetails.relatedPlaylists.uploads,e.setState({imageLink:i,title:c,description:l,videos:o,subscribers:r,views:m,playlistId:u}),e.GetVideosLatest();case 15:case"end":return t.stop()}}),t)}))),e.GetVideosLatest=Object(y.a)(v.a.mark((function t(){var a,s,n,i,c,l,o,r,m;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://www.googleapis.com/youtube/v3/playlistItems?",a="key=".concat(e.state.apiKey),s="&playlistId=".concat(e.state.playlistId),"&part=snippet&maxResults=12",n="https://www.googleapis.com/youtube/v3/playlistItems?"+a+s+"&part=snippet&maxResults=12",t.next=7,g.a.get(n);case 7:for(i=t.sent,c=i.data,console.log(c),l=c.items,o=[],r=l.length,m=0;m<r;m++)o[m]=c.items[m].snippet.resourceId.videoId;console.log(o),e.setState({videoId:o});case 16:case"end":return t.stop()}}),t)}))),e.GetPlaylist=Object(y.a)(v.a.mark((function t(){var a,s,n,i,c,l;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://www.googleapis.com/youtube/v3/playlists?",a="key=".concat(e.state.apiKey),s="&channelId=".concat(e.state.channelId),"&part=snippet&maxResults=50",n="https://www.googleapis.com/youtube/v3/playlists?"+a+s+"&part=snippet&maxResults=50",t.next=7,g.a.get(n);case 7:i=t.sent,c=i.data,console.log(c),l=c.items[5].id,e.setState({playListIdSeason1:l}),e.GetVideosSeason1();case 13:case"end":return t.stop()}}),t)}))),e.GetVideosSeason1=Object(y.a)(v.a.mark((function t(){var a,s,n,i,c,l,o,r,m;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://www.googleapis.com/youtube/v3/playlistItems?",a="key=".concat(e.state.apiKey),s="&playlistId=".concat(e.state.playListIdSeason1),"&part=snippet&maxResults=50",n="https://www.googleapis.com/youtube/v3/playlistItems?"+a+s+"&part=snippet&maxResults=50",t.next=7,g.a.get(n);case 7:for(i=t.sent,c=i.data,console.log(c),l=c.items,o=[],r=l.length,m=0;m<r;m++)o[m]=c.items[m].snippet.resourceId.videoId;console.log(o),e.setState({videoIdSeason1:o});case 16:case"end":return t.stop()}}),t)}))),e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.GetChannels(),this.GetPlaylist()}},{key:"NumberWithCommas",value:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{key:"render",value:function(){return n.a.createElement("div",{className:"body"},n.a.createElement("div",{className:"channel-container container"},n.a.createElement("h1",{className:"title"},"\uc720\ud29c\ube0c \ucc44\ub110 \uc815\ubcf4"),n.a.createElement("div",{className:"channel"},n.a.createElement("div",{className:"channel_logo"},n.a.createElement("img",{className:"channel_img",src:this.state.imageLink,alt:"text"}),n.a.createElement("a",{className:"channel_link",href:"https://www.youtube.com/channel/"+this.state.channelId,target:"_black"},"\uc720\ud29c\ube0c \ucc44\ub110 \ub9c1\ud06c")),n.a.createElement("ul",{className:"channel_info"},n.a.createElement("li",{className:"channel_item"},n.a.createElement("strong",null,this.state.title)),n.a.createElement("li",{className:"channel_item"},"\ucc44\ub110 \uc124\uba85: ",this.state.description),n.a.createElement("li",{className:"channel_item"},"\uc601\uc0c1\uc218: ",this.NumberWithCommas(this.state.videos)),n.a.createElement("li",{className:"channel_item"},"\uad6c\ub3c5\uc790\uc218: ",this.NumberWithCommas(this.state.subscribers)),n.a.createElement("li",{className:"channel_item"},"\uc870\ud68c\uc218: ",this.NumberWithCommas(this.state.views))))),n.a.createElement("div",{className:"video-container container"},n.a.createElement("h1",{className:"video-title title"},"\ucd5c\uc2e0 \uc5c5\ub85c\ub4dc \uc601\uc0c1"),n.a.createElement("div",{className:"video-items"},this.state.videoId.map((function(e){return n.a.createElement("div",{className:"video-item-container"},n.a.createElement(w.a,{className:"video-item",videoId:e}))})))),n.a.createElement("div",{className:"video-container container"},n.a.createElement("h1",{className:"video-title title"},"\uc870\uc774\ucc48\ud2b8 \uc2dc\uc98c1"),n.a.createElement("div",{className:"video-items"},this.state.videoIdSeason1.map((function(e){return n.a.createElement("div",{className:"video-item-container"},n.a.createElement(w.a,{className:"video-item",videoId:e}))})))))}}]),a}(n.a.Component)),f=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement(u.a,null,n.a.createElement(d,null),n.a.createElement(p.a,{path:"/schana",exact:!0,component:E}),n.a.createElement(p.a,{path:"/joychant",component:N}))}}]),a}(n.a.Component);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.9a6fbe4e.chunk.js.map