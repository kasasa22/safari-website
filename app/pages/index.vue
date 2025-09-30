<template>
  <div class="home-page">
    <!-- Hero Section with Video Background -->
    <section class="hero">
      <div class="hero-video-container">
        <div class="hero-slides">
          <div class="hero-slide active" style="background-image: url('/much1.jpeg')"></div>
          <div class="hero-slide" style="background-image: url('/much2.jpeg')"></div>
          <div class="hero-slide" style="background-image: url('/much3.jpeg')"></div>
          <div class="hero-slide" style="background-image: url('/much4.jpeg')"></div>
          <div class="hero-slide" style="background-image: url('/much5.jpeg')"></div>
          <div class="hero-slide" style="background-image: url('/much6.jpeg')"></div>
          <div class="hero-slide" style="background-image: url('/much7.jpeg')"></div>
          <div class="hero-slide" style="background-image: url('/much8.jpeg')"></div>
        </div>
      </div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="container">
          <div class="hero-text">
            <span class="hero-badge">🌍 KILAGALA ESCAPE SAFARIS - THE PEARL OF AFRICA</span>
            <h1 class="hero-title">Adventure into the Heart of the Wilderness</h1>
            <p class="hero-subtitle">Experience Uganda's breathtaking landscapes, mountain gorillas, and vibrant culture with expert local guides</p>
            <div class="hero-description">
              <p>🦍 Track endangered Mountain Gorillas in Bwindi Impenetrable Forest</p>
              <p>🦁 Witness Big Five animals in Queen Elizabeth & Murchison Falls Parks</p>
              <p>🌊 Experience the source of the Nile in Jinja and thrilling boat safaris</p>
            </div>
            <div class="hero-cta">
              <NuxtLink to="/destinations" class="btn-primary">
                <span class="btn-icon">🧭</span>
                Start Your Journey
              </NuxtLink>
              <NuxtLink to="/gallery" class="btn-secondary">
                <span class="btn-icon">▶️</span>
                Watch Safari Video
              </NuxtLink>
            </div>
          </div>
          
          <div class="hero-image-showcase">
            <img src="/much1.jpeg" alt="Uganda Safari Adventure" class="hero-showcase-image">
          </div>
        </div>
      </div>
    </section>

    <!-- Safari Packages -->
    <section class="adventure-links">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">SAFARI PACKAGES</span>
          <h2>Choose Your Safari Package</h2>
          <p>Tailored safari experiences designed for every traveler</p>
        </div>
        <div class="adventure-grid">
          <div class="adventure-card">
            <div class="adventure-icon">🦍</div>
            <h3>Gorilla Trekking Package</h3>
            <p>1-3 days gorilla trekking in Bwindi Impenetrable Forest with expert guides</p>
            <div class="package-price">From $400/day</div>
            <NuxtLink to="/packages" class="adventure-link">Book Package →</NuxtLink>
          </div>
          <div class="adventure-card">
            <div class="adventure-icon">🦁</div>
            <h3>Wildlife Safari Package</h3>
            <p>Multi-day safaris in Queen Elizabeth & Murchison Falls National Parks</p>
            <div class="package-price">From $240/day</div>
            <NuxtLink to="/packages" class="adventure-link">Book Package →</NuxtLink>
          </div>
          <div class="adventure-card">
            <div class="adventure-icon">🏙️</div>
            <h3>City Tour Package</h3>
            <p>Explore Kampala and Jinja with cultural sites and Nile source visits</p>
            <div class="package-price">From $180/day</div>
            <NuxtLink to="/packages" class="adventure-link">Book Package →</NuxtLink>
          </div>
          <div class="adventure-card">
            <div class="adventure-icon">🌊</div>
            <h3>Adventure Package</h3>
            <p>Boat cruises, white water rafting, and adventure activities</p>
            <div class="package-price">From $200/day</div>
            <NuxtLink to="/packages" class="adventure-link">Book Package →</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- About Uganda Section with Images -->
    <section class="about-uganda">
      <div class="container">
        <div class="about-header">
          <span class="section-badge">DISCOVER THE PEARL OF AFRICA</span>
          <h2>Welcome to Uganda with Kilagala Escape Safaris</h2>
          <p>Your gateway to authentic East African adventures. We are a premier safari company specializing in gorilla trekking, wildlife safaris, cultural tours, and adventure experiences across Uganda and East Africa.</p>
        </div>
        
        <div class="content-row reverse">
          <div class="content-text">
            <h3>Wildlife & Gorilla Trekking</h3>
            <p>Home to rare mountain gorillas, chimpanzees, and the Big Five, Uganda offers unforgettable wildlife experiences in pristine national parks. Bwindi Impenetrable National Park houses nearly half of the world's remaining mountain gorillas, making it the ultimate destination for gorilla trekking enthusiasts.</p>
            <p>Our expert guides will lead you through misty rainforests for once-in-a-lifetime encounters with these gentle giants. Beyond gorillas, experience tree-climbing lions in Queen Elizabeth National Park, elephants at Murchison Falls, and diverse wildlife across Uganda's 10 national parks.</p>
            <div class="highlight-features">
              <div class="feature-item">
                <span class="feature-icon">🦍</span>
                <span>Mountain Gorillas</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🦁</span>
                <span>Big Five Animals</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🌳</span>
                <span>10 National Parks</span>
              </div>
            </div>
          </div>
          <div class="content-image">
            <img src="/images/gorilla.jpg" alt="Mountain Gorilla Trekking">
          </div>
        </div>
        
        <div class="content-row">
          <div class="content-image">
            <img src="/images/landscape.jpeg" alt="Uganda's Breathtaking Landscapes">
          </div>
          <div class="content-text">
            <h3>Breathtaking Landscapes</h3>
            <p>From the snow-capped Rwenzori Mountains to the mighty Nile and lush rainforests, Uganda's diverse scenery captivates every traveler. Discover the source of the world's longest river in Jinja, cruise along the Kazinga Channel, and witness the thundering power of Murchison Falls.</p>
            <p>Experience dramatic crater lakes, rolling savannahs, and impenetrable forests that create the perfect backdrop for your African adventure. Our landscapes range from the mystical Bwindi forests to the vast plains of Queen Elizabeth National Park, each offering unique photographic opportunities and unforgettable memories.</p>
            <NuxtLink to="//destinations" class="btn-explore">Explore Our Safari Tours →</NuxtLink>
          </div>
        </div>
        
        <div class="content-row reverse">
          <div class="content-text">
            <h3>Rich Culture & Warm Hospitality</h3>
            <p>With vibrant traditions, local music, dance, and welcoming communities, visitors experience authentic African culture firsthand. Uganda's 56 diverse tribes each contribute unique customs, creating a rich cultural tapestry that enhances every safari experience.</p>
            <p>Visit UNESCO World Heritage sites like the Kasubi Tombs, experience traditional Baganda dances, explore local craft markets in Kampala, and engage with friendly communities during cultural village visits. Our guests consistently praise the warmth and genuine hospitality of Ugandan people.</p>
            <p>Through responsible tourism, we ensure your visit directly benefits local communities while preserving Uganda's precious cultural heritage for future generations.</p>
          </div>
          <div class="content-image">
            <img src="https://images.unsplash.com/photo-1523554888454-84137e72c3ce?q=80&w=1200" alt="Uganda Culture">
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Adventures Section -->
    <section class="featured-tours">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">FEATURED EXPEDITIONS</span>
          <h2>Choose Your African Adventure</h2>
          <p>Hand-crafted journeys by local experts who know every trail, every pride, and every story</p>
        </div>
        <div class="tours-grid">
          <div class="tour-card">
            <div class="tour-badge">5 ⭐</div>
            <div class="tour-image" style="background-image: url('/images/Queen_main.jpeg'); background-size: cover; background-position: top;">
              <div class="tour-overlay">
                <span class="tour-location">🌍 Uganda - Queen Elizabeth National Park</span>
              </div>
            </div>
            <div class="tour-content">
              <h3>3-Day Queen Elizabeth National Park Safari</h3>
              <ul class="tour-features">
                <li>Tree-climbing lions viewing</li>
                <li>Kazinga Channel boat cruise</li>
                <li>Game drives with Big Five</li>
                <li>All meals & transport included</li>
              </ul>
              <div class="tour-footer">
                <div class="tour-meta">
                  <div class="tour-duration">
                    <span class="duration-icon">🕰️</span>
                    <span>3 Days</span>
                  </div>
                  <div class="tour-price">
                    <span class="price">From USD $372.00</span>
                  </div>
                </div>
                <NuxtLink to="/destinations/queen-elizabeth" class="tour-cta">View Destination →</NuxtLink>
              </div>
            </div>
          </div>
          
          <div class="tour-card">
            <div class="tour-badge">4 ⭐</div>
            <div class="tour-image" style="background-image: url('/images/murchion_main.jpeg'); background-size: cover; background-position: top;">
              <div class="tour-overlay">
                <span class="tour-location">🌍 Northwestern Uganda</span>
              </div>
            </div>
            <div class="tour-content">
              <h3>3-Day Murchison Falls National Park Safari</h3>
              <ul class="tour-features">
                <li>World's most powerful waterfall</li>
                <li>Nile boat cruise adventure</li>
                <li>Big Five game viewing</li>
                <li>Professional guides included</li>
              </ul>
              <div class="tour-footer">
                <div class="tour-meta">
                  <div class="tour-duration">
                    <span class="duration-icon">🕰️</span>
                    <span>3 Days</span>
                  </div>
                  <div class="tour-price">
                    <span class="price">From USD $410.00</span>
                  </div>
                </div>
                <NuxtLink to="/destinations/murchisons" class="tour-cta">View Destination →</NuxtLink>
              </div>
            </div>
          </div>
          
          <div class="tour-card">
            <div class="tour-badge">5 ⭐</div>
            <div class="tour-image" style="background-image: url('/images/mburo_main.jpeg'); background-size: cover; background-position: top;">
              <div class="tour-overlay">
                <span class="tour-location">🌍 Lake Mburo National Park</span>
              </div>
            </div>
            <div class="tour-content">
              <h3>3-Day Lake Mburo National Park Safari</h3>
              <ul class="tour-features">
                <li>Antelopes & zebras viewing</li>
                <li>Boat safari on Lake Mburo</li>
                <li>Walking safaris available</li>
                <li>Closest park to Kampala</li>
              </ul>
              <div class="tour-footer">
                <div class="tour-meta">
                  <div class="tour-duration">
                    <span class="duration-icon">🕰️</span>
                    <span>3 Days</span>
                  </div>
                  <div class="tour-price">
                    <span class="price">From USD $240.00</span>
                  </div>
                </div>
                <NuxtLink to="/destinations/lake-mburo" class="tour-cta">View Destination →</NuxtLink>
              </div>
            </div>
          </div>

          <div class="tour-card">
            <div class="tour-badge">5 ⭐</div>
            <div class="tour-image" style="background-image: url('/images/kampala.jpg'); background-size: cover; background-position: top;">
              <div class="tour-overlay">
                <span class="tour-location">🌍 Central Region, Uganda</span>
              </div>
            </div>
            <div class="tour-content">
              <h3>1-Day Kampala City Tour</h3>
              <ul class="tour-features">
                <li>Kasubi Tombs UNESCO site</li>
                <li>Uganda Museum visit</li>
                <li>Namirembe Cathedral tour</li>
                <li>Local markets exploration</li>
              </ul>
              <div class="tour-footer">
                <div class="tour-meta">
                  <div class="tour-duration">
                    <span class="duration-icon">🕰️</span>
                    <span>1 Day</span>
                  </div>
                  <div class="tour-price">
                    <span class="price">From USD $180.00</span>
                  </div>
                </div>
                <NuxtLink to="/destinations" class="tour-cta">View Destination →</NuxtLink>
              </div>
            </div>
          </div>

          <div class="tour-card">
            <div class="tour-badge">5 ⭐</div>
            <div class="tour-image" style="background-image: url('/images/water.jpeg'); background-size: cover; background-position: top;">
              <div class="tour-overlay">
                <span class="tour-location">🌍 Eastern Region of Uganda</span>
              </div>
            </div>
            <div class="tour-content">
              <h3>1-Day Jinja City Tour</h3>
              <ul class="tour-features">
                <li>Source of the Nile visit</li>
                <li>Adventure activities</li>
                <li>Cultural experiences</li>
                <li>White water rafting available</li>
              </ul>
              <div class="tour-footer">
                <div class="tour-meta">
                  <div class="tour-duration">
                    <span class="duration-icon">🕰️</span>
                    <span>1 Day</span>
                  </div>
                  <div class="tour-price">
                    <span class="price">From USD $180.00</span>
                  </div>
                </div>
                <NuxtLink to="/destinations/jinja" class="tour-cta">View Destination →</NuxtLink>
              </div>
            </div>
          </div>

          <div class="tour-card">
            <div class="tour-badge">5 ⭐</div>
            <div class="tour-image" style="background-image: url('/images/bwindi.jpeg'); background-size: cover; background-position: top;">
              <div class="tour-overlay">
                <span class="tour-location">🌍 Kisoro/Kigali</span>
              </div>
            </div>
            <div class="tour-content">
              <h3>1 Day Short Gorilla Trekking Safari</h3>
              <ul class="tour-features">
                <li>Mountain gorilla encounter</li>
                <li>Professional tracking guides</li>
                <li>Bwindi Impenetrable Forest</li>
                <li>Perfect for limited time</li>
              </ul>
              <div class="tour-footer">
                <div class="tour-meta">
                  <div class="tour-duration">
                    <span class="duration-icon">🕰️</span>
                    <span>1 Day</span>
                  </div>
                  <div class="tour-price">
                    <span class="price">From USD $400.00</span>
                  </div>
                </div>
                <NuxtLink to="/destinations/bwindi-impenetrable" class="tour-cta">View Destination →</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-us">
      <div class="container">
        <div class="section-header">
          <h2>Why Choose Our Safari Tours</h2>
          <p>We're committed to providing exceptional safari experiences while supporting conservation</p>
        </div>
        <div class="why-us-grid">
          <div class="why-card">
            <div class="why-icon">🛡️</div>
            <h3>100% Permit Guarantee</h3>
            <p>We secure your gorilla permits in advance, ensuring you never miss out on this once-in-a-lifetime experience</p>
          </div>
          <div class="why-card">
            <div class="why-icon">👨‍🏫</div>
            <h3>Expert Local Guides</h3>
            <p>Our guides are conservation experts with deep knowledge of gorilla behavior and local ecosystems</p>
          </div>
          <div class="why-card">
            <div class="why-icon">🌱</div>
            <h3>Conservation Impact</h3>
            <p>10% of our profits go directly to gorilla conservation and community development projects</p>
          </div>
          <div class="why-card">
            <div class="why-icon">⚡</div>
            <h3>24/7 Support</h3>
            <p>Round-the-clock assistance before, during, and after your safari adventure</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials">
      <div class="container">
        <div class="section-header">
          <h2>What Our Travelers Say</h2>
          <p>Real experiences from adventurers who've trekked with us</p>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <p class="testimonial-text">
              "Absolutely life-changing! Seeing the gorillas up close was beyond magical. The team's professionalism and passion for conservation made this trip unforgettable."
            </p>
            <div class="testimonial-author">
              <div class="author-avatar">SM</div>
              <div class="author-info">
                <h4>Sarah Mitchell</h4>
                <p>United States</p>
                <div class="rating">★★★★★</div>
              </div>
            </div>
          </div>
          
          <div class="testimonial-card">
            <p class="testimonial-text">
              "From booking to the actual trek, everything was seamless. Our guide's knowledge was incredible, and the lodges exceeded expectations. Highly recommend!"
            </p>
            <div class="testimonial-author">
              <div class="author-avatar">JO</div>
              <div class="author-info">
                <h4>James O'Brien</h4>
                <p>United Kingdom</p>
                <div class="rating">★★★★★</div>
              </div>
            </div>
          </div>
          
          <div class="testimonial-card">
            <p class="testimonial-text">
              "Best safari company! They went above and beyond to ensure we had an amazing experience. The gorilla encounter was emotional and profound."
            </p>
            <div class="testimonial-author">
              <div class="author-avatar">AK</div>
              <div class="author-info">
                <h4>Anna Kowalski</h4>
                <p>Germany</p>
                <div class="rating">★★★★★</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Wildlife Gallery Section -->
    <section class="wildlife-gallery">
      <div class="container">
        <div class="section-header">
          <h2>Incredible Wildlife Encounters Await</h2>
          <p>Every moment in the African wilderness tells a story</p>
        </div>
        <div class="gallery-grid">
          <div class="gallery-item featured">
            <img src="/images/gorilla.jpg" alt="Uganda Safari Wildlife">
            <div class="gallery-overlay">
              <h3>Uganda Safari Experience</h3>
              <p>Authentic wildlife encounters in Uganda's pristine wilderness</p>
            </div>
          </div>
          <div class="gallery-item featured">
            <img src="/images/her1.jpeg" alt="Uganda National Parks">
            <div class="gallery-overlay">
              <h3>National Park Adventures</h3>
              <p>Explore Uganda's diverse ecosystems and wildlife</p>
            </div>
          </div>
          <div class="gallery-item featured">
            <img src="/images/her2.jpeg" alt="Uganda Wildlife Photography">
            <div class="gallery-overlay">
              <h3>Wildlife Photography</h3>
              <p>Capture unforgettable moments with Uganda's incredible animals</p>
            </div>
          </div>
          <div class="gallery-item featured">
            <img src="/images/Queen_main.jpeg" alt="Queen Elizabeth Park Wildlife">
            <div class="gallery-overlay">
              <h3>Queen Elizabeth Wildlife</h3>
              <p>Big game viewing in Uganda's most popular park</p>
            </div>
          </div>
          <div class="gallery-item featured">
            <img src="/images/bwindi.jpeg" alt="Bwindi Impenetrable National Park">
            <div class="gallery-overlay">
              <h3>Bwindi Impenetrable Forest</h3>
              <p>Home to 50% of the world's mountain gorillas • UNESCO World Heritage Site</p>
            </div>
          </div>
          <div class="gallery-item featured">
            <img src="/images/Queen_main.jpeg" alt="Queen Elizabeth National Park">
            <div class="gallery-overlay">
              <h3>Queen Elizabeth Park</h3>
              <p>Tree-climbing lions & Kazinga Channel</p>
            </div>
          </div>
          <div class="gallery-item featured">
            <img src="/images/murchion_main.jpeg" alt="Murchison Falls National Park">
            <div class="gallery-overlay">
              <h3>Murchison Falls Park</h3>
              <p>World's most powerful waterfall</p>
            </div>
          </div>
          <div class="gallery-item featured">
            <img src="/images/park3.jpeg" alt="Kibale Forest National Park">
            <div class="gallery-overlay">
              <h3>Kibale Forest Park</h3>
              <p>Primate capital of the world</p>
            </div>
          </div>
          <div class="gallery-item featured">
            <img src="/images/mburo_main.jpeg" alt="Lake Mburo National Park">
            <div class="gallery-overlay">
              <h3>Lake Mburo Park</h3>
              <p>Zebras, impalas & boat safaris</p>
            </div>
          </div>
          <div class="gallery-item featured">
            <img src="/images/park5.jpeg" alt="Rwenzori Mountains National Park">
            <div class="gallery-overlay">
              <h3>Rwenzori Mountains</h3>
              <p>Mountains of the Moon • Glacial peaks in equatorial Africa</p>
            </div>
          </div>
          <div class="gallery-item featured">
            <img src="/images/mburo_main.jpeg" alt="Lake Mburo Wildlife">
            <div class="gallery-overlay">
              <h3>Lake Mburo Adventures</h3>
              <p>Zebras, antelopes and boat safaris on pristine waters</p>
            </div>
          </div>
          <div class="gallery-item featured">
            <img src="/images/group.jpeg" alt="Safari Group Experience">
            <div class="gallery-overlay">
              <h3>Group Safari Adventures</h3>
              <p>Shared wildlife experiences and unforgettable memories</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Destination Highlights -->
    <section class="destinations">
      <div class="container">
        <div class="section-header">
          <h2>Your Uganda Safari Destinations</h2>
          <p>From misty mountains to endless savannahs - explore Uganda's incredible national parks and diverse ecosystems</p>
        </div>
        <div class="destinations-grid">
          <div class="destination-card">
            <div class="destination-image">
              <img src="/images/Queen_main.jpeg" alt="Queen Elizabeth National Park Wildlife">
            </div>
            <div class="destination-content">
              <h3>🇺🇬 Queen Elizabeth National Park</h3>
              <div class="destination-highlights">
                <span class="highlight">🦁 Tree-Climbing Lions</span>
                <span class="highlight">🚤 Kazinga Channel</span>
                <span class="highlight">🦛 Hippo Paradise</span>
              </div>
              <p>Uganda's most popular savannah park, famous for unique tree-climbing lions and incredible boat safaris along the Kazinga Channel.</p>
            </div>
          </div>
          <div class="destination-card">
            <div class="destination-image">
              <img src="/images/murchion_main.jpeg" alt="Murchison Falls National Park">
            </div>
            <div class="destination-content">
              <h3>🇺🇬 Murchison Falls National Park</h3>
              <div class="destination-highlights">
                <span class="highlight">💧 World's Most Powerful Waterfall</span>
                <span class="highlight">🐘 Large Elephant Herds</span>
                <span class="highlight">🦒 Rothschild Giraffes</span>
              </div>
              <p>Experience the dramatic Murchison Falls where the Nile explodes through a narrow gorge, plus exceptional wildlife viewing.</p>
            </div>
          </div>
          <div class="destination-card">
            <div class="destination-image">
              <img src="/images/her2.jpeg" alt="Kibale Forest National Park">
            </div>
            <div class="destination-content">
              <h3>🇺🇬 Kibale Forest National Park</h3>
              <div class="destination-highlights">
                <span class="highlight">🐵 Chimpanzee Tracking</span>
                <span class="highlight">🌳 Primate Capital</span>
                <span class="highlight">🦜 375 Bird Species</span>
              </div>
              <p>The 'Primate Capital of the World' with 13 primate species including our closest relatives - the chimpanzees.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Safari Experience Timeline -->
    <section class="experience-timeline">
      <div class="container">
        <div class="section-header">
          <h2>Your Safari Journey</h2>
          <p>From the moment you book to memories that last a lifetime</p>
        </div>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-icon">📞</div>
            <div class="timeline-content">
              <h3>Expert Consultation</h3>
              <p>Our safari specialists help design your perfect African adventure</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-icon">✈️</div>
            <div class="timeline-content">
              <h3>Seamless Arrival</h3>
              <p>VIP airport pickup and transfer to luxury accommodations</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-icon">🦁</div>
            <div class="timeline-content">
              <h3>Wildlife Adventures</h3>
              <p>Daily game drives, gorilla trekking, and unforgettable encounters</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-icon">📸</div>
            <div class="timeline-content">
              <h3>Capture Memories</h3>
              <p>Professional photography guidance to capture perfect moments</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Travel Inquiry Section -->
    <section class="travel-inquiry">
      <div class="container">
        <div class="inquiry-content">
          <div class="inquiry-text">
            <span class="inquiry-badge">START YOUR JOURNEY</span>
            <h2>Let's Plan Your Perfect Safari</h2>
            <p>Tell us your dream African adventure, and our expert travel designers will create a personalized itinerary just for you.</p>
            <div class="inquiry-features">
              <div class="feature">
                <span class="feature-icon">✓</span>
                <span>Personal Safari Expert</span>
              </div>
              <div class="feature">
                <span class="feature-icon">✓</span>
                <span>Customized Itineraries</span>
              </div>
              <div class="feature">
                <span class="feature-icon">✓</span>
                <span>24/7 Travel Support</span>
              </div>
            </div>
          </div>
          <div class="inquiry-form">
            <form @submit="handleBookingSubmit">
              <!-- Success Notification -->
              <div v-if="bookingSuccess" class="form-notification form-notification-success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Booking submitted! Check your email for confirmation.</span>
              </div>
              
              <!-- Error Notification -->
              <div v-if="bookingError" class="form-notification form-notification-error">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <span>{{ bookingError }}</span>
              </div>
              
              <div class="form-row">
                <input 
                  v-model="bookingForm.name"
                  type="text" 
                  placeholder="Your Name *" 
                  class="form-input"
                  required
                  :disabled="isBookingSubmitting"
                >
                <input 
                  v-model="bookingForm.email"
                  type="email" 
                  placeholder="Email Address *" 
                  class="form-input"
                  required
                  :disabled="isBookingSubmitting"
                >
              </div>
              <div class="form-row">
                <select 
                  v-model="bookingForm.destination"
                  class="form-input"
                  required
                  :disabled="isBookingSubmitting"
                >
                  <option value="">Preferred Destination *</option>
                  <option value="Uganda - Bwindi Forest">Uganda - Bwindi Forest</option>
                  <option value="Uganda - Queen Elizabeth">Uganda - Queen Elizabeth</option>
                  <option value="Uganda - Murchison Falls">Uganda - Murchison Falls</option>
                  <option value="Uganda - Lake Mburo">Uganda - Lake Mburo</option>
                  <option value="Kenya - Masai Mara">Kenya - Masai Mara</option>
                  <option value="Tanzania - Serengeti">Tanzania - Serengeti</option>
                  <option value="Rwanda - Volcanoes Park">Rwanda - Volcanoes Park</option>
                  <option value="Multiple Countries">Multiple Countries</option>
                </select>
                <input 
                  v-model="bookingForm.tourDate"
                  type="date" 
                  class="form-input"
                  placeholder="Tour Date"
                  :min="new Date().toISOString().split('T')[0]"
                  :disabled="isBookingSubmitting"
                >
              </div>
              <div class="form-row">
                <input 
                  v-model="bookingForm.phone"
                  type="tel" 
                  placeholder="Phone Number" 
                  class="form-input"
                  :disabled="isBookingSubmitting"
                >
                <input 
                  v-model.number="bookingForm.numberOfGuests"
                  type="number" 
                  placeholder="Number of Guests" 
                  class="form-input"
                  min="1"
                  :disabled="isBookingSubmitting"
                >
              </div>
              <textarea 
                v-model="bookingForm.specialRequests"
                placeholder="Tell us about your dream safari... What animals do you want to see? Any special interests?" 
                class="form-textarea"
                :disabled="isBookingSubmitting"
              ></textarea>
              <button type="submit" class="btn-inquiry" :disabled="isBookingSubmitting">
                <span v-if="!isBookingSubmitting">Get Custom Itinerary</span>
                <span v-else>Submitting...</span>
                <span v-if="!isBookingSubmitting" class="btn-arrow">→</span>
                <svg v-else class="form-spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 12a9 9 0 11-6.219-8.56"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

