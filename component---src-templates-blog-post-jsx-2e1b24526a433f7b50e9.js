(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{lRrx:function(t,e,n){"use strict";n.r(e),n.d(e,"BlogPostTemplate",(function(){return b}));var i=n("q1tI"),o=n.n(i),a=n("Q7jV"),r=n("k8qi"),l=n("vOnD"),s=n("WPpP"),c=n("5Q7b"),d=n("dmsj"),p=function(t){var e=t.tags;return o.a.createElement(m,null,e.map((function(t){return o.a.createElement("div",{key:t},o.a.createElement("button",{link:!0,to:"/tags/#"+t},"#",t))})))},m=l.b.div.withConfig({displayName:"PostTag__StyledTag",componentId:"sc-1bactx0-0"})(["margin:20px 0px;div{display:inline;}button{margin-right:8px;font-weight:600;font-size:14px;color:#4A154B;}"]),f=function(){function t(t,e,n){var i=this;this.targets=Array.from(t.querySelectorAll("a")),this.refs=e,this.sensitivity=n||-10,window.addEventListener("scroll",(function(){return i.onScroll()}))}var e=t.prototype;return e.onScroll=function(){var t=this;this.isOnTopOfDocument(this.refs[0])||this.deactiveateTarget(),this.refs.forEach((function(e){if(t.isOnTopOfDocument(e)){t.deactiveateTarget();var n=t.findTarget(e.id);n&&t.activate(n)}}))},e.isOnTopOfDocument=function(t){return document.documentElement.scrollTop-t.offsetTop>=this.sensitivity},e.deactiveateTarget=function(){var t=this;this.targets.forEach((function(e){return t.deactivate(e)}))},e.findTarget=function(t){return this.targets.filter((function(e){return decodeURIComponent(e.attributes.href.value.replace(/^#/,""))===t}))[0]},e.activate=function(t){t.classList.add("active")},e.deactivate=function(t){t.classList.remove("active")},t}(),h=n("Wbzz"),g=function(t){var e=t.tableOfContents;return Object(i.useEffect)((function(){var t=document.querySelector("#post-content"),e=Array.from(t.querySelectorAll("h1,h2,h3,h4,h5,h6")).filter((function(t){return t.id})),n=document.querySelector("#post-toc");new f(n,e)}),[]),o.a.createElement(u,null,o.a.createElement(x,{id:"post-toc",dangerouslySetInnerHTML:{__html:e}}),o.a.createElement("button",{className:"goToMain"},o.a.createElement(h.Link,{to:"/"},"메인으로 돌아가기")))},u=l.b.div.withConfig({displayName:"PostToc__StyledAside",componentId:"sc-18p83nd-0"})(["position:sticky;top:60px;.goToMain{margin-top:40px;width:100%;height:48px;border-radius:8px;a{text-decoration:none;font-size:14px;font-weight:600;color:#4A154B;}}"]),x=l.b.div.withConfig({displayName:"PostToc__StyledToc",componentId:"sc-18p83nd-1"})(["ul{width:240px;}li{}a{border-top:1px solid #E8E8E8;display:block;padding:14px 0px;text-decoration:none;letter-spacing:-0.1px;line-height:1rem;font-size:14px;color:#494949;transition:all 1s ease-in;&.active{font-weight:700;color:#2B092B;}}"]),b=function(t){var e,n=t.data,o=t.pageContext,r=n.site,l=n.markdownRemark;n.series,o.previous,o.next;return i.createElement(i.Fragment,null,i.createElement(a.a,null),i.createElement(c.a,null),i.createElement(d.a,{title:l.frontmatter.title,description:l.excerpt,date:l.fields.date,siteUrl:r.siteMetadata.siteUrl+l.fields.slug,image:l.frontmatter.featured_image||(null===(e=l.frontmatter.featuredImage)||void 0===e?void 0:e.childImageSharp.fluid.src)}),i.createElement("div",{itemScope:!0,itemType:"http://schema.org/BlogPosting"},i.createElement(v,null,i.createElement("article",{className:"content"},i.createElement("div",{className:"title"},l.frontmatter.title),i.createElement("div",{className:"publishedDate"},l.fields.dateStr),i.createElement(w,{id:"post-content",itemProp:"articleBody",dangerouslySetInnerHTML:{__html:l.html}}),i.createElement("div",null,(l.frontmatter.tags||[]).length>0&&i.createElement(p,{tags:l.frontmatter.tags}))),i.createElement("div",{className:"aside"},l.tableOfContents&&i.createElement(g,{tableOfContents:l.tableOfContents})))),i.createElement(s.a,null))},v=(e.default=b,l.b.main.withConfig({displayName:"blog-post__StyledBlogLayout",componentId:"sc-1enxuk1-0"})(["margin:0px auto;max-width:calc(1020px - (20px * 2));display:flex;justify-content:space-between;padding-top:calc(100vw*0.049);.title{font-size:34px;font-weight:900;}.publishedDate{font-size:14px;color:#494949;}.content{font-size:16px;line-height:1.8;width:720px;@media (max-width:calc("," - 1px)){width:calc(100vw - 20px);margin:auto;}}.aside{margin-left:20px;margin-top:110px;@media (max-width:calc("," - 1px)){display:none;}}.goToMain{margin-top:40px;width:100%;height:48px;font-size:14px;font-weight:600;background:#F3F3F3;border-radius:8px;color:#4A154B;}"],r.b.Tablet,r.b.Tablet)),w=l.b.div.withConfig({displayName:"blog-post__StyledPostContent",componentId:"sc-1enxuk1-1"})(['margin-top:20px;padding-bottom:40px;font-size:16px;width:100%;border-bottom:2px solid #F3F3F3;h1,h2,h3,h4,h5,h6{line-height:1.8;}h1{font-size:32px;line-height:1.8;font-weight:700;}h2{font-size:24px;margin-top:18px;font-weight:700;}h3{font-size:20px;font-weight:700;line-height:1;margin-block-start:1.4em;}h4{font-size:18px;font-weight:600;margin-block-start:1.4em;}h5{font-size:120%;margin-top:12px;}img{border-radius:3px;display:block;max-width:100%;}p{margin-block-start:0.8em;margin-block-end:0.8em;}ol,ul{margin-block-start:0.8em;margin-block-end:0.8em;}ul>li{list-style:square;list-style-position:inside;margin-left:8px;}ol>li{list-style:decimal;list-style-position:inside;margin-left:8px;}li::marker{font-weight:500;color:#2B092B;}hr{height:1px;border:1px solid #E8E8E8;background:#E8E8E8;margin:20px 0;}blockquote{position:relative;&::before{content:"“";position:absolute;font-size:40px;}}.gatsby-highlight{pre{overflow:auto;word-wrap:normal;white-space:pre;}}'])}}]);
//# sourceMappingURL=component---src-templates-blog-post-jsx-2e1b24526a433f7b50e9.js.map