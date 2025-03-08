interface ExperienceItemProps {
  company: string
  position: string
  period: string
  description: string
  tags?: string[]
}

export default function ExperienceItem({ company, position, period, description }: ExperienceItemProps) {
  return (
    <div className="relative pl-8 border-l-2 border-purple-600 dark:border-purple-500">
      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-600 dark:bg-purple-500 rounded-full"></div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold">{company}</h3>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1 mb-3">
          <p className="font-medium text-purple-700 dark:text-purple-400">{position}</p>
          <p className="text-gray-600 dark:text-gray-400">{period}</p>
        </div>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </div>
  )
}