useHead({
  title: 'Safari Adventures - Experience the Wild Beauty of Africa',
  meta: [
    {
      name: 'description',
      content: 'Embark on unforgettable safari adventures in Africa. Discover wildlife, stunning landscapes, and authentic experiences with our expert guides.'
    }
  ]
})

// Booking form data
const bookingForm = ref({
  name: '',
  email: '',
  phone: '',
  destination: '',
  tourDate: '',
  numberOfGuests: 1,
  package: '',
  specialRequests: ''
})

// Form state
const isBookingSubmitting = ref(false)
const bookingSuccess = ref(false)
const bookingError = ref('')

// Handle booking form submission
const handleBookingSubmit = async (e: Event) => {
  e.preventDefault()
  
  // Reset states
  bookingError.value = ''
  bookingSuccess.value = false
  isBookingSubmitting.value = true
  
  // Get current date for tour date if not specified
  const today = new Date()
  const defaultDate = new Date(today.setMonth(today.getMonth() + 1))
  
  try {
    const response = await $fetch('/api/booking', {
      method: 'POST',
      body: {
        name: bookingForm.value.name,
        email: bookingForm.value.email,
        phone: bookingForm.value.phone || '+256 768 461 164',
        destination: bookingForm.value.destination || 'Uganda - Bwindi Forest',
        tourDate: bookingForm.value.tourDate || defaultDate.toISOString().split('T')[0],
        numberOfGuests: bookingForm.value.numberOfGuests || 1,
        package: bookingForm.value.package,
        specialRequests: bookingForm.value.specialRequests
      }
    })
    
    if (response.success) {
      bookingSuccess.value = true
      // Reset form
      bookingForm.value = {
        name: '',
        email: '',
        phone: '',
        destination: '',
        tourDate: '',
        numberOfGuests: 1,
        package: '',
        specialRequests: ''
      }
      
      // Hide success message after 7 seconds
      setTimeout(() => {
        bookingSuccess.value = false
      }, 7000)
    }
  } catch (error: any) {
    bookingError.value = error.data?.statusMessage || 'Failed to submit booking. Please try again.'
    // Hide error after 5 seconds
    setTimeout(() => {
      bookingError.value = ''
    }, 5000)
  } finally {
    isBookingSubmitting.value = false
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  background-image: url('../../public/much.jpeg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  color: var(--color-white);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(45, 80, 22, 0.8) 0%,
    rgba(45, 80, 22, 0.6) 50%,
    rgba(26, 48, 9, 0.7) 100%
  );
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  padding: var(--spacing-4xl) 0;
}

.hero-content .container {
  display: grid;
  grid-template-columns: 1fr 450px;
  gap: var(--spacing-4xl);
  align-items: center;
  max-width: 1400px;
}

.hero-text {
  animation: fadeInUp 1s ease-out;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--color-golden-yellow);
  margin-bottom: var(--spacing-lg);
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
  line-height: 1.2;
}

