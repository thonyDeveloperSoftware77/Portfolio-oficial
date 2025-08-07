interface InternalLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  'aria-label'?: string
}

const InternalLink = ({ href, children, className = '', ...props }: InternalLinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      // Update URL for SEO
      window.history.pushState({}, '', href)
    }
  }

  return (
    <a 
      href={href}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </a>
  )
}

export default InternalLink
