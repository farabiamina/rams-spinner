export const NextSvg = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={31}
        fill="none"
        {...props}
    >
        <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={4}
            d="m3 28 10.29-10.29a3.134 3.134 0 0 0 0-4.42L3 3"
        />
    </svg>
)

export const PreviousSvg = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={31}
        fill="none"
        {...props}
    >
        <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={4}
            d="M14.202 3 3.912 13.29a3.134 3.134 0 0 0 0 4.42L14.201 28"
        />
    </svg>
)