.hero-subtitle {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-xl);
  color: var(--color-white);
  opacity: 0.95;
}

.hero-description {
  margin-bottom: var(--spacing-2xl);
  font-size: var(--font-size-lg);
  line-height: 1.6;
  opacity: 0.9;
}

.hero-description p {
  margin-bottom: var(--spacing-sm);
}

.hero-cta {
  display: flex;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  padding: var(--spacing-lg) var(--spacing-2xl);
  font-size: var(--font-size-lg);
  font-weight: 600;
  border-radius: var(--border-radius-lg);
  text-decoration: none;
  display: inline-block;
  transition: all var(--transition-normal);
  cursor: pointer;
  border: none;
}

.btn-primary {
  background-color: var(--color-golden-yellow);
  color: var(--color-charcoal);
}

.btn-primary:hover {
  background-color: var(--color-golden-yellow-dark);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(244, 200, 66, 0.3);
}

.btn-secondary {
  background-color: transparent;
  color: var(--color-white);
  border: 2px solid var(--color-white);
}

.btn-secondary:hover {
  background-color: var(--color-white);
  color: var(--color-forest-green);
  transform: translateY(-2px);
}

.hero-image-showcase {
  margin-top: var(--spacing-3xl);
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4), 
              0 0 0 8px rgba(244, 200, 66, 0.2),
              0 0 0 16px rgba(255, 255, 255, 0.1);
  animation: fadeInUp 1.2s ease-out;
  width: 500px;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  border: 4px solid var(--color-golden-yellow);
  background: linear-gradient(45deg, var(--color-golden-yellow), var(--color-forest-green));
  padding: 8px;
}

