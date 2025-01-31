import React from "react"
import ILink from "../components/a-link"

const Footer = () => {
  const socialLinkClasses = "bg-transparent text-[#323232] font-mono text-2xl mb-0 mr-3 text-center no-underline break-words"

  return (
    <footer className="text-center py-16 mb-0">
      <div className="flex flex-wrap mb-2.5 justify-center text-center">
        <a
          href="mailto:franciscoamado@live.com.pt"
          target="_blank"
          className={socialLinkClasses}
          rel="noopener noreferrer"
        >
          👋🏻
        </a>
      </div>
      <div className="flex flex-wrap mb-2.5 justify-center text-center">
        <a
          href="https://twitter.com/franciscosamado"
          target="_blank"
          className={socialLinkClasses}
          rel="noopener noreferrer"
        >
          <strong>Twitter.</strong>
        </a>
        <a
          href="https://github.com/FranciscoAmado"
          target="_blank"
          className={socialLinkClasses}
          rel="noopener noreferrer"
        >
          <strong>GitHub.</strong>
        </a>
        <a
          href="https://www.linkedin.com/in/franciscoamado"
          target="_blank"
          className={socialLinkClasses}
          rel="noopener noreferrer"
        >
          <strong>LinkedIn.</strong>
        </a>
        <a
          href="https://docs.google.com/document/d/1bKKFkNoBZIhUFyM-HxSwzlsSbbirvVQ3AtsS_P72Xwg/edit?usp=sharing"
          target="_blank"
          className={socialLinkClasses}
          rel="noopener noreferrer"
        >
          <strong>Resume.</strong>
        </a>
      </div>
      <div className="flex flex-wrap mb-2.5 justify-center text-center">
        <a className={socialLinkClasses}>
          <ILink to="/blog/">
            <strong>Bad Access Memories.</strong>
          </ILink>
        </a>
      </div>
    </footer>
  )
}

export default Footer
