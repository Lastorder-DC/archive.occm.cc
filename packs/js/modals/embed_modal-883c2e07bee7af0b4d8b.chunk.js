(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{783:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return g}));var o,i,s,r=a(0),n=a(5),l=a(1),d=a.n(l),c=a(2),m=a.n(c),b=a(17),u=a(3),p=a(8),f=a(19),h=Object(u.f)({close:{id:"lightbox.close",defaultMessage:"Close"}}),g=Object(u.g)((s=i=function(e){function t(){for(var t,a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))||this).state={loading:!1,oembed:null},t.setIframeRef=function(e){t.iframe=e},t.handleTextareaClick=function(e){e.target.select()},t}Object(n.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this,t=this.props.url;this.setState({loading:!0}),Object(p.a)().post("/api/web/embed",{url:t}).then((function(t){e.setState({loading:!1,oembed:t.data});var a=e.iframe.contentWindow.document;a.open(),a.write(t.data.html),a.close(),a.body.style.margin=0,e.iframe.width=a.body.scrollWidth,e.iframe.height=a.body.scrollHeight})).catch((function(t){e.props.onError(t)}))},a.render=function(){var e=this.props,t=e.intl,a=e.onClose,o=this.state.oembed;return Object(r.a)("div",{className:"modal-root__modal report-modal embed-modal"},void 0,Object(r.a)("div",{className:"report-modal__target"},void 0,Object(r.a)(f.a,{className:"media-modal__close",title:t.formatMessage(h.close),icon:"times",onClick:a,size:16}),Object(r.a)(u.b,{id:"status.embed",defaultMessage:"Embed"})),Object(r.a)("div",{className:"report-modal__container embed-modal__container",style:{display:"block"}},void 0,Object(r.a)("p",{className:"hint"},void 0,Object(r.a)(u.b,{id:"embed.instructions",defaultMessage:"Embed this status on your website by copying the code below."})),Object(r.a)("input",{type:"text",className:"embed-modal__html",readOnly:!0,value:o&&o.html||"",onClick:this.handleTextareaClick}),Object(r.a)("p",{className:"hint"},void 0,Object(r.a)(u.b,{id:"embed.preview",defaultMessage:"Here is what it will look like:"})),d.a.createElement("iframe",{className:"embed-modal__iframe",frameBorder:"0",ref:this.setIframeRef,sandbox:"allow-same-origin",title:"preview"})))},t}(b.a),i.propTypes={url:m.a.string.isRequired,onClose:m.a.func.isRequired,onError:m.a.func.isRequired,intl:m.a.object.isRequired},o=s))||o}}]);
//# sourceMappingURL=embed_modal-883c2e07bee7af0b4d8b.chunk.js.map