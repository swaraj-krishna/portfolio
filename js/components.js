$(document).ready(function () {
    const servicesHTML = `
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
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
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6">
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
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <a href="./portfolio.html?filter=cinematographer">
                                <div class="services__item">
                                    <div class="services__item__icon">
                                        <img src="img/icons/si-3.png" alt="">
                                    </div>
                            </a>
                            <a href="./portfolio.html?filter=cinematographer"><h4>Cinematographer</h4></a>
                            <p>With a keen eye for light, composition, and movement, I capture visually striking footage
                                that tells your story with power and emotion.</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                        <a href="./portfolio.html?filter=editor">
                            <div class="services__item">
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
            .top-works-scroll {
                display: flex;
                flex-direction: column;
                overflow-x: auto;
                overflow-y: hidden;
                gap: 0;
                margin: 0;
                padding: 0;
                scrollbar-width: none; /* Firefox */
                -ms-overflow-style: none;  /* IE and Edge */
            }
            .top-works-scroll::-webkit-scrollbar {
                display: none; /* Chrome, Safari, Opera */
            }
            .scroll-row {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                margin: 0; padding: 0; gap: 0;
            }
            .creative-img {
                height: 240px;
                width: auto;
                display: block;
                margin: 0; padding: 0; gap: 0;
                flex-shrink: 0;
            }
            .video-item {
                position: relative;
                display: inline-flex;
                flex-shrink: 0;
                height: 240px;
                margin: 0; padding: 0; gap: 0;
            }
            .video-overlay {
                position: absolute;
                top: 0; left: 0;
                width: 100%; height: 100%;
                background: transparent;
                margin: 0 !important;
            }
        </style>
        <section class="portfolio pt-0 pb-0" style="margin: 0; padding: 0;">
            <div class="container-fluid" style="padding: 0;">
                <div class="portfolio__gallery top-works-scroll pb-0 mb-0">
                    <div class="scroll-row">
                        <div class="video-item mix digital-marketing">
                            <img src="img/portfolio/phonepay.png" class="creative-img">
                            <div class="portfolio__item__video video-overlay">
                                <a href="https://m.youtube.com/watch?v=kfiAp_Hq1eM" class="play-btn video-popup"><i class="fa fa-play"></i></a>
                            </div>
                        </div>
                        <div class="video-item mix branding">
                            <img src="img/portfolio/kappiri.png" class="creative-img">
                            <div class="portfolio__item__video video-overlay">
                                <a href="https://youtu.be/FXr-2BpS4Po?si=4ENMvQX2Tk3CHRfu" class="play-btn video-popup"><i class="fa fa-play"></i></a>
                            </div>
                        </div>
                        <div class="video-item mix digital-marketing">
                            <img src="img/portfolio/paperboat.png" class="creative-img">
                            <div class="portfolio__item__video video-overlay">
                                <a href="https://m.youtube.com/watch?v=5XdWwAL--mQ" class="play-btn video-popup"><i class="fa fa-play"></i></a>
                            </div>
                        </div>

                        <img src="img/top-works-creative/DSC00188.JPG" class="creative-img mix creatives">
                        <img src="img/top-works-creative/DSC06462.JPG" class="creative-img mix creatives">
                        <img src="img/top-works-creative/DSC07960.JPG" class="creative-img mix creatives">
                        <img src="img/top-works-creative/DSC08116.JPG" class="creative-img mix creatives">
                        <img src="img/top-works-creative/DSC08184.JPG" class="creative-img mix creatives">
                        <img src="img/top-works-creative/DSC08262.JPG" class="creative-img mix creatives">
                        <img src="img/top-works-creative/DSC08764.jpg" class="creative-img mix creatives">
                    </div>
                    
                    <div class="scroll-row">
                        <div class="video-item mix digital-marketing">
                            <img src="img/portfolio/gopro.png" class="creative-img">
                            <div class="portfolio__item__video video-overlay">
                                <a href="https://youtu.be/TmDsi-9pgz8?si=EwDJHVq_ICLJlFHM" class="play-btn video-popup"><i class="fa fa-play"></i></a>
                            </div>
                        </div>
                        <div class="video-item mix digital-marketing">
                            <img src="img/portfolio/gemini.png" class="creative-img">
                            <div class="portfolio__item__video video-overlay">
                                <a href="https://youtu.be/UJscUDJCq1s?si=STrGlUlrOn9CnulO" class="play-btn video-popup"><i class="fa fa-play"></i></a>
                            </div>
                        </div>
                        <div class="video-item mix digital-marketing">
                            <img src="img/portfolio/foodadvfx.png" class="creative-img">
                            <div class="portfolio__item__video video-overlay">
                                <a href="https://youtu.be/ECdSHubQGi8?si=CpiKRRDoNOVTuQmn" class="play-btn video-popup"><i class="fa fa-play"></i></a>
                            </div>
                        </div>

                        <img src="img/top-works-creative/DSC08804.JPG" class="creative-img mix creatives">
                        <img src="img/top-works-creative/IMG_3768.JPG" class="creative-img mix creatives">
                        <img src="img/top-works-creative/IMG_6152.JPG" class="creative-img mix creatives">
                        <img src="img/top-works-creative/IMG_7282.JPG" class="creative-img mix creatives">
                        <img src="img/top-works-creative/IMG_7863.JPG" class="creative-img mix creatives">
                        <img src="img/top-works-creative/IMG_9232.JPG" class="creative-img mix creatives">
                        <img src="img/top-works-creative/IMG_9845.JPG" class="creative-img mix creatives">
                        <img src="img/top-works-creative/ld-export-2135895f-09012025_SnapseedCopy.jpg" class="creative-img mix creatives">
                        <img src="img/top-works-creative/DSC08465_SnapseedCopy.jpg" class="creative-img mix creatives">
                        <img src="img/top-works-creative/DSC08767.jpg" class="creative-img mix creatives">
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


    }
});
