import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import './App.css'

gsap.registerPlugin(ScrollToPlugin)

function App() {
  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault()
      const target = e.target.getAttribute('href')
      if (target && target.startsWith('#')) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: target,
            offsetY: 20
          },
          ease: "power2.inOut"
        })
      }
    }

    const links = document.querySelectorAll('.toc-link')
    links.forEach(link => link.addEventListener('click', handleClick))

    return () => {
      links.forEach(link => link.removeEventListener('click', handleClick))
    }
  }, [])

  return (
    <>
      <header className="main-header">
        <h1>MARK WEB TASK</h1>
      </header>
      <div className="container">
        <main className="content">
          <section id="introduction" className="section">
            <h2>Introduction</h2>
            <p>
              Welcome to our comprehensive guide on modern web development practices and methodologies. 
              This document serves as a detailed exploration of key concepts, implementation strategies, 
              and best practices in contemporary web development.
            </p>
            <p>
              Throughout this guide, we'll delve into various aspects of web development, from fundamental 
              principles to advanced techniques, ensuring a thorough understanding of the subject matter.
            </p>
          </section>

          <section id="chapter1" className="section">
            <h2>Chapter 1: Project Overview</h2>
            <p>
              In this chapter, we explore the foundational elements of our project structure. Understanding 
              the architecture and organization of a web project is crucial for maintaining scalability and 
              efficiency throughout the development lifecycle.
            </p>
            <p>
              We'll examine key considerations in project planning, including technology stack selection, 
              development workflows, and deployment strategies. This comprehensive approach ensures a solid 
              foundation for successful project implementation.
            </p>
          </section>

          <section id="chapter2" className="section">
            <h2>Chapter 2: Technical Details</h2>
            <p>
              This section delves into the technical specifications and implementation details of our project. 
              We'll explore the various technologies, frameworks, and tools utilized in modern web development, 
              with a focus on practical applications and real-world scenarios.
            </p>
            <p>
              Understanding these technical aspects is essential for developing robust and maintainable web 
              applications. We'll cover topics such as front-end frameworks, state management, and performance 
              optimization techniques.
            </p>
          </section>

          <section id="chapter3" className="section">
            <h2>Chapter 3: Implementation</h2>
            <p>
              The implementation phase brings our theoretical knowledge into practice. This chapter guides you 
              through the step-by-step process of building and deploying web applications, with detailed 
              examples and practical insights.
            </p>
            <p>
              We'll explore best practices in code organization, testing strategies, and deployment workflows, 
              ensuring a smooth and efficient development process. Special attention will be given to common 
              challenges and their solutions.
            </p>
          </section>

          <section id="conclusion" className="section">
            <h2>Conclusion</h2>
            <p>
              As we conclude this comprehensive guide, we'll summarize the key takeaways and lessons learned 
              throughout the development process. This reflection helps reinforce important concepts and 
              provides a solid foundation for future projects.
            </p>
            <p>
              Remember that web development is an ever-evolving field, and staying updated with current 
              trends and best practices is crucial for success in this dynamic environment.
            </p>
          </section>
        </main>

        <aside className="table-of-contents">
          <h2>Table of Contents</h2>
          <nav>
            <a href="#introduction" className="toc-link">Introduction</a>
            <a href="#chapter1" className="toc-link">Chapter 1: Project Overview</a>
            <a href="#chapter2" className="toc-link">Chapter 2: Technical Details</a>
            <a href="#chapter3" className="toc-link">Chapter 3: Implementation</a>
            <a href="#conclusion" className="toc-link">Conclusion</a>
          </nav>
        </aside>
      </div>
    </>
  )
}

export default App