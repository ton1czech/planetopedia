'use client'

import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useLanguage } from '@/store/useLanguage'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const SocialMedia = () => {
  const { language } = useLanguage(state => state)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  }

  const labels =
    language === 'en'
      ? [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
        ]
      : [
          'Leden',
          'Únor',
          'Březen',
          'Duben',
          'Květen',
          'Červen',
          'Červenec',
          'Srpen',
          'Září',
          'Říjen',
        ]

  const data = {
    labels,
    datasets: [
      {
        label: 'Instagram Followers',
        data: [19, 20, 20, 21, 20, 26, 34, 66, 121, 240],
        borderColor: 'rgb(82, 89, 162)',
        backgroundColor: 'rgba(82, 89, 162, 0.5)',
      },
    ],
  }

  return (
    <div>
      <h2 className='text-lg md:text-xl'>
        {language === 'en' && <>~ Social Media</>}
        {language === 'cs' && <>~ Socialní Sítě</>}
      </h2>
      <Line data={data} options={options} />
    </div>
  )
}

export default SocialMedia