.hero-showcase-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;
  position: relative;
  z-index: 1;
  transition: transform var(--transition-slow);
}

.hero-image-showcase:hover .hero-showcase-image {
  transform: scale(1.05);
}

.hero-scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  animation: bounce 2s infinite;
}

.hero-scroll-indicator span {
  font-size: var(--font-size-sm);
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 2px;
}

.scroll-arrow {
  font-size: 24px;
  margin-top: 10px;
  animation: scrollBounce 1.5s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(10px); }
}

@keyframes scrollBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(5px); }
}

.btn-icon {
  margin-right: 8px;
  font-size: 20px;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 1024px) {
  .hero-content .container {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
  
  .hero-booking {
    max-width: 500px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .home-page {
    max-width: 100%;
    overflow-x: hidden;
  }
  
  .home-page .container {
    max-width: 100% !important;
    width: 100% !important;
    padding: 0 var(--spacing-lg) !important;
  }
  
  .hero {
    min-height: auto;
    padding: var(--spacing-2xl) 0;
  }
  
  .hero-content .container {
    display: block !important;
    max-width: 100% !important;
    width: 100% !important;
    padding: 0 var(--spacing-lg) !important;
  }
  
  .hero-text {
    width: 100%;
    max-width: 100%;
    margin-bottom: var(--spacing-xl);
  }
  
  .hero-image-showcase {
    width: 100% !important;
    max-width: 320px !important;
    height: 320px !important;
    margin: var(--spacing-xl) auto 0;
  }
  
  .hero-title {
    font-size: 2.5rem;
    word-wrap: break-word;
    hyphens: auto;
  }
  
  .hero-subtitle {
    font-size: var(--font-size-xl);
    word-wrap: break-word;
  }
  
  .hero-description {
    font-size: var(--font-size-base);
    word-wrap: break-word;
  }
  
  .hero-description p {
    font-size: 0.9rem;
    margin-bottom: var(--spacing-sm);
  }
  
  .hero-badge {
    font-size: 0.75rem !important;
    padding: 0.4rem 0.8rem !important;
    word-break: break-word;
    text-align: center;
    display: inline-block;
    max-width: 100%;
    box-sizing: border-box;
  }
  
  .hero-cta {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }
  
  .btn-primary,
  .btn-secondary {
    text-align: center;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }
  
  .hero-booking {
    padding: var(--spacing-xl);
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }
}

/* About Uganda Section */
.about-uganda {
  padding: var(--spacing-4xl) 0;
  background: white;
}

.about-header {
  text-align: center;
  margin-bottom: var(--spacing-4xl);
}

.content-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-4xl);
  align-items: center;
  margin-bottom: var(--spacing-4xl);
}

