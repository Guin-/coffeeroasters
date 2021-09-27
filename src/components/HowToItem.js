function HowToItem({number, title, description}) {
  return (
    <div className="text-center md:text-left px-2 md:px-3 pb-12 md:w-56">
      <p className="text-xl font-serif text-paleOrange py-3 md:py-5">{number}</p>
      <h4 className="py-3 text-darkGray lg:text-md md:py-5">{title}</h4>
      <p className="py-3 md:py-5"> {description}</p>
    </div>
  )
}

export default HowToItem;
