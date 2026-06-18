$(document).ready(function () {
    const servicesHTML = `
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-12">
                    <div class="services__title">
                        <div class="section-title">
                            <span>Where vision meets precision</span>
                            <h2>What I Do</h2>
                        </div>
                        <p>Get a custom-crafted video built for your brand — professionally filmed, beautifully edited,
                            and delivered with precision.</p>
                        <a href="./portfolio.html" class="primary-btn">VIEW MY WORKS</a>
                    </div>
                </div>
                <div class="col-lg-8 col-md-12">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="services__item">
                                <a href="./portfolio.html?filter=vfxartist">
                                    <div class="services__item__icon">
                                        <img src="img/icons/si-4.png" alt="">
                                    </div>
                                </a>
                                <a href="./portfolio.html?filter=vfxartist"><h4>VFX Artist</h4></a>
                                <p>I blend creativity with technology to create stunning visual effects that elevate
                                    storytelling and leave a lasting impression.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="services__item">
                                <a href="./portfolio.html?filter=cinematographer">
                                    <div class="services__item__icon">
                                        <img src="img/icons/si-3.png" alt="">
                                    </div>
                                </a>
                                <a href="./portfolio.html?filter=cinematographer"><h4>Cinematographer</h4></a>
                                <p>With a keen eye for light, composition, and movement, I capture visually striking footage
                                    that tells your story with power and emotion.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="services__item">
                                <a href="./portfolio.html?filter=editor">
                                    <div class="services__item__icon">
                                        <img src="img/icons/si-2.png" alt="">
                                    </div>
                                </a>
                                <a href="./portfolio.html?filter=editor"><h4>Editor</h4></a>
                                <p>I transform raw footage into cohesive narratives, ensuring every cut, sound, and transition
                                    enhances the message and experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    const topWorksHTML = `
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title team__title">
                        <span>Creatives</span>
                        <h2>TOP WORKS</h2>
                    </div>
                </div>
            </div>
        </div>
        <style>
            .top-works-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                gap: 24px;
                padding: 15px 0 50px 0;
                margin: 0;
            }
            .creative-img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
                transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.6s ease;
            }
            .video-item {
                position: relative;
                display: block;
                height: 240px;
                width: 100%;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 8px 22px rgba(0, 0, 0, 0.5);
                border: 1px solid rgba(255, 255, 255, 0.05);
                transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                margin: 0;
                padding: 0;
            }
            .video-item:hover {
                transform: translateY(-6px);
                border-color: rgba(0, 191, 231, 0.45);
                box-shadow: 0 14px 30px rgba(0, 191, 231, 0.25);
            }
            .video-item:hover .creative-img {
                transform: scale(1.08);
                filter: brightness(0.65) blur(1px);
            }
            .video-overlay {
                position: absolute;
                top: 0; left: 0;
                width: 100%; height: 100%;
                background: linear-gradient(to top, rgba(16, 0, 40, 0.9) 0%, rgba(16, 0, 40, 0.3) 60%, rgba(16, 0, 40, 0) 100%);
                margin: 0 !important;
                opacity: 0;
                transition: all 0.4s ease;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            .video-item:hover .video-overlay {
                opacity: 1;
            }
            .video-item .play-btn {
                transition: all 0.3s ease !important;
                transform: scale(0.8);
            }
            .video-item:hover .play-btn {
                transform: scale(1);
                background: #00bfe7;
                border-color: #00bfe7;
                color: #ffffff;
                box-shadow: 0 0 15px rgba(0, 191, 231, 0.6);
            }
            .video-item .portfolio-hover-title {
                margin-top: 12px;
                color: #ffffff;
                font-family: 'Josefin Sans', sans-serif;
                font-size: 14px;
                font-weight: 600;
                text-align: center;
                text-transform: uppercase;
                letter-spacing: 2px;
                opacity: 0;
                transform: translateY(15px);
                transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                padding: 0 15px;
                line-height: 1.4;
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
            }
            .video-item:hover .portfolio-hover-title {
                opacity: 1;
                transform: translateY(0);
            }

            /* Mobile and Tablet optimization: Make overlays/buttons always visible */
            @media (max-width: 991px) {
                .video-overlay {
                    background: linear-gradient(to top, rgba(16, 0, 40, 0.85) 0%, rgba(16, 0, 40, 0.2) 70%) !important;
                    opacity: 1 !important;
                }
                .video-item .play-btn {
                    transform: scale(1) !important;
                    background: rgba(16, 0, 40, 0.7) !important;
                    border-color: rgba(255, 255, 255, 0.8) !important;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4) !important;
                }
                .video-item .play-btn:active {
                    background: #00bfe7 !important;
                    border-color: #00bfe7 !important;
                    transform: scale(0.9) !important;
                }
                .video-item .portfolio-hover-title {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
                .video-item {
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35) !important;
                }
            }
            @media (max-width: 767px) {
                .top-works-grid {
                    grid-template-columns: repeat(2, 1fr);
                    gap: 12px;
                    padding: 15px 10px 50px 10px;
                }
                .video-item {
                    height: auto !important;
                    aspect-ratio: 4 / 3;
                }
            }
        </style>
        <section class="portfolio pt-0 pb-0" style="margin: 0; padding: 0;">
            <div class="container">
                <div class="portfolio__gallery top-works-grid pb-0 mb-0">
                    <!-- 1. YouTube Video URLs (6 items) -->
                    <div class="video-item mix digital-marketing">
                        <img src="img/portfolio/phonepay.png" class="creative-img">
                        <a href="https://m.youtube.com/watch?v=kfiAp_Hq1eM" class="video-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="portfolio__item__video video-overlay">
                                <span class="play-btn"><i class="fa fa-play"></i></span>
                                <div class="portfolio-hover-title">
                                    PhonePe - AD
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="video-item mix branding">
                        <img src="img/portfolio/kappiri.png" class="creative-img">
                        <a href="https://youtu.be/FXr-2BpS4Po?si=4ENMvQX2Tk3CHRfu" class="video-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="portfolio__item__video video-overlay">
                                <span class="play-btn"><i class="fa fa-play"></i></span>
                                <div class="portfolio-hover-title">
                                    KAPPIRI-Documentary
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="video-item mix digital-marketing">
                        <img src="img/portfolio/paperboat.png" class="creative-img">
                        <a href="https://m.youtube.com/watch?v=5XdWwAL--mQ" class="video-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="portfolio__item__video video-overlay">
                                <span class="play-btn"><i class="fa fa-play"></i></span>
                                <div class="portfolio-hover-title">
                                    PAPERBOAT - AD
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="video-item mix digital-marketing">
                        <img src="img/portfolio/gopro.png" class="creative-img">
                        <a href="https://youtu.be/TmDsi-9pgz8?si=EwDJHVq_ICLJlFHM" class="video-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="portfolio__item__video video-overlay">
                                <span class="play-btn"><i class="fa fa-play"></i></span>
                                <div class="portfolio-hover-title">
                                    GoPro - 3D AD
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="video-item mix digital-marketing">
                        <img src="img/portfolio/gemini.png" class="creative-img">
                        <a href="https://youtu.be/UJscUDJCq1s?si=STrGlUlrOn9CnulO" class="video-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="portfolio__item__video video-overlay">
                                <span class="play-btn"><i class="fa fa-play"></i></span>
                                <div class="portfolio-hover-title">
                                    Gemini - 2D AD
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="video-item mix digital-marketing">
                        <img src="img/portfolio/foodadvfx.png" class="creative-img">
                        <a href="https://youtu.be/ECdSHubQGi8?si=CpiKRRDoNOVTuQmn" class="video-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="portfolio__item__video video-overlay">
                                <span class="play-btn"><i class="fa fa-play"></i></span>
                                <div class="portfolio-hover-title">
                                    KHUSRU FOODS AD
                                </div>
                            </div>
                        </a>
                    </div>

                    <!-- 2. Models (11 items, taken from portfolio.html) -->
                    <div class="video-item mix creatives">
                        <img src="img/Cinematographer/Models/DSC08725.jpg" class="creative-img">
                        <a href="img/Cinematographer/Models/DSC08725.jpg" class="image-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="video-overlay">
                                <span class="play-btn"><i class="fa fa-eye"></i></span>
                                <div class="portfolio-hover-title">
                                    Model
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="video-item mix creatives">
                        <img src="img/Cinematographer/Models/DSC08755.JPG" class="creative-img">
                        <a href="img/Cinematographer/Models/DSC08755.JPG" class="image-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="video-overlay">
                                <span class="play-btn"><i class="fa fa-eye"></i></span>
                                <div class="portfolio-hover-title">
                                    Model
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="video-item mix creatives">
                        <img src="img/Cinematographer/Models/DSC08764.jpg" class="creative-img">
                        <a href="img/Cinematographer/Models/DSC08764.jpg" class="image-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="video-overlay">
                                <span class="play-btn"><i class="fa fa-eye"></i></span>
                                <div class="portfolio-hover-title">
                                    Model
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="video-item mix creatives">
                        <img src="img/Cinematographer/Models/DSC08794 2.JPG" class="creative-img">
                        <a href="img/Cinematographer/Models/DSC08794 2.JPG" class="image-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="video-overlay">
                                <span class="play-btn"><i class="fa fa-eye"></i></span>
                                <div class="portfolio-hover-title">
                                    Model
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="video-item mix creatives">
                        <img src="img/Cinematographer/Models/DSC08844.JPG" class="creative-img">
                        <a href="img/Cinematographer/Models/DSC08844.JPG" class="image-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="video-overlay">
                                <span class="play-btn"><i class="fa fa-eye"></i></span>
                                <div class="portfolio-hover-title">
                                    Model
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="video-item mix creatives">
                        <img src="img/Cinematographer/Models/IMG_7716.JPG" class="creative-img">
                        <a href="img/Cinematographer/Models/IMG_7716.JPG" class="image-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="video-overlay">
                                <span class="play-btn"><i class="fa fa-eye"></i></span>
                                <div class="portfolio-hover-title">
                                    Model
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="video-item mix creatives">
                        <img src="img/Cinematographer/Models/IMG_8440.PNG" class="creative-img">
                        <a href="img/Cinematographer/Models/IMG_8440.PNG" class="image-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="video-overlay">
                                <span class="play-btn"><i class="fa fa-eye"></i></span>
                                <div class="portfolio-hover-title">
                                    Model
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="video-item mix creatives">
                        <img src="img/Cinematographer/Models/IMG_8441.PNG" class="creative-img">
                        <a href="img/Cinematographer/Models/IMG_8441.PNG" class="image-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="video-overlay">
                                <span class="play-btn"><i class="fa fa-eye"></i></span>
                                <div class="portfolio-hover-title">
                                    Model
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="video-item mix creatives">
                        <img src="img/Cinematographer/Models/IMG_8442.PNG" class="creative-img">
                        <a href="img/Cinematographer/Models/IMG_8442.PNG" class="image-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="video-overlay">
                                <span class="play-btn"><i class="fa fa-eye"></i></span>
                                <div class="portfolio-hover-title">
                                    Model
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="video-item mix creatives">
                        <img src="img/Cinematographer/Models/IMG_8443.PNG" class="creative-img">
                        <a href="img/Cinematographer/Models/IMG_8443.PNG" class="image-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="video-overlay">
                                <span class="play-btn"><i class="fa fa-eye"></i></span>
                                <div class="portfolio-hover-title">
                                    Model
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="video-item mix creatives">
                        <img src="img/Cinematographer/Models/IMG_8445.PNG" class="creative-img">
                        <a href="img/Cinematographer/Models/IMG_8445.PNG" class="image-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="video-overlay">
                                <span class="play-btn"><i class="fa fa-eye"></i></span>
                                <div class="portfolio-hover-title">
                                    Model
                                </div>
                            </div>
                        </a>
                    </div>

                    <!-- 3. Cinematography (first 8 photos, from portfolio.html) -->
                    <div class="video-item mix creatives">
                        <img src="img/Cinematographer/Cinematogrpahy/0C6A9756.JPG" class="creative-img">
                        <a href="img/Cinematographer/Cinematogrpahy/0C6A9756.JPG" class="image-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="video-overlay">
                                <span class="play-btn"><i class="fa fa-eye"></i></span>
                                <div class="portfolio-hover-title">
                                    Cinematography
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="video-item mix creatives">
                        <img src="img/Cinematographer/Cinematogrpahy/DSC01717 2.jpg" class="creative-img">
                        <a href="img/Cinematographer/Cinematogrpahy/DSC01717 2.jpg" class="image-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="video-overlay">
                                <span class="play-btn"><i class="fa fa-eye"></i></span>
                                <div class="portfolio-hover-title">
                                    Cinematography
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="video-item mix creatives">
                        <img src="img/Cinematographer/Cinematogrpahy/DSC01726.JPG" class="creative-img">
                        <a href="img/Cinematographer/Cinematogrpahy/DSC01726.JPG" class="image-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="video-overlay">
                                <span class="play-btn"><i class="fa fa-eye"></i></span>
                                <div class="portfolio-hover-title">
                                    Cinematography
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="video-item mix creatives">
                        <img src="img/Cinematographer/Cinematogrpahy/DSC01733.JPG" class="creative-img">
                        <a href="img/Cinematographer/Cinematogrpahy/DSC01733.JPG" class="image-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="video-overlay">
                                <span class="play-btn"><i class="fa fa-eye"></i></span>
                                <div class="portfolio-hover-title">
                                    Cinematography
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="video-item mix creatives">
                        <img src="img/Cinematographer/Cinematogrpahy/DSC01758.JPG" class="creative-img">
                        <a href="img/Cinematographer/Cinematogrpahy/DSC01758.JPG" class="image-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="video-overlay">
                                <span class="play-btn"><i class="fa fa-eye"></i></span>
                                <div class="portfolio-hover-title">
                                    Cinematography
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="video-item mix creatives">
                        <img src="img/Cinematographer/Cinematogrpahy/DSC01769.JPG" class="creative-img">
                        <a href="img/Cinematographer/Cinematogrpahy/DSC01769.JPG" class="image-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="video-overlay">
                                <span class="play-btn"><i class="fa fa-eye"></i></span>
                                <div class="portfolio-hover-title">
                                    Cinematography
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="video-item mix creatives">
                        <img src="img/Cinematographer/Cinematogrpahy/DSC01831.JPG" class="creative-img">
                        <a href="img/Cinematographer/Cinematogrpahy/DSC01831.JPG" class="image-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="video-overlay">
                                <span class="play-btn"><i class="fa fa-eye"></i></span>
                                <div class="portfolio-hover-title">
                                    Cinematography
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="video-item mix creatives">
                        <img src="img/Cinematographer/Cinematogrpahy/DSC08658.JPG" class="creative-img">
                        <a href="img/Cinematographer/Cinematogrpahy/DSC08658.JPG" class="image-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="video-overlay">
                                <span class="play-btn"><i class="fa fa-eye"></i></span>
                                <div class="portfolio-hover-title">
                                    Cinematography
                                </div>
                            </div>
                        </a>
                    </div>

                    <!-- 4. Bike Photography (first 8 photos, from portfolio.html) -->
                    <div class="video-item mix creatives">
                        <img src="img/Cinematographer/Bike Photography/DSC00188.JPG" class="creative-img">
                        <a href="img/Cinematographer/Bike Photography/DSC00188.JPG" class="image-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="video-overlay">
                                <span class="play-btn"><i class="fa fa-eye"></i></span>
                                <div class="portfolio-hover-title">
                                    Bike Photography
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="video-item mix creatives">
                        <img src="img/Cinematographer/Bike Photography/DSC00191.JPG" class="creative-img">
                        <a href="img/Cinematographer/Bike Photography/DSC00191.JPG" class="image-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="video-overlay">
                                <span class="play-btn"><i class="fa fa-eye"></i></span>
                                <div class="portfolio-hover-title">
                                    Bike Photography
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="video-item mix creatives">
                        <img src="img/Cinematographer/Bike Photography/DSC00923.JPG" class="creative-img">
                        <a href="img/Cinematographer/Bike Photography/DSC00923.JPG" class="image-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="video-overlay">
                                <span class="play-btn"><i class="fa fa-eye"></i></span>
                                <div class="portfolio-hover-title">
                                    Bike Photography
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="video-item mix creatives">
                        <img src="img/Cinematographer/Bike Photography/DSC08465_SnapseedCopy.jpg" class="creative-img">
                        <a href="img/Cinematographer/Bike Photography/DSC08465_SnapseedCopy.jpg" class="image-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="video-overlay">
                                <span class="play-btn"><i class="fa fa-eye"></i></span>
                                <div class="portfolio-hover-title">
                                    Bike Photography
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="video-item mix creatives">
                        <img src="img/Cinematographer/Bike Photography/DSC08788.JPG" class="creative-img">
                        <a href="img/Cinematographer/Bike Photography/DSC08788.JPG" class="image-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="video-overlay">
                                <span class="play-btn"><i class="fa fa-eye"></i></span>
                                <div class="portfolio-hover-title">
                                    Bike Photography
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="video-item mix creatives">
                        <img src="img/Cinematographer/Bike Photography/DSC08795.JPG" class="creative-img">
                        <a href="img/Cinematographer/Bike Photography/DSC08795.JPG" class="image-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="video-overlay">
                                <span class="play-btn"><i class="fa fa-eye"></i></span>
                                <div class="portfolio-hover-title">
                                    Bike Photography
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="video-item mix creatives">
                        <img src="img/Cinematographer/Bike Photography/IMG_3768.JPG" class="creative-img">
                        <a href="img/Cinematographer/Bike Photography/IMG_3768.JPG" class="image-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="video-overlay">
                                <span class="play-btn"><i class="fa fa-eye"></i></span>
                                <div class="portfolio-hover-title">
                                    Bike Photography
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="video-item mix creatives">
                        <img src="img/Cinematographer/Bike Photography/IMG_5926.JPG" class="creative-img">
                        <a href="img/Cinematographer/Bike Photography/IMG_5926.JPG" class="image-popup" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;text-decoration:none;z-index:5;">
                            <div class="video-overlay">
                                <span class="play-btn"><i class="fa fa-eye"></i></span>
                                <div class="portfolio-hover-title">
                                    Bike Photography
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `;

    // Inject the component into placeholders
    if ($('#services-component').length > 0) {
        $('#services-component').html(servicesHTML);
    }

    if ($('#topworks-component').length > 0) {
        $('#topworks-component').html(topWorksHTML);

        // Re-initialize background images for items that were just injected
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });

        // Initialize Magnific Popup for images on index page
        $('#topworks-component').magnificPopup({
            delegate: '.image-popup',
            type: 'image',
            gallery: {
                enabled: true
            },
            mainClass: 'mfp-fade'
        });
    }
});