.content-row.reverse {
  direction: rtl;
}

.content-row.reverse > * {
  direction: ltr;
}

.content-text h3 {
  font-size: var(--font-size-3xl);
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-lg);
  font-weight: 700;
}

.content-text p {
  font-size: var(--font-size-base);
  color: var(--color-gray);
  line-height: 1.8;
  margin-bottom: var(--spacing-lg);
}

.content-image {
  overflow: hidden;
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-lg);
  height: 400px;
}

.content-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform var(--transition-slow);
}

.content-image:hover img {
  transform: scale(1.05);
}

.highlight-features {
  display: flex;
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
  padding-top: var(--spacing-xl);
  border-top: 1px solid #e0e0e0;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.btn-explore {
  display: inline-block;
  margin-top: var(--spacing-lg);
  padding: var(--spacing-md) var(--spacing-xl);
  background: var(--color-golden-yellow);
  color: var(--color-forest-green-dark);
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all var(--transition-normal);
}

.btn-explore:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(244, 200, 66, 0.3);
}

/* Adventure Quick Links */
.adventure-links {
  padding: var(--spacing-4xl) 0;
  background: var(--color-light-beige);
  margin-top: 0;
  position: relative;
  z-index: 10;
}

.adventure-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-xl);
}

.adventure-card {
  background: white;
  padding: var(--spacing-2xl);
  border-radius: var(--border-radius-xl);
  text-align: center;
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);
  border: 2px solid transparent;
}

