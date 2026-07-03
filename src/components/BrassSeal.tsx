interface BrassSealProps {
  className?: string
}

/**
 * The recurring signature mark for Paul's Cafe: a wax-seal style
 * monogram, echoing the stamped lot marks on a coffee sack. Used
 * sparingly — once per section — as the page's one consistent motif.
 */
export default function BrassSeal({ className = 'w-14 h-14' }: BrassSealProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="47" stroke="currentColor" strokeWidth="1" />
      <circle cx="50" cy="50" r="39" stroke="currentColor" strokeWidth="0.5" />
      <text
        x="50"
        y="61"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontSize="42"
        fill="currentColor"
      >
        P
      </text>
    </svg>
  )
}
