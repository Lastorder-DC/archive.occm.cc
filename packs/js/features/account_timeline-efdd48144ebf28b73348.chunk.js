(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{771:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return U}));var c,o,s,n=a(5),i=a(0),u=(a(1),a(9)),r=a(16),p=a.n(r),d=a(2),l=a.n(d),m=a(12),b=a(20),h=a(209),I=a(79),j=a(199),O=a(756),f=a(205),g=a(4),w=a(17),v=a(3),M=a(151),y=a(752),R=a(757),L=a(7),_=Object(g.List)(),S=function(t){var e=t.url;return Object(i.a)(R.a,{url:e,resource:Object(i.a)(v.b,{id:"timeline_hint.resources.statuses",defaultMessage:"Older toots"})})},U=Object(u.connect)((function(t,e){var a=e.params.accountId,c=e.withReplies,o=void 0!==c&&c,s=o?a+":with_replies":a;return{remote:!(t.getIn(["accounts",a,"acct"])===t.getIn(["accounts",a,"username"])),remoteUrl:t.getIn(["accounts",a,"url"]),isAccount:!!t.getIn(["accounts",a]),statusIds:t.getIn(["timelines","account:"+s,"items"],_),featuredStatusIds:o?Object(g.List)():t.getIn(["timelines","account:"+a+":pinned","items"],_),isLoading:t.getIn(["timelines","account:"+s,"isLoading"]),hasMore:t.getIn(["timelines","account:"+s,"hasMore"]),suspended:t.getIn(["accounts",a,"suspended"],!1),blockedBy:t.getIn(["relationships",a,"blocked_by"],!1)}}))((s=o=function(t){function e(){for(var e,a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))||this).handleLoadMore=function(t){e.props.dispatch(Object(b.r)(e.props.params.accountId,{maxId:t,withReplies:e.props.withReplies}))},e}Object(n.a)(e,t);var a=e.prototype;return a.componentWillMount=function(){var t=this.props,e=t.params.accountId,a=t.withReplies,c=t.dispatch;c(Object(m.M)(e)),c(Object(M.d)(e)),a||c(Object(b.p)(e)),c(Object(b.r)(e,{withReplies:a})),e===L.m&&c(Object(b.m)("account:"+L.m))},a.componentWillReceiveProps=function(t){var e=this.props.dispatch;(t.params.accountId!==this.props.params.accountId&&t.params.accountId||t.withReplies!==this.props.withReplies)&&(e(Object(m.M)(t.params.accountId)),e(Object(M.d)(t.params.accountId)),t.withReplies||e(Object(b.p)(t.params.accountId)),e(Object(b.r)(t.params.accountId,{withReplies:t.params.withReplies}))),t.params.accountId===L.m&&this.props.params.accountId!==L.m?e(Object(b.m)("account:"+L.m)):this.props.params.accountId===L.m&&t.params.accountId!==L.m&&e(Object(b.o)("account:"+L.m))},a.componentWillUnmount=function(){var t=this.props,e=t.dispatch;t.params.accountId===L.m&&e(Object(b.o)("account:"+L.m))},a.render=function(){var t,e=this.props,a=e.shouldUpdateScroll,c=e.statusIds,o=e.featuredStatusIds,s=e.isLoading,n=e.hasMore,u=e.blockedBy,r=e.suspended,p=e.isAccount,d=e.multiColumn,l=e.remote,m=e.remoteUrl;if(!p)return Object(i.a)(j.a,{},void 0,Object(i.a)(f.a,{multiColumn:d}),Object(i.a)(y.a,{}));if(!c&&s)return Object(i.a)(j.a,{},void 0,Object(i.a)(I.a,{}));t=r?Object(i.a)(v.b,{id:"empty_column.account_suspended",defaultMessage:"Account suspended"}):u?Object(i.a)(v.b,{id:"empty_column.account_unavailable",defaultMessage:"Profile unavailable"}):l&&c.isEmpty()?Object(i.a)(S,{url:m}):Object(i.a)(v.b,{id:"empty_column.account_timeline",defaultMessage:"No toots here!"});var b=l?Object(i.a)(S,{url:m}):null;return Object(i.a)(j.a,{},void 0,Object(i.a)(f.a,{multiColumn:d}),Object(i.a)(h.a,{prepend:Object(i.a)(O.a,{accountId:this.props.params.accountId}),alwaysPrepend:!0,append:b,scrollKey:"account_timeline",statusIds:r||u?_:c,featuredStatusIds:o,isLoading:s,hasMore:n,onLoadMore:this.handleLoadMore,shouldUpdateScroll:a,emptyMessage:t,bindToDocument:!d,timelineId:"account"}))},e}(w.a),o.propTypes={params:l.a.object.isRequired,dispatch:l.a.func.isRequired,shouldUpdateScroll:l.a.func,statusIds:p.a.list,featuredStatusIds:p.a.list,isLoading:l.a.bool,hasMore:l.a.bool,withReplies:l.a.bool,blockedBy:l.a.bool,isAccount:l.a.bool,suspended:l.a.bool,remote:l.a.bool,remoteUrl:l.a.string,multiColumn:l.a.bool},c=s))||c}}]);
//# sourceMappingURL=account_timeline-efdd48144ebf28b73348.chunk.js.map