.adventure-card:hover {
  transform: translateY(-10px);
  border-color: var(--color-golden-yellow);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.adventure-icon {
  font-size: 48px;
  margin-bottom: var(--spacing-lg);
}

.adventure-card h3 {
  font-size: var(--font-size-xl);
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-sm);
}

.adventure-card p {
  color: var(--color-gray);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
}

.package-price {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-forest-green-dark);
  margin: var(--spacing-md) 0;
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-light-beige);
  border-radius: var(--border-radius-md);
  text-align: center;
}

.adventure-link {
  color: var(--color-golden-yellow);
  text-decoration: none;
  font-weight: 600;
  font-size: var(--font-size-base);
  transition: all var(--transition-fast);
  display: inline-block;
  padding: var(--spacing-sm) var(--spacing-lg);
  background: var(--color-forest-green);
  color: white;
  border-radius: var(--border-radius-md);
  text-align: center;
  width: 100%;
  margin-top: var(--spacing-md);
}

.adventure-link:hover {
  background: var(--color-forest-green-dark);
  transform: translateY(-2px);
}

/* Featured Tours Styles */
.featured-tours {
  padding: var(--spacing-4xl) 0;
  background: white;
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto var(--spacing-3xl);
  padding: 0 var(--spacing-xl);
}

.section-header h2 {
  font-size: var(--font-size-4xl);
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-lg);
  font-weight: 700;
}

.section-header p {
  font-size: var(--font-size-xl);
  color: var(--color-gray);
  line-height: 1.6;
}

.tours-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: var(--spacing-2xl);
}

.tour-card {
  background: white;
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);
  position: relative;
}

.tour-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.tour-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  background: var(--color-golden-yellow);
  color: var(--color-forest-green-dark);
  padding: 8px 20px;
  border-radius: 50px;
  font-weight: bold;
  font-size: var(--font-size-sm);
  z-index: 1;
}

.tour-image {
  height: 280px;
  background: linear-gradient(45deg, var(--color-forest-green), var(--color-forest-green-light));
  position: relative;
  background-position: top center !important;
}

.tour-image-2 {
  background: linear-gradient(45deg, #3d6b1e, #97BC62);
}

.tour-image-3 {
  background: linear-gradient(45deg, var(--color-golden-yellow-dark), var(--color-golden-yellow));
}

.tour-content {
  padding: var(--spacing-2xl);
}

.tour-content h3 {
  font-size: var(--font-size-2xl);
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-lg);
  font-weight: 700;
}

.tour-features {
  list-style: none;
  margin: var(--spacing-lg) 0;
}

.tour-features li {
  padding: var(--spacing-sm) 0;
  color: var(--color-gray);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-base);
}

.tour-features li::before {
  content: "✓";
  color: var(--color-forest-green-light);
  font-weight: bold;
  font-size: 20px;
}

.tour-footer {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  padding-top: var(--spacing-lg);
  border-top: 1px solid #eee;
  margin-top: auto;
}

.tour-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.section-badge {
  display: inline-block;
  background: var(--color-golden-yellow);
  color: var(--color-forest-green-dark);
  padding: 6px 20px;
  border-radius: 50px;
  font-size: var(--font-size-sm);
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: var(--spacing-lg);
}

.tour-duration {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--color-gray);
  font-size: var(--font-size-base);
}

.duration-icon {
  font-size: 20px;
}

.tour-price {
  text-align: right;
}

.price {
  font-weight: 700;
  font-size: var(--font-size-lg);
  color: var(--color-forest-green-dark);
}

.tour-cta {
  background: var(--color-forest-green);
  color: white;
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all var(--transition-normal);
}

.tour-cta:hover {
  background: var(--color-forest-green-dark);
  transform: translateY(-2px);
}

/* Why Choose Us Styles */
.why-us {
  background: linear-gradient(135deg, var(--color-light-beige), #F5F5F0);
  padding: var(--spacing-4xl) 0;
}

.why-us-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-2xl);
  margin-top: var(--spacing-3xl);
}

.why-card {
  text-align: center;
  padding: var(--spacing-2xl);
  background: white;
  border-radius: var(--border-radius-xl);
  transition: all var(--transition-normal);
}

.why-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
}

.why-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--color-forest-green), var(--color-forest-green-light));
  border-radius: 50%;
  margin: 0 auto var(--spacing-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  color: white;
}

.why-card h3 {
  font-size: var(--font-size-xl);
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-lg);
  font-weight: 700;
}

.why-card p {
  color: var(--color-gray);
  line-height: 1.8;
  font-size: var(--font-size-base);
}

/* Testimonials Styles */
.testimonials {
  padding: var(--spacing-4xl) 0;
  background: white;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-2xl);
  margin-top: var(--spacing-3xl);
}

