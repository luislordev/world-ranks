interface ButtonPillProps {
    children: string
    isActive: boolean
    handleToggle: () => void
}
export const ButtonPill = ({ children, isActive, handleToggle }: ButtonPillProps) => {
    return (
        <button className={`px-3 py-2 rounded-xl text-sm font-semibold ${isActive ? 'bg-bg-secondary hover:bg-grey-dark/90' : 'bg-bg-primary hover:bg-grey-dark/50'}`}
            onClick={handleToggle}
        >
            {children}
        </button>
    )
}
