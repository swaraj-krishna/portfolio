$(document).ready(function() {
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
            <section class="portfolio spad pt-0">
                <div class="container">
                    <div class="row portfolio__gallery">
                        <div class="col-lg-4 col-md-6 col-sm-6 mix branding">
                            <div class="portfolio__item">
                                <div class="portfolio__item__video set-bg" data-setbg="img/portfolio/kappiri.png">
                                    <a href="https://youtu.be/FXr-2BpS4Po?si=4ENMvQX2Tk3CHRfu" class="play-btn video-popup"><i
                                            class="fa fa-play"></i></a>
                                </div>
                                <div class="portfolio__item__text">
                                    <h4>KAPPIRI - DOCUMENTARY</h4>
                                    <ul>
                                        <li>FILM </li>
                                        <li>VFX</li>
                                        <li>CINEMATOGRAPHY</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 mix digital-marketing">
                            <div class="portfolio__item">
                                <div class="portfolio__item__video set-bg" data-setbg="img/portfolio/paperboat.png">
                                    <a href="https://m.youtube.com/watch?v=5XdWwAL--mQ" class="play-btn video-popup"><i
                                            class="fa fa-play"></i></a>
                                </div>
                                <div class="portfolio__item__text">
                                    <h4>Paper Boat AD</h4>
                                    <span>VFX</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 mix digital-marketing">
                            <div class="portfolio__item">
                                <div class="portfolio__item__video set-bg" data-setbg="img/portfolio/phonepay.png">
                                    <a href="https://m.youtube.com/watch?v=kfiAp_Hq1eM" class="play-btn video-popup"><i
                                            class="fa fa-play"></i></a>
                                </div>
                                <div class="portfolio__item__text">
                                    <h4>PhonePe</h4>
                                    <ul>
                                        <li>VFX</li>
                                        <li>Cinematography</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
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

        // Re-initialize video-popup for dynamic content
        if($.fn.magnificPopup) {
            $('.video-popup').magnificPopup({
                type: 'iframe'
            });
        }
    }
});