.testimonial-card {
  background: var(--color-light-beige);
  padding: var(--spacing-2xl);
  border-radius: var(--border-radius-xl);
  position: relative;
}

.testimonial-card::before {
  content: "\201C";
  font-size: 80px;
  color: var(--color-golden-yellow);
  position: absolute;
  top: 20px;
  left: 30px;
  line-height: 1;
  font-family: Georgia, serif;
}

.testimonial-text {
  margin-bottom: var(--spacing-xl);
  padding-top: var(--spacing-2xl);
  color: var(--color-charcoal);
  font-style: italic;
  line-height: 1.8;
  font-size: var(--font-size-base);
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
}

.author-avatar {
  width: 60px;
  height: 60px;
  background: var(--color-forest-green);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: var(--font-size-xl);
  font-weight: bold;
}

.author-info h4 {
  color: var(--color-forest-green-dark);
  margin-bottom: 5px;
  font-size: var(--font-size-lg);
  font-weight: 600;
}

.author-info p {
  color: var(--color-gray);
  font-size: var(--font-size-sm);
}

.rating {
  color: var(--color-golden-yellow);
  font-size: var(--font-size-lg);
  margin-top: 5px;
}

/* Travel Inquiry Section */
.travel-inquiry {
  background: linear-gradient(135deg, var(--color-forest-green-dark), var(--color-forest-green));
  padding: var(--spacing-4xl) 0;
  position: relative;
  overflow: hidden;
}

.travel-inquiry::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23ffffff10" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>') no-repeat bottom;
  background-size: cover;
  opacity: 0.1;
}

.inquiry-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-4xl);
  align-items: center;
}

.inquiry-text {
  color: white;
}

.inquiry-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 8px 20px;
  border-radius: 50px;
  font-size: var(--font-size-sm);
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: var(--spacing-lg);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.inquiry-text h2 {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-lg);
  font-weight: 700;
}

.inquiry-text p {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-2xl);
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
}

.inquiry-features {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.feature {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  font-size: var(--font-size-base);
}

.feature-icon {
  width: 24px;
  height: 24px;
  background: var(--color-golden-yellow);
  color: var(--color-forest-green-dark);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.inquiry-form {
  background: white;
  padding: var(--spacing-3xl);
  border-radius: var(--border-radius-xl);
  box-shadow: 0 20px 60px rgba(0,0,0,0.2);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.form-input,
.form-textarea {
  width: 100%;
  padding: var(--spacing-md) var(--spacing-lg);
  border: 2px solid #e0e0e0;
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  transition: all var(--transition-fast);
  background: white;
}

.form-textarea {
  min-height: 120px;
  resize: vertical;
  margin-bottom: var(--spacing-xl);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-golden-yellow);
  box-shadow: 0 0 0 3px rgba(244, 200, 66, 0.1);
}

.btn-inquiry {
  width: 100%;
  padding: var(--spacing-lg) var(--spacing-2xl);
  background: var(--color-forest-green);
  color: white;
  font-size: var(--font-size-lg);
  font-weight: 600;
  border: none;
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
}

.btn-inquiry:hover:not(:disabled) {
  background: var(--color-forest-green-dark);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(45, 80, 22, 0.3);
}

.btn-inquiry:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-arrow {
  font-size: 24px;
  transition: transform var(--transition-fast);
}

.btn-inquiry:hover:not(:disabled) .btn-arrow {
  transform: translateX(5px);
}

/* Form Notification Styles */
.form-notification {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 14px;
  animation: slideDown 0.3s ease-out;
}

.form-notification-success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.form-notification-error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.form-notification svg {
  flex-shrink: 0;
}

/* Form Spinner animation */
.form-spinner {
  animation: spin 1s linear infinite;
  margin-left: 8px;
}

/* Disabled form input styles */
.form-input:disabled,
.form-textarea:disabled {
  background: #f5f5f5;
  cursor: not-allowed;
  opacity: 0.7;
}

/* Hero Slideshow Styles */
.hero-video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.hero-slides {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  animation: slideShow 16s infinite;
}

.hero-slide.active {
  opacity: 1;
}

.hero-slide:nth-child(1) { animation-delay: 0s; }
.hero-slide:nth-child(2) { animation-delay: 2s; }
.hero-slide:nth-child(3) { animation-delay: 4s; }
.hero-slide:nth-child(4) { animation-delay: 6s; }
.hero-slide:nth-child(5) { animation-delay: 8s; }
.hero-slide:nth-child(6) { animation-delay: 10s; }
.hero-slide:nth-child(7) { animation-delay: 12s; }
.hero-slide:nth-child(8) { animation-delay: 14s; }

@keyframes slideShow {
  0%, 10% { opacity: 1; }
  15%, 100% { opacity: 0; }
}

.hero-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 8px 20px;
  border-radius: 50px;
  margin-bottom: var(--spacing-lg);
  font-size: var(--font-size-sm);
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* Tour Card Enhancements */
.tour-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  padding: var(--spacing-lg);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.tour-location {
  color: white;
  font-size: var(--font-size-sm);
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

/* Wildlife Gallery Styles */
.wildlife-gallery {
  padding: var(--spacing-4xl) 0;
  background: var(--color-charcoal);
}

.wildlife-gallery .section-header h2,
.wildlife-gallery .section-header p {
  color: white;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 250px;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-3xl);
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius-lg);
  cursor: pointer;
  transition: transform var(--transition-normal);
}

.gallery-item.large {
  grid-column: span 2;
  grid-row: span 2;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform var(--transition-slow);
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
  color: white;
  padding: var(--spacing-xl);
  transform: translateY(100%);
  transition: transform var(--transition-normal);
}

.gallery-item:hover .gallery-overlay {
  transform: translateY(0);
}

.gallery-overlay h3 {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-xs);
}

.gallery-overlay p {
  font-size: var(--font-size-sm);
  opacity: 0.9;
}

/* Destinations Section */
.destinations {
  padding: var(--spacing-4xl) 0;
  background: white;
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-2xl);
  margin-top: var(--spacing-3xl);
}

.destination-card {
  background: white;
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);
}

.destination-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
}

.destination-image {
  height: 250px;
  overflow: hidden;
}

.destination-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform var(--transition-slow);
}

.destination-card:hover .destination-image img {
  transform: scale(1.05);
}

.destination-content {
  padding: var(--spacing-xl);
}

.destination-content h3 {
  font-size: var(--font-size-xl);
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-md);
}

.destination-highlights {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
  margin-bottom: var(--spacing-lg);
}

.highlight {
  background: var(--color-light-beige);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: var(--font-size-sm);
  color: var(--color-forest-green);
  font-weight: 500;
}

.destination-content p {
  color: var(--color-gray);
  line-height: 1.6;
}

