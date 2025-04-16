import Link from 'next/link';
import Image from 'next/image';

export default function ConsultantLogin() {
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
        <div className="mt-auto mb-8 w-lg-75" style={{zIndex: 9}}>
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
                Sign in
              </h1>
              <p className="text-sm mt-2 text-body-secondary">
                Welcome back! Enter your details below.
              </p>
            </div>
            <form>
              <div className="row mb-6">
                <div className="col-lg-12 col-md-12 col-12 ps-0 ps-md-2">
                  <input type="text" className="form-control text-lg" placeholder="Email" aria-label="email" />
                </div>
              </div>
              <div className="text-center">
                <Link href="/consultant/dashboard">
                  <button type="button" className="btn btn-primary w-100">Send magic link</button>
                </Link>
              </div>
            </form>                    
          </div>
        </div>
      </div>
    </div>
  );
} 