(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),i=c.n(r),a=c(3),s=c.n(a),o=(c(14),c(4)),j=c(5),l=c(6),d=c(8),b=c(7);var u=function(e){var t=e.title,c=e.children;return Object(n.jsxs)("section",{children:[Object(n.jsx)("h2",{children:t}),c]})};var h=function(e){var t=e.options,c=e.onLeaveFeedback;return Object(n.jsx)("ul",{className:"btnList",children:t.map((function(e){return Object(n.jsx)("li",{children:Object(n.jsx)("button",{onClick:c,id:e,children:e})},e)}))})};var O=function(e){var t=e.good,c=e.neutral,r=e.bad,i=e.total,a=e.positivePercentage;return Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsxs)("p",{children:["Good: ",t]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("p",{children:["Neutral: ",c]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("p",{children:[" Bad: ",r]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("p",{children:[" Total: ",i]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("p",{children:[" Positive feedback: ",a,"%"]})})]})};var v=function(e){var t=e.message;return Object(n.jsx)("p",{children:t})},x=function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(j.a)(this,c);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.setActiveItem=function(t){var c=t.target.id.toLowerCase();e.setState((function(e){return Object(o.a)({},c,e[c]+1)}))},e.countTotalFeedback=function(e,t,c){return e+t+c},e}return Object(l.a)(c,[{key:"countPositiveFeedbackPercentage",value:function(e,t){return Math.round(100*e/t)}},{key:"render",value:function(){var e=this.state,t=e.good,c=e.neutral,r=e.bad,i=this.countTotalFeedback(t,c,r),a=this.countPositiveFeedbackPercentage(t,i);return Object(n.jsxs)("div",{children:[Object(n.jsx)(u,{title:"Please leave feedback",children:Object(n.jsx)(h,{options:["Good","Neutral","Bad"],onLeaveFeedback:this.setActiveItem})}),Object(n.jsx)(u,{title:"Statistics",children:0===i?Object(n.jsx)(v,{message:"No feedback given"}):Object(n.jsx)(O,{good:t,neutral:c,bad:r,total:i,positivePercentage:a})})]})}}]),c}(r.Component);s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3c4ae6b6.chunk.js.map