/* Experience Timeline */
.experience-timeline {
  padding: var(--spacing-4xl) 0;
  background: linear-gradient(135deg, var(--color-light-beige), white);
}

.timeline {
  position: relative;
  max-width: 900px;
  margin: var(--spacing-3xl) auto 0;
  padding: 0 var(--spacing-xl);
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-golden-yellow);
  transform: translateX(-50%);
}

.timeline-item {
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-3xl);
  position: relative;
}

.timeline-item:nth-child(even) {
  flex-direction: row-reverse;
}

.timeline-icon {
  width: 80px;
  height: 80px;
  background: white;
  border: 4px solid var(--color-golden-yellow);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.timeline-content {
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  width: calc(50% - 60px);
}

.timeline-item:nth-child(odd) .timeline-content {
  margin-right: auto;
}

.timeline-item:nth-child(even) .timeline-content {
  margin-left: auto;
}

.timeline-content h3 {
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-sm);
}

.timeline-content p {
  color: var(--color-gray);
  line-height: 1.6;
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .hero-title {
    font-size: 3.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
  }
  
  .tours-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .why-us-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 200px;
  }
  
  .timeline::before {
    left: 40px;
  }
  
  .timeline-item {
    flex-direction: row !important;
    padding-left: 100px;
  }
  
  .timeline-icon {
    left: 40px;
  }
  
  .timeline-content {
    width: 100%;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 100px;
    min-height: auto;
  }
  
  .hero-badge {
    font-size: 0.75rem;
    padding: 0.4rem 0.8rem;
  }
  
  .hero-title {
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
    line-height: 1.4;
    margin-bottom: 1.5rem;
  }
  
  .hero-description p {
    font-size: 0.9rem;
    padding: 0.5rem 0;
  }
  
  .hero-cta {
    gap: 1rem;
    flex-direction: column;
    align-items: stretch;
  }
  
  .btn-primary,
  .btn-secondary {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
    text-align: center;
    width: 100%;
  }
  
  .btn-icon {
    font-size: 1rem;
  }
  
  .hero-image-showcase {
    height: 250px;
    margin-top: 2rem;
  }
  
  .hero-booking {
    padding: var(--spacing-xl);
    margin-top: 2rem;
  }
  
  .section-badge {
    font-size: 0.7rem;
    padding: 0.3rem 0.8rem;
  }
  
  .section-header h2 {
    font-size: 1.8rem;
    line-height: 1.2;
  }
  
  .section-header p {
    font-size: 0.95rem;
  }
  
  .adventure-grid {
    gap: 1.5rem;
    grid-template-columns: 1fr;
  }
  
  .adventure-card {
    padding: 2rem 1.5rem;
  }
  
  .adventure-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .adventure-card h3 {
    font-size: 1.2rem;
  }
  
  .adventure-card p {
    font-size: 0.9rem;
  }
  
  .package-price {
    font-size: 1.1rem;
  }
  
  .content-text h3 {
    font-size: 1.5rem;
  }
  
  .content-text p {
    font-size: 0.95rem;
    line-height: 1.6;
  }
  
  .feature-item {
    font-size: 0.9rem;
  }
  
  .tour-card {
    border-radius: 12px;
  }
  
  .tour-content h3 {
    font-size: 1.1rem;
  }
  
  .tour-features li {
    font-size: 0.85rem;
  }
  
  .tour-price .price {
    font-size: 1.1rem;
  }
  
  .trust-container {
    flex-direction: column;
    gap: var(--spacing-lg);
  }
  
  .tours-grid,
  .why-us-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-features {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: stretch;
  }
  
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 180px;
  }
  
  .gallery-item.large {
    grid-column: span 2;
    grid-row: span 1;
  }
  
  .destinations-grid {
    grid-template-columns: 1fr;
  }
  
  .timeline-item {
    padding-left: 70px;
  }
  
  .timeline-icon {
    width: 60px;
    height: 60px;
    font-size: 24px;
    left: 30px;
  }
  
  .timeline::before {
    left: 30px;
  }
  
  .hero-contact-strip {
    flex-direction: column;
    gap: var(--spacing-md);
    padding: var(--spacing-lg);
  }
  
  .content-row,
  .content-row.reverse {
    grid-template-columns: 1fr;
    direction: ltr;
  }
  
  .content-image {
    height: 300px;
  }
  
  .highlight-features {
    flex-direction: column;
    gap: var(--spacing-md);
  }
  
  .inquiry-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .inquiry-form {
    padding: var(--spacing-xl);
  }
  
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.75rem;
    line-height: 1.1;
    word-break: break-word;
  }
  
  .hero-subtitle {
    font-size: 1rem;
    line-height: 1.3;
    word-break: break-word;
  }
  
  .hero-description {
    font-size: 0.85rem;
  }
  
  .hero-description p {
    font-size: 0.8rem;
    line-height: 1.4;
  }
  
  .hero-image-showcase {
    width: 100% !important;
    max-width: 280px !important;
    height: 280px !important;
    margin: var(--spacing-lg) auto 0;
  }
  
  .hero-cta {
    gap: var(--spacing-sm);
  }
  
  .btn-primary,
  .btn-secondary {
    width: 100%;
    padding: 0.75rem 1.2rem;
    font-size: 0.85rem;
    word-break: keep-all;
  }
  
  .btn-icon {
    font-size: 0.9rem;
  }
  
  .section-header h2 {
    font-size: 1.5rem;
  }
  
  .adventure-card {
    padding: 1.5rem 1rem;
  }
  
  .tour-card {
    margin-bottom: 1.5rem;
  }
  
  .gallery-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 150px;
  }
  
  .gallery-item.large {
    grid-column: span 1;
    grid-row: span 1;
  }
  
  .content-image {
    height: 250px;
  }
  
  .why-us-item {
    padding: 1.5rem;
  }
  
  .cta-section {
    padding: 3rem 0;
  }
  
  .cta-content h2 {
    font-size: 1.5rem;
  }
  
  .trust-stat h3 {
    font-size: 2rem;
  }
  
  .testimonial-card {
    padding: 1.5rem;
  }
  
  .inquiry-form {
    padding: 1.5rem;
  }
  
  .inquiry-info h2 {
    font-size: 1.5rem;
  }
}

/* Featured gallery items for park images */
.gallery-item.featured {
  border: 3px solid var(--color-golden-yellow);
  box-shadow: 0 8px 32px rgba(255, 193, 7, 0.3);
}

.gallery-item.featured:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(255, 193, 7, 0.4);
}

.gallery-item.featured .gallery-overlay {
  background: linear-gradient(to top, rgba(45, 80, 22, 0.95), rgba(26, 48, 9, 0.7));
}

.gallery-item.featured .gallery-overlay h3 {
  color: var(--color-golden-yellow);
  font-weight: 700;
}
</style>