import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="position-relative d-flex justify-content-center px-5 py-5 p-lg-0 bg-body overflow-hidden">
      <div 
        className="col-lg-5 col-xl-5 p-12 p-xl-10 position-absolute start-0 top-0 min-vh-100 overflow-y-hidden d-none d-lg-flex flex-column bg-body-secondary border-end-lg" 
        style={{backgroundImage: 'url(/images/login-bg.jpg)'}}>
        <Link className="d-block" href="#">
          <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
          <Image 
            src="/images/bob-logo.png" 
            className="logo-dark h-rem-8 w-rem-auto" 
            alt="BOB Logo" 
            width={120}
            height={48}
          />
        </Link>
        <div className="mt-auto mb-8 w-lg-100" style={{zIndex: 9}}>
          <h1 className="ls-tight mb-4" style={{color: 'white'}}>
            Willkommen beim BOB-Transfer, starten wir!
          </h1>
          <p className="pe-lg-10" style={{color: 'white'}}>
            Maybe some text here will help me see it better.
          </p>
        </div>
        <div className="w-rem-56 h-rem-56 bg-white bg-opacity-10 rounded-circle position-absolute bottom-0 end-0 me-10 transform translate-y-50"></div>
      </div>
      <div className="col-12 col-md-9 col-lg-7 offset-xl-7 offset-lg-5 vh-lg-100 d-flex flex-column justify-content-center py-lg-16 px-lg-20 position-relative">
        <div className="row">
          <div className="col-lg-10 col-md-9 col-xl-8 col-xxl-7 mx-auto ms-xl-0">
            <div className="mb-12">
              <h1 className="h2 ls-tight fw-bolder">
                BOB.jetzt
              </h1>
              <p className="text-sm mt-2 text-body-secondary">
                Please select your login type below.
              </p>
            </div>
            <div className="d-grid gap-4 mb-6">
              <Link href="/onboarding/login" className="btn btn-lg btn-primary w-100">
                User Login
              </Link>
              <Link href="/consultant/login" className="btn btn-lg btn-outline-primary w-100">
                Consultant Login
              </Link>
            </div>
            <div className="dropdown mt-4">
              <button className="btn btn-neutral dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                DE
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item d-flex align-items-center gap-3" href="#">
                  <div className="w-rem-6">
                    <Image 
                      src="https://assets.webpixels.io/img/flags/ro.svg" 
                      className="rounded-circle" 
                      alt="Romanian flag" 
                      width={24}
                      height={24}
                    />
                  </div>
                  Romanian
                </a>
                <a className="dropdown-item d-flex align-items-center gap-3" href="#">
                  <div className="w-rem-6">
                    <Image 
                      src="https://assets.webpixels.io/img/flags/us.svg" 
                      className="rounded-circle" 
                      alt="US flag" 
                      width={24}
                      height={24}
                    />
                  </div>
                  English
                </a>
                <a className="dropdown-item d-flex align-items-center gap-3" href="#">
                  <div className="w-rem-6">
                    <Image 
                      src="https://assets.webpixels.io/img/flags/gr.svg" 
                      className="rounded-circle" 
                      alt="Greek flag" 
                      width={24}
                      height={24}
                    />
                  </div>
                  Greek
                </a>
                <a className="dropdown-item d-flex align-items-center gap-3" href="#">
                  <div className="w-rem-6">
                    <Image 
                      src="https://assets.webpixels.io/img/flags/es.svg" 
                      className="rounded-circle" 
                      alt="Spanish flag" 
                      width={24}
                      height={24}
                    />
                  </div>
                  Spanish
                </a>
                <a className="dropdown-item d-flex align-items-center gap-3" href="#">
                  <div className="w-rem-6">
                    <Image 
                      src="https://assets.webpixels.io/img/flags/de.svg" 
                      className="rounded-circle" 
                      alt="German flag" 
                      width={24}
                      height={24}
                    />
                  </div>
                  Deutsch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
