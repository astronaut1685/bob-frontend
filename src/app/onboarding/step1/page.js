import Link from 'next/link';
import Image from 'next/image';

export default function Step1() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ overflow: 'hidden', height: '100vh' }}>
      <div className="row connection" style={{ position: 'absolute', top: '20px', width: '100%', padding: '0 25px' }}>
        <div className="col-6 d-flex align-items-center">
          <Image 
            src="/images/bob-logo.png" 
            className="logo-dark h-rem-8 w-rem-auto" 
            alt="BOB Logo" 
            width={120}
            height={48}
          />
        </div>
        <div className="col-6 d-flex align-items-center justify-content-end gap-2">
          <p className="text-sm">
            <span className="green-dot pulse" style={{ 
              display: 'inline-block', 
              width: '10px', 
              height: '10px', 
              backgroundColor: 'green', 
              borderRadius: '50%', 
              marginRight: '5px',
              animation: 'pulse 1.5s infinite'
            }}></span>
            Connected to: <strong>CODE</strong>
          </p>
          <div className="dropdown">
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
      <div className="content">
        <section className="py-24">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div>
                  <div className="text-primary fw-semibold mb-4">
                    Get started
                  </div>
                  <h1 className="ls-tight">
                    Datenschutz
                  </h1>
                  <p className="lead mt-5">
                    Join a thriving community of innovators, where your passion is celebrated. Explore new
                    horizons and connect with like-minded individuals today!
                  </p>
                </div>
                <ul className="list-unstyled mt-5">
                  <li className="py-3">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="icon icon-xs text-sm icon-shape text-bg-success rounded-circle me-3">
                          <i className="bi bi-check"></i>
                        </div>
                      </div>
                      <div>
                        Receive weekly updates
                      </div>
                    </div>
                  </li>
                  <li className="py-3">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="icon icon-xs text-sm icon-shape text-bg-success rounded-circle me-3">
                          <i className="bi bi-check"></i>
                        </div>
                      </div>
                      <div>
                        Get lifetime access
                      </div>
                    </div>
                  </li>
                  <li className="py-3">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="icon icon-xs text-sm icon-shape text-bg-success rounded-circle me-3">
                          <i className="bi bi-check"></i>
                        </div>
                      </div>
                      <div>
                        14 days free trial
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="hstack gap-3 mt-10">
                  <Link href="/onboarding/step2" className="btn btn-lg btn-primary px-lg-8">
                    Weiter
                  </Link>
                  <Link href="#" className="btn btn-lg btn-neutral px-lg-8">
                    Learn more
                  </Link>
                </div>
              </div>
              <div className="col-lg-5 ms-lg-auto">
                <div className="position-relative">
                  <figure>
                    <Image 
                      alt="Featured image"
                      src="https://images.unsplash.com/photo-1670349081674-90d0e76a20ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1200&q=80"
                      className="img-fluid rounded-4 shadow-4"
                      width={1000}
                      height={1200}
                    />
                  </figure>
                  <Link href="#"
                    className="btn btn-icon btn-sm btn-white position-absolute bottom-0 bottom-0 mb-4 ms-4 shadow-sm">
                    <span className="svg-icon svg-align-baseline pe-2">
                      <i className="bi bi-play-fill"></i>
                    </span>
                    <span>See video</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
} 