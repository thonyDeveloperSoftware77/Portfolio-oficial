import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

const SEO = ({ 
  title = "Anthony Cochea - Full Stack Developer | Ingeniero de Software",
  description = "Anthony Cochea, Full Stack Developer graduado de UDLA en Ingeniería de Software. Especializado en React, Node.js, TypeScript, Go, y desarrollo de aplicaciones web modernas. Ubicado en Quito, Ecuador.",
  keywords = "Anthony Cochea, Full Stack Developer, Ingeniero Software, UDLA, React Developer, Node.js Developer, TypeScript, Go, JavaScript, Quito Ecuador, Desarrollador Web, Frontend, Backend, Software Engineer",
  image = "/me.png",
  url = "https://anthonycochea.dev",
  type = "website"
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title

    // Remove existing meta tags
    const existingMetas = document.querySelectorAll('meta[data-seo="true"]')
    existingMetas.forEach(meta => meta.remove())

    // Create and add new meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'author', content: 'Anthony Cochea' },
      { name: 'robots', content: 'index, follow' },
      { name: 'language', content: 'Spanish' },
      { name: 'revisit-after', content: '7 days' },
      
      // Open Graph
      { property: 'og:type', content: type },
      { property: 'og:url', content: url },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:site_name', content: 'Anthony Cochea Portfolio' },
      { property: 'og:locale', content: 'es_ES' },
      
      // Twitter
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: url },
      { property: 'twitter:title', content: title },
      { property: 'twitter:description', content: description },
      { property: 'twitter:image', content: image },
      { property: 'twitter:creator', content: '@anthonycochea' },
      
      // Geographic
      { name: 'geo.region', content: 'EC-P' },
      { name: 'geo.placename', content: 'Quito' },
      { name: 'geo.position', content: '-0.1807;-78.4678' },
      { name: 'ICBM', content: '-0.1807, -78.4678' },
      
      // Professional
      { name: 'classification', content: 'Technology, Software Development' },
      { name: 'category', content: 'Portfolio, Software Developer' },
      { name: 'coverage', content: 'Worldwide' },
      { name: 'distribution', content: 'Global' },
      { name: 'rating', content: 'General' }
    ]

    metaTags.forEach(({ name, property, content }) => {
      const meta = document.createElement('meta')
      if (name) meta.name = name
      if (property) meta.setAttribute('property', property)
      meta.content = content
      meta.setAttribute('data-seo', 'true')
      document.head.appendChild(meta)
    })

    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Anthony Cochea",
      "jobTitle": "Full Stack Developer",
      "description": "Ingeniero de Software especializado en desarrollo Full Stack con experiencia en React, Node.js, TypeScript y Go",
      "url": url,
      "image": image,
      "sameAs": [
        "https://github.com/anthonycochea",
        "https://linkedin.com/in/anthony-cochea",
        "mailto:thonydevelopersoftware@gmail.com"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Quito",
        "addressCountry": "Ecuador"
      },
      "alumniOf": {
        "@type": "Organization",
        "name": "Universidad de Las Américas (UDLA)",
        "description": "Ingeniería de Software"
      },
      "knowsAbout": [
        "JavaScript",
        "TypeScript", 
        "React",
        "Node.js",
        "Go",
        "Full Stack Development",
        "Software Engineering",
        "Web Development",
        "Mobile Development",
        "DevOps",
        "Cloud Computing"
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Full Stack Developer",
        "description": "Desarrollador Full Stack especializado en tecnologías modernas",
        "occupationLocation": {
          "@type": "City",
          "name": "Quito, Ecuador"
        }
      }
    }

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"][data-seo="true"]')
    if (existingScript) existingScript.remove()

    // Add new structured data
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-seo', 'true')
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)

  }, [title, description, keywords, image, url, type])

  return null
}

export default SEO
