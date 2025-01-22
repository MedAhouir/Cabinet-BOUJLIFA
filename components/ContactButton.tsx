
type ButtonProps = {
  title: string;
  className?: string;
  destination?: string;
}

const ContactButton = ({className, title, destination}:ButtonProps) => {
  return (
    <button className={`px-8 py-3 bg-yellow-300 text-black transition-all duration-500 hover:bg-foreground hover:text-yellow-300 font-semibold ${className}`}>
      <a href={destination}>{title}</a>
    </button>
  )
}

export default ContactButton
    
   