import logoSvg from '../assets/logo.svg';
import './Header.css';

const Header = () => {
  return (
    <header>
      {/* <!-- Navigation bar --> */}
      <nav
        className='relative flex items-center justify-between w-full py-2 bg-white shadow-lg text-neutral-600 hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start'
        data-te-navbar-ref
      >
        <div className='flex flex-wrap items-center justify-between w-full px-3'>
          <div className='flex items-center'>
            {/* <!-- Hamburger menu button --> */}
            <button
              className='px-2 text-xl leading-none transition-shadow duration-150 ease-in-out bg-transparent border-0 hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden'
              type='button'
              data-te-collapse-init
              data-te-target='#navbarSupportedContentX'
              aria-controls='navbarSupportedContentX'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              {/* <!-- Hamburger menu icon --> */}
              <span className='[&>svg]:w-5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='h-7 w-7'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* <!-- Navigation links --> */}
          <div
            className='!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto'
            id='navbarSupportedContentX'
            data-te-collapse-item
          >
            <ul
              className='flex flex-col mr-auto lg:flex-row'
              data-te-navbar-nav-ref
            >
              <li>
                <a
                  className='logo block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90'
                  href='/'
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color='light'
                >
                  Sushi Nerd
                </a>
              </li>
              <li className='mb-4 lg:mb-0 lg:pr-2' data-te-nav-item-ref>
                <a
                  className='block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90'
                  href='/'
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color='light'
                >
                  Accueil
                </a>
              </li>
              <li className='mb-4 lg:mb-0 lg:pr-2' data-te-nav-item-ref>
                <a
                  className='block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90'
                  href='#menu'
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color='light'
                >
                  Menu
                </a>
              </li>
              <li className='mb-4 lg:mb-0 lg:pr-2' data-te-nav-item-ref>
                <a
                  className='block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90'
                  href='#contact'
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color='light'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/*       
        <!-- Hero section with background image, heading, subheading and button --> */}
      <div className='relative overflow-hidden bg-no-repeat bg-cover header-img'>
        <div className='absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-fixed header-img-overflow'>
          <div className='flex items-center justify-center h-full header-cover'>
            <img src={logoSvg} alt='Sushi-Nerd logo' />
            <div className='px-6 text-center text-white md:px-12'>
              <h1 className='mb-6 text-5xl font-bold'>Sushi Nerd</h1>
              <h3 className='mb-8 text-3xl font-bold'>
                Un voyage culinaire geek et délicieux
              </h3>
              <button
                type='button'
                className='inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'
                data-te-ripple-init
                data-te-ripple-color='light'
              >
                Réservez
              </button>
            </div>
            <img src={logoSvg} alt='Sushi-Nerd logo' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
