import React, { useState, useRef, useEffect } from 'react';
import TopProducts from '../TopProducts/TopProducts';

const ProductsDetails = () => {
  const [activeImgSrc, setActiveImgSrc] = useState('/assets/img/products/p-1.png');
  const lensRef = useRef(null);
  const resultRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const img = document.querySelector('.slideshow-items.active');
      if (!img) return;
      const x = e.clientX;
      const y = e.clientY;

      const imgOffset = img.getBoundingClientRect();
      const imgWidth = img.offsetWidth;
      const imgHeight = img.offsetHeight;

      if (
        x > imgOffset.left &&
        x < imgOffset.left + imgWidth &&
        y > imgOffset.top &&
        y < imgOffset.top + imgHeight
      ) {
        lensRef.current.style.display = 'block';
        resultRef.current.style.display = 'block';
        imageZoom(img, resultRef.current, lensRef.current, e);
      } else {
        lensRef.current.style.display = 'none';
        resultRef.current.style.display = 'none';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const imageZoom = (img, result, lens, e) => {
    result.style.width = img.offsetWidth + 'px';
    result.style.height = img.offsetHeight + 'px';
    lens.style.width = img.offsetWidth / 2 + 'px';
    lens.style.height = img.offsetHeight / 2 + 'px';

    result.style.left = img.offsetLeft + img.offsetWidth + 10 + 'px';
    result.style.top = img.offsetTop + 'px';

    const cx = img.offsetWidth / lens.offsetWidth;
    const cy = img.offsetHeight / lens.offsetHeight;

    result.style.backgroundImage = `url(${img.src})`;
    result.style.backgroundSize = `${img.offsetWidth * cx}px ${img.offsetHeight * cy}px`;

    lens.addEventListener('mousemove', (e) => moveLens(e, img, lens, result, cx, cy));
    img.addEventListener('mousemove', (e) => moveLens(e, img, lens, result, cx, cy));
  };

  const moveLens = (e, img, lens, result, cx, cy) => {
    const imgOffset = img.getBoundingClientRect();
    const lensSize = lens.offsetWidth;

    let x = e.pageX - lensSize / 2;
    let y = e.pageY - lensSize / 2;

    if (x < imgOffset.left) x = imgOffset.left;
    if (x > imgOffset.left + img.offsetWidth - lensSize)
      x = imgOffset.left + img.offsetWidth - lensSize;
    if (y < imgOffset.top) y = imgOffset.top;
    if (y > imgOffset.top + img.offsetHeight - lensSize)
      y = imgOffset.top + img.offsetHeight - lensSize;

    lens.style.left = `${x}px`;
    lens.style.top = `${y}px`;

    result.style.backgroundPosition = `-${(x - imgOffset.left) * cx}px -${(y - imgOffset.top) * cy}px`;
  };

  const handleThumbnailClick = (newSrc) => {
    setActiveImgSrc(newSrc);
  };

  return (
    <div className='container-fluid'>
      <div className="pt-4">
        <div className="row">
          <div className="col-md-5">
            <div className="product-details w-100 h-100">
              <div id="slideshow-items-container">
                <img className="slideshow-items active rounded-3" src={activeImgSrc} alt="main" />
              </div>
              <div className="">
                <div id="result" ref={resultRef}></div>
                <div id="lens" ref={lensRef}></div>
              </div>
              <div className="d-flex gap-2 mt-4">
                <div className="slideshow-thumbnails" onClick={() => handleThumbnailClick('/assets/img/products/p-1.png')}>
                  <img src="/assets/img/products/p-1.png" alt="thumbnail 1" />
                </div>
                <div className="slideshow-thumbnails" onClick={() => handleThumbnailClick('/assets/img/products/p-2.png')}>
                  <img src="/assets/img/products/p-2.png" alt="thumbnail 2" />
                </div>
                <div className="slideshow-thumbnails" onClick={() => handleThumbnailClick('/assets/img/products/p-3.png')}>
                  <img src="/assets/img/products/p-3.png" alt="thumbnail 3" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <h2 className="fs-22 fw-semibold">100% Custom Round Wood Cake Stand- Razvi Exports</h2>
            <p className="fs-14 text-light w-75">
              It is a long established fact that a reader will be distracted by the readable content of a page
              when looking at its layout.
            </p>
            <div className>
              <h2 className="text-success fw-semibold fs-30">
                $13.00
                <span className="fs-20 fw-medium text-light"><del>$15.00</del></span>
              </h2>
            </div>
            <div className="mt-3">
              <div className="mb-3">
                <span className='fs-16 fw-normal text-black pe-1'>Type</span>
                <span className='fs-16 fw-medium text-black pe-1'>:</span>
                <span className="fs-16 fw-medium text-black">Iron</span>
              </div>
              <div className="mb-3">
                <span className='fs-16 fw-normal text-black pe-1'>Technics</span>
                <span className='fs-16 fw-medium text-black pe-1'>:</span>
                <span className="fs-16 fw-medium text-black">Polished</span>
              </div>
              <div className="mb-3">
                <span className='fs-16 fw-normal text-black pe-1'>Use</span>
                <span className='fs-16 fw-medium text-black pe-1'>:</span>
                <span className="fs-16 fw-medium text-black">Home Decoration</span>
              </div>
              <div className="mb-3">
                <span className='fs-16 fw-normal text-black pe-1'>Design</span>
                <span className='fs-16 fw-medium text-black pe-1'>:</span>
                <span className="fs-16 fw-medium text-black">Standard</span>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="fs-22 fw-semibold text-black">Select Color</h2>
              <div className="row ps-3">
                <div className="col-auto ps-0">
                  <div className="color-piker active" style={{ "--parse": "brown" }}></div>
                </div>
                <div className="col-auto ps-0">
                  <div className="color-piker" style={{ "--parse": "black" }}></div>
                </div>
                <div className="col-auto ps-0">
                  <div className="color-piker" style={{ "--parse": "Gold" }}></div>
                </div>
                <div className="col-auto ps-0">
                  <div className="color-piker" style={{ "--parse": "#ccc" }}></div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="fs-22 fw-semibold text-black">Select size</h2>
              <div className="mt-4">
                <div className="row">
                  <div className="col-auto">
                    <div className="size-box bg-light text-black border-dark border border-3">12 inc</div>
                  </div>
                  <div className="col-auto">
                    <div className="size-box bg-light text-black">11 inc</div>
                  </div>
                  <div className="col-auto">
                    <div className="size-box bg-light text-black">10 inc</div>
                  </div>
                  <div className="col-auto">
                    <div className="size-box bg-light text-black">8 inc</div>
                  </div>
                  <div className="col-auto">
                    <div className="size-box bg-light text-black">6 inc</div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="size-selector border rounded w-fit">
                  <button className="btn text-black fs-4 fw-bold">
                    -
                  </button>
                  <span className="fs-18 text-light fw-normal">01</span>
                  <button className="btn text-black fs-4 fw-bold">
                    +
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <div className="d-flex gap-3">
                  <button className="comman-btn bg-white text-main border border-main">
                    Add to Cart
                  </button>
                  {/* <button className="comman-btn bg-white text-main border border-main">Wishlist</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className>
            <ul className="nav nav-tabs products-details-tabs border-0" id="productTabs">
              <li className="nav-item">
                <a className="nav-link active" data-bs-toggle="tab" href="#description">Description</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#specification">Specification</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#reviews">Rating &amp; Reviews</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#material-care">Material &amp; Care</a>
              </li>
            </ul>
            <div className="tab-content mt-4 mb-5">
              <div id="description" className="tab-pane fade show active">
                <div className="py-5">
                  <ul className="list-unstyled description-text">
                    <li className="mb-4">
                      It is a long established fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The point of using Lorem Ipsum is
                      that
                      it has a more-or-less normal distribution of letters, as opposed to using
                      'Content
                      here, content here', making it look like readable English.
                    </li>
                    <li className="mb-4">
                      It is a long established fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The point of using Lorem Ipsum is
                      that it has a more-or-less normal distribution of letters, as opposed to using
                      'Content here, content here', making it look like readable English.
                    </li>
                    <li className="mb-4">
                      It is a long established fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The point of using Lorem Ipsum is
                      that it has a more-or-less normal distribution of letters, as opposed to using
                      'Content here, content here', making it look like readable English.
                    </li>
                  </ul>
                </div>
              </div>
              <div id="specification" className="tab-pane fade">
                <div className="py-5">
                  <ul className="list-unstyled description-text">
                    <li className="mb-4">
                      It is a long established fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The point of using Lorem Ipsum is
                      that
                      it has a more-or-less normal distribution of letters, as opposed to using
                      'Content
                      here, content here', making it look like readable English.
                    </li>
                    <li className="mb-4">
                      It is a long established fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The point of using Lorem Ipsum is
                      that it has a more-or-less normal distribution of letters, as opposed to using
                      'Content here, content here', making it look like readable English.
                    </li>
                  </ul>
                </div>
              </div>
              <div id="reviews" className="tab-pane fade">
                <div className="py-5">
                  <div className="row">
                    <div className="col-md-6">
                      <div className>
                        <h2 className="text-center fs-40 fw-semibold text-black">4.5</h2>
                        <div className="d-flex gap-2 justify-content-center">
                          <img src="assets/img/icon/Star-b-1.svg" className alt />
                          <img src="assets/img/icon/Star-b-1.svg" className alt />
                          <img src="assets/img/icon/Star-b-1.svg" className alt />
                          <img src="assets/img/icon/Star-l-b.svg" className alt />
                          <img src="assets/img/icon/Star-l-b.svg" className alt />
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="w-100">
                          <div className="d-flex mb-2 align-items-center justify-content-between w-100">
                            <h2 className="fs-18 fw-normal text-black m-0 col-md-3">Excellent</h2>
                            <div className="bg-light col-md-6 rounded-3 me-3">
                              <div className="bg-warning w-75 p-1 rounded-3" />
                            </div>
                            <span className="fs-18 fw-normal text-black col-md-3">7.7</span>
                          </div>
                          <div className="d-flex mb-2 align-items-center justify-content-between w-100">
                            <h2 className="fs-18 fw-normal text-black m-0 col-md-3">Good</h2>
                            <div className="bg-light col-md-6 rounded-3 me-3">
                              <div className="bg-warning w-75 p-1 rounded-3" />
                            </div>
                            <span className="fs-18 fw-normal text-black col-md-3">5.7</span>
                          </div>
                          <div className="d-flex mb-2 align-items-center justify-content-between w-100">
                            <h2 className="fs-18 fw-normal text-black m-0 col-md-3">Average</h2>
                            <div className="bg-light col-md-6 rounded-3 me-3">
                              <div className="bg-warning w-75 p-1 rounded-3" />
                            </div>
                            <span className="fs-18 fw-normal text-black col-md-3">8.7</span>
                          </div>
                          <div className="d-flex mb-2 align-items-center justify-content-between w-100">
                            <h2 className="fs-18 fw-normal text-black m-0 col-md-3">Bad</h2>
                            <div className="bg-light col-md-6 rounded-3 me-3">
                              <div className="bg-warning w-75 p-1 rounded-3" />
                            </div>
                            <span className="fs-18 fw-normal text-black col-md-3">5.7</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h2 className="fs-18 fw-semibold fw-black">What customers said</h2>
                      <div className="w-100 mt-4">
                        <div className="row mb-4 align-items-center justify-content-between w-100">
                          <h2 className="fs-18 fw-normal text-black m-0 col-md-12 px-0">Fabric Quality
                          </h2>
                          <div className="bg-light col-md-6 px-0 rounded-3">
                            <div className="bg-black w-75 p-1 rounded-3" />
                          </div>
                        </div>
                        <div className="row mb-4 align-items-center justify-content-between w-100">
                          <h2 className="fs-18 fw-normal text-black m-0 col-md-12 px-0">Matches
                            Product Photos</h2>
                          <div className="bg-light col-md-6 px-0 rounded-3">
                            <div className="bg-black w-75 p-1 rounded-3" />
                          </div>
                        </div>
                        <div className="row mb-4 align-items-center justify-content-between w-100">
                          <h2 className="fs-18 fw-normal text-black m-0 col-md-12 px-0">Length</h2>
                          <div className="bg-light col-md-6 px-0 rounded-3">
                            <div className="bg-black w-75 p-1 rounded-3" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h2 className="fs-18 fw-semibold text-black">What our customer felt</h2>
                    <p className="fs-18 fw-normal text-black">
                      It is a long established fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The point of using Lorem Ipsum is
                      that it has a more-or-less normal distribution of letters, as opposed to using
                      'Content here, content here',
                    </p>
                  </div>
                  <div className="mt-4">
                    <h2 className="fs-18 fw-semibold text-black">Customer Photos (9)</h2>
                    <div className="row">
                      <div className="col-auto ps-0">
                        <div className="review-products-img">
                          <img src="assets/img/products/r-p-1.png" alt />
                        </div>
                      </div>
                      <div className="col-auto ps-0">
                        <div className="review-products-img">
                          <img src="assets/img/products/r-p-2.png" alt />
                        </div>
                      </div>
                      <div className="col-auto ps-0">
                        <div className="review-products-img">
                          <img src="assets/img/products/r-p-3.png" alt />
                        </div>
                      </div>
                      <div className="col-auto ps-0">
                        <div className="review-products-img">
                          <img src="assets/img/products/r-p-4.png" alt />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="d-flex gap-2">
                      <div className="user-40 flex-auto">
                        <img src="assets/img/user/u-1.avif" className="w-100 h-100" alt />
                      </div>
                      <div>
                        <p className="fs-14 fw-medium text-black m-0">Ragav Kumar</p>
                        <div className>
                          <img src="assets/img/icon/star-b.svg" alt />
                          <img src="assets/img/icon/star-b.svg" alt />
                          <img src="assets/img/icon/star-b.svg" alt />
                          <img src="assets/img/icon/star-l.svg" alt />
                          <img src="assets/img/icon/star-l.svg" alt />
                        </div>
                        <p className="fs-14 fw-normal text-black mt-3">
                          Many customers describe the scent as a rich, warm, and cozy blend of
                          vanilla and caramel, giving off a gourmand vibe. It’s often compared to
                          dessert-like fragrances, making it ideal for those who love sweet,
                          edible-like aromas. Some mention it’s perfect for colder months but also
                          works year-round for those who enjoy sweet perfumes
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="row">
                        <div className="col-md-1">
                          <img src="assets/img/user/u-1.avif" className="w-100 h-100 rounded" alt />
                        </div>
                        <div className="col-md-1">
                          <img src="assets/img/user/u-2.avif" className="w-100 h-100 rounded" alt />
                        </div>
                        <div className="col-md-1">
                          <img src="assets/img/user/u-3.avif" className="w-100 h-100 rounded" alt />
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="d-flex justify-content-between">
                        <p className="fs-12 fw-normal text-light">Reviewed is Saudi Arabia on 29 June 2024</p>
                        <div className="d-flex gap-2">
                          <div className="d-flex gap-2 align-items-center">
                            <img src="assets/img/icon/like.svg" alt />
                            <span className="fs-14 fw-normal text-light">23</span>
                          </div>
                          <div className="d-flex gap-2 align-items-center">
                            <img src="assets/img/icon/dislike.svg" alt />
                            <span className="fs-14 fw-normal text-light">23</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="material-care" className="tab-pane fade">
                <div className="py-5">
                  <ul className="list-unstyled description-text">
                    <li className="mb-4">
                      It is a long established fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The point of using Lorem Ipsum is
                      that
                      it has a more-or-less normal distribution of letters, as opposed to using
                      'Content
                      here, content here', making it look like readable English.
                    </li>
                    <li className="mb-4">
                      It is a long established fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The point of using Lorem Ipsum is
                      that it has a more-or-less normal distribution of letters, as opposed to using
                      'Content here, content here', making it look like readable English.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TopProducts/>
      </div>

    </div>
  )
}

export default ProductsDetails
