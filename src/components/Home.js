import CollectionItem from './CollectionItem';
import FeatureItem from './FeatureItem';
import HowToItem from './HowToItem';
import granEspresso from '../assets/home/desktop/image-gran-espresso.png';
import planalto from '../assets/home/desktop/image-planalto.png';
import piccollo from '../assets/home/desktop/image-piccollo.png';
import danche from '../assets/home/desktop/image-danche.png';
import bean from '../assets/home/desktop/icon-coffee-bean.svg';
import gift from '../assets/home/desktop/icon-gift.svg';
import truck from '../assets/home/desktop/icon-truck.svg';

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
        <section className="collection py-28">
          <div className="collection-title">
            <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-gray to-white text-collectionMobile md:text-collectionTablet lg:text-collectionDesktop">our collection</h1>
          </div>
          <div className="collection-items flex flex-col lg:flex-row md:px-14 lg:px-20 lg:justify-between md:-mt-12">
            <CollectionItem img={granEspresso} title='Gran Espresso' description='Light and flavorful blend with cocoa and black pepper for an intense experience' />
            <CollectionItem img={planalto} title='Planalto' description='Brazilian dark roast with rich and velvety body, and hints of fruits and nuts' />
            <CollectionItem img={piccollo} title='Piccollo' description='Mild and smooth blend featuring notes of toasted almond and dried cherry' />
            <CollectionItem img={danche} title='Danche' description='Ethiopian hand-harvested blend densely packed with vibrant fruit notes' />
          </div>
        </section>
        <section className="features text-lightCream">
          <div className="features-description-container bg-darkGray rounded ">
            <div className="features-description bg-darkGray text-center pt-16 px-6 md:px-16 md:pt-14 lg:px-80 lg:pt-28">
              <h2 className="text-featuresMobile md:text-md lg:text-lg">Why choose us?</h2>
              <p className="pt-6 lg:pt-8">
                A large part of our role is choosing which particular coffees will be featured
                in our range. This means working closely with the best coffee growers to give
                you a more impactful experience on every level.
              </p>
            </div>
          </div>
          <div className="features-items px-6 flex flex-col lg:flex-row lg:justify-center lg:px-20">
            <FeatureItem img={bean} title='Best quality' description='Discover an endless variety of the world’s best artisan coffee from each of our roasters.' />
            <FeatureItem img={gift} title='Exclusive benefits' description='Special offers and swag when you subscribe, including 30% off your first shipment.' />
            <FeatureItem img={truck} title='Free shipping' description='We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.' />
          </div>
        </section>
        <section className="how-to py-28 md:py-36">
          <div className="how-to-description">
            <h4 className="text-gray text-center md:text-left pb-20 md:pb-10">How it works</h4>
            <div className="line-image">
              <svg height="31" width="768">
                <circle cx="3%" cy="15.5" r="14.5" fill="#FEFCF7" stroke="#0E8784" strokeWidth={2} />
                <circle cx="33%" cy="15.5" r="14.5" fill="#FEFCF7" stroke="#0E8784" strokeWidth={2} />
                <circle cx="66%" cy="15.5" r="14.5" fill="#FEFCF7" stroke="#0E8784" strokeWidth={2} />
              </svg>
            </div>
          </div>
          <div className="how-to-items md:flex md:justify-between">
            <HowToItem number="01"title="Pick your coffee"
              description="Select from our evolving range of artisan coffees. Our beans are ethically
              sourced and we pay fair prices for them. There are new coffees in all profiles
              every month for you to try out."/>
            <HowToItem number="02" title="Choose the frequency" description="Customize your order frequency, quantity, even your roast style and grind type.
              Pause, skip or cancel your subscription with no commitment through our online portal." />
            <HowToItem number="03" title="Recieve and enjoy!" description="
              We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning
              world-class coffees curated to provide a distinct tasting experience.
            " />
          </div>
          <div className="text-center md:text-left pt-6">
            <button className="text-lightCream bg-darkCyan font-serif rounded w-56 px-8 py-4">Create your plan</button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home;
