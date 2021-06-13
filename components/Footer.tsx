const Footer = () => {
  return (
    <footer className='py-8 flex items-center justify-center mt-16'>
      <ul className='flex items-center space-x-6 text-sm text-gray-400 font-light'>
        <li><a href="#" className="hover:text-green-500 transition-all">Contact</a></li>
        <li><a href="https://linkedin.com" target="_blank" rel="noopener" className="hover:text-green-500 transition-all">Linkedin</a></li>
        <li><a href="#" className="hover:text-green-500 transition-all">Terms</a></li>
        <li><a href="#" className="hover:text-green-500 transition-all">Privacy</a></li>
      </ul>
    </footer>
  )
}

export default Footer;