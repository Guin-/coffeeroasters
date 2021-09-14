function Home () {
  return (
    <div>
      <header>
        <div className="hero-image rounded-lg bg-hero-mobile md:bg-hero-tablet lg:bg-hero-desktop bg-cover h-full">
          <div className="hero-content flex flex-col space-between items-center md:items-start px-6 py-24 md:pl-14 md:pr-0 md:w-96 lg:w-2/4 lg:pl-20 lg:py-28">
            <h1 className="text-white text-lg lg:text-xl">Great coffee<br /> made simple.</h1>
            <p className="text-lightCream text-center md:text-left pb-12 pt-6 lg:pr-20">
              Start your mornings with the world’s best coffees. Try our expertly curated artisan
              coffees from our best roasters delivered directly to your door, at your schedule.
            </p>
            <button className="text-lightCream bg-darkCyan font-serif rounded w-56 px-8 py-4">Create your plan</button>
          </div>
        </div>
      </header>
      <main>
        <section className="collection">
          <div className="collection-title">
            <h1>Our collection</h1>
          </div>
          <div className="collection-items">
            <div className="collection-item">
              Gran Espresso
              Light and flavorful blend with cocoa and black pepper for an intense experience
            </div>
            <div className="collection-item">
              Planalto
              Brazilian dark roast with rich and velvety body, and hints of fruits and nuts
            </div>
            <div className="collection-item">
              Piccollo
              Mild and smooth blend featuring notes of toasted almond and dried cherry
            </div>
            <div className="collection-item">
              Danche
              Ethiopian hand-harvested blend densely packed with vibrant fruit notes
            </div>
          </div>
        </section>
        <section className="features">
          <div className="features-description">
            <h2>Why choose us?</h2>
            <p>
              A large part of our role is choosing which particular coffees will be featured
              in our range. This means working closely with the best coffee growers to give
              you a more impactful experience on every level.
            </p>
          </div>
          <div className="features-items">
            <div className="features-item">
              Best quality
              Discover an endless variety of the world’s best artisan coffee from each of our roasters.
            </div>
            <div className="features-item">
              Exclusive benefits
              Special offers and swag when you subscribe, including 30% off your first shipment.
            </div>
            <div className="features-item">
              Free shipping
              We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.
            </div>
          </div>
        </section>
        <section className="how-to">
          <div className="how-to-description">
            <h3>How it works</h3>
            <div className="line-image">line-image</div>
          </div>
          <div className="how-to-items">
            <div className="how-to-item">
              01
              Pick your coffee
              Select from our evolving range of artisan coffees. Our beans are ethically
              sourced and we pay fair prices for them. There are new coffees in all profiles
              every month for you to try out.
            </div>
            <div className="how-to-item">
              02
              Choose the frequency
              Customize your order frequency, quantity, even your roast style and grind type.
              Pause, skip or cancel your subscription with no commitment through our online portal.
            </div>
            <div className="how-to-item">
              03
              Receive and enjoy!
              We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning
              world-class coffees curated to provide a distinct tasting experience.
            </div>
          </div>
          <button>Create your plan</button>
        </section>
      </main>
    </div>
  )
}

export default Home;
