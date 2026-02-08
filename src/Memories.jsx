import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import './Memories.css'

function Memories({ onBack }) {
  const [currentPage, setCurrentPage] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const bookRef = useRef(null)
  const leftPageRef = useRef(null)
  const rightPageRef = useRef(null)

  const memories = [
    {
      id: 1,
      title: "First Photo Together",
      date: "August 9, 2025",
      description: "The day everything began. Our Roka ceremony - the moment that started our beautiful journey.",
      emoji: "💕",
      photo: "/memories/roka.jpeg"
    },
    {
      id: 2,
      title: "First Trip Together",
      date: "August 15, 2025",
      description: "Our first ride to Siswan dam. These simple trips mean everything to me.",
      emoji: "🏍️",
      photo: "/memories/first_photo.jpeg"
    },
    {
      id: 3,
      title: "Our Sukhna Adventures",
      date: "August 15, 2025",
      description: "More beautiful moments from our visit to Sukhna Lake. Every step with you is a memory I treasure.",
      emoji: "🚣",
      photo: "/memories/sukhna.jpg"
    },
    {
      id: 4,
      title: "First movie together",
      date: "August 24, 2025",
      description: "You have this special way of fixing everything, including my happiness. You're my remedy.",
      emoji: "🎥",
      photo: "/memories/20-12-2025_eve_fixing_happines.jpg"
    },
    {
      id: 5,
      title: "Birthday celebration",
      date: "August 30, 2025",
      description: "Capturing more precious moments as we my birthday, creating memories that last forever.",
      emoji: "🎂",
      photo: "/memories/birthday.jpg"
    },
    {
      id: 6,
      title: "Our Engagement",
      date: "October 19, 2025",
      description: "In solitude, we found each other. In togetherness, we found peace. Two paths, slowly becoming one — On the day I placed the ring on your finger.",
      emoji: "💍",
      photo: "/memories/eng.jpg"
    },
    {
      id: 7,
      title: "First stay together",
      date: "October 27, 2025",
      description: "Our first stay together, memory I will cherish for all my life. Our bond grew even stronger after the stay.",
      emoji: "🏨",
      photo: "/memories/fst.jpg"
    },
    {
      id: 8,
      title: "Temple Ride",
      date: "November 23, 2025",
      description: "Our spiritual journey together. Seeking blessings from Maa Shoolini for our beautiful future.",
      emoji: "🙏",
      photo: "/memories/tr.jpg"
    },
    {
      id: 9,
      title: "Walk At Zoo",
      date: "December 20, 2025",
      description: "Exploring the zoo together, discovering new wonders hand in hand.",
      emoji: "🦁",
      photo: "/memories/zoo.jpg"
    },
    {
      id: 10,
      title: "First Christmas together",
      date: "December 25, 2025",
      description: "Our first Christmas together, wrapped in love, laughter, and the joy of beginning traditions that are now ours.",
      emoji: "🎄",
      photo: "/memories/christmas.jpg"
    },
    {
      id: 11,
      title: "A new year dedicated to US",
      date: "January 1, 2026",
      description: "A new year dedicated to us, to shared dreams, quiet mornings, and a future we're building together.",
      emoji: "👩🏻‍❤️‍👨🏻",
      photo: "/memories/new.jpg"
    },
    {
      id: 12,
      title: "Sharing Laughter Together",
      date: "Forever",
      description: "Those moments when we just laugh together, finding joy in the simplest things. Your laughter is my favorite sound.",
      emoji: "😂",
      photo: "/memories/smile.jpg"
    }
  ]

  const totalPages = Math.ceil(memories.length / 2)

  useEffect(() => {
    if (bookRef.current) {
      gsap.set(bookRef.current, { transformStyle: 'preserve-3d' })
    }
  }, [])

  const nextPage = () => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      setIsFlipping(true)
      
      const tl = gsap.timeline({
        onComplete: () => {
          setCurrentPage(prev => prev + 1)
          setIsFlipping(false)
        }
      })
      
      tl.to(bookRef.current, {
        rotationY: -15,
        duration: 0.4,
        ease: 'power2.out'
      })
      .to([leftPageRef.current, rightPageRef.current], {
        opacity: 0,
        scale: 0.95,
        duration: 0.3,
        ease: 'power2.in'
      }, '-=0.2')
      .to(bookRef.current, {
        rotationY: 0,
        duration: 0.4,
        ease: 'power2.in'
      })
      .to([leftPageRef.current, rightPageRef.current], {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      }, '-=0.3')
    }
  }

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true)
      
      const tl = gsap.timeline({
        onComplete: () => {
          setCurrentPage(prev => prev - 1)
          setIsFlipping(false)
        }
      })
      
      tl.to(bookRef.current, {
        rotationY: 15,
        duration: 0.4,
        ease: 'power2.out'
      })
      .to([leftPageRef.current, rightPageRef.current], {
        opacity: 0,
        scale: 0.95,
        duration: 0.3,
        ease: 'power2.in'
      }, '-=0.2')
      .to(bookRef.current, {
        rotationY: 0,
        duration: 0.4,
        ease: 'power2.in'
      })
      .to([leftPageRef.current, rightPageRef.current], {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      }, '-=0.3')
    }
  }

  const leftMemory = memories[currentPage * 2]
  const rightMemory = memories[currentPage * 2 + 1]

  return (
    <div className="memories-album-container">
      <div className="floating-memories-bg">
        <span className="float-heart">💕</span>
        <span className="float-heart">💖</span>
        <span className="float-heart">💗</span>
        <span className="float-camera">📷</span>
        <span className="float-camera">📸</span>
      </div>

      <div className="album-header">
        <button className="back-btn" onClick={onBack}>
          ← Back to Home
        </button>
        <h1 className="album-title">Our Memory Album 💕</h1>
        <p className="album-subtitle">Every page tells our beautiful story</p>
      </div>

      <div className="photo-album">
        <div className="album-book" ref={bookRef}>
          <div className="book-page left-page" ref={leftPageRef}>
            {leftMemory && (
              <div className="page-content">
                <div className="photo-polaroid">
                  <div className="polaroid-photo">
                    <img src={leftMemory.photo} alt={leftMemory.title} />
                  </div>
                  <div className="polaroid-caption">
                    <div className="memory-emoji">{leftMemory.emoji}</div>
                    <h3>{leftMemory.title}</h3>
                    <p className="memory-date">{leftMemory.date}</p>
                  </div>
                </div>
                <div className="memory-description">
                  <p>{leftMemory.description}</p>
                </div>
              </div>
            )}
          </div>

          <div className="book-spine"></div>

          <div className="book-page right-page" ref={rightPageRef}>
            {rightMemory && (
              <div className="page-content">
                <div className="photo-polaroid">
                  <div className="polaroid-photo">
                    <img src={rightMemory.photo} alt={rightMemory.title} />
                  </div>
                  <div className="polaroid-caption">
                    <div className="memory-emoji">{rightMemory.emoji}</div>
                    <h3>{rightMemory.title}</h3>
                    <p className="memory-date">{rightMemory.date}</p>
                  </div>
                </div>
                <div className="memory-description">
                  <p>{rightMemory.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="album-navigation">
        <button 
          className="nav-arrow prev-arrow" 
          onClick={prevPage}
          disabled={currentPage === 0 || isFlipping}
        >
          ← Previous
        </button>
        
        <div className="page-indicator">
          <span className="current-page">{currentPage + 1}</span>
          <span className="page-separator">/</span>
          <span className="total-pages">{totalPages}</span>
        </div>

        <button 
          className="nav-arrow next-arrow" 
          onClick={nextPage}
          disabled={currentPage === totalPages - 1 || isFlipping}
        >
          Next →
        </button>
      </div>

      <div className="album-footer">
        <p>📖 Flip through the pages of our love story 💕</p>
      </div>
    </div>
  )
}

export default Memories
