interface RecButtonProps {
  label?: string;
}

const RecButton = ({ label = "Java" }: RecButtonProps) => {
  return (
    <button className="border border-gray-400 px-3 py-4 font-medium">
      {label}
    </button>
  )
}

export default RecButton