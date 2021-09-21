function FeatureItem({img, title, description}) {
  return (
    <div className="features-item bg-darkCyan rounded-lg flex flex-col md:flex-row lg:flex-col justify-center items-center pt-16 pb-12 md:pt-10 md:pb-10 my-3 md:pl-16">
      <img src={img} alt='' />
      <div className="feature-description mt-14 px-3 text-center md:text-left lg:text-center md:mt-4 md:px-0">
        <h4 className="md:pl-14">{title}</h4>
        <p className="py-6 px-5 md:pl-14 md:pr-12 md:py-4">{description}</p>
      </div>
    </div>
  )
}

export default FeatureItem;
