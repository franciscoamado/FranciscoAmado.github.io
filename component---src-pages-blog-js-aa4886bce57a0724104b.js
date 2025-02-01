"use strict";(self.webpackChunkfranciscoamado_github_io=self.webpackChunkfranciscoamado_github_io||[]).push([[711],{2465:function(e,t,n){var l=n(6540);const r=n(7581).Ay.section`
  display: grid;
  grid-template-columns: ${e=>`repeat(${e.columns}, 1fr)`};
`;t.A=e=>{let{columns:t,children:n,style:o}=e;return l.createElement(r,{columns:t,style:o},n)}},4151:function(e,t,n){n.r(t);var l=n(7387),r=n(6540),o=n(4794),a=n(7581),i=n(8492),s=n(2269),c=n(5765),m=n(2465);let u=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.A)(t,e),t.prototype.render=function(){const{data:e}=this.props,t=e.site.siteMetadata.title,n=e.allMarkdownRemark.edges;return r.createElement(i.A,{location:this.props.location,title:t},r.createElement(s.A,{title:"Blog"}),r.createElement(m.A,{columns:4,style:{gridColumnGap:"60px",marginBottom:20}},n.map((e=>{let{node:t}=e;const n=t.frontmatter.title||t.fields.slug;return r.createElement(d,{className:"collumn"},r.createElement("div",{key:t.fields.slug},r.createElement("h3",{style:{marginBottom:(0,c.di)(1/4)}},r.createElement(o.Link,{style:{boxShadow:"none"},to:t.fields.slug},n)),r.createElement("small",null,t.frontmatter.date),r.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}})))}))))},t}(r.Component);t.default=u;const d=a.Ay.div`
  position: relative;
  padding: 0 0 6vw;
  min-height: 200px;
`}}]);
//# sourceMappingURL=component---src-pages-blog-js-aa4886bce57a0724104b.js.map