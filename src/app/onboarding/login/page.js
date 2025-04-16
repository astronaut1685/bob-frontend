import Link from 'next/link';
import Image from 'next/image';

export default function Login() {
  return (
    <div className="bg-body-login">
      <div className="card position-absolute top-0 end-0 m-10" style={{ width: '300px' }}>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Image 
                src="/images/bob-logo.png" 
                className="w-75" 
                alt="BOB Logo" 
                width={75} 
                height={30} 
              />
            </div>
            <div className="text-right">
              <div className="d-flex align-items-center">
                <div>
                  <span className="badge badge-xs badge-count text-sm rounded-circle bg-success">
                    <i className="bi bi-check"></i>
                  </span>
                </div>
                <div className="ms-2">
                  <small className="h6 text-xs text-success">Verbunden</small>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h5 className="card-title mb-2">BOB.jetzt</h5>
            <p className="card-subtitle text-body-secondary text-sm">Das System ist betriebsbereit.</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="col-12 col-md-9 col-lg-7 col-xl-8 vh-100 d-flex flex-column justify-content-center position-relative px-xl-10">
          <div className="row">
            <div className="col-md-5 col-xl-4 col-xxl-4 mx-auto">
              <div className="dropdown pb-1">
                <button className="btn btn-neutral flex-none d-flex align-items-center gap-2 p-1" data-bs-toggle="dropdown" aria-expanded="false">
                  <Image 
                    src="https://assets.webpixels.io/img/flags/eu.svg" 
                    className="w-rem-5 h-rem-5 rounded-circle" 
                    alt="EU Flag" 
                    width={20} 
                    height={20} 
                  />
                  <span>Deutsch</span>
                  <i className="bi bi-chevron-down text-xs me-1"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-sm">
                  <li>
                    <a className="dropdown-item px-3 d-flex align-items-center gap-3" href="#">
                      <Image 
                        src="https://assets.webpixels.io/img/flags/us.svg" 
                        className="w-rem-5 h-rem-5 rounded-circle" 
                        alt="US Flag" 
                        width={20} 
                        height={20} 
                      />
                      <span>USD</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item px-3 d-flex align-items-center gap-3" href="#">
                      <Image 
                        src="https://assets.webpixels.io/img/flags/eu.svg" 
                        className="w-rem-5 h-rem-5 rounded-circle" 
                        alt="EU Flag" 
                        width={20} 
                        height={20} 
                      />
                      <span>EUR</span>
                      <span className="ms-auto text-success text-lg">
                        <i className="bi bi-check"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card rounded-md-4 shadow-soft-3" style={{ minHeight: '40vh' }}>
                <div className="card-body p-md-8 d-flex flex-column justify-content-center">
                  <div className="text-left mb-6">
                    <h3 className="ls-tight fw-bolder">
                      Hallo, lass uns beginnen!
                    </h3>
                  </div>
                  <form>
                    <div className="row mb-6">
                      <div className="col-lg-2 col-md-2 col-2 ps-0 ps-md-2">
                        <input type="text" className="form-control text-lg text-center" placeholder="_" aria-label="2fa" />
                      </div>
                      <div className="col-lg-2 col-md-2 col-2 ps-0 ps-md-2">
                        <input type="text" className="form-control text-lg text-center" placeholder="_" aria-label="2fa" />
                      </div>
                      <div className="col-lg-2 col-md-2 col-2 ps-0 ps-md-2">
                        <input type="text" className="form-control text-lg text-center" placeholder="_" aria-label="2fa" />
                      </div>
                      <div className="col-lg-2 col-md-2 col-2 pe-0 pe-md-2">
                        <input type="text" className="form-control text-lg text-center" placeholder="_" aria-label="2fa" />
                      </div>
                      <div className="col-lg-2 col-md-2 col-2 pe-0 pe-md-2">
                        <input type="text" className="form-control text-lg text-center" placeholder="_" aria-label="2fa" />
                      </div>
                      <div className="col-lg-2 col-md-2 col-2 pe-0 pe-md-2">
                        <input type="text" className="form-control text-lg text-center" placeholder="_" aria-label="2fa" />
                      </div>
                    </div>
                    <div className="text-center">
                      <Link href="/onboarding/step1">
                        <button type="button" className="btn btn-primary w-100">Submit</button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 