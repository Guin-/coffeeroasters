function CollectionItem({img, title, description}) {
  return (
    <div className="collection-item flex flex-col md:flex-row lg:flex-col justify-center items-center py-6 lg:w-64">
      <img src={img} alt='' className="w-52 md:w-64"/>
      <div className="collection-item-info px-12 text-center md:text-left lg:text-center md:pl-9 md:pr-0 md:self-start lg:px-0 lg:pt-12">
        <h4 className="pt-6 pb-4 md:py-6">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default CollectionItem;
