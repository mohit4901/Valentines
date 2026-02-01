export default function HeartDecor({ className }) {
    return (
      <svg
        viewBox="0 0 100 100"
        className={`absolute opacity-60 ${className}`}
        fill="#ff5c8a"
      >
        <path d="M50 85 
          C20 60, 5 45, 5 25 
          C5 10, 20 5, 30 10 
          C40 15, 50 30, 50 30 
          C50 30, 60 15, 70 10 
          C80 5, 95 10, 95 25 
          C95 45, 80 60, 50 85 Z" />
      </svg>
    )
  }
  