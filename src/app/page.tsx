"use client";

/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("");
  const [isRSVPModalOpen, setIsRSVPModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    attending: "",
    guestCount: "1",
    plusOneName: "",
    events: {
      welcomeDrinks: false,
      ceremony: false,
      reception: false,
      farewellBrunch: false,
    },
    dietaryNotes: "",
    songRequest: "",
    message: "",
    photoConsent: true,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "story", "details", "photos"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape key closes modal
      if (e.key === "Escape" && isRSVPModalOpen) {
        setIsRSVPModalOpen(false);
      }

      // Arrow keys for section navigation (when modal is closed)
      if (!isRSVPModalOpen) {
        const sections = ["hero", "story", "details", "photos"];
        const currentIndex = sections.indexOf(activeSection);

        if (e.key === "ArrowDown" && currentIndex < sections.length - 1) {
          e.preventDefault();
          scrollToSection(sections[currentIndex + 1]);
        } else if (e.key === "ArrowUp" && currentIndex > 0) {
          e.preventDefault();
          scrollToSection(sections[currentIndex - 1]);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    handleScroll(); // Call once to set initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeSection, isRSVPModalOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      if (name.startsWith("events.")) {
        const eventName = name.split(".")[1];
        setFormData((prev) => ({
          ...prev,
          events: {
            ...prev.events,
            [eventName]: checked,
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [name]: checked,
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("RSVP Data:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsRSVPModalOpen(false);
      setIsSubmitted(false);
    }, 3000);
  };

  const handleModalKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsRSVPModalOpen(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsRSVPModalOpen(false);
    }
  };

  // Focus management for modal
  useEffect(() => {
    if (isRSVPModalOpen) {
      // Focus the modal when it opens
      const modal = document.querySelector('[role="dialog"]') as HTMLElement;
      if (modal) {
        modal.focus();
      }

      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Restore body scroll when modal closes
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isRSVPModalOpen]);

  return (
    <div className="relative">
      {/* Fixed Navigation */}
      <nav
        className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md border border-wine/20 rounded-full px-8 py-3"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("hero")}
            className={`text-sm tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-wine/50 rounded px-2 py-1 ${activeSection === "hero" ? "text-wine" : "text-midnight/60 hover:text-wine"}`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("story")}
            className={`text-sm tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-wine/50 rounded px-2 py-1 ${activeSection === "story" ? "text-wine" : "text-midnight/60 hover:text-wine"}`}
          >
            Story
          </button>
          <button
            onClick={() => scrollToSection("details")}
            className={`text-sm tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-wine/50 rounded px-2 py-1 ${activeSection === "details" ? "text-wine" : "text-midnight/60 hover:text-wine"}`}
          >
            Details
          </button>
          <button
            onClick={() => scrollToSection("photos")}
            className={`text-sm tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-wine/50 rounded px-2 py-1 ${activeSection === "photos" ? "text-wine" : "text-midnight/60 hover:text-wine"}`}
          >
            Photos
          </button>
          <button
            onClick={() => setIsRSVPModalOpen(true)}
            className="bg-wine text-cream px-6 py-2 text-sm tracking-wider hover:bg-wine-hover transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-cream/50"
          >
            RSVP
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/90 to-white"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-16">
            <h1 className="editorial-hero text-midnight mb-8 text-balance">
              Two Names
            </h1>
            <h2 className="editorial-headline text-wine mb-12 text-balance">
              One Weekend
            </h2>
            <p className="editorial-quote text-midnight/70 max-w-3xl mx-auto text-balance">
              Your company requested
            </p>
          </div>

          <div className="space-y-6">
            <p className="font-sans text-lg md:text-xl text-midnight/80 max-w-2xl mx-auto leading-relaxed">
              Join us for a celebration of love, laughter, and the beginning of
              our next chapter together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <button
                onClick={() => setIsRSVPModalOpen(true)}
                className="btn-primary"
              >
                Reserve Your Place
              </button>
              <button
                onClick={() => scrollToSection("details")}
                className="btn-secondary"
              >
                Event Details
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-wine/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-wine/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="min-h-screen py-24 px-6 bg-white relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-midnight mb-8 leading-tight">
              Our Story
            </h2>
            <div className="w-24 h-px bg-wine mx-auto mb-8"></div>
            <p className="font-serif text-xl md:text-2xl text-midnight/70 italic">
              Every love story is beautiful, but ours is our favorite
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="font-serif text-3xl md:text-4xl font-light text-wine mb-6">
                How We Met
              </h3>
              <p className="font-sans text-lg text-midnight/80 leading-relaxed mb-6">
                It was a crisp autumn evening when our paths first crossed.
                Neither of us could have imagined that a chance encounter at a
                coffee shop would change everything.
              </p>
              <p className="font-sans text-lg text-midnight/80 leading-relaxed">
                What started as a simple conversation about books turned into
                hours of deep discussion about dreams, travel, and life.{" "}
                <em className="font-serif text-wine">
                  It was the beginning of everything.
                </em>
              </p>
            </div>
            <div className="bg-sage/10 p-8 rounded-lg">
              <blockquote className="font-serif text-2xl md:text-3xl font-light text-midnight/80 italic leading-relaxed">
                "There was something magnetic about that first conversation—the
                way time seemed to stop."
              </blockquote>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="lg:order-2">
              <h3 className="font-serif text-3xl md:text-4xl font-light text-wine mb-6">
                The Proposal
              </h3>
              <p className="font-sans text-lg text-midnight/80 leading-relaxed mb-6">
                It happened on a quiet beach at sunset, just the two of us and
                the sound of waves. No grand gestures or elaborate plans—just a
                heartfelt moment where everything felt perfectly right.
              </p>
              <p className="font-sans text-lg text-midnight/80 leading-relaxed">
                When the question was finally asked, the answer came without
                hesitation:
                <em className="font-serif text-wine">"Yes, absolutely yes."</em>
              </p>
            </div>
            <div className="lg:order-1 bg-wine/5 p-8 rounded-lg">
              <blockquote className="font-serif text-2xl md:text-3xl font-light text-midnight/80 italic leading-relaxed">
                "That evening, as we watched the sun disappear into the horizon,
                we knew we were ready to write the next chapter together."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section
        id="details"
        className="min-h-screen py-24 px-6 bg-cream/30 relative"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-midnight mb-8 leading-tight">
              The Celebration
            </h2>
            <div className="w-24 h-px bg-wine mx-auto mb-8"></div>
            <p className="font-serif text-xl md:text-2xl text-midnight/70 italic max-w-3xl mx-auto">
              Saturday, June 15th, 2024 • The Garden Estate
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-white/70 p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-light text-wine mb-4">
                Ceremony
              </h3>
              <p className="font-sans text-lg text-midnight/80 mb-2">4:00 PM</p>
              <p className="font-sans text-midnight/60">
                Garden ceremony with string quartet
              </p>
            </div>
            <div className="text-center bg-white/70 p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-light text-wine mb-4">
                Cocktails
              </h3>
              <p className="font-sans text-lg text-midnight/80 mb-2">4:30 PM</p>
              <p className="font-sans text-midnight/60">
                Passed hors d'oeuvres and signature drinks
              </p>
            </div>
            <div className="text-center bg-white/70 p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-light text-wine mb-4">
                Reception
              </h3>
              <p className="font-sans text-lg text-midnight/80 mb-2">6:00 PM</p>
              <p className="font-sans text-midnight/60">
                Dinner and dancing under the stars
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="font-serif text-3xl font-light text-wine mb-6">
                Dress Code
              </h3>
              <p className="font-sans text-lg text-midnight/80 leading-relaxed mb-4">
                Semi-formal garden party attire. Think elegant yet comfortable
                for our outdoor celebration.
              </p>
              <ul className="font-sans text-midnight/70 space-y-2">
                <li>
                  <strong>For her:</strong> Midi dresses, elegant separates
                </li>
                <li>
                  <strong>For him:</strong> Dress shirt and pants, blazer
                  optional
                </li>
                <li>
                  <strong>Colors:</strong> Any colors welcome (avoid
                  white/ivory)
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-3xl font-light text-wine mb-6">
                Location
              </h3>
              <p className="font-sans text-lg text-midnight/80 leading-relaxed mb-4">
                The Garden Estate offers a breathtaking backdrop for our
                celebration, with manicured gardens and twinkling lights
                creating the perfect romantic atmosphere.
              </p>
              <p className="font-sans text-midnight/70 mb-4">
                123 Celebration Lane
                <br />
                Beautiful City, State 12345
              </p>
              <button className="text-wine hover:text-wine-hover font-sans font-medium transition-colors">
                Get Directions →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Photos Section */}
      <section
        id="photos"
        className="min-h-screen py-24 px-6 bg-white relative"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-midnight mb-8 leading-tight">
              Moments
            </h2>
            <div className="w-24 h-px bg-wine mx-auto mb-8"></div>
            <p className="font-serif text-xl md:text-2xl text-midnight/70 italic">
              Capturing the beauty of our journey together
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {Array.from({ length: 8 }, (_, i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-sage/20 to-dusty-rose/20 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <div className="w-full h-full bg-wine/5 flex items-center justify-center">
                  <span className="font-serif text-wine/40 text-sm">
                    Photo {i + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-sage/10 p-12 rounded-lg">
            <h3 className="font-serif text-2xl font-light text-wine mb-4">
              Share Your Memories
            </h3>
            <p className="font-sans text-lg text-midnight/80 mb-8 max-w-2xl mx-auto">
              Help us capture every moment! Upload your photos from our
              celebration to create a complete collection of memories.
            </p>
            <button className="bg-wine text-cream px-8 py-3 text-sm uppercase tracking-wider hover:bg-wine-hover transition-colors">
              Upload Photos
            </button>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="py-32 px-6 bg-midnight text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight via-midnight/95 to-wine/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="editorial-headline text-cream mb-8">Join Us</h2>
          <div className="editorial-divider bg-cream mb-8"></div>
          <p className="editorial-quote text-cream/80 mb-16">
            Your presence is the greatest gift
          </p>

          <button
            onClick={() => setIsRSVPModalOpen(true)}
            className="bg-cream text-midnight px-12 py-4 text-sm uppercase tracking-widest font-medium hover:bg-cream/90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cream/30"
          >
            Reserve Your Place
          </button>

          <div className="mt-20 text-center">
            <p className="editorial-body text-cream/70 max-w-2xl mx-auto mb-8">
              "Two hearts, one celebration, surrounded by the people who matter
              most."
            </p>
            <p className="font-sans text-sm text-cream/50">
              © 2024 Nason Wedding • Made with ♥ for our special day
            </p>
          </div>
        </div>
      </section>

      {/* RSVP Modal */}
      {isRSVPModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onKeyDown={handleModalKeyDown}
            tabIndex={-1}
            role="document"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 id="modal-title" className="editorial-subhead text-wine">
                  RSVP
                </h2>
                <button
                  onClick={() => setIsRSVPModalOpen(false)}
                  className="text-midnight/50 hover:text-midnight text-2xl leading-none p-2 hover:bg-midnight/5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-wine/50"
                >
                  ×
                </button>
              </div>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="bg-sage/20 p-8 rounded-lg">
                    <h3 className="text-2xl font-light text-wine mb-4">
                      Thank You!
                    </h3>
                    <p className="editorial-body mb-4">
                      Your RSVP has been received. We're so excited to celebrate
                      with you!
                    </p>
                    <p className="text-midnight/70">
                      You should receive a confirmation email shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-wine">
                      Your Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Attendance */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-wine">
                      Will you be attending?
                    </h3>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="attending"
                          value="yes"
                          checked={formData.attending === "yes"}
                          onChange={handleInputChange}
                          className="text-wine focus:ring-wine"
                        />
                        <span>Yes, I'll be there! 🎉</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="attending"
                          value="no"
                          checked={formData.attending === "no"}
                          onChange={handleInputChange}
                          className="text-wine focus:ring-wine"
                        />
                        <span>Sorry, I can't make it</span>
                      </label>
                    </div>
                  </div>

                  {/* Events */}
                  {formData.attending === "yes" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-wine">
                        Which events will you attend?
                      </h3>
                      <div className="space-y-3">
                        {[
                          {
                            key: "ceremony",
                            label: "Wedding Ceremony",
                            time: "Saturday 4:00 PM",
                          },
                          {
                            key: "reception",
                            label: "Reception",
                            time: "Saturday 6:00 PM - 11:00 PM",
                          },
                          {
                            key: "welcomeDrinks",
                            label: "Welcome Drinks",
                            time: "Friday 7:00 PM - 9:00 PM",
                          },
                          {
                            key: "farewellBrunch",
                            label: "Farewell Brunch",
                            time: "Sunday 10:00 AM - 12:00 PM",
                          },
                        ].map((event) => (
                          <label
                            key={event.key}
                            className="flex items-center space-x-3 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              name={`events.${event.key}`}
                              checked={
                                formData.events[
                                  event.key as keyof typeof formData.events
                                ]
                              }
                              onChange={handleInputChange}
                              className="text-wine focus:ring-wine rounded"
                            />
                            <span className="flex-1">
                              <span className="font-medium">{event.label}</span>
                              <span className="text-midnight/60 ml-2 text-sm">
                                {event.time}
                              </span>
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Message */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-wine">
                      Message for the Couple
                    </h3>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Share your excitement, well wishes, or any special message..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-4">
                    <button type="submit" className="w-full btn-primary">
                      Send RSVP
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
