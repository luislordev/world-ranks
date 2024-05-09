type CheckboxProps = {
    children: string
    isActive: boolean
    handleCheckBox: () => void
  }

export const Checkbox = ({children, isActive, handleCheckBox}:CheckboxProps) => {
  return (
    <label className="mt-3 flex w-fit cursor-pointer items-center text-sm font-bold">
      <input
        type="checkbox"
        className={`mr-3 size-6 appearance-none rounded-md border-2 border-grey-dark cursor-pointer  bg-bg-primary bg-center checked:border-blue-custom checked:bg-blue-custom
        ${isActive ? "bg-[url('./assets/svg/Done_round.svg')]" : ""}`}
        onChange={handleCheckBox}
        checked={isActive}
      />
      {children}
    </label>
  )
}
