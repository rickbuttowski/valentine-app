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
      date: "December 12, 2025",
      description: "Dropping you to college, cherishing every moment on the way. These simple rides mean everything to me.",
      emoji: "🏍️",
      photo: "/memories/first_photo.jpg"
    },
    {
      id: 3,
      title: "Walk At Zoo",
      date: "December 20, 2025",
      description: "Exploring the zoo together, discovering new wonders hand in hand.",
      emoji: "🦁",
      photo: "/memories/20-12-2025_walk_at_zoo.JPG"
    },
    {
      id: 4,
      title: "Our Sukhna Adventures",
      date: "December 20, 2025",
      description: "More beautiful moments from our zoo adventure. Every step with you is a memory I treasure.",
      emoji: "🐘",
      photo: "/memories/20-12-2025_walk_at_zoo2.JPG"
    },
    {
      id: 5,
      title: "My birthday celebration",
      date: "December 20, 2025",
      description: "Capturing more precious moments as we walked through the zoo, creating memories that last forever.",
      emoji: "🦒",
      photo: "/memories/20-12-2025_walk_at_zoo3.jpg"
    },
    {
      id: 6,
      title: "First movie together",
      date: "December 20, 2025",
      description: "You have this special way of fixing everything, including my happiness. You're my remedy.",
      emoji: "✨",
      photo: "/memories/20-12-2025_eve_fixing_happines.jpg"
    },
    {
      id: 7,
      title: "Temple Ride",
      date: "January 4, 2026",
      description: "Our spiritual journey together. Seeking blessings for our beautiful future.",
      emoji: "🙏",
      photo: "/memories/04-01-2026_temple_ride.jpg"
    },
    {
      id: 8,
      title: "First stay together",
      date: "January 4, 2026",
      description: "Our temple ride where we found something precious we thought was lost. Sometimes the journey brings unexpected blessings.",
      emoji: "🔍",
      photo: "/memories/04-01-2026_temple_ride_finding_something_lost.jpg"
    },
    {
      id: 9,
      title: "Sharing Laughter Together",
      date: "January 4, 2026",
      description: "Those moments when we just laugh together, finding joy in the simplest things. Your laughter is my favorite sound.",
      emoji: "😄",
      photo: "/memories/04-01-2026_sharing_laughter_toghether.jpg"
    },
    {
      id: 10,
      title: "Finding Paths of Solitude Together : Our Engagement",
      date: "January 4, 2026",
      description: "In solitude, we found each other. In togetherness, we find peace. Walking paths that lead us closer.",
      emoji: "🌅",
      photo: "/memories/04-01-2026_finding_paths_of_solitude_toghether.jpg"
    },
    {
      id: 11,
      title: "First Christmas together",
      date: "January 4, 2026",
      description: "In solitude, we found each other. In togetherness, we find peace. Walking paths that lead us closer.",
      emoji: "🌅",
      photo: "/memories/04-01-2026_finding_paths_of_solitude_toghether.jpg"
    },
    {
      id: 12,
      title: "A new year dedicated to us",
      date: "January 4, 2026",
      description: "In solitude, we found each other. In togetherness, we find peace. Walking paths that lead us closer.",
      emoji: "🌅",
      photo: "/memories/04-01-2026_finding_paths_of_solitude_toghether.jpg"
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
