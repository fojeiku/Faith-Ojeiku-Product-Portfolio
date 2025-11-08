function Footer() {
  return (
    <footer className="bg-[#4dd0e1] py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="text-center mb-6">
          <p className="text-[#111111] text-base md:text-lg font-medium">
            © 2025 Faith Ojeiku | Product Manager | <a href="mailto:faithojeiku@gmail.com" className="hover:underline">faithojeiku@gmail.com</a> | <a href="tel:+14039983590" className="hover:underline">+1-403-998-3590</a> | Canada | <a href="https://www.linkedin.com/in/faithojeiku" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          </p>
        </div>

        {/* CTA */}
        <div className="text-center border-t-2 border-[#111111] border-opacity-20 pt-6">
          <p className="text-[#111111] text-xl md:text-2xl font-bold">
            Let's build impactful products together.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
