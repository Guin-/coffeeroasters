function HowToItem({number, title, description}) {
  return (
    <div className="text-center px-2 pb-12">
      <p className="text-xl font-serif text-paleOrange py-3">{number}</p>
      <h4 className="py-3">{title}</h4>
      <p className="py-3"> {description}</p>
    </div>
  )
}

export default HowToItem;
