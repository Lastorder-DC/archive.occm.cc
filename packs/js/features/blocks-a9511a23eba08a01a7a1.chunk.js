(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{779:function(e,o,t){"use strict";t.r(o),t.d(o,"default",(function(){return L}));var n,a,s,c=t(0),i=t(5),r=t(24),u=t.n(r),d=(t(1),t(9)),l=t(3),b=t(17),p=t(16),h=t.n(p),f=t(2),g=t.n(f),j=t(79),m=t(199),O=t(204),M=t(174),k=t(53),v=t(201),y=Object(l.f)({heading:{id:"column.blocks",defaultMessage:"Blocked users"}}),L=Object(d.connect)((function(e){return{accountIds:e.getIn(["user_lists","blocks","items"]),hasMore:!!e.getIn(["user_lists","blocks","next"]),isLoading:e.getIn(["user_lists","blocks","isLoading"],!0)}}))(n=Object(l.g)((s=a=function(e){function o(){for(var o,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(o=e.call.apply(e,[this].concat(n))||this).handleLoadMore=u()((function(){o.props.dispatch(Object(k.h)())}),300,{leading:!0}),o}Object(i.a)(o,e);var t=o.prototype;return t.componentWillMount=function(){this.props.dispatch(Object(k.i)())},t.render=function(){var e=this.props,o=e.intl,t=e.accountIds,n=e.shouldUpdateScroll,a=e.hasMore,s=e.multiColumn,i=e.isLoading;if(!t)return Object(c.a)(m.a,{},void 0,Object(c.a)(j.a,{}));var r=Object(c.a)(l.b,{id:"empty_column.blocks",defaultMessage:"You haven't blocked any users yet."});return Object(c.a)(m.a,{bindToDocument:!s,icon:"ban",heading:o.formatMessage(y.heading)},void 0,Object(c.a)(O.a,{}),Object(c.a)(v.a,{scrollKey:"blocks",onLoadMore:this.handleLoadMore,hasMore:a,isLoading:i,shouldUpdateScroll:n,emptyMessage:r,bindToDocument:!s},void 0,t.map((function(e){return Object(c.a)(M.a,{id:e},e)}))))},o}(b.a),a.propTypes={params:g.a.object.isRequired,dispatch:g.a.func.isRequired,shouldUpdateScroll:g.a.func,accountIds:h.a.list,hasMore:g.a.bool,isLoading:g.a.bool,intl:g.a.object.isRequired,multiColumn:g.a.bool},n=s))||n)||n}}]);
//# sourceMappingURL=blocks-a9511a23eba08a01a7a1.chunk.